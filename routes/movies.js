const express = require('express')
const router = express.Router()

const {getAllMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/movies')

router.get('/', getAllMovies)
router.get('/:id', getMovie)
router.post('/', createMovie)
router.patch('/:id', updateMovie)
router.delete('/:id', deleteMovie)

module.exports = router

