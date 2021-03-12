const express = require('express'),
    app = express(),
    port = 4200,
    seasonCtrl = require('./controllers/season'),
    favCtrl = require('./controllers/favCtrl');


app.use(express.json());


app.get('/api/get-season', seasonCtrl.getSeason)

app.post('/api/post-favorite/:id', )
app.get('/api/get-favorites', favCtrl.getFavorites)
app.put('/api/get-favorites/:id', favCtrl.editHighlights)
app.delete('/api/remove-favorite/:id', favCtrl.removeFromFavorites)

app.listen(port, () => console.log(`Da serva is running on ${port} mon!`))
