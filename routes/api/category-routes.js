const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get("/", async (req, res) => {
  try {
    const categoryInfo = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryInfo = await Category.findByPk(req.params.id, {
      include: Product,
    });
    if (!categoryInfo) {
      res
        .status(404)
        .json({ message: "No category has been found with this ID!" });
      return;
    }
    res.status(200).json(categoryInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryInfo = await Category.create(req.body);
    res.status(200).json(categoryInfo);
    console.log("success");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryInfo = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!categoryInfo[0]) {
      res
        .status(404)
        .json({ message: "Catagory cannot be updated with this ID! " });
      return;
    }
    res.status(200).json(categoryInfo);
    console.log("Category successfully updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryInfo = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryInfo) {
      res
        .status(404)
        .json({ message: "Error - no category has been found with this id!" });
      return;
    }

    res.status(200).json(categoryInfo);
    console.log("Category successfully deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
