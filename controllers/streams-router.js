const express = require('express')
const router = express.Router()
const Stream = require('../models/streams.js')

//SEED
router.get('/smokytrout/seed', (req, res) => {
    Stream.create([
        {
            name: 'Meigs Creek',
            location: 'Little River Road, The Sinks',
            fishing_quality: 'Fair to Good',
            accessibility: 'Easy to Moderate',
            recommended_flies: 'Little Yellow Sally, Blue Winged Olive, Green Weenie',
            about_this_stream: "This is a wonderful small stream if you're looking for native Smoky Mountain brook trout, but don't want to commit to the extreme backwoods hiking to find them. Unlike other brook trout streams in the park; this one is relativly easy to access, with the trail coming in contact with the stream only 0.5 miles from The Sinks where the trail head begins (Meigs Creek Trail). Once there, the trail weaves over and around stream in several locations until reaching the fork of Henderson's Prong and Bunch Prong. From there the trail follows down Bunch Prong until leaving the stream entirely to merge with Meigs Moutain Trail. The small hike to reach this stream can be very rewarding for anglers looking to get away from the crowds without having to go too deep into the woods; that is... if you're willing to tackle the 500 foot incline before decending down to the stream (a small feat comparied to hiking the 2 to 3 miles for almost every other brook trout stream in the park).",
            imgIndex: ['https://www.cabinsusa.com/images/area-info/meigs-creek-upper-cascades.jpg'],
        }
    ])
})

//ROUTES (I.N.D.U.C.E.S)

//INDEX
router.get('/smokytrout', (req, res) => {
    Stream.find({}, (error, allStreams) => {
        res.render('index.ejs', {
            streams: allStreams
        })
    })
})

//NEW
router.get('/smokytrout/new', (req, res) => {
    res.render('new.ejs')
})

//DELETE
router.delete('/smokytrout/:id', (req, res) => {
    Stream.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/smokytrout')
    })
})

//UPDATE
router.put('/smokytrout/:id', (req, res) => {
    Stream.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedStream) => {
        res.redirect('/smokytrout')
    })
})

//CREATE
router.post('/smokytrout', (req, res) => {
    Stream.create(req.body, (error, createdStream) => {
        if (error) {
            console.log(error)
            res.send(error)
        } else {
            res.redirect('/smokytrout')
        }
    })
})

//EDIT
router.get('/smokytrout/:id/edit', (req, res) => {
    Stream.findById(req.params.id, (error, selectedStream) => {
        res.render('edit.ejs', {
            stream: selectedStream
        })
    })
})

//SHOW
router.get('/smokytrout/:id', (req, res) => {
    Stream.findById(req.params.id, (error, selectedStream) => {
        res.render('show.ejs', {
            stream: selectedStream
        })
    })
})

module.exports = router