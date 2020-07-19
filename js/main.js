"use strict";
$(document).ready(function () {
   var monthFull = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
   var date = new Date();
   var getOllComment = document.querySelectorAll(".comment__data");

   var time = new Array();

   time[0] = new Date(date.getTime() - (300 * 1000));

   for (var i = 1; i < getOllComment.length; i++) {
       time[i] = new Date(time[i - 1].getTime() - Math.floor(Math.random() * (14400 * 1000)));
   }

   for (var i = 0; i < getOllComment.length; i++) {
       $(".comment__data").eq(i).html(getNormal(time[i].getDate()) + "." + monthFull[time[i].getMonth()] + "." + time[i].getFullYear());
   }

   var dateYesterday = new Date(time[time.length - 1].getTime() - (86400 * 1000));
   $(".date__yesterday").html(getNormal(dateYesterday.getDate() + "." + monthFull[dateYesterday.getMonth()] + "." +
       dateYesterday.getFullYear()));

   var dateTomorrow = new Date(date.getTime() + (86400 * 1000));
   $(".date__tomorrow").html(getNormal(dateTomorrow.getDate() + "." + monthFull[dateTomorrow.getMonth()] + "." + dateTomorrow.getFullYear()));
});

function getNormal(value) {
   if (value < 10) {
       return "0" + value;
   }
   return value;
}