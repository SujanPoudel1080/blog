const express = require(express);

const commentRouter = express.Router();

commentRouter.post("/comment", async(req, res) => {
    try {
        await res.json({
            status: "Success",
            data: "Comment created successfully",
        });

    }

    catch (error) {
        res.json(error.message);
    }
});