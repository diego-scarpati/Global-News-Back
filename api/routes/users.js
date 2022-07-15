const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");


router.get("/", usersController.getAll)
router.get("/email/:email", usersController.findByEmail)
router.get('/search/:input', usersController.findByInput)
router.get('/search/boss/:input', usersController.bossFindByInput)
router.get("/:id", usersController.getUser)
router.put("/updatePosition", usersController.updateUserPosition)
router.put("/:id", usersController.updateUser)
router.post("/register", usersController.register)
router.delete("/:id", usersController.deleteUser)


module.exports = router;
