export const adminDashboard = (req, res) => {
  res.json({ message: "Welcome Admin! This is your dashboard." });
};

export const sellerDashboard = (req, res) => {
  res.json({ message: "Welcome Seller! This is your dashboard." });
};

export const userDashboard = (req, res) => {
  res.json({ message: "Welcome User! This is your dashboard." });
};

//For Update profile
export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, photo_url } = req.body;

  try {
    const updateProfile = await sql`
      UPDATE users
      SET name=${name}, email=${email}, password=${password}, photo_url=${photo_url}
      WHERE id=${id}
      RETURNING *
    `;

    if (updateProfile.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({ success: true, data: updateProfile[0] });
  } catch (error) {
    console.log("Error in updateProfile function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

