const favRaces = [];
let id = 0
module.exports = {
    getFavorites: (req, res) => {
        res.status(200).send(favRaces);
    },
    addToFavorites: (req, res) => {
        const {raceRound, raceName, location} = req.body;
        const pass = {
            raceRound,
            raceName,
            location,
            description: '',
            id: id
        }
        id++
        favRaces.push(pass);
        res.status(200).send(favRaces);
    },
    editHighlights: (req, res) => {
        const {id} = req.params;
        favRaces[id] = req.body;


        res.status(200).send(favRaces)
    },
    removeFromFavorites: (req, res) =>{
        const {id} = req.params;
        const where = favRaces.findIndex(elem => elem.id === +id);
        favRaces.splice(where, 1)
        res.status(200).send(favRaces)
    }
}
