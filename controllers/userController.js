const { User } = require("../models/users.models");
async function register(req, res) {
  try {
    let firstName = req.body.firstName;
    if (!firstName) {
      return res.send({
        success: false,
        success_message: "first name is required",
      });
    }
    let lastName = req.body.lastName;
    if (!lastName) {
      return res.send({
        success: false,
        success_message: "last name is required",
      });
    }
    let password = req.body.password;
    if (!password) {
      return res.send({
        success: false,
        success_message: "password is required",
      });
    }
    let email = req.body.email;
    if (!email) {
      return res.send({
        success: false,
        success_message: "email is required",
      });
    }
    await User.registerUsers(firstName, lastName, email, password);
    return res.json({
      success: true,
      success_message: "user created successfully",
    });
  } catch (error) {
    console.log("Error occured while registering user");
    console.log({ error });

    res.json({
      success: false,
      success_message:
        "Oops!!! an error occurred while trying to register user.",
    });
  }
}
async function login(req, res) {
  try {
    let password = req.body.password;
    if (!password) {
      return res.send({
        success: false,
        success_message: "password is required",
      });
    }
    let email = req.body.email;
    if (!email) {
      return res.send({
        success: false,
        success_message: "email is required",
      });
    }
    let correctDetails = await User.verifyLoginDetails(email, password);
    if (!correctDetails) {
      return res.json({
        success: false,
        success_message: "Wrong email or password",
      });
    }
    return res.json({
      success: true,
      success_message: " Login successful",
    });
  } catch (error) {
    console.log("Error occured while logging in user");
    console.log({ error });

    res.json({
      success: false,
      success_message: "Oops!!! an error occurred while trying to login user.",
    });
  }
}

module.exports = { register, login };
