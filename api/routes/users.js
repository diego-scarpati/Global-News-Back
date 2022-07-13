const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");
const verifyToken = require("../middleware/authJwt");

router.get("/", usersController.getAll);
router.get("/email/:email", usersController.findByEmail);
router.get("/search/:input", usersController.findByInput);
router.get("/:id", usersController.getUser);
router.put("/updatePosition", usersController.updateUserPosition);
router.put("/:id", usersController.updateUser);
router.post("/register", usersController.register);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
