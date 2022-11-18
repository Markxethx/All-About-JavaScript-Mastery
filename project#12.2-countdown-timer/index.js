
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]; 
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
                        //  year month days hour mins secs
const futureDate = new Date(2022, 10, 21, 0, 0,0); //remember that our index start at 0, 0 = 1 as we count it
const year = futureDate.getFullYear() //get the target year you select (from above option)
let month = futureDate.getMonth() //get the month from above (it is four, now we go to the array of month in the top )
month = months[month] //here from the [04] index we see "may" strings
let weeks = futureDate.getDay() //there is no such thing as getWeeks, we only know the day
const date = futureDate.getDate()
weeks = weekdays[weeks]
console.log(weeks)
const hours = futureDate.getHours() // remember that we count it in 24 hours, there is no such thing as 1 am or pm, only 13 as represents for number 1. 24 hour cycle. 
const minutes =  futureDate.getMinutes()
const milli = futureDate.getMilliseconds()
//now we need to update our giveaway so that it become dynamic to our target day of expiration.
giveaway.textContent = `Giveaway Ends On ${weeks}, ${date} ${month} ${year} ${hours}:${milli}`;

const targetDay = futureDate.getTime() //get the target time we set above (futureDate)
function getRemainingTime() {
    const todayDay = new Date().getTime() //.getTime() is to get all the numbers that representing the date today, it is on milliseconds
    //the difference between the targetDay and todayDay is the remaining day
    const remainingTime = targetDay - todayDay;

    const oneDay = remainingTime / 24 / 60 /60 /1000;
    const oneHour = remainingTime / 60 / 60 /1000;
    const oneMins = remainingTime / 60 / 1000;
    const oneSecs = remainingTime / 1000;

    const ourDays = Math.floor(oneDay);
    const ourHours = Math.floor(oneHour % (24 * ourDays));
    const ourMins = Math.floor(oneMins % (60 * ourDays));
    const ourSecs = Math.floor(oneSecs % (60 * ourDays))

    console.log(oneDay, oneHour, oneMins, oneSecs)
    console.log(ourDays, ourHours, ourMins, ourSecs)
}

getRemainingTime()
