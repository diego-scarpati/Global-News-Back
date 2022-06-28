const express = require("express")
const router = express.Router()
const usersController = require("../controllers/users.controller.js")

router.get("/", usersController.getAll)
router.get("/:email", usersController.findByEmail)
router.get("/:id", usersController.getUser)
router.put("/:id", usersController.updateUser)
router.post("/register", usersController.register);
router.delete("/:id", usersController.deleteUser)

module.exports = router;