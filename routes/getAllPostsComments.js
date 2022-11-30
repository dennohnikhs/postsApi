const express = require("express");
const { getAllPostComments } = require("../controllers/postsController");
const router = express.Router();
/**
 * @swagger
 *  components:
 *   schema:
 *     Posts:
 *      type: array
 *      items:
 *           type: object
 *           items:
 *               type: object
 *               properties:
 *                 postId:
 *                    type: integer
 *                 comment:
 *                    type: string
 *                 addedByUserId:
 *                    type: integer
 *      example:
 *            postId: 1072
 *            comment: wow nice pic
 *            addedByUserId: 142
 */

/**
 * @swagger
 * components:
 *  schema:
 *      postsCommentsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of posts comments"
 *              posts:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Posts'
 *
 */

/**
 * @openapi
 * /api/all-post-comments:
 *  get:
 *     tags:
 *     - Posts
 *     summary: All posts comments
 *     parameters:
 *       - in: query
 *         name: postId
 *         type: integer
 *         description: Post id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/postsCommentsResponse'  

 *       400:
 *         description: Bad request
 */
router.get("/all-post-comments", getAllPostComments);
module.exports = router;
