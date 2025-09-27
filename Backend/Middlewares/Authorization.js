const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const SecretKey = process.env.SECRET_KEY

const VerifyUserId = async (req, res, next) =>{
    const token = req.headers.authorization; //recupere le token creer
    if (!token) {
        return res.status(403).json({message:'Token non fournie'})
    }
    const extractedToken = token.split(" ")[1];
    jwt.verify(extractedToken, SecretKey, (err, decoded) => {
    if (err) {
        return res.status(401).json({message:'Token invalide', err})
    }

    const UserId = decoded.data.Id //Accede à l'Id apartir de decoded.data
    const UserEmail = decoded.data.Email //Accede au Email apartir de decoded.data
    // On stocke ces infos dans req, pour que les prochaines fonctions puissent savoir qui est l’utilisateur.
    req.UserId = UserId;
    req.UserEmail = UserEmail;

    next();
    });

};

const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization; // on récupère le token
  if (!token) {
    return res.status(403).json({ message: 'Token non fourni' });
  }

  const extractedToken = token.split(" ")[1];
  jwt.verify(extractedToken, SecretKey, (err, decoded) => { 
    if (err) {
      return res.status(401).json({ message: 'Token invalide', err });
    }

    const UserRole = decoded.data.Role;
    const UserEmail = decoded.data.Email;
    req.UserEmail = UserEmail;

    if (UserRole !== 'Admin') {
      return res.status(403).json({ message: 'Accès non autorisé pour les non-administrateurs' });
    }

    next();
  });
};

module.exports = {VerifyUserId, isAdmin}