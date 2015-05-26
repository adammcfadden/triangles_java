var triangulate = function(side1, side2, side3) {
  if ((side1 + side2 <= side3) || (side3 + side2 <= side1) || (side1 + side3 <= side2)) {
    return false;
  } else if ((side1 === side2) && (side1 === side3)) {
    return "equilateral";
  } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

$(document).ready(function() {
  $("form#triangle-calculator").submit(function(event) {
    $(".type").empty();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangulate(side1, side2, side3);

    if (!result) {
      $(".type").text("not a triangle");
    } else {
      $(".type").text(result);
    }

    $(".results").show();
    event.preventDefault();
  });
});
