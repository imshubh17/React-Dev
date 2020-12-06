import jwt from "jsonwebtoken";

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied!')

    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
        if(err) return res.status(400).send('Invalid Token!');
        console.log(decoded)
        req.user = decoded
        next();
      });   
}