class CategoryController {
async getAll(req, res) {
    try {
        await res.json({
          status: "Success",
          data: "User Registered successfully",
        });
      } catch (error) {
        res.json(error.message);
      }
}
}