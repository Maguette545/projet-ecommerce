const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Schemas/UserSchema');
require('dotenv').config();
const SecretKey = process.env.SECRET_KEY;

// Création du Token
const CreateToken = (Id, Email, Role) => {
    return jwt.sign(
        { data: { Id, Email, Role } },
        SecretKey,
        { expiresIn: '1d' }
    );
};

// Création d'un compte
const signUp = async (req, res) => {
    try {
        console.log("Données reçues :", req.body);
        const { FullName, Email, PassWord, Telephone, Adresse, Role } = req.body;

        // Vérifie si le compte existe déjà
        const userExist = await User.findOne({ Email });
        if (userExist) {
            return res.status(409).json({ message: 'Ce compte existe déjà' });
        }

        // Hash du mot de passe
        const salt = await bcrypt.genSalt(10);
        const cryptPassWord = await bcrypt.hash(PassWord, salt);

        let userRole = 'Client'; // Par défaut

        // Gestion du rôle admin
        const adminExist = await User.findOne({ Role: 'Admin' });

        if (Role === 'Admin') {
            if (!adminExist) {
                // Aucun admin existant → ce sera le premier admin
                userRole = 'Admin';
            } else {
                // Les autres admins ne peuvent être créés que par un admin connecté
                if (!req.user || req.user.Role !== 'Admin') {
                    return res.status(403).json({ message: 'Seul un admin peut créer un autre admin' });
                }
                userRole = 'Admin';
            }
        }

        const newUser = await User.create({
            FullName,
            Email,
            Telephone,
            Adresse,
            PassWord: cryptPassWord,
            Role: userRole
        });

        console.log("Utilisateur enregistré :", newUser);
        return res.status(201).json({ message: 'Compte créé avec succès', newUser });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Connexion d'un utilisateur
const login = async (req, res) => {
    console.log("Données reçues dans login :", req.body);
    try {
        const { Email, PassWord } = req.body;

        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(409).json({ message: 'Email ou mot de passe incorrect' });
        }

        // Vérification du mot de passe
        const comparePassword = bcrypt.compareSync(PassWord, user.PassWord);
        if (!comparePassword) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        // Création du token
        const token = CreateToken(user._id, user.Email, user.Role);
        return res.status(200).json({ message: "Connexion réussie", user, token });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};

module.exports = { signUp, login };
