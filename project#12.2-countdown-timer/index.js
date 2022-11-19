
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

const hours = futureDate.getHours() // remember that we count it in 24 hours, there is no such thing as 1 am or pm, only 13 as represents for number 1. 24 hour cycle. 
const minutes =  futureDate.getMinutes()
const milli = futureDate.getMilliseconds()
//now we need to update our giveaway so that it become dynamic to our target day of expiration.
giveaway.textContent = `Giveaway Ends On ${weeks}, ${date} ${month} ${year} ${hours}:${minutes} pm`;

const targetDay = futureDate.getTime() //get the target time we set above (futureDate)
function getRemainingTime() {
    const todayDay = new Date().getTime() //.getTime() is to get all the numbers that representing the date today, it is on milliseconds
    //the difference between the targetDay and todayDay is the remaining day
    const remainingTime = (targetDay - todayDay);

    //we only need the root element to find the remaining hour, minutes and seconds
    //days, hour, minute are converted to seconds (js don't know about days, hour, and minutes we have to define it, all js understand is numbers of millisecond (this is why we divide by 1000))
    const oneDay = Math.floor(remainingTime / 24/ 60/ 60/ 1000); //in one day we have 24 hours * 60 mins * 60 seconds and divide it by 1000 to get the seconds in a day
    const oneHour = Math.floor(remainingTime / 60/ 60/1000); // oneday x 24
    const oneMins = Math.floor(remainingTime / 60/ 1000); //oneHour x 60
    const oneSecs = Math.floor(remainingTime / 1000); //oneMins x 60

    const ourDays = oneDay;
    // const ourHours = oneHour % (24 * ourDays));
    const ourHours = oneHour - (oneDay * 24);
    const ourMins = oneMins - ( oneHour * 60);
    const ourSecs = oneSecs - (oneMins * 60);

    let values = [ourDays, ourHours, ourMins,ourSecs]
    console.log(values)
    function format(item) {
      if (item < 10) {
        return item = `0${item}`;
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });

    countdown()
    if (remainingTime < 0) {
      giveaway.textContent = `Uwu it ends`;
      deadline.innerHTML = `Sorry the deadline for giveaway has arrive`
      clearInterval(countdown)
    }
     
}
const countdown = ()  =>  setTimeout(getRemainingTime, 1000)
getRemainingTime()
