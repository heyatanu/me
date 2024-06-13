function findDiff(startdateStr,enddateStr){

    var targetDate = new Date(startdateStr);
    var starttargetDate = new Date(enddateStr);
    var difference = Math.abs(targetDate - starttargetDate);
   
    var daysDifference = (difference / (1000 * 60 * 60 * 24 * 365));
     return (Math.round(daysDifference * 100) / 100).toFixed(1) ;
}
var today = new Date();
document.getElementById("date_difference_details").innerHTML =findDiff("June 30, 2022",today)
document.getElementById("date_difference_small").innerHTML =findDiff("June 30, 2022",today)
