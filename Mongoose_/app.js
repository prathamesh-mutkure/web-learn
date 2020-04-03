const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

/* Creating Schema */

const studentSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, "Enter the name!"]
    },
    roll: Number,
    marks: {
        type: Number,
        min: 0,
        max: 100
    }
})

const personSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number
})

/* Creating Model */
/* Which makes a Collection with Plural name */

const Student = new mongoose.model('Student', studentSchema)
const Person = new mongoose.model('Person', personSchema)

/* Creating JS Obects to be inserted into DB Collection */

const s1 = new Student({
    _id: 3,
    name: 'Donald Trump',
    roll: 20,
    marks: 75
})

const p1 = new Person({
    _id: 1,
    name: "Kavya",
    age: 7
})

const p2 = new Person({
    _id: 2,
    name: "Sai",
    age: 5
})

const p3 = new Person({
    _id: 3,
    name: "Shree",
    age: 17
})


/* SAVING SINGLE OBJECT TO DATABASE */

// s1.save()

/* SAVING MULTIPLE OBJECTS TO DATABASE */

/* Person.insertMany([p1, p2, p3], (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Inerted data successfully")
    }
}) */


/* READING THE DATABASE */

$:  printModels = (err, model) => {

    if (err) {
        console.log(err)
        return
    }
    
    console.log('--------------')
    model.forEach(element => {
        console.log(element.name)
    })
}

Person.find(printModels)


/* UPDATING THE DATABASE */

Person.updateOne({name: 'Prathamesh'}, {name: 'Shree'}, err => {
    
    if (err) {
        console.log('Could not update the record!')
        return
    }

    Person.find(printModels)
})


/* DELETING THE DATABASE */

Student.deleteOne({name: 'Donald Trump'}, err => {

    if (err) {
        console.log('Could not delete the record!')
        return
    }

    Student.find(printModels)
})

/* ESTABLISHING RELATIONSHIP AMONG DATA */

const person = new Person({
    _id: 10,
    name: "Donald Trump",
    age: 60
})

person.save()

const student = new Student({
    _id: 10,
    name: 'Modi',
    roll: 25,
    favPerson: person
})

student.save()
