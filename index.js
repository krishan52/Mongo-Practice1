const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connetion successful");
  })
  .catch((err) => console.log(err)); //execution

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({name: "Krishan Kaushik",email: "krishan9052@gmail.com", age:21});
// const user2 = new User({name: "Mohit",email: "mohit5223@gmail.com", age:23});

// user1.save();
// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {console.log(err)});

// User.insertMany([
//     {name: "Eve", email: "random@gmail.com", age:45},
//     {name: "peter", email: "peter345@gmail.com", age:25},
//     {name: "john", email: "john242@gmail.com", age:56},

// ]).then((data) => {
//     console.log(data);
// });

// User.find({age: {$gt:47}}).then((res) => {console.log(res[0].name);});
// User.findById("66bc28b836fa116c17077215").then((res) => {console.log(res);});
// User.find({name: "Krishan Kaushik"}).then((res) => {console.log(res);})
// User.updateOne({ _id: "66bc28b836fa116c17077215"}, {name: "Anshu",email: "anshu673@yahoo.com",age:25}).then((res) => {
//     console.log(res);
// });

// User.find().then((res) => {console.log(res);});

// User.findOneAndUpdate({ name: "john" }, { age: 24 }, {new: true}).then((data) => {
//   console.log(data);
// });

// User.findByIdAndUpdate({ _id: "66bc2f1fbb537eb42bb7df06" }, { name: "jonathan" }, {new: true}).then((data) => {
//     console.log(data);
//   });

User.deleteMany({age: 23}).then((res) => {
    console.log(res);
});