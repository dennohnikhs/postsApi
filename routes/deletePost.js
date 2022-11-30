const express = require("express");
const { deletePost } = require("../controllers/postsController");
const router = express.Router();
/**
 * @openapi
 * /api/delete-post:
 *  delete:
 *     tags:
 *     - Posts
 *     summary: Used to delete posts
 *     parameters:
 *        - in: query
 *          name: postId
 *          type: integer
 *          description: Post id
 *          required: true
 *     responses:
 *      '200':
 *        description: post deleted successfully
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.delete("/delete-post", deletePost);
module.exports = router;
