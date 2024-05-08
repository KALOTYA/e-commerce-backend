const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: { model: Product },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const catDataById = await Category.findByPk(req.params.id, {
      include: { model: Product },
    });
    if (catDataById) {
      res.status(200).json(catDataById);
    } else {
      res.status(404).json({ message: "Incorrect Id!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createCat = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(createCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCat = await Category.update({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
