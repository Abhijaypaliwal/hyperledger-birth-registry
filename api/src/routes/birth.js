const express = require("express");
const _birthController = require("../controllers/Birthcetificate");
// const multer = require('multer');
// const path = require('path');
const router = new express.Router();

router.get("/", async (req, res) => {
    res.send("Hello Nites");
    console.log('test')
});

router.post("/create", _birthController.store);
router.get('/getAll', _birthController.index);
// router.get('/getSingle/:_id', _birthController.show);

module.exports = router;