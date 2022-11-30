const express = require("express");
const { dislikePost } = require("../controllers/postsController");
const router = express.Router();
/**
 * @openapi
 * /api/dislike-post:
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
 *        description: dislike successful
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.put("/dislike-post", dislikePost);
module.exports = router;
