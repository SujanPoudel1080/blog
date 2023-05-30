const express = require(express);

const categoryRouter = express.Router();

categoryRouter.post("/category", async(req, res) => {
    try{
        await res.json({
            status: "Success",
            message: "Category created successfully",
        })
    }
    catch(error){
        res.json(error.message)
    }
})