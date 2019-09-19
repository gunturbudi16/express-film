
const film=require('../models/film');

module.exports={
    getAll:(req,res,next)=>{
        res.json(film)
    },

    addMovie: (req,res,next)=>{
        film.push({
            id:4,
            judul:"karatekid",
            duration:120,
            genre:"action hghg"
        })
        res.send({message: "new film added",film})
    },
    viewFilm:(req,res,next)=>{
        const film=film.find(data.id===parseInt(req.params.id));
        if(!film){
            return res.status(404).send("film ada");
            res.json(film);
        }
    }
    
}