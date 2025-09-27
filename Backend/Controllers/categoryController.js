const Category = require('../Schemas/categorieSchema')

// Create a category
const createCategory = async (req, res) => {
    try {
        const { CategoryName, CategoryDescription } = req.body 

        const newCategory = await Category.create({ CategoryName, CategoryDescription })

        return res.status(201).json({ message: "Successfully created category", newCategory })
    } catch (err) {
        console.error("Error server:", err)
        return res.status(500).json({ message: "Server error", err })
    }
}

// Get all categories
const allCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json({ message: "Successfully retrieved categories", categories })
    } catch (err) {
        console.error("Error server:", err)
        return res.status(500).json({ message: "Server error", err })
    }
}

// Get single category
const getCategory = async (req, res) => {
    try {
        const { categoryId } = req.params
        const category = await Category.findById(categoryId)
        if (!category) return res.status(404).json({ message: "Category not found" })

        return res.status(200).json({ message: "Successfully retrieved category", category })
    } catch (err) {
        console.error("Error server:", err)
        return res.status(500).json({ message: "Server error", err })
    }
}

// Update a category
const updateCategory = async (req, res) => {
    try {
        const { categoryId } = req.params
        const { CategoryName, CategoryDescription } = req.body

        const category = await Category.findByIdAndUpdate(
            categoryId,
            { $set: { CategoryName, CategoryDescription } },
            { new: true }
        )

        if (!category) return res.status(404).json({ message: "Category not found" })

        return res.status(200).json({ message: "Successfully updated category", category })
    } catch (err) {
        console.error("Error server:", err)
        return res.status(500).json({ message: "Server error", err })
    }
}

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params
        const category = await Category.findByIdAndDelete(categoryId)

        if (!category) return res.status(404).json({ message: "Category not found" })

        return res.status(200).json({ message: "Successfully deleted category" })
    } catch (err) {
        console.error("Error server:", err)
        return res.status(500).json({ message: "Server error", err })
    }
}

module.exports = {
    createCategory,
    allCategories,
    getCategory,
    updateCategory,
    deleteCategory
}