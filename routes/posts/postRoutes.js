const express = require(express);

const postRouter = express.Router();

postRouter.post('/post', async (req, res) => {
    try{
        await res.json({
            status: "Success",
            data: "Post created successfully",
          });
    }
    catch(error){
        res.json(error.message);
    }
});