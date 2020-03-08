  module.exports = (error, req,res,next) => {
    if(!error.status)
    {
      error.status = 500;
      error.message = 'This URL doesnot exists'
    }
    res.status(error.status || 500).send(error);
    next();
};