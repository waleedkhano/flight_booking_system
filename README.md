# Welcome to Scalable Flight Booking System — microservices architecture

## Project Setup

    - Clone the project on your local
    - Execute 'npm install' on the same path as of your root directory of the downloaded project
    - create '.env' file in the root directory abd add the following environment variable
        - PORT=3000
    - inside the 'src/config' folder create a new file 'config.json' and then add the following json

    ```

    {
    "development": {
        "username": <YOUR_DB_LOGIN>,
        "password": <YOUR_DB_PASSWORD,
        "database": "flight-booking-plateform",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
    }

    ```

    - Once you've added your db config as listed above, go to the src folder from your terminal an execute 'npx sequelize db:create'
