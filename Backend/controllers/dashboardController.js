export const adminDashboard = (req, res) => {
  res.json({ message: "Welcome Admin! This is your dashboard." });
};

export const sellerDashboard = (req, res) => {
  res.json({ message: "Welcome Seller! This is your dashboard." });
};

export const userDashboard = (req, res) => {
  res.json({ message: "Welcome User! This is your dashboard." });
};

//For Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image, category } = req.body;

  try {
    const updateProduct = await sql`
      UPDATE products
      SET name=${name}, price=${price}, image=${image}, category=${category}
      WHERE id=${id}
      RETURNING *
    `;

    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("Error in updateProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};