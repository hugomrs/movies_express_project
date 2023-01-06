
const Movie = require('../models/Movie')
const {StatusCodes} = require('http-status-codes')

const getAllMovies = async (req, res) => {
    const movies = await Movie.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({movies, count:movies.length})
}

const getMovie = async (req, res) => {
    res.send('get movie')
}

const createMovie = async (req, res) => {
    req.body.createdBy = req.user.userId
    const movie = await Movie.create(req.body)
    res.status(StatusCodes.CREATED).json({movie})
}

const updateMovie = async (req, res) => {
    res.send('update movie')
}

const deleteMovie = async (req, res) => {
    res.send('delete movie')
}

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}
