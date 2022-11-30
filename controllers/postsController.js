const Post = require("../models/posts.models");

async function addPosts(req, res) {
  try {
    let description = req.body.description;
    if (!description) {
      return res.json({
        success: false,
        success_message: "description is required",
      });
    }
    let imagePath = req.body.imagePath;
    if (!imagePath) {
      return res.json({
        success: false,
        success_message: "imagePath is required",
      });
    }
    let addedByUserId = req.body.addedByUserId;
    if (!addedByUserId) {
      return res.json({
        success: false,
        success_message: "user Id is required",
      });
    }
    await Post.addPost(description, imagePath, addedByUserId);

    return res.json({
      success: true,
      success_message: "Post added successfully",
    });
  } catch (error) {
    console.log({ error });
  }
}
async function getAllPosts(req, res) {
  try {
    let results = await Post.AllPosts();
    return res.json({
      success: true,
      success_message: "list of posts",
      data: results,
    });
  } catch (error) {
    console.log({ error });
    console.log("Error occurred while trying to get posts");
    return res.json({
      success: false,
      success_message: "cannot get posts",
    });
  }
}

async function addPostComment(req, res) {
  try {
    let postId = req.body.postId;

    let comment = req.body.comment;

    let addCommentByUserId = req.body.addedByUserId;

    await Post.addPostComment(postId, comment, addCommentByUserId);

    return res.json({
      success: true,
      success_message: "Comment added successfully",
    });
  } catch (error) {
    console.log({ error });
  }
}
async function getAllPostComments(req, res) {
  try {
    let postId = req.query.postId;
    let results = await Post.allPostsComments(postId);
    return res.json({
      success: true,
      success_message: "list of posts Comments",
      data: results,
    });
  } catch (error) {
    console.log({ error });
    console.log("Error occurred while trying to get posts comments");
    return res.json({
      success: false,
      success_message: "cannot get posts comments try again later",
    });
  }
}
async function likePost(req, res) {
  try {
    let postId = req.body.postId;
    await Post.likePost(postId);
    return res.json({
      success: true,
      success_message: "Post like successful",
    });
  } catch (error) {
    console.log({ error });
    console.log("Error occurred while trying to like post");
    return res.json({
      success: false,
      success_message: "cannot like post try again later",
    });
  }
}
async function dislikePost(req, res) {
  try {
    let postId = req.body.postId;
    await Post.dislikePost(postId);
    return res.json({
      success: true,
      success_message: "Post dislike successful",
    });
  } catch (error) {
    console.log({ error });
    console.log("Error occurred while trying to like post");
    return res.json({
      success: false,
      success_message: "cannot dislike post try again later",
    });
  }
}
async function deletePost(req, res) {
  try {
    let postId = req.query.postId;
    await Post.deletePost(postId);
    return res.json({
      success: true,
      success_message: "Post deleted successfully",
    });
  } catch (error) {
    console.log({ error });
    console.log("Error occurred while trying to delete post");
    return res.json({
      success: false,
      success_message: "cannot delete post try again later",
    });
  }
}
module.exports = {
  addPosts,
  getAllPosts,
  addPostComment,
  getAllPostComments,
  likePost,
  dislikePost,
  deletePost,
};
