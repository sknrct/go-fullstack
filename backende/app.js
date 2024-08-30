const express = require('express');

const app = express();

// Middleware qui permet d'extraire le corps JSON pour gérer une requête POST
app.use(express.json());


// On a un soucis de CORS (Cross Origin Resource Sharing) = une sécurité qui empeche les appels HTTP entre des serveurs différents
// Donc evite les requetes malveillantes d'acceder à des ressources sensibles
// Nous avons deux origines localhost:3000 et localhost:4200
// On souhaite les faire communiquer 
// Donc on ajoute des headers 
app.use((req, res, next) => {
    // Acceder à notre API depuis n'importe quel origine avec *
    res.setHeader('Access-Control-Allow-Origin', '*');
    // ajouter des headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Envoyer des requêtes avec des méthodes mentionnées (GET, POST etc)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet crée !'
    })
  })

  // on créer une route (api/stuff/) 
app.get('/api/stuff', (req, res, next) => {
    // On créer un groupe d'article avec le prix en centimes pour eviter des erreurs d'arithmétique
    // Sous la forme d'un JSON 
    // Avec un code 200 pour demande réussie
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;