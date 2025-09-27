const router = require('express').Router();

const userAuth = require('../Controllers/userAuth')
const productController = require('../Controllers/productController')
const orderController = require('../Controllers/orderController')
const deliveryController = require('../Controllers/deliveryController')
const categoryController = require('../Controllers/categoryController')

const { VerifyUserId,isAdmin} = require("../Middlewares/Authorization")

//Les differentes routes pour les utilisateurs
router.post('/new-user', userAuth.signUp);
router.post('/Login', userAuth.login)

//Les routes pour les produits
//router.post('/new-product',isAdmin, productController.createProduct);
router.post('/new-product', productController.createProduct);
router.get('/all-product', productController.allProduct);
router.get('/get-product/:productId', productController.getProduct);
router.put('/update-product/:productId',isAdmin, productController.updateProduct);
router.delete('/delete-product/:productId', isAdmin, productController.deleteProduct);

//Les routes pour les Commandes
router.post('/new-order', orderController.createOrder);
router.get('/all-order',isAdmin,  orderController.allOrders);
router.get('/all-user-order/:orderId', orderController.allUserOrders);
router.get('/get-order/orderId',VerifyUserId, orderController.getOrder);
router.put('/update-order/:orderId',isAdmin, orderController.updateOrder);
router.delete('/delete-order',isAdmin, orderController.deleteOrder);

//Les routes pour les delivery
router.post('/new-delivery', deliveryController.createDelivery);
router.get('/all-delivery', deliveryController.allDeliveries);
router.get('/get-delivery/:deliveryId', deliveryController.getDelivery);
router.put('/update-delivery/:deliveryId',isAdmin, deliveryController.updateDelivery);
router.delete('/delete-delivery',isAdmin, deliveryController.deleteDelivery);

//Les routes pour les category
router.post('/new-category',isAdmin, categoryController.createCategory);
router.get('/all-category',categoryController.allCategories);
router.get('/get-category/:categoryId', categoryController.getCategory);
router.put('/update-category/:categoryId',isAdmin, categoryController.updateCategory);
router.delete('/delete-category',isAdmin, categoryController.deleteCategory);


module.exports = router