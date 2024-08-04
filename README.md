# A bare-bones lottery app.

This project contains a simulation of what a lottery app would look like. The app is developed using React.js and css. These were choosen because of my familarity with them.

*** Note it is necessary to be in the project folder for these command to execute and affect the application ***

## Command run the unit and integration test related to the app
```bash
npm run test
```

## If you have node downloaded, you can run the application in development environment using the following commands --
1. Install Dependencies
 ```bash
 npm install
```
2. Run the application
```bash
   npm start
   ```

## Alternatively, if you have docker in your system, you can run the application using the following commands --
1. Create image
```bash
docker build -t app_name:latest .
```
2. Run the image
```bash
docker run -p 3000:3000 app_name
```



