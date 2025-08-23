export const adminDashboard = (req, res) => {
  res.json({ message: "Welcome Admin! This is your dashboard." });
};

export const sellerDashboard = (req, res) => {
  res.json({ message: "Welcome Seller! This is your dashboard." });
};

export const userDashboard = (req, res) => {
  res.json({ message: "Welcome User! This is your dashboard." });
};
