import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllBooks from "../Pages/All Books/AllBooks";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Home from "../Pages/Home/Home";
import PrivateRouter from "./PrivateRouter";
import UpdateBook from "../Pages/All Books/UpdateBook";
import Category from "../Pages/Home/Category";
import BookDetails from "../Pages/Home/BookDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRouter>
            <Category></Category>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/category/${params.id}`),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRouter>
            <BookDetails></BookDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bookDetails/${params.id}`),
      },

      {
        path: "/allBooks",
        element: (
          <PrivateRouter>
            <AllBooks></AllBooks>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:3000/allBooks"),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRouter>
            <UpdateBook></UpdateBook>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/updateBook/${params.id}`),
      },
      {
        path: "/addBook",
        element: (
          <PrivateRouter>
            <AddBook></AddBook>
          </PrivateRouter>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRouter>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
