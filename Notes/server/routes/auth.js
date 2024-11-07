import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import middleware from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", async (request, response) => {
  try {
    // get  the user data from the request body
    const { full_name, email, password } = request.body;
    // email is already or not
    const user = await User.findOne({ email });

    if (user) {
      return response
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user with user data
    const newUser = new User({
      full_name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return response
      .status(200)
      .json({ success: true, message: "Account is created successfully" });

  } catch (error) {
    return response
      .status(500)
      .json({ 
        success: false,
        message: "Error in adding user" 
      });
  }
});

router.post("/login", async (request, response) => {
  try {
    // get  the user data from the request body
    const { email, password } = request.body;
    // email is already or not
    const user = await User.findOne({ email });

    if (!user) {
      return response
        .status(401)
        .json({ success: false, message: "User does not exists" });
    }

    // * Compare the password with database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response
        .status(401)
        .json({ success: false, message: "User or password is incorrect" });
    }

    // * Generate token
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign(
      {id: user._id},
      secretKey,
      {expiresIn: "24h"}
    )

    // send response user to client
    return response
      .status(200)
      .json({ 
        success: true,
        token,
        user: {name: user.full_name}, 
        message: "Login successfully" 
      });

  } catch (error) {
    return response
      .status(500)
      .json({ 
        success: false,
        message: "Error in login" 
      });
  }
});

router.post("/verify", middleware, async (request, response)=>{
  try {
    let user = request.user
    console.log(user)
    return response
      .status(200)
      .json({ 
        success: true,
        user: user, 
        message: "Verified" 
      });
  } catch (error) {
    return response
      .status(500)
      .json({ 
        success: false,
        message: "Error in verification" 
      });
  }
})

export default router;
