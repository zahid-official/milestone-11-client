# TrackBook - Library Management System

## 🚀 Project Overview

Welcome to the **Library Management System**! This system is designed to help manage a library's collection of books in a smooth, efficient, and user-friendly manner. Built with modern web technologies, this project allows users to easily browse, borrow, and return books, while also offering administrators the ability to add, update, and manage the library's resources. 

This web-based system is fully responsive, ensuring seamless user experience across all devices (mobile, tablet, and desktop). It also features authentication, allowing users to securely log in and manage their book transactions.

### Key Features:
- **User Authentication**: Email/password and Google/GitHub login.
- **Book Categories & Details**: View different book categories and detailed information about each book.
- **Borrow & Return Books**: Easily borrow books and track return dates.
- **Admin Panel**: Add new books, update existing ones, and view all books.
- **Borrowed Books**: View and manage borrowed books, including return options.
- **Responsive UI**: Optimized for mobile, tablet, and desktop views.
- **Dynamic Title**: The website title changes dynamically based on the current route.
- **Error Handling**: Includes a 404 page and loading spinner for a smooth experience.
- **Toast Notifications**: For all CRUD operations, relevant success/error messages will be shown.


## 🛠️ Technologies Used

- **Frontend**: React.js, React Router, React Hooks, CSS (Styled Components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication (Email/Password, Google)
- **State Management**: React Context API
- **Deployment**: Surge for frontend, Vercel for backend
- **Libraries/Packages**:
  - `react-router-dom` for routing
  - `react-rating-stars-component` for book ratings
  - `react-toastify` for notifications
  - `jwt-simple` for JWT authentication
  - `axios` for HTTP requests
  

## 🎨 UI/UX Design

The design of the website follows a clean and modern approach with a focus on usability. It is built to be visually appealing and intuitive, ensuring that users can navigate through the pages with ease. Special attention was given to color contrast and proper alignment to create an eye-catching experience. The website's layout is user-friendly and doesn't rely on clunky or outdated design elements.


## 📦 NPM Packages Used

- axios
- motion
- swiperJS
- react-icons
- react-toastify

---

## 📋 Pages & Structure

### 1. **Home Page**:
   - **Banner/Slider**: Featuring three slides with meaningful content.
   - **Book Categories**: Four cards representing different book categories that lead to the category's book list.
   - **Extra Sections**: Two additional sections for enhanced user engagement.
   
### 2. **Book Details Page**:
   - Displays detailed information about each book, including an option to borrow the book.

### 3. **Private Routes**:
   - **All Books Page**: Shows a list of all books with the ability to update them (Admin only).
   - **Add Book Page**: Allows adding new books to the system (Admin only).
   - **Borrowed Books Page**: Displays books borrowed by the logged-in user.

---

## 🔐 Authentication System

- **Login Page**: Allows users to log in via email/password or Google/GitHub.
- **Register Page**: Users can register by providing a name, email, password, and photoURL.
- **JWT Authentication**: Upon successful login, a JWT token is generated and stored on the client-side for authenticated access.

---

## 🧩 Additional Features

- **Book Filter**: Filter books based on availability.
- **Toggle View**: Switch between card view and table view for books.
- **Private Route Access**: Only logged-in users can access the "All Books", "Add Book", and "Borrowed Books" pages.
- **Borrowing Restrictions**: Users cannot borrow the same book more than once at the same time.
- **Firebase & MongoDB Integration**: Secure Firebase configuration and MongoDB credentials using environment variables.

---
## 💻 Live Demo

You can explore the live version of the website [here](https://trackbook-official.vercel.app/).

---
## 🌟 Thank You for Exploring! 📚

We hope you enjoyed exploring this project as much as we enjoyed building it. The **Library Management System** is designed to streamline the way libraries manage their resources and with the added functionality of seamless user authentication, dynamic content display and efficient management of borrowed books. It offers an intuitive experience for both users and administrators alike.

If you have any feedback, questions about the project, feel free to mail us. 

---

### 🙏 Happy Coding and Enjoy the Experience! 🚀

We’re excited to see how this project evolves and hope it provides value to library management systems everywhere. 🌍


