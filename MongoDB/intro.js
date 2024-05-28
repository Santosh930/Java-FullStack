/*
1.show all databases
syntex-show dbs;
syntex-show databases

2.find all data in a collection
syntex-db.collectionName.find();
//find a single data

syntex-db.collectionName.findOne({'key':'value'})

3.show version

syntex- mongosh --version

4.Create a Database

syntex-use databaseName

Note:-database is only visible with minimun one collection;

5.create a collection
  syntex- db.createCollection('collectionName')
  syntex -db.collectionName.insertOne({});

  6.insert data 
  //there are 2 methods for inserting data
  1.insertOne()
  2.insertMany()
  example

  insertOne()
   db.collectionName.insertOne({'key':'value'});
   insertMany()
   db.collectionname.insertmany([{'key':'value'},{'key':'value'},{'key':'value'},.....])

7.Projection
  db.posts.find({}, {title: 1, date: 1});//1-true/visible,0-false/hide

  Note:-You cannot use both 0 and 1 in the same object. The only exception is the _id field. You should either specify the fields you would like to include or the fields you would like to exclude.



  8.Update
  1.updateOne()
   exmple:->
  db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }, 
  { upsert: true }
)



  2.updateMany():-The updateMany() method will update all documents that match the provided query.
   db.posts.updateMany({}, { $inc: { likes: 1 } })

3.DeleteOne():-It is delete only first one matched document;
db.posts.deleteOne({ title: "Post Title 5" })
4.DeleteMany():- it detetes all mathed query;
db.posts.deleteMany({ category: "Technology" })


//Comparison Operator

$eq: Values are equal
$ne: Values are not equal
$gt: Value is greater than another value
$gte: Value is greater than or equal to another value
$lt: Value is less than another value
$lte: Value is less than or equal to another value
$in: Value is matched within an array

example

db.student.find({"likes":{"$eq":20}});
db.student.find({"likes":{"$ne":20}});
db.student.find({"likes":{"$gt":20}});
db.student.find({"likes":{"$gte":20}});
db.student.find({"likes":{"$lt":20}});
db.student.find({"likes":{"$lte":20}});
db.student.find({"likes":{"$in":20}});




//logical operator

$and: Returns documents where both queries match
$or: Returns documents where either query matches
$nor: Returns documents where both queries fail to match
$not: Returns documents where the query does not match

example
db.student.find({ $or: [{ "likes": { $eq:20 } }, { "name": "santosh" }] })
db.student.find({ $and: [{ "likes": { $eq:20 } }, { "name": "santosh" }] })
db.student.find({ $not: [{ "likes": { $eq:20 } }, { "name": "santosh" }] })
db.student.find({ $nor: [{ "likes": { $eq:20 } }, { "name": "santosh" }] })

//Update Operators

$currentDate: Sets the field value to the current date
$inc: Increments the field value
$rename: Renames the field
$set: Sets the value of a field
$unset: Removes the field from the document

Example
 db.student.updateMany({},{$inc:{likes:20}});

//Array (arr must be available)

$addToSet: Adds distinct elements to an array
$pop: Removes the first or last element of an array
$pull: Removes all elements from an array that match the query
$push: Adds an element to an array

Example

db.student.updateOne({title:"arr1"},{$addToSet:{num:"Apple"}})
db.student.updateOne({title:"arr1"},{$push:{num:"Apple"}})
db.student.updateOne({title:"arr1"},{$pop:{num:-1}})//-1 removing element from starting index(0) and 1 removing element from last index
db.student.updateOne({title:"arr1"},{$pull:{num:"Apple"}})//removing all matched elements from an arr.




*/
