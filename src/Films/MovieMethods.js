const Film = require("./MovieModel")
const yargs = require ("yargs");
const {hideBin} = require("yargs/helpers")
const argv = yargs(hideBin(process.argv)).argv;


exports.addFilm = async(filmObj) =>{
    try{
        await Film.sync()
        await Film.create(filmObj)
    }catch(error){
    console.log(error)
}
}

exports.list = async() =>{
    try{
const listOfMovies = await Film.findAll()
console.log(listOfMovies)
    }catch (error) {
        console.log(error)
    }
}

exports.update = async() => {
    try{
        const updateMovies = await Film.update()
        console.log(updateMovies)
    } catch (error) {
        console.log(error)
    }
    }


exports.delete = async() => {
    try{
        const deleteMovie = await Film.delete()
        console.log(deleteMovie)
    } catch (error) {
        console.log(error)
    }
    }


