const db = require("../config/connection");
const { User, Post } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Post.deleteMany({});

  const users = await User.insertMany(userData);

  const posts = await Post.insertMany(postData);

  for (newPost of posts) {
    //Randomly add each post to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.posts.push(newPost._id);
    await tempUser.save();

    //randomly add a user to each post

    newPost.userId = tempUser._id;
    await newPost.save();
  }

  console.log("All Done!");
  process.exit(0);
});
