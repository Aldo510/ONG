$(document).ready(function(){
  $('.carousel').carousel();
  $('.carousel').carousel('next', [3]);
  $('.carousel').shift(100); // Move next n times.
});
