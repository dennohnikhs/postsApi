const express = require("express");
const { addPostComment } = require("../controllers/postsController");
const router = express.Router();
/**
 * @openapi
 * /api/add-post-comment:
 *  post:
 *     tags:
 *     - Posts
 *     summary: Used to add posts comments
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - postsId
 *              - comment
 *              - addedByUserId
 *            properties:
 *              postsId:
 *                type: integer
 *                minLength: 1
 *                maxLength: 1000
 *              comment:
 *                type: string
 *                minLength: 1
 *                maxLength: 1000
 *              addedByUserId:
 *                type: int
 *                minLength: 1
 *                maxLength: 11
 *            example:
 *              postsId: 1072
 *              comment: wow what a nice inspirational message
 *              addedByUserId: 142
 *     responses:
 *      '200':
 *        description: comment added successfully
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.post("/add-post-comment", addPostComment);
module.exports = router;
