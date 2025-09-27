const express = require('express')
const Order = require('../Schemas/OrderSchema')
const Delivery = require('../Schemas/deliverySchema')

//create an delivery
const createDelivery = async (req, res) =>{
   try {
    const {Order, StatusDelivery, AdresseDelivery} = req.body

    const newDelivery = await Delivery.create({Order, StatusDelivery, AdresseDelivery})
    return res.status(201).json({message:'Livraison avec succés', newDelivery})
   } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Erreur de server'})
   }
}

//Get all delivery
const allDeliveries = async (req, res) =>{
   try {
    const deliveries = await Delivery.find().populate('Order')

    return res.status(201).json({message:'Successfuly retreive deliveries', deliveries})
   } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Erreur de server'})
   }
}

//Get gingle delivery
const getDelivery = async (req, res) =>{
   try {
    const {deliveryId} = req.params

    const delivery = await Delivery.find({deliveryId}).populate('Order')
    if (!delivery) return res.status(404).json({ message: "Delivery not found" })

    return res.status(201).json({message:'Successfuly retreive delivery', delivery})
    
   } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Erreur de server'})
   }
}

//Update delivery
const updateDelivery = async (req, res) =>{
   try {
    const {deliveryId} = req.params
    const {Order, StatusDelivery, AdresseDelivery} = req.body

    const delivery = await Delivery.findByIdAndUpdate(
        deliveryId,
        { $set : {Order, StatusDelivery, AdresseDelivery} },
        { new : true }
    )
    if (!delivery) return res.status(404).json({ message: "Delivery not found" })

    return res.status(201).json({message:'Successfuly update delivery', delivery})
   } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Erreur de server'})
   }
}
//delete delivery
const deleteDelivery = async (req, res) =>{
   try {
    const {deliveryId} = req.params
    const delivery = await Delivery.findByIdAndDelete({deliveryId})

    return res.status(201).json({message:'Successfuly delete delivery', delivery})
   } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Erreur de server'})
   }
}

module.exports  = {createDelivery, allDeliveries, getDelivery, updateDelivery, deleteDelivery}