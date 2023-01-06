
const getAllMovies = async (req, res) => {
    res.send('get all movies')
}

const getMovie = async (req, res) => {
    res.send('get movie')
}

const createMovie = async (req, res) => {
    res.send('create movie')
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
