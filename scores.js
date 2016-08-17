

function loadScores() {

  $("#scoresdiv").load("scores.csv");


}

$(document).ready(function() {
  loadScores();

});
