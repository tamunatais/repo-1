//students names listed
//grade points assigned


//average of points
var data = ["1,2,3","4,5,6","7,8,9"];
for (i=0; i < data.length; i++){
var td = document.createElement('td'); // create a td node
td.innerHTML = data[i]; // fill the td now with a piece of the data array
document.getElementById("table-row").appendChild(td); // append the td element to the row
}




//Statistics of students results

//total number of days

//total number of missed days by all students

//average grade

//total number of students




//ADD new day 

function appendColumn() {
    var tbl = document.getElementById('my-table'),
    i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}

//REMOve last added day 
function myFunction() {
    var row = document.getElementsByTagName("TR");
    row.deleteCell(-1);

//UPDATE page which also updates statistic information



//square edit operation, user clicks in the cell and 
//appears javascript Prompt window
<button onclick="myFunction()">Click me</button>

<p id="demo"></p>
