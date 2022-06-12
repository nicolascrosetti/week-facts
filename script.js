//Functions
const getWeekNumber = () => {
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil(days / 7);
    return weekNumber;
}

const d = new Date();
const dayNumber = (d.getDay()) + 1;

//Get DOM Elements
const thisWeek = document.querySelector("#this-week");
const weeksUntilEnd = document.querySelector("#weeks-until-end");
const weeksUntilTrip = document.querySelector('#weeks-until-trip');
const dayNumberOfWeek = document.querySelector('#day-number');
const dayPercentage = document.querySelector('#day-percentage');
const thisWeekPercentage = document.querySelector('#this-week-percentage');
const weeksEndPercentage = document.querySelector('#weeks-end-percentage');

const weekNumber = getWeekNumber();

thisWeek.textContent = weekNumber;
thisWeekPercentage.textContent = ((weekNumber * 100) / 52).toFixed(2) + "%";
weeksUntilEnd.textContent = 52 - weekNumber;
weeksEndPercentage.textContent = (((52 - weekNumber) * 100) / 52).toFixed(2) + "%";
weeksUntilTrip.textContent = 42 - weekNumber;
dayNumberOfWeek.textContent = dayNumber;
dayPercentage.textContent = ((dayNumber * 100) / 7).toFixed(2) + "%";