import jwt from "jsonwebtoken";
import "dotenv/config";

export const validateJWT = (req, res, next) => {
  console.log("holi", req.header("x-token"));
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "Invalid token",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    // req.uid = uid;
    next();
  } catch (error) {
    console.log("error", error);

    return res.status(401).json({
      ok: false,
      message: "Invalid token",
    });
  }
};
