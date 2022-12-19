# Project Title : OnTrack - Client-Side

OnTack is a personal finance application that helps users manage their daily income and expenses and also helps them create budgets.
This is my capstone project in my fullstack development bootcamp at BrainStation.

## Authors

-   [@olanrewaju-ak](https://github.com/Olanrewaju-Ak)

## Tech Stack

**Client:** React, Sass

**Server:** Node, Express, MySql, Knex.js

## Features

-   Responsive acreoss mobile , tablet and desktop screens

## Run Locally

Clone the project

```bash
  git clone https://github.com/Olanrewaju-Ak/olanrewaju-akinola-capstone-ontrack
```

## Installation/dependencies

In the project directory, you can run the code

`npm i axios react-router-dom sass chart.js react-chartjs-2`

to install the nodemodules, scripts and dependencies

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BACKEND_URL`

`REACT_APP_PORT`

## Installation/dependencies

To start the project run
`npm start`

### API Reference

#### Get all items

| Method   | URL                | Description                   |
| -------- | ------------------ | ----------------------------- |
| `GET`    | `/transactions/`   | Retrieve all transactions.    |
| `POST`   | `/transactions/`   | Create a new transaction.     |
| `GET`    | `/transactions/id` | Retrieve transaction with id. |
| `DELETE` | `/transactions/id` | Delete transaction with id.   |
| `GET`    | `/budgets/`        | Retrieve all budgets          |
| `POST`   | `/budgets/`        | Create a new budgets.         |
| `GET`    | `/budgets/id`      | Retrieve budgets with id.     |
| `DELETE` | `/budgets/id`      | Delete budgets with id.       |
