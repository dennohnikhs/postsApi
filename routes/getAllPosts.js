const express = require("express");
const { getAllPosts } = require("../controllers/postsController");
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
 *                 description:
 *                    type: string
 *                 imagePath:
 *                    type: string
 *                 likeCount:
 *                    type: integer
 *                 dislikeCount:
 *                    type: integer
 *      example:
 *            description: This is my first post
 *            imagePath: abc.png
 *            likeCount: 200
 *            dislikeCount: 20
 */

/**
 * @swagger
 * components:
 *  schema:
 *      postsResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *              success_message:
 *                  type: string
 *                  example: "list of posts"
 *              posts:
 *                  type: array
 *                  items:
 *                      $ref: '#components/schema/Posts'
 *
 */

/**
 * @openapi
 * /api/all-posts:
 *  get:
 *     tags:
 *     - Posts
 *     summary: All Posts
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schema/postsResponse'  

 *       400:
 *         description: Bad request
 */
router.get("/all-posts", getAllPosts);
module.exports = router;
