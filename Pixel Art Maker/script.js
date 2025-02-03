// Pixel Art Maker 
function makeGrid() { 
  // Creating variables
	let rows = $("#inputHeight").val();
  let cols = $("#inputWidth").val();
  let table = $("#pixelCanvas");
  // Limit max rows size to 40 and alert user if rows are more than 40
  if(rows>40) {
    rows=40;
    alert("rows should not be more than 40");
    rows = $("#inputHeight").val(40);
  }
  // Alert user if rows is less than 1 and change rows value to 1
  if(rows<1) {
    alert("rows should be at least 1");
    rows = $("#inputHeight").val(1);
  } 
  // Alert user if cols are less than 1 and change cols value to 1
  if(cols<1) {
    alert("cols should be at least 1");
    cols = $("#inputWidth").val(1);
  } 
  // Limit max cols size to 40 and alert user if cols is more than 40
  if(cols>40) { 
    cols=40;
	  alert("cols should not be more than 40"); 
    cols = $("#inputWidth").val(40);
  }
  
	while($(table.children()).last().length == true) {
	table.children().remove();
   }
  
 	// Creating table
 	for (let i = 0; i < rows; i++){
			table.append("<tr></tr>");
		for (let j = 0; j < cols; j++) {
			table.children().last().append("<td></td>");
		}
	}
  // Choose color
 	table.on("click", "td", function() {
		let color = $("input[type='color']").val();
			$(this).attr("bgcolor", color);
	})
  
  // Double click to clear single pixel
 	table.on("dblclick", "td", function(){
		$(this).attr("bgcolor", "white");
	});
  
};

 // Submit event 
	$("input[type='submit']").click(function(event) {
	  event.preventDefault();
	  makeGrid();
	});
 // Clearing drawing grid
// clear.on("click", function(event){
	// event.preventDefault();
	//$("td").css("backgroundColor", "white");
// });
