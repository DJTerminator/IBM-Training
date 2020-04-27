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

app.get('/',(req,res)=>{
   res.send("It's working , lets get on with it!");
})
app.post('/users', (req, res)=>{
    const user = req.body;
    collectionRef.add(user).then(documentReference => {
        console.log(`Added document with name: ${documentReference.id}`);
        console.log('Entered new data into the document');
        res.status(201).end();
    })
})

app.put('/api/update/:id', (req, res) => {
(async () => {
    try {
        const document = db.collection('users').doc(req.params.item_id);
        await document.update({
            item: req.body.users
        });
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    })();
});

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

app.get('/users/search/:id', async(req, res)=>{
    // const user = req.body;
    const id= req.params.id;
    collectionRef.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        var users= []
        for (let doc of docs) { 
          console.log(doc.id, '=>', doc.data()); 
        //   console.log(doc.data())
        //   var key = doc.id
        if(id==doc.id){
           var data  = doc.data();
              users.push(data.questions[1].choices[0].text);
        }
         
        //   var user = {key:data}
        
          console.log(`Document found at path: ${doc.ref.path}`);
        //   res.write(doc.data())
        }
        res.json(users);
        // res.json(docs.)
      });
      
})

app.delete('/api/delete/:item_id', (req, res) => {
    const id = req.params.id;
    collectionRef.doc(id).delete();
});

// app.get('/users', (req, res, next) => {
//     // quickstart();
//     res.json(USERS);
// });
// app.get('/users', async(req, res, next) => {
//     let doc = await document.get()
//     console.log('Read the document', doc);
//     res.json(doc)
// });
// app.get('/users/:userId', (req, res, next) => {