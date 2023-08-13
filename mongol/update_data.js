// updating the data in database 
db.items.updateOne({names:' galaxy A20s'},{$set:{Price:2}})
// to update multiple objects 
db.items.updateMany({Price:12000},{$set:{Price:2}})