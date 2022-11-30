const express = require("express");
const { likePost } = require("../controllers/postsController");
const router = express.Router();
/**
 * @openapi
 * /api/like-post:
 *  put:
 *     tags:
 *     - Posts
 *     summary: Used to like post
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - postId
 *            properties:
 *              postId:
 *                type: integer
 *            example: 1
 *     responses:
 *      '200':
 *        description: like added successfully
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.put("/like-post", likePost);
module.exports = router;
