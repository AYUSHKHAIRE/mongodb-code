// show dbs 
// use harryKart
// show collections
db.items.find({price: 22000})
// Deleting items from the Mongo Database
db.items.deleteOne({Price: 12000})
db.items.deleteOne({names: 'Sa A2s'})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({Price: 12000})

