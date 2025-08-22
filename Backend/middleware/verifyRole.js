const verifyRole = (allowedRoles) => (req, res, next) => {
  const userRole = req.user.user_role; // assume you have JWT auth middleware setting req.user
  if (!allowedRoles.includes(userRole)) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
