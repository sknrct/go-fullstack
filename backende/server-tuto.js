// On importe la paquet HHTP
const http = require('http');

// On créer une fonction qui sera exécutée à chaque appel vers ce serveur
// On donne en arguments les objets request et response
const server = http.createServer((req, res) => {
    // On envoi une réponse de type string avec la methode end
    res.end('Voila la reponse du nouveau serveur');
});

// on ecoute un port par defaut si il y'en a un, sinon on ecoute le port 3000
server.listen(process.env.PORT || 3000 );