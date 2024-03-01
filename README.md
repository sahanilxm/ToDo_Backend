# To-Do Notes Backend Web Application

This repository contains the backend code for a To-Do notes web application developed using Node.js and Express.

## Features

The application provides the following APIs:

- Create a new to-do note
- Get the existing to-do notes list with pagination
- Update an existing to-do note
- Upload an image (optional) to be stored with a note
- Delete an existing to-do note

## Technologies Used

- Node.js
- Express.js
- PostgreSQL (RDBMS)
- Joi (for request input validation)
- Multer (for handling file uploads)

## Setup Instructions

To run the application on your local machine, follow these steps:

1. Clone this repository to your local machine:
```
git clone https://github.com/sahanilxm/ToDo_Backend.git
```

2. Navigate to the project directory:
```
cd todo_backend
```

3. Install the dependencies:
```
npm install
```

4. Set up your PostgreSQL database.

5. Create a `.env` file in the root directory and update the  following information: 
```
PORT = 'portnumber'
USER = 'your_db_user'
PASS = 'your_db_password'
HOST = 'localhost'
DB = 'your_db_name'
```

6. Execute the SQL file models/note.schema.sql in your PostgreSQL database management tool (e.g., pgAdmin, psql) to create the necessary database and tables.

7. Start the server:
```
npm start
```

