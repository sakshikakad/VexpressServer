const express = require("express");
const Post = require("./models/Post");
const router = express.Router();


// GET
// http;:localhost:3000/
router.get("/posts", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

router.post("/posts", async (req, res) => {
    const post = new Post({
        rollNo: req.body.rollNo,
        name: req.body.name,
        amount: req.body.amount,
    });

    await post.save();
    res.send(post);
});

router.get("/posts/:id", async (req, res) => {
    // console.log("in get by id")
    try {
        //console.log("id recevied: " + req.params.id);
        const post = await Post.findOne({ _id: req.params.id })
        // console.log("id recevied: " + req.params.id);
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Record does not exist" })
    }
})

router.patch("/posts/:id", async (req, res) => {
    try {
        console.log("name:" + req.body.name);
        const post = await Post.findOne({ _id: req.params.id })

        if (req.body.rollNo) {
            post.rollNo = req.body.rollNo
        }

        if (req.body.name) {
            post.name = req.body.name
        }

        if (req.body.amount) {
            post.amount = req.body.amount
        }

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Record does not exist" })
    }
})

router.delete("/posts/:id", async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Record does not exist  " })
    }
})

module.exports = router;