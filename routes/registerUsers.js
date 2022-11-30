const express = require("express");
const { register } = require("../controllers/userController");
const router = express.Router();

/**
 * @openapi
 * /api/register:
 *  post:
 *     tags:
 *     - Users
 *     summary: Used to register user
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - firstName
 *              - lastName
 *              - emailId
 *              - password
 *            properties:
 *              firstName:
 *                type: string
 *                minLength: 1
 *                maxLength: 45
 *              lastName:
 *                type: string
 *                minLength: 1
 *                maxLength: 45
 *              password:
 *                type: string
 *                minLength: 1
 *                maxLength: 45
 *            example:
 *              firstName: Langat
 *              lastName: Denis
 *              email: langat@gmail.com
 *              password: Admin
 *     responses:
 *      '200':
 *        description: user registered successfully
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.post("/register", register);
module.exports = router;
