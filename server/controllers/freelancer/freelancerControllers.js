

const handleFetchFreelancerData = async(req,res) => {
    try {
        const {name,location,skills,description,rating} = req.body ;
        console.log(req.body) ;
         let fetchResponse = await freelanceDataModel.find()
         console.log(fetchResponse) ;
         return res.send(fetchResponse) ;
    }
    catch(error) {
         return res.status(404).send({message:"Unable to fetch the data"}) ;
    }
}