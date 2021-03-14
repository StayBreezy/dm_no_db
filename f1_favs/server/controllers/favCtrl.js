const favRaces = [];

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
            description: ''
        }
        favRaces.push(pass);
        res.status(200).send(favRaces);
    },
    editHighlights: (req, res) => {

    },
    removeFromFavorites: (req, res) =>{

    }
}
