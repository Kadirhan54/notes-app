# Simple Note-Taking Web App

This is a simple web application for taking, editing, and deleting notes. It is built using React.js for the frontend and Django Rest Framework for the backend.

## Features

-  Create new notes with a title and content.
-  Edit existing notes.
-  Delete notes.
-  View a list of all notes.

## Technologies Used

-  **Frontend**: React.js
-  **Backend**: Django Rest Framework
-  **Database**: SQLite
-  **State Management**: React Hooks
-  **Routing**: React Router DOM
-  **Styling**: CSS

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

-  Node.js and npm (Node Package Manager) installed on your machine.
-  Python and Django installed on your machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/notes-app.git

   ```

2. Navigate to the project directory:

   ```bash
    cd notes-app

   ```

3. Install frontend dependencies:

   ```bash
   cd frontend
   npm install

   ```

4. Install backend dependencies:

   ```bash
    cd ../backend
    pip install -r requirements.txt
   ```

## Usage

If you wanna development server

1. Start the Django development server:

   ```bash
    python manage.py runserver
   ```

2. This react project is integrated into Django. Normally, you can use the project without opening a new terminal (of course, if you made changes you have to use "npm run build" for every change). However, if you want to develop, you should start a React development server in a new terminal.In a separate terminal, start the React development server:

   ```bash
    cd ../frontend
   npm start
   ```

3. Open your web browser and access the application at http://localhost:3000.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and create your own branch.
2. Make your changes and test them thoroughly.
3. Ensure your code follows best practices and is well-documented.
4. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
