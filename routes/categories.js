const express = require("express");
const router = express.Router();
const controll = require("../controller/categories");

router.get("/", controll.getAll);

//get product by id
router.get("/:id", controll.byId);

//add product
router.post("/add", controll.Add);

//update product
router.post("/update/:id", controll.Update);

//delete product
router.get("/delete/:id", controll.Delete);


module.exports = router;
