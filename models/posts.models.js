const { executeQuery } = require("../config/db.config");

class Post {
  static async addPost(description, imagePath, addedByUserId) {
    try {
      await executeQuery(
        "INSERT INTO posts (description,imagePath,datetimeCreated,addedByUserId) VALUES (?,?,?,?)",
        [description, imagePath, new Date(), addedByUserId]
      );
    } catch (error) {
      console.log({ error });
    }
  }
  static async AllPosts() {
    try {
      let results = await executeQuery(
        "SELECT description,imagePath,likeCount,dislikeCount,datetimeCreated,addedByUserId FROM posts",
        []
      );
      return results;
    } catch (error) {
      console.log({ error });
    }
  }
  static async addPostComment(postId, addedByUserId, addCommentByUserId) {
    try {
      let results = await executeQuery(
        "INSERT INTO comments (postId,comment,datetimeCreated,addedByUserId) VALUES (?,?,?,?)",
        [postId, addedByUserId, new Date(), addCommentByUserId]
      );
      return results;
    } catch (error) {
      console.log({ error });
    }
  }
  static async allPostsComments(postId) {
    try {
      let results = await executeQuery(
        "SELECT c.comment,c.datetimeCreated,c.addedByUserId,u.firstName,u.lastName " +
          " FROM comments c INNER JOIN users u ON c.addedByUserId = u.id WHERE c.postId = (?)",
        [postId]
      );
      return results;
    } catch (error) {
      console.log({ error });
    }
  }
  static async likePost(postId) {
    try {
      let results = await executeQuery(
        "UPDATE  posts SET likeCount = likeCount + 1 WHERE id = ?",
        [postId]
      );
      return results;
    } catch (error) {
      console.log({ error });
    }
  }
  static async dislikePost(postId) {
    try {
      let results = await executeQuery(
        "UPDATE  posts SET likeCount = likeCount - 1 WHERE id = ?",
        [postId]
      );
      return results;
    } catch (error) {
      console.log({ error });
    }
  }
  static async deletePost(postId) {
    try {
      let results = await executeQuery("DELETE  FROM posts WHERE id = ?", [
        postId,
      ]);
      return results;
    } catch (error) {
      console.log({ error });
    }
  }
}
module.exports = Post;
