const axios = require('axios');

module.exports = {
    getSeason: (req, res) => {
        const season = [];
        const {year} = req.params;

        axios.get(`https://ergast.com/api/f1/${year}.json`)
        .then(response => {
            // console.log(response.data.MRData.RaceTable.Races)
            for (let i = 0; i < response.data.MRData.RaceTable.Races.length; i++){
                season.push({raceRound: response.data.MRData.RaceTable.Races[i].round, raceName:response.data.MRData.RaceTable.Races[i].raceName, location: response.data.MRData.RaceTable.Races[i].Circuit.Location.country});
            }
            res.status(200).send(season);
            // console.log(season)
        })
        .catch(err => console.log(err))
    }
}
