const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const { addFilm, list } = require("./Films/MovieMethods");
const argv = yargs(hideBin(process.argv)).argv

const app = async() =>{
if(argv.add){
    const filmObj = {
    name: argv.title,
    actor: argv.actor
    }
    await addFilm(filmObj)
} //else if(argv.list){
//     await list()
// } else if(argv.findAll)
//     await findAll()

    //attributes[film, actor]
 else if(argv.findAll)
    where: {
        Movie: "Beetlejuice"
    } 
else if(argv.destroy)
await User.destroy({
    where: {
      Movie: "Jaws"
    }
  });

else{
    console.log("wrong query")
}

}
app()
