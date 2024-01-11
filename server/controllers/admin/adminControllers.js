const postModel = require("../../models/projectModel") ;

const handlePostProjectPosts = async(req,res) => 
{
    try 
    {
        const {postId,postName,postDescription,postDays,postAmount} = req.body ;
        console.log(req.body) ;

        let postResponse = await new postModel(
            {
                postId,postName,postDescription,postDays,postAmount
            }
        )
        await postResponse.save(postId,postName,postDescription,postDays,postAmount) ;
        console.log(postResponse) ;
        return res.status(201).send({message:"Successfully posted your project",sucess:true,postResponse}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:"Unable to post the project",success:false}) ;
    }
}

const express = require('express') ;
let postRouter = express.Router() ;
postRouter.post('/postProject', handlePostProjectPosts) ;

module.exports = postRouter ;
