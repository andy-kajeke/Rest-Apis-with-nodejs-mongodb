const express = require('express');
const Post = require('../models/Post')
const Employees = require('../models/employees')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
    .then(data => {res.json(data)})
    .catch(err => {res.json({message: err})})
});

//Get specific post
router.get('/:postId', async (req, res) => {
    try {
       const post = await Post.findById(req.params.postId);
       res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

//Delete specific post
router.delete('/:postId', async (req, res) => {
    try {
       const post = await Post.remove({_id: req.params.postId});
       res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

//Update specific post
router.patch('/:postId', async (req, res) => {
    try {
       const post = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title }});
       res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

//Add new employee
router.post('/employee', async (req, res) => {
    const employee = new Employees({
        username: req.body.username,
        email: req.body.email
    });

    try {
        const savedEmployee = await employee.save()
        res.json({savedEmployee})
    } catch (error) {
        res.json({message: error})
    }
    
});

module.exports = router;