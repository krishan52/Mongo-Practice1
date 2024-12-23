const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err)); //execution

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 30,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    minLength: [1, "Garib h kya"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title: "Goblin paradise",
//     author: "Baba Ghantal",
//     price: 902311223,
// });

// book1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// Book.updateOne({title:"Goblin paradise"},{title: "Harray Kumar",author: "Chambal ka daku",price: 2}).then((res)=>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Book.deleteMany({_id: "66bc6c2f7809ad1d8635e66a"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// const book2 = new Book({
//         title: "No Gain No Painaldsfjaweiojwpiorhgpwehgp9qhgp9qhpguwhr;gohfklvjhaep",
//         author: "God",
//         price: 0,
//         category: "fictional"
//     });

// book2.save().then((res) => {
//     console.log(res);
// });
// const book3 = new Book({
//     title: "DC Comics",
//     author: "Will Casedy",
//     price: 120,
// });

// book3.save().then((res) => {
// console.log(res);
// // });
// const book4 = new Book({
//     title: "Marvel Comics",
//     author: "Dwane",
//     price: 1208,
//     category: "fictional"
// });

// book4.save().then((res) => {
// console.log(res);
// });

// Book.findByIdAndUpdate(
//   "66bc6b45937d812ea198fe41",
//   { title: "Harry Kumar Potter", price: -200 },
//   { runValidators: true },
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const book6 = new Book({
        title: "xyz Comics",
        author: "Rampal kaka",
        price: 0,
    });
    
    book6.save().then((res) => {
    console.log(res);
    }).catch((err) => {
        console.log(err);
    });