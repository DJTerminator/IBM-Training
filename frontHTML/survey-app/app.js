const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const {Firestore} = require('@google-cloud/firestore');
// Create a new client
const firestore = new Firestore();
// const document = firestore.doc('mydb/users');
let collectionRef = firestore.collection('users');
const PORT = 5555;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.post('/users', (req, res)=>{
    const user = req.body;
    collectionRef.add(user).then(documentReference => {
        console.log(`Added document with name: ${documentReference.id}`);
        console.log('Entered new data into the document');
        res.status(201).end();
    })
})
app.get('/users', async(req, res)=>{
    // const user = req.body;
    collectionRef.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        var users= []
        for (let doc of docs) { 
          console.log(doc.id, '=>', doc.data()); 
        //   console.log(doc.data())
        //   var key = doc.id
          var data  = doc.data();
        //   var user = {key:data}
          users.push(data);
          console.log(`Document found at path: ${doc.ref.path}`);
        //   res.write(doc.data())
        }
        res.json(users);
        // res.json(docs.)
      });
      
})
module.exports = {
    app
};