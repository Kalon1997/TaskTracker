const User = require('../models/User')

exports.registerUser = async (req, res) => { 
    try{
        const { username, email, password } = req.body;
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if(!username || !email || !password){
          return res.status(400).json({message: "Fill the fields."})
        }
        if(!email.match(emailRegex)){
          return res.status(400).json({message: "Enter a valid email id"})
        }
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message: "You already have an account."})
        }  
        
        user = await User.create({
            username, email, password
        })
        const token = await user.generateToken();
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };

            return res.status(200).cookie("token", token, options).json({
                success: true,
                user
            });
    } catch(err)
        {
            return res.status(400).json({message: "Some unknown err.."})
        }
}

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select("+password")

  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
        });
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
  
      const token = await user.generateToken();
  
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        user,
      });
    
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


exports.logout = async (req, res) => {
    try {
      res
        .status(200)
        .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
        .json({
          success: true,
          message: "Logged out",
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

exports.myProfile = async (req, res) => {
            try {
              const user = await User.findById(req.user._id);
          
              res.status(200).json({
                success: true,
                user,
              });
            } catch (error) {
              res.status(500).json({
                success: false,
                message: error.message,
              });
            }
};

exports.openProfile = async (req, res) => {
  try{
     const openProfile = await User.findById(req.params.id);
      if(!openProfile)
      return res.status(400).json({message: 'Profile Not Found!' });
      res.status(200).json({success:true,
        openProfile});
  } catch (err) {
      console.log(err)
      res.status(502).json({ message: 'unknown error' });
  }
}