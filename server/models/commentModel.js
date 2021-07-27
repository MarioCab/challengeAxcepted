const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    postId:{
        type:String
    },
    commenter:{
        type:String
    },
    postDate:{
        type:String
    },
    comment:{
        type:String
    }
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
