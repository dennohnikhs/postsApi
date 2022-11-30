const express = require("express");
const { addPosts } = require("../controllers/postsController");
const router = express.Router();
/**
 * @openapi
 * /api/add-post:
 *  post:
 *     tags:
 *     - Posts
 *     summary: Used to add posts
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - description
 *              - imagePath
 *              - addedByUserId
 *            properties:
 *              description:
 *                type: string
 *              imagePath:
 *                type: string
 *              addedByUserId:
 *                type: integer
 *            example:
 *              description: All that glitters is not gold
 *              imagePath: abc.png
 *              addedByUserId: 1073
 *     responses:
 *      '200':
 *        description: post deleted successfully
 *      '500':
 *        description: Internal server error
 *      '400':
 *        description: Bad request
 */
router.post("/add-post", addPosts);
module.exports = router;
