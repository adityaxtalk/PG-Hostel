
# Hostel Management System

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing hostel details and student records. The application has a landing page that shows hostel details and provides an option for users to log in. After logging in, users can view, edit, delete, and add student details, as well as generate PDF reports.

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Usage

1. **Landing Page:**
    - The landing page displays hostel details.
    - There is a login option available on the navigation bar.

2. **Login:**
    - Users need to log in to access student management features.

3. **Student Management:**
    - After logging in, users can view a list of students.
    - Users can add new students, edit existing student details, or delete students.
    - Users can generate a PDF report of student details.

## Features

- **Landing Page:**
  - Displays hostel details.
  - Option to log in.

- **Authentication:**
  - Secure login using JWT (JSON Web Tokens).

- **Student Management:**
  - View student details.
  - Add new students.
  - Edit existing student details.
  - Delete students.
  - Generate PDF reports of student details.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux (for state management)
  - React Router (for routing)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for ORM)

- **Authentication:**
  - JSON Web Tokens (JWT)

- **Other:**
  - PDF generation using PDFkit


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
