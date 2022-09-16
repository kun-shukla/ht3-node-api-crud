import express from "express";
import books from "../books-data.js";

const router = express.Router();

router.get("/", (req, res) => {
  const title = req.query.title;
  const searchArr = [];
  if (title) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].title.toLowerCase().includes(title.toLowerCase())) {
        searchArr.push(books[i]);
      }
    }

    const responseObject = {
      success: true,
      message: `request book(s) containing the keyword '${title}' in its title`,
      data: searchArr,
    };
    res.json(responseObject);
    return;
  }

  const responseObject = {
    success: true,
    message: "request all books",
    data: books,
  };
  res.json(responseObject);
  //   console.log(otherResponseObject);
  return;
});

//   if (title) {
//     books.map((eachBook) => {
//       if (eachBook.title.toLowerCase().includes(title.toLowerCase())) {
//     //   console.log('line 13:',eachBook)
//       newObj.push(eachBook)
//       console.log('line 15:',newObj)
//       const responseObject = {
//                     success: true,
//                     message: `request book(s) containing the keyword '${title}' in its title`,
//                     data: newObj
//                   };
//                   res.json(responseObject);
//                   return;
//         // console.log("line:14:",newObj)
//         // return;
//       }
//     });
//   }

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  books.map((book) => {
    if (Number(id) === book.id) {
      const responseObject = {
        success: true,
        message: `request book with id: ${id}`,
        data: book,
      };
      res.json(responseObject);
      return;
    }
  });
});

router.post("/", (req, res) => {
const body = req.body;
books.push(body)
console.log(books)

 const responseObject = {
    success: true,
    message: `add a book ${body.title} with id: ${body.id} to books data`,
    data: books,
  };
  res.json(responseObject);

});

export default router;
