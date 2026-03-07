const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());


mongoose.connect('mongodb+srv://harshitthekumar_db_user:mongodb1234@cluster1.mxzqvox.mongodb.net/?appName=Cluster1')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));


app.get('/', (req, res) => {
    res.send('Hi, welcome');
})


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be there"],
        minlength: [3, "Name must be atleast 2 chracter"]
    },
    email: {
        type: String,
        required: [true, "Email Must be there"],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "passwords must be atlest 6 character"]
    },
    role: {
        type: String,
        enum: ["Student", "Mentor", "Admin"],
        default: "student"
    },
    course: {
        type: String,
        enum: ["MERN", "Java", "Python", "Data Science"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
});
const Students = mongoose.model("student", studentSchema);         //collection name-> Students





//1.POST (new student)
app.post("/addstudent", async (req, res) => {
    try {
        const data = new Students(req.body);
        await data.save();
        console.log(data);
        res.status(201).json({ message: "added the data", data });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//2.POST (Multiple students)
app.post('/addstudents', async (req, res) => {
    try {
        const students = await Students.insertMany(req.body);
        res.send({
            message: "Students added successfully",
            data: students
        })
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    };
})



//3.GET all students
app.get("/students", async (req, res) => {
    const allStudents = await Students.find();
    res.status(200).json(allStudents);
})

//4.GET student by id
app.get("/students/id/:id", async (req, res) => {
    const studentID = req.params.id;
    const studentID2 = await Students.findById(studentID);

    if (!studentID2) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(studentID2);
})

//5.Get Student by course
app.get("/students/course/:courseName", async (req, res) => {
    const studentCourse = req.params.courseName;
    const studentcourse2 = await Students.find(studentCourse);
    if (!studentcourse2) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(studentcourse2);

})



//6.PUT (Fully Update a student detils by id)
app.put("/students/id/:id", async (req, res) => {
    const studentID = req.params.id;
    const student = await Students.findById(studentID);

    console.log("ID:", studentID);
    console.log("Found student:", student);

    if (!student) {
        return res.status(404).json({ message: "student not found" });
    }

    student.name = req.body.name;
    student.email = req.body.email;
    student.password = req.body.password;

    await student.save();

    res.status(200).json({
        message: "student updated successfully",
        data: student
    });
})



//7.Delete
app.delete("/students/id/:id", async (req, res) => {
    const studentID = req.params.id;
    const deletedStudent = await Students.findOneAndDelete({ _id: studentID });

    if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
        message: "Student deleted successfully",
        data: deletedStudent
    });
});


app.listen(3000, () => {
    console.log("server started at 3000")
})