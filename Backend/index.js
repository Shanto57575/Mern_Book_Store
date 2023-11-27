const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3333;
const cors = require('cors');

//middlewares
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0wjbmky.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        //creating books collection in DATABASE
        const booksCollection = client.db("booksDB").collection("books");

        // Upload a book in the database
        app.post('/upload-book', async (req, res) => {
            const data = req.body;
            const result = await booksCollection.insertMany(data);
            res.send(result)
        })

        // Get All the books from thi API
        // app.get('/all-books', async (req, res) => {
        //     const result = await booksCollection.find().toArray();
        //     res.send(result);
        // })


        // Update Book Details
        app.patch('/book-update/:id', async (req, res) => {
            const id = req.params.id;
            const updateBookDetails = req.body;
            const filter = { _id: new ObjectId(id) };

            const updateDoc = {
                $set: {
                    ...updateBookDetails
                }
            }
            const result = await booksCollection.updateOne(filter, updateDoc);
            res.send(result)
        })

        // Delete a book from the database
        app.delete('/book-delete/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await booksCollection.deleteOne(query);
            res.send(result);
        })

        // search by category
        // app.get('/all-books/:category', async (req, res) => {
        //     const category = req.params.category;
        //     const result = await booksCollection.find({ category: category }).toArray();
        //     res.send(result);
        // })
        // search by author
        // app.get('/all-books/:author', async (req, res) => {
        //     const author = req.params.author;
        //     const result = await booksCollection.find({ author: author }).toArray();
        //     res.send(result);
        // })
        // search by title
        app.get('/all-books/:title', async (req, res) => {
            const title = req.params.title;
            const result = await booksCollection.find({ title: title }).toArray();
            res.send(result);
        })

        app.get('/all-books', async (req, res) => {
            let query = {};
            if (req.query?.genre) {
                query = { genre: req.query?.genre };
            }
            const result = await booksCollection.find(query).toArray();
            res.send(result);
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send(`"Hello From Book Swipe"`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})