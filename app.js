const mongoose = require("mongoose");
// const router = XPathExpression.Router();

// const dbRoute =
//     'mongodb+srv://user:<password>@cluster0-3zrv8.mongodb.net/test?retryWrites=true&w=majority';

// mongoose.Promise = global.Promise;

// // connects our back end code with the database
// mongoose.connect(dbRoute, 
//     {   useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

// let db = mongoose.connection;

// db.once('open', () => console.log('connected to the database'));

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema (
  {
    name:String,
    rating: Number,
    review: String
  }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Preety good."
});

// fruit.save();

const personSchema = new mongoose.Schema (
  {
    name: String,
    age: Number,
  }
);

const Person = mongoose.model("Fruit", personSchema);

const person = new Person ({
  name: "Hardik",
  rating: 50,
  });

person.save();
