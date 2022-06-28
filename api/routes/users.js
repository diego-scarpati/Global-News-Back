const express = require("express")
const router = express.Router()
const usersController = require("../controllers/users.controller.js")

router.get("/", usersController.getAll)
router.get("/:employeeId", usersController.getUser)
router.put("/:employeeId", usersController.updateUser)
router.post("/register", usersController.register);
router.delete("/:employeeId", usersController.deleteUser)


module.exports = router;