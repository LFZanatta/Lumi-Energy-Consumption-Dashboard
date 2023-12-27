# Lumi Energy Consumption Dashboard

## Overview

The Energy Consumption Dashboard is a web application built with Node.js, React, PostgreSQL. It provides a user-friendly interface to visualize and manage energy consumption data.

## Features

- **Data Retrieval:** Node.js backend retrieves energy consumption data from PostgreSQL database.
- **Frontend Interface:** React frontend provides an interactive interface for users to view and analyze energy consumption metrics.
- **File Download:** Users can download energy consumption reports generated from the available data.

## Technologies Used

- **Node.js:** Backend server to handle data retrieval and serve API endpoints.
- **React:** Frontend framework for building a dynamic and responsive user interface.
- **PostgreSQL:** Database for storing and managing energy consumption data.
- **Express:** Web application framework for Node.js, used to simplify backend development.
- **Webpack:** Module bundler for bundling frontend assets.
- **Babel:** JavaScript compiler to use the latest ECMAScript features.
- **Axios:** HTTP client for making API requests.

## Getting Started

Follow these steps to set up and run the Energy Consumption Dashboard locally:

- Navigate to the project directory and download dependencies:

### Backend dependencies
    cd backend
    npm install

### Frontend dependencies
    cd ../frontend
    npm install

## You can also change .env variables to an correct file_path, port and database configs

# Running the Application
### Start the backend server:
    cd backend
    node index.js

### Start the frontend development server:
    cd frontend
    npm start

Open your browser and navigate to http://localhost:3000 to access the Energy Consumption Dashboard.

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database with the required schema and data.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/energy-consumption-dashboard.git

# Features


- **PDF Data Extraction:**
    Utilizes PyPDF2 to extract data from energy invoices in PDF format.

- **Database Integration:** 
    Uses SQLAlchemy to interact with a PostgreSQL database for efficient data storage.

- **Structured Data:** 
    Organizes extracted data into a structured format, facilitating easy querying and reporting.

- **Modular Design:** 
    Follows a modular design pattern, allowing for easy extension and maintenance.
## Setup Instructions


**Dependencies Installation:** 

    pip install -r requirements.txt

**Database Configuration:**

Set up your PostgreSQL database and provide the connection details in the project configuration.

You can use the same configuration as the project

Open a terminal and run the following command to start a PostgreSQL container.

    docker run -d --name postgresLumi -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=lumi -p 5432:5432 postgres:latest

This command will create a new PostgreSQL container with the specified user, password, and database. The container will be accessible on port 5432.    

- **Run the Project:**

Execute the main script to start extracting PDF data and populating the database.

    python src/__main__.py
