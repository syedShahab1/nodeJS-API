const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const Post = require('./models/Post');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
 

//routs

// gets all posts
app.get('/', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

// submit a post
app.post('/', async (req, res) =>{
    const post = new Post({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone 
    });

    try{
        const savePost = await post.save();
        res.json(savePost);
    }
    catch(err){
        res.json({message: err});
    }      
});

// get a specific post
app.get('/:postId', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.json({message: err});
    }
});

//delete a post
app.delete('/:postId', async (req, res) =>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }
    catch(err){
        res.json({message: err});
    }
});

//update a post
app.patch('/:postId', async (req, res) =>{
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {name: req.body.name} }
        );
        res.json(updatedPost);
    }
    catch(err){
        res.json({message: err});
    }
});



//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true }, () => 
console.log('connected to db')
);


//listning to server
app.listen('5000');