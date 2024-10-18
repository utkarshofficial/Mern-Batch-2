import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (request, response) => {
  try {
    // get  the user data from the request body
    const { full_name, email, password } = request.body;
    // email is already or not
    const user = await User.findOne({ email });

    if (user) {
      return response.status(400).json({ message: "Email already exists" });
    }

    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user with user data
    const newUser = new User({ 
        full_name, 
        email, 
        password: hashedPassword 
    });

    await newUser.save()

  } catch (error) {}
});

export default router
