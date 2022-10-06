const bcrypt = require("bcrypt");

const User = require("../models/User");

// cryptage du mot de passe
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash, // création de nouveau user
      });
      user
        .save() // enregistration dans la base de données
        .then(() => res.status(201).json({ message: "Utilisateur créé ! " }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {};
