const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());


// connnect with database
mongoose.connect('mongodb+srv://harshitthekumar_db_user:mongodb1234@cluster1.mxzqvox.mongodb.net/?appName=Cluster1')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

    
app.get('/', (req, res) => {
    res.send('Hello World!');
})


const userSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type:String
    },
    email: {
        type:String,
        required:true,
        minlength:6,
        lowercase: true,
        unique:true
    },
    password: String
});
const Users = mongoose.model("user", userSchema);


//1.GET all users
app.get("/users", async (req, res) => {
    const allUser = await Users.find();
    res.status(200).json(allUser);
})

//2.GET user by id
app.get("/users/id/:id", async (req, res) => {
    const userID = Number(req.params.id);
    const userID2 = await Users.findById(userID);

    if (!userID2) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userID2);
})


//3.POST (new user)
app.post("/adduser", async (req, res) => {
    try {
        const data = new Users(req.body);
        await data.save();                  //saving user to the database
        console.log(data);
        res.status(201).json({ message: "added the data", data });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//4.POST (Multiple users)
app.post('/addusers', async (req, res) => {
    try {
        const users= await Users.insertMany(req.body);
        res.send("data created")
    }
    catch (err) {
        res.status(400).json({ message: err.message }); 
    };
})


//5.PUT (Fully Update a user detils by id)
app.put("/users/id/:id", async (req, res) => {
    const userID = Number(req.params.id);
    const user = await Users.findById(userID);

    console.log("ID:", userID);
    console.log("Found user:", user);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    await user.save();

    res.status(200).json({
        message: "User updated successfully",
        data: user
    });
})


//6.PATCH (partcially update the user data)
app.patch("/users/id/:id", async (req,res)=>{

    try {
        const user = await Users.findById(Number(req.params.id));
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        Object.assign(user, req.body);
        await user.save();

        res.json({
            message: "User updated",
            data: user
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//7.Delete
app.delete("/users/id/:id", async (req, res) => {
        const userID = Number(req.params.id);
        const deletedUser = await Users.findOneAndDelete({ _id: userID });

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
});


app.listen(3000, () => {
    console.log("server started at 3000")
})