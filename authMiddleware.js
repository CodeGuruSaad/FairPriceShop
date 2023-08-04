const jwt = require('jsonwebtoken');
const config = require('./config');
const pool = require('./connection'); // Replace with your database connection code


function authenticateToken(req,res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token);
    if(token == null)
      return res.status(401).json({error: "Token Not Found"})
    jwt.verify(token, config.secretKey, (err, user)=>{
      if(err)
        return res.sendStatus(403).json({error: "You are not authorized to make this request"})
      req.user = user;
      next();  
    })  
  }
  

module.exports = authenticateToken;
