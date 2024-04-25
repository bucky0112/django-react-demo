# Django-React-Demo

This is a sample project showcasing the integration of Django and React in a separated frontend and backend architecture.

## Project Structure

The project directory structure is as follows:

```
DJANO-REACT-DEMO
├── backend/
│   ├── core/
│   ├── posts/
│   └── manage.py
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── .gitignore
├── poetry.lock
└── pyproject.toml
```

## Installation and Running

1. Clone this repository:

2. Install frontend dependencies:

```
cd frontend
npm install
```

3. Install backend dependencies:

```
cd ../backend
poetry install
```

4. In the backend directory, run database migrations:

```
python manage.py migrate
```

5. Start the backend development server:

```
python manage.py runserver
```

6. Open another terminal, and in the frontend directory, start the frontend development server:

```
cd frontend
npm run dev
```

7. Open `http://localhost:5173` in your browser to view the application.

The backend API can be accessed at `http://localhost:8000`.
