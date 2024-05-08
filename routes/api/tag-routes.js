const router = require('express').Router();
const { includes } = require('lodash');
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', async (req, res) => {
 
  try {
    const tagInfo = await Tag.findAll({
      include: { model: Product },
    });
    res.status(200).json(tagInfo)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  
  try {
    const tagInfoById = await Tag.findByPk(req.params.id, {
      include: { model: Product },
    });
    if (tagInfoById) {
      res.status(200).json(tagInfoById);
    } else {
      res.status(404).json({ message: "Incorrect Id!"});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {

  try {
    const createTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(createTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {

  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {

  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
