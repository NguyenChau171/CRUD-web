import express from 'express'

import mongoose from 'mongoose'
import Post from '../db/posts.js'

const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.find()
    res.json(allPosts)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (!post) return
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
  }
})


router.post('/', async (req, res) => {
  try {
    const post = req.body
    const createdPost = await Post.create(post)
    res.status(201).json(createdPost)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, creator } = req.body

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send('post failed')

    const updatedPost = { title, content, creator, _id: id }

    await Post.findByIdAndUpdate(id, updatedPost, { new: true })

    res.json(updatedPost)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Post.findByIdAndRemove(id)
    res.json({ message: 'Post deleted' })
  } catch (error) {
    console.log(error)
  }
})

export default router
