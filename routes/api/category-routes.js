const router = require('express').Router();
const { Category, Product } = require('../../models');

// Define routes under `/api/categories` endpoint

// GET all categories with associated products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [Product] });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category by its `id` with associated products
router.get('/:id', async ({ params }, res) => {
  try {
    const categoryData = await Category.findByPk(params.id, { include: [Product] });

    if (!categoryData) {
      return res.status(404).json({ message: 'No category found with this id!' });
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async ({ body }, res) => {
  try {
    const categoryData = await Category.create(body);
    res.status(201).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT to update a category by its `id`
router.put('/:id', async ({ params, body }, res) => {
  try {
    const categoryData = await Category.update(
      { category_name: body.category_name },
      { where: { id: params.id } }
    );

    if (!categoryData[0]) {
      return res.status(404).json({ message: 'No category found with this id!' });
    }

    res.status(200).json({ message: 'Category updated successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a category by its `id`
router.delete('/:id', async ({ params }, res) => {
  try {
    const categoryData = await Category.destroy({ where: { id: params.id } });

    if (!categoryData) {
      return res.status(404).json({ message: 'No category found with this id!' });
    }

    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
