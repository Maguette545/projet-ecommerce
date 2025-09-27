const express = require('express')
const Product = require('../Schemas/ProductSchema')

//Creation d'un Produit
const createProduct = async (req, res) =>{
    try {
        const {Name, Price, Description, Image, Genre, Style, Stock, DateAjout} = req.body

        const product  = await Product.create({Name, Price, Description, Image, Genre, Style, Stock, DateAjout})
        return res.status(201).json({message:'Produit ajouter', product})
    } catch (err) {
        console.error("Erreur ajout/modification produit :", err); 
        
        return res.status(500).json({message:'Erreur deserver',})
    }
}

//Rechercher des produits
const allProduct = async (req, res) =>{
    try {
        const products = await Product.find();

        return res.status(201).json({mesage:'Récuperation de tout les produits',products})
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({message:'Erreur de server', err})
    }
};

//Rechercher un produit
const getProduct = async (req, res) =>{
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId);

        return res.status(201).json({message:'Produit récupéré', product})
    } catch (err) {
        return res.status(500).json({message:'Erreur deserver', err})
    }
};

//Mettre à jour un produit
const updateProduct = async (req, res) =>{
    try {
      const {Name, Price, Description, Image, Genre, Style, Stock, DateAjout} = req.body

      const {productId} = req.params;
      const product = await Product.findByIdAndUpdate(
        productId,
        {$set :{
            Name : Name,
            Price : Price,
            Description : Description,
            Image : Image,
            Genre : Genre,
            Style : Style,
            Stock : Stock,
            DateAjout : DateAjout
        }},
        { new: true } // ✅ retourne le document mis à jour
    )
        return res.status(201).json({message:'Produit mis à jour', product})
      
    } catch (error) {
        return res.status(500).json({message:'Erreur deserver', err})
    }
};

//Suppression d'un produit
const deleteProduct = async (req, res) =>{
    try {
        const {productId} = req.params
        const product = await Product.findByIdAndDelete(productId)

        return res.status(201).json({message:'Produit supprimer', product})
    } catch (err) {
        console.log(err);
        return res.status(500).json({message:'Erreur de server', err})
    }
}


module.exports = {createProduct, allProduct, getProduct, updateProduct, deleteProduct}