//  >>> show dbs 
// searching for data in mongodb
//  >>> use ayushkart
// method for finding data by filter 
// this is a simply a filter object that traverse and match all the  doccuments and match the objects ; returns all the objects 
db.items.find({Price:12000})
db.items.find({Price:{$gte:12000}})
db.items.find({Price:{$gt:12000}})
db.items.find({Price:{$gte:12000},Qty:{$gte:100}})
db.items.find({Price:{$gte:1000},Qty:{$lte:100}})
db.items.find({$or:[{Price:{$gte:12000},Qty:{$lte:100}}]})
db.items.find({Price:{$gte:12000}},{Price:1})
db.items.find({Price:{$gte:12000}},{Price:1,Qty:1})
ayushkart> db.items.find({Price:{$gte:12000}},{Price:1,Qty:1,names:1})
// , : And 
// $or[] : or
// $gte : greater then equal to 
// $lte : less then equal to 
// $gt : greater than 
// $lt : less than 