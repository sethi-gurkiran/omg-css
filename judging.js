$(document).ready(function(){
  $('.dropdown-toggle').dropdown();

  $('#criteriadiv').text(functionalitycriteria);

  $('#teamdropdown li > a').click(function(){
    $('#text').text($(this).html());
  });

  $('#ratingdropdown li > a').click(function(){
    $('#ratingtext').text($(this).html());
  });

  $('#categorydropdown li > a').click(function(){
    $('#categorytext').text($(this).html());

    $("#criteriadiv").empty();

    switch($(this).html()) {
      case "Functionality":
      $('#criteriadiv').append(functionalitycriteria);
      break;
      case "UI/UX":
      $('#criteriadiv').append(uicriteria);
      break;

      case "Agile Methodology":
      $('#criteriadiv').append(agilecriteria);
      break;

      case "DevOps":
      $('#criteriadiv').append(devopscriteria);
      break;

      case "Testing":
      $('#criteriadiv').append(testcriteria);
      break;

      default:
      $('#criteriadiv').append(defaultcriteria);
    }

  });

});

var functionalitycriteria = "For Feedback Mechanism:" +
"Containerization – can the software easily plugged in to existing software?" +
"Robustness – is there both an analytics component and a feedback mechanism?"+
"Intrusiveness – does the software balance its main goal of asking for user feedback with users want for unobtrusive software?"+
"Minimization – does the software stay out of the way of site content and user interaction?";

var uicriteria = "<h1>UI/UX Criteria</h1>" +
"<h4>All submissions must meet the following criteria to ensure that they adhere to a common, usable standard.</h2>"+
"•	Actionable - the tasks and goals that the service is designed for are clear and easy to understand for users – e.g. do things look like their function? Is it obvious what to press and what not to?"+
"<br>•	Consistent - consistency of IA, visual, and interaction design throughout the service"+
"<br>•	Content - appropriate content for the service"+
"<br>•	Responsive - works well across platforms of Mobile and Laptop"+
"<br>•	Flow - does the user know where to start on the page? Is the path from start to finish clearly defined?"+
"<br>•	Information Architecture (IA) - good navigation; clear and consistently presented labels; precise and well defined iconography; orientation within the service is clear; links are obvious."+
"<br>•	Interface - the interface doesn’t get in the way of the content•	Purpose - clear what the service is supposed to let you achieve"
"<br>•	Visual design - aesthetically pleasing visual design";

var agilecriteria = "placeholder";

var devopscriteria = "placeholder";

var testcriteria = "placeholder";

var defaultcriteria = "placeholder";
