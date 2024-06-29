# FilePortal

FilePortal is a web-based file management system built with React and Django. 

## Features

• Authentication: Complete user authentication system. \
• File Upload: Allows users to upload files securely. \
• File Deletion: Provides functionality to delete files. \
• File Sharing: Implements sharing functionality for files.

## Technologies Used

• Frontend: React, Material-UI \
• Backend: Django, Django REST Framework \
• Database: SQLite (for development)

## Installation

Clone the repository:

```bash
git clone https://github.com/Rhythm1821/FilePortal
```

## Navigate to the Project Directory
```bash
cd FilePortal
```

## Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

## Open a new terminal

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Apply migrations to set up the database:

```bash
python3 manage.py migrate
```

Start the Django development server:

```bash
python3 manage.py runserver
```

Open your web browser and go to localhost:5173 to access FilePortal.
