const jwt = require('jsonwebtoken')
const User = require('../models/User.js')


exports.isAuthedUser = async (req, res, next) => {
    
        try { 
          const { token } = req.cookies;

          if (!token) {
            return res.status(401).json({
              message: "",
            });
          }
      
          const decode = jwt.verify(token, process.env.JWTSECRET);
      
          req.user = await User.findById(decode._id);
      
          next();
   
        } catch (err) {
          res.status(500).json({
            message: err.message,
          });
        }
      };
    
