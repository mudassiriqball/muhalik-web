const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // console.log('Token: ', req.headers.authorization)
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        next({
            message: 'Auth failed',
            status: 401
        });
    }
};