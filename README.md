# CampusConnect

CampusConnect is a full-stack Placement & Opportunity Management Platform developed for colleges to streamline internships, jobs, scholarships, student applications, and placement activities.

## Features

### Student Module

* Secure Authentication (JWT)
* Browse Opportunities
* Apply for Opportunities
* Save Opportunities
* Application Tracker
* Student Profile Management
* Experience Sharing
* Email Notifications
* Password Change Support

### Admin Module

* Post Opportunities
* Manage Opportunities
* Edit/Delete Opportunities
* View Application Results
* Search & Filter Results
* Download Results as CSV


## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios


### Backend

* Django
* Django REST Framework
* PostgreSQL
* JWT Authentication
* Celery
* Redis

## Key Features

* Role-Based Access Control
* Opportunity Management
* Application Tracking
* Student Experience Sharing
* Email Notifications for Eligible Students
* CSV Export Functionality
* Modern Responsive UI
* Environment Variable Configuration

## Project Structure

```text
CampusConnect
│
├── backend
│   ├── apps
│   ├── config
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
SECRET_KEY=your_secret_key
DEBUG=True

DB_NAME=career_connect
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
```

## Future Enhancements

* Resume Upload
* Student Resume Screening
* Company Dashboard
* Placement Statistics Charts
* Interview Scheduling
* Mobile Application

## Author

**Kaveri Savarapu**

Campus Placement & Opportunity Management System developed as a full-stack project using React, Django, PostgreSQL, Celery, and Redis.
