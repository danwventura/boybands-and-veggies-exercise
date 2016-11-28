
// Loop through the two arrays provided (bands and vegetables) and output each element
// in the arrays into their corresponding HTML <div> element. Ensure that each item is in
// a block element (e.g. li, div, p. etc...)

//BUILDING ARRAYS TO ITERATE OVER/PRINT OUT
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// THE NUMBER OF TIMES TO RUN THE FOR LOOP
var loopCount = 5;

//GRABBING DIV ELEMENTS BY ID TO ALTER INNERHTML IN OUR FOR LOOPS
var bandElement = document.getElementById("boy_bands");
var veggieElement = document.getElementById("vegetables");

//FOR LOOP TO PRINT OUT EACH BAND NAME INTO THE DIV FOR BANDS
for (var loopTracker = 0; loopTracker < loopCount; loopTracker++) {
bandElement.innerHTML += ("<p>" + bands[loopTracker] + "</p>");
}

//FOR LOOP TO PRINT OUT EACH BAND NAME INTO THE DIV FOR VEGETABLES
for (var loopCounter = 0; loopCounter < loopCount; loopCounter++){
veggieElement.innerHTML += ("<p>" + vegetables[loopCounter] + "</p>");
}
