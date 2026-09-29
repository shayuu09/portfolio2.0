// bruh
const $allButton = document.querySelector("#all");
const $graphicButton = document.querySelector("#graphic");
const $fashionButton = document.querySelector("#fashion");

// event listeners
$("#all").onClick(function() {
  if ($allButton.classList.contains("unselected")) {
    //add/remove selected
    $("#all").classList.add("selected");
    $("#graphic").classList.remove("selected");
    $("#fashion").classList.remove("selected");
    
    //show elements
    $(".graphic").css({
      "display": "inline"
    });
    
    //show elements
    $(".fashion").css({
      "display": "inline"
    });
    
    //remove unselected
    $("#all").classList.remove("unselected");
  }
});

$("#graphic").onClick(function() {
  if ($graphicButton.classList.contains("unselected")) {
    $("#graphic").classList.add("selected");
    $("#all").classList.remove("selected");
    $("#fashion").classList.remove("selected");
    
    //show elements
    $(".graphic").css({
      "display": "inline"
    });
    
    //hide elements
    $(".fashion").css({
      "display": "none"
    });
    
    //remove unselected
    $("#graphic").classList.remove("unselected");
  }
});

$("#fashion").onClick(function() {
  if ($fashionButton.classList.contains("unselected")) {
    $("#fashion").classList.add("selected");
    $("#all").classList.remove("selected");
    $("#graphic").classList.remove("selected");
    
    //show elements
    $(".graphic").css({
      "display": "none"
    });
    
    //hide elements
    $(".fashion").css({
      "display": "inline"
    });
    
    //remove unselected
    $("#fashion").classList.remove("unselected");
  }
});