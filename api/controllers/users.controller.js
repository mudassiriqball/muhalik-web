const usersController = {};
const Users = require("../models/user.model");
const path = require("path");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require("mongoose");
const fs = require("fs");
const jwt = require("jsonwebtoken");

usersController.getAll = async (req, res) => {
  let users;
  try {
    let merged = {};
    const start = 0;
    const length = 100;
    users = await Users.paginate(
      merged,
      { password: 0 },
      {
        password: 0,
        offset: parseInt(start),
        limit: parseInt(length)
      }
    );
    res.status(200).send({
      code: 200,
      message: "Successful",
      users
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};


// Set avatar
usersController.set_avatar = async (req, res) => {
  const header = jwt.decode(req.headers.authorization);
  const id = header.data._id;

  const uploader = async (path) => await cloudinary.uploads(path, "User-Images");
  const imagepath = req.files.path;
  const newPath = await uploader(imagepath);
  fs.unlinkSync(imagepath);

  try {
    Users.findOneAndUpdate(
      { _id: id },
      {
        $set: { avatar: newPath },
      },
      {
        returnNewDocument: true,
      },
      function (error, result) {
        res.status(200).send({
          code: 200,
          message: "Sucessful",
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

// Get Only customers details
usersController.get_customers = async (req, res) => {
  let user;
  try {
    user = await Users.find(
      { role: 'customer' })
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: user
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get Only vendors details
usersController.get_vendors = async (req, res) => {
  let user;
  try {
    user = await Users.find(
      { role: 'vendor' })
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: user
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get Only vendors details
usersController.get_admins = async (req, res) => {
  let user;
  try {
    user = await Users.find(
      { role: 'admin' })
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: user
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get Disapproved Vendor
usersController.get_new_vendors = async (req, res) => {
  let user;
  try {
    user = await Users.find({ status: "disapproved", role: "vendor" });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: user,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get Restricted Vendor
usersController.get_restricted_vendors = async (req, res) => {
  let user;
  try {
    user = await Users.find({ status: "restricted", role: "vendor" });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: user,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Get Restricted Customer
usersController.get_restricted_customers = async (req, res) => {
  let user;
  try {
    user = await Users.find({ status: "restricted", role: "customer" });
    res.status(200).send({
      code: 200,
      message: "Successful",
      data: user,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
// restricted user
usersController.update_status = async (req, res) => {
  if (!req.params._id) {
    Fu;
    res.status(500).send({
      message: "ID missing",
    });
  }
  try {
    const _id = req.params._id;
    Users.findOneAndUpdate(
      { _id: _id },
      {
        $set: { status: req.body.status },
      },
      {
        returnNewDocument: true,
      },
      function (error, result) {
        res.status(200).send({
          code: 200,
          message: "Restricted Successfully",
        });
      }
    );
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

usersController.getSingleUser = async (req, res) => {
  let user;
  try {
    const _id = req.params._id;
    user = await Users.findOne({ _id: _id });
    res.status(200).send({
      code: 200,
      message: "Successful",
      user
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

usersController.registerUser = async (req, res) => {
  try {
    const body = req.body;
    var datetime = new Date();
    var date = datetime;
    body.entry_date = date;
    const result = await Users.findOne({ mobile: body.mobile });
    if (result) {
      res.send({
        message: "This email or mobile number has been registered already",
        code: 500
      }).status(500);
    } else {
      const password = body.password;
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);
      body.password = hash;
      if (body.role === "vendor") {
        body.status = "disapproved";
      }
      else if (body.role === "customer") {
        body.status = "approved";
      }
      const user = new Users(body);
      const result = await user.save();
      res.send({
        code: 200,
        message: "Signup successfully"
      });
    }
  } catch (ex) {
    if (ex.code === 11000) {
      res
        .send({
          message: "This email or mobile number has been registered already"
        })
        .status(500);
    } else {
      res
        .send({
          message: "Error",
          detail: ex
        })
        .status(500);
    }
  }
};

usersController.loginUser = async (req, res) => {
  try {
    const body = req.body;
    const mobile = body.mobile;
    // lets check if email exists
    const result = await Users.findOne({ mobile: mobile });
    if (!result) {
      // this means result is null
      res.status(401).send({
        message: "This user doesnot exists. Please signup first",
        code: 401
      });
    } else {
      // email did exist
      // so lets match password
      if (bcrypt.compareSync(body.password, result.password)) {
        // great, allow this user access
        result.password = undefined;
        const token = jsonwebtoken.sign(
          {
            data: result,
            role: "User"
          },
          process.env.JWT_KEY,
          { expiresIn: "7d" }
        );
        res.send({ message: "Successfully Logged in", token: token });
      } else {
        res.status(401).send({ message: "my error", code: 401 });
      }
    }
  } catch (ex) {
    console.log("ex", ex);
  }
};

usersController.getNextId = async (req, res) => {
  try {
    const max_result = await Users.aggregate([
      { $group: { _id: null, max: { $max: "$id" } } }
    ]);
    let nextId;
    if (max_result.length > 0) {
      nextId = max_result[0].max + 1;
    } else {
      nextId = 1;
    }
    const iid = { id: nextId }
    var data = {
      code: 200,
      iid
    };
    res.status(200).send(data);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

usersController.deleteUser = async (req, res) => {
  if (!req.params._id) {
    Fu;
    res.status(500).send({
      message: "ID missing"
    });
  }
  try {
    const _id = req.params._id;
    const result = await Users.findOneAndDelete({
      _id: _id
    });
    //   const result = await Inventory.updateOne({
    //         _id: _id
    //     }, {
    //         $set: {is_deleted: 1}
    //     }, {
    //         upsert: true,
    //         runValidators: true
    //     });
    res.status(200).send({
      code: 200,
      message: "Deleted Successfully"
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

usersController.uploadAvatar = async (req, res) => {
  try {
    const filePath = `images/avatar/avatar-${req.params.id}`;
    const ext = path.extname(req.file.originalname);
    const updates = {
      avatar: filePath,
      avatar_ext: ext
    };
    runUpdateById(req.params.id, updates, res);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

usersController.updateUser = async (req, res) => {
  if (!req.params._id) {
    res.status(500).send({
      message: "ID missing"
    });
  }
  try {
    const _id = req.params._id;
    let updates = req.body;
    runUpdate(_id, updates, res);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

async function runUpdate(_id, updates, res) {
  try {
    const result = await Users.updateOne(
      {
        _id: _id
      },
      {
        $set: updates
      },
      {
        upsert: true,
        runValidators: true
      }
    );

    {
      if (result.nModified == 1) {
        res.status(200).send({
          code: 200,
          message: "Updated Successfully"
        });
      } else if (result.upserted) {
        res.status(200).send({
          code: 200,
          message: "Created Successfully"
        });
      } else {
        res.status(422).send({
          code: 422,
          message: "Unprocessible Entity"
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
}

async function runUpdateById(id, updates, res) {
  try {
    const result = await Users.updateOne(
      {
        id: id
      },
      {
        $set: updates
      },
      {
        upsert: true,
        runValidators: true
      }
    );

    if (result.nModified == 1) {
      res.status(200).send({
        code: 200,
        message: "Updated Successfully"
      });
    } else if (result.upserted) {
      res.status(200).send({
        code: 200,
        message: "Created Successfully"
      });
    } else {
      {
        res.status(200).send({
          code: 200,
          message: "Task completed successfully"
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
}

module.exports = usersController;
// const user = new Users ({
//   _id: new mongoose.Types.ObjectId(),
//   name: req.body.name,
//   number: req.body.number,
// });
// user.save().then(result => {
//   res.send({
//     message: 'Signup successful'
//   });
// }).catch(err => {
//   res
//       .send({
//         message: 'This email has been registered already',
//       })
//       .status(500);
// })