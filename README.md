# 🚗 Pico y Placa Predictor



## Execute
First you have to install all dependencies, you have to be located in the project directory:
### `npm install`

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
## Starting to predict

### How it's works?
The app predict whether you can or can't be on road at specific time of a day.
For that you have to fill all the inputs with the required info:
- **License plate**: Your car license (e.g.PBI-0000) 
- **Date**: Date you are looking for with format yyyy/mm/dd
- **Time**: Time you expect to drive with format hh:mm
<img width="457" alt="image" src="https://user-images.githubusercontent.com/62625853/179664344-04d6eb24-14e8-444a-92a4-0ad93a381b38.png">

## About the rule
The "Pico y Placa" rule applies to Quito, like so:
<br>
<img width="457" alt="image" src="https://user-images.githubusercontent.com/62625853/179664684-aa76ab69-408b-4edb-80e3-96a61a5af535.png">
<br>
It has an schedul from  7:00am - 9:30am / 16:00pm - 19:30, and it depends on your license plate last digit:
- **Monday**: 1,2
- **Tuesday**: 3,4
- **Wednesday**: 5,6
- **Thursday**: 7,8
- **Friday**: 9,0
- **Saturday,Sunday**: There is no restriction
