const Product = require("../Schemas/ProductSchema");
const Order = require("../Schemas/OrderSchema");

// Générer une référence unique pour la commande
function GenerateRefOrder() {
  return Math.random().toString(36).substring(2, 14).toUpperCase();
}

// Création d'une commande
const createOrder = async (req, res) => {
  try {
    const { ProductOrder, UserOrder, TotalAmount, AdresseDelivery, UserAnonymous } =
      req.body;

    if (!ProductOrder || ProductOrder.length === 0) {
      return res
        .status(400)
        .json({ message: "Le panier est vide", error: {} });
    }

    let total = 0;

    // Vérification et calcul du total
    for (const item of ProductOrder) {
      const product = await Product.findById(item.ProductId);
      if (!product)
        return res
          .status(400)
          .json({ message: `Produit introuvable: ${item.ProductId}` });

      total += Number(product.Price) * Number(item.quantity);
    }

    const newOrder = await Order.create({
      RefOrder: GenerateRefOrder(),
      Status: "Not validate",
      UserOrder: UserOrder || undefined, // pour utilisateur anonyme
      ProductOrder,
      TotalAmount: total,
      AdresseDelivery,
      UserAnonymous,
    });

    return res.status(201).json({
      message: "Commande créée avec succès ✅",
      newOrder,
    });
  } catch (error) {
    console.error("Erreur création commande :", error);
    return res.status(500).json({
      message: "Erreur lors de la création de la commande",
      error: error.message || error,
    });
  }
};

// Récupération de toutes les commandes
const allOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("UserOrder")
      .populate("ProductOrder.ProductId");

    return res.status(200).json({ message: "Commandes récupérées", orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur récupération commandes", error });
  }
};

// Récupération des commandes d'un utilisateur
const allUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ UserOrder: userId })
      .populate("UserOrder")
      .populate("ProductOrder.ProductId");

    return res.status(200).json({ message: "Commandes utilisateur récupérées", orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur récupération commandes utilisateur", error });
  }
};

// Get one order
const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId)
      .populate("UserOrder")
      .populate("ProductOrder.ProductId");

    if (!order) return res.status(404).json({ message: "Commande non trouvée" });

    return res.status(200).json({ message: "Commande récupérée", order });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erreur serveur", err });
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const updatedData = req.body;

    const order = await Order.findByIdAndUpdate(orderId, updatedData, { new: true });

    if (!order) return res.status(404).json({ message: "Commande non trouvée" });

    return res.status(200).json({ message: "Commande mise à jour", order });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erreur serveur", err });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findByIdAndDelete(orderId);

    if (!order) return res.status(404).json({ message: "Commande non trouvée" });

    return res.status(200).json({ message: "Commande supprimée" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erreur serveur", err });
  }
};

module.exports = {
  createOrder,
  allOrders,
  allUserOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
