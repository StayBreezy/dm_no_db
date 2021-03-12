const favRaces = [];

module.exports = {
    getFavorites: (req, res) => {
        res.status(200),send(favRaces);
    },
    addToFavorites: (req, res) => {
        const {race} = req.body;

        favRaces.push(race)
    },
    editHighlights: (req, res) => {

    },
    removeFromFavorites: (req, res) =>{
        
    }
}
