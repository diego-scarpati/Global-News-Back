const express = require("express")
const router = express.Router()
const usersController = require("../controllers/users.controller.js")

router.post("/register",usersController.register);

router.get("/", usersController.getAll)

router.delete("/:id",usersController.deleteUser)


module.exports = router;