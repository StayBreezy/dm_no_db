const express = require('express'),
    app = express(),
    port = 4200,
    seasonCtrl = require('./controllers/season'),
    favCtrl = require('./controllers/favCtrl');


app.use(express.json());


app.get('/api/get-season', seasonCtrl.getSeason)

app.post('/api/favorites', favCtrl.addToFavorites)
app.get('/api/favorites', favCtrl.getFavorites)
app.put('/api/favorites/:id', favCtrl.editHighlights)
app.delete('/api/favorites/:id', favCtrl.removeFromFavorites)

app.listen(port, () => console.log(`Da serva is running on ${port} mon!`))
