const express = require("express");
const { login } = require("../controllers/userController");
const router = express.Router();
/**
 * @openapi
 * /api/login:
 *  post:
 *     tags:
 *     - Users
 *     summary: Used to login user
 *     requestBody:
 *      content:
 *        application/json:
 *           name: User
 *           description: User data
 *           schema:
 *            type: object
 *            required:
 *              - emailId
 *              - password
 *            properties:
 *              password:
 *                type: string
 *                minLength: 1
 *                maxLength: 45
 *              email:
 *                type: string
 *                minLength: 1
 *                maxLength: 45
 *            example:
 *              email: langat@gmail.com
 *              password: Admin
 *     responses:
 *      '200':
 *        description: user login successful
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.post("/login", login);
module.exports = router;
