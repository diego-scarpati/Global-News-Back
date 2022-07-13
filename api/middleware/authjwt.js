const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const verifyToken = async (req, res, next) => {
  // const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  const token = req.headers["x-access-token"];
  console.log("TOKEKEKKEKE", token);
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};
// try {
//   const userData = jwt.verify(token, SECRET);
//   req.userId = userData.id;
// } catch (error) {
//   return res.status(400).json({ message: "Invalid token" });
// }
// if (!req.userId) return res.status(400).json({ message: "Invalid token" });

// try {
//   const user = await User.findByPk(req.userId);
//   req.user = user;
//   next();
// } catch (error) {
//   return res.status(400).json({ message: "No user found" });
// }
// };



// const logIn = async (req, res, next) => {
//   const userData = req.body;
//   if (!userData || !userData.email)
//     return res.status(400).json({ message: "No user provided" });
//   try {
//     const loggedUser = await userService.logIn(userData);
//     if (!loggedUser) return res.status(401).json({ message: "User not found" });
//     const passwordCheck = await loggedUser.comparePassword(userData.password);
//     if (!passwordCheck)
//       return res.status(401).json({ message: "Wrong password" });
//     const token = jwt.sign(
//       { id: loggedUser.id },
//       SECRET,
//       { expiresIn: 1000 * 3600 * 12 } // 12 horas
//     );
//     const { password, ...user } = loggedUser["dataValues"];
//     res.json({ user, token });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = { verifyToken };
