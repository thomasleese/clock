(function() {
  'use strict';

  const $hour = document.querySelector('.hour');
  const $minute = document.querySelector('.minute');
  const $second = document.querySelector('.second');
  const $day = document.querySelector('.day');
  const $month = document.querySelector('.month');

  const padZero = function(v) {
    if (v < 10) {
      return "0" + v;
    } else {
      return v;
    }
  };

  const updateClock = function() {
    var date = new Date();

    $hour.textContent = padZero(date.getHours());
    $minute.textContent = padZero(date.getMinutes());
    $second.textContent = padZero(date.getSeconds());
    $day.textContent = padZero(date.getDate());
    $month.textContent = padZero(date.getMonth() + 1);
  };

  updateClock();
  setInterval(updateClock, 500);
}());
