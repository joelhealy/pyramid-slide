
/**
 * determineHeightAndBrickAndThenDrawPyramid
 *
 * Determines the current value that the user has selected in the 'How high?' slider
 * and the brick symbol selected and then draws a pyramid with that height.
 */
function determineHeightAndBrickAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndBrickAndThenDrawPyramid function!");

    // figure out the height the user selected
    var heightStr = document.getElementById("pyramidSlider").value;
    var height = parseInt(heightStr);

    // figure out the brick symbol the user selected
    var brickSelect = document.getElementById("brickSelect");
    var brick = brickSelect.value;

    // draw the pyramid with the given height and brick symbol
    drawPyramid(height, brick);

}

var brickSelect = document.getElementById("brickSelect");
brickSelect.addEventListener("change", determineHeightAndBrickAndThenDrawPyramid);

var pyramidSlider = document.getElementById("pyramidSlider");
pyramidSlider.addEventListener("input", determineHeightAndBrickAndThenDrawPyramid);

drawPyramid(8, '#');


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height composed
 * of brick symbols
 */
 function drawPyramid(height, brick) {

     // before drawing, clear the old content
     pyramid = document.getElementById("pyramid");
     // someone suggested that looping through the children is more
     // efficient than setting innerHTML = '' and that the latter method
     // would fail if one of the children was not HTML, e.g., SVG
     while (pyramid.lastChild) {
         pyramid.removeChild(pyramid.lastChild);
     }

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\u00A0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += brick;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
