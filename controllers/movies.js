
const Movie = require('../models/Movie')
const {StatusCodes} = require('http-status-codes')
const {NotFoundError, BadRequestError} = require('../errors')

const getAllMovies = async (req, res) => {
    const movies = await Movie.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({movies, count:movies.length})
}

const getMovie = async (req, res) => {
    const {
        user:{userId},
        params:{id:movieId}
    } = req

    const movie = await Movie.findOne({
        _id:movieId,
        createBy:userId
    })

    if (!movie){
        throw new NotFoundError(`No movie with id ${movieId}`)
    }

    res.status(StatusCodes.OK).json({movie})
}

const createMovie = async (req, res) => {
    req.body.createdBy = req.user.userId
    const movie = await Movie.create(req.body)
    res.status(StatusCodes.CREATED).json({movie})
}

const updateMovie = async (req, res) => {
    const {
        body:{title, releaseYear, rating},
        user:{userId},
        params:{id:movieId}
    } = req
 
    if (title === '' || !releaseYear || !rating){
        throw new BadRequestError('Movie title, release year and rating must be provided')
    }

    const movie = await Movie.findOneAndUpdate({_id:movieId, createdBy:userId}, req.body, {new:true, runValidators:true})
    if (!movie){
        throw new NotFoundError(`No movie with id ${movieId}`)
    }

    res.status(StatusCodes.OK).json({movie})
}

const deleteMovie = async (req, res) => {
    const {
        user:{userId},
        params:{id:movieId}
    } = req
    
    const movie = await Movie.findByIdAndRemove({_id:movieId, createdBy:userId})
    if (!movie){
        throw new NotFoundError(`No movie with id ${movieId}`)
    }


    res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}
