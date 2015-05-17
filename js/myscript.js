// Enter width and height and click submit
// Create height variable
var rows = function() {
    return $("#height").val();
};
// Create width variable
var columns = function() {
    return $("#width").val();
};
// Pass into CreateBox function when submit button is clicked
$("#submit").on('click', function() {
    createBox(rows(), columns());
    $("#canvasSizeQ").hide();
    $container.css("display", "inline-block");
});

// Creates variable for indiviudal box
var box = "<div class='box'></div>";
// Creates variable for new row
var row = "<div class='row'></div>";
// Creates variable selecting container class
var $container = $(".container");

// Creates createBox function that takes in 2 parameters, rows and columns
function createBox(rows, columns) {
    for (var i = 1; i <= rows; i++) {
        for ( var j = 1; j <= columns; j++ ) {
            $container.append(box);
        }
        $container.append(row);
    }
};

// Allow user to change the color

// Color picker


// On mouseover, the background of the box changes to the color that is selected
$container.on("mouseenter", ".box", function() {
    $(this).css('background-color', "red");    
});

// Reset canvas
$("#resetbtn").click(function() {
    $(".box").css("background", "initial");
});

