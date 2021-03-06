const router = require('express').Router();
const User = require('../models/User');

const { createToken, hashPassword, verifyPassword } = require('../util');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    }).lean();

    if (!user) {
      return res.status(403).json({
        message: 'Wrong email or password.',
      });
    }

    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const { password, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });

      const token = createToken(userInfo);
      res.json({
        message: 'Login successful!',
        token,
        userInfo,
      });
    } else {
      res.status(403).json({
        message: 'Wrong email or password.',
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong.' });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { email } = req.body;
    console.log("here we are in auth.js", email)

    const existingEmail = await User.findOne({
      email,
    }).lean();
    
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    
    const hashedPassword = await hashPassword(req.body.password);
    
    const userData = {
      email: email.toLowerCase(),
      password: hashedPassword,
    };
    const newUser = new User(userData);

console.log("Line 63 of auth.js", newUser)

    const savedUser = await newUser.save();
    if (savedUser) {
      const token = createToken(savedUser);
console.log("loine 68", token)
      return res.json({
        message: 'User created!',
        token,
        email,
      });
    } else {
      return res.status(400).json({
        message: '1 There was a problem creating your account',
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: '2 There was a problem creating your account',
    });
  }
});

router.get('/logout' , function(req, res, next) {
  
  emitter.setMaxListeners()
  req.logout();
  res.redirect('/')
} )

module.exports = router;
