// Creating column for average scores, below we get scores in it
let averageCol = document.createElement("div"); 
let averageHead = document.createElement("div"); 
let textnode2 = document.createTextNode("Average");
averageCol.setAttribute("id", "average");
averageHead.setAttribute("class", "average1");
averageHead.appendChild(textnode2);
averageCol.appendChild(averageHead);
document.getElementById("tableContainer").appendChild(averageCol); 


// Adding new day
function addNew() {
    let dayCol = document.createElement("div"); // new day column div
    dayCol.setAttribute("class", "list-column");
    let dateDiv = document.createElement("div"); // divs for date
    dateDiv.setAttribute("class", "dateDivv");
    let textnode1 = document.createTextNode("date");
    dateDiv.appendChild(textnode1);
    dayCol.appendChild(dateDiv);
    for (i = 0; i < 14; i++) {    // creating divs for each score
        let scoreDiv = document.createElement("div");
        scoreDiv.setAttribute("class", "score student" + i);
        let textnode = document.createTextNode("0");
        scoreDiv.appendChild(textnode);
        scoreDiv.style.backgroundColor = "red";
        scoreDiv.style.textAlign = "center";
        scoreDiv.onclick = function () {    // for putting students' scores
            let scores = textnode.textContent = Number(prompt("Enter student's score"));
            if ((scores > 0) && (scores <= 5)) {
                scoreDiv.style.backgroundColor = "green";
                scoreDiv.setAttribute("class", "score green student" + i);
            }
            else if (scores > 5) {
                textnode.textContent = 5;
                scoreDiv.style.backgroundColor = "green";
                scoreDiv.setAttribute("class", "score green student" + i);
            }
            else {
                textnode.textContent = 0;
                scoreDiv.style.backgroundColor = "red";
            }
        };
        dayCol.appendChild(scoreDiv); // append score divs to day column
    }
    document.getElementById("tableContainer").appendChild(dayCol); // append column to mother div
}

// Remove last day
function removeDay() {
    let delCol = document.querySelector(".list-column");
    delCol.parentNode.removeChild(delCol.parentNode.lastElementChild);
}

//append score divs, but I wasn't able to get average scores of each student
for (i = 0; i < 14; i++) {
    let average = document.createElement("div"); 
    let textnode3 = document.createTextNode("0");
    average.setAttribute("class", "average");
    average.setAttribute("id", "average" + i);
    average.appendChild(textnode3);
    averageCol.appendChild(average);
}



// Counting total days, appears only after updating page
function totaldays() {
    let totaldays = document.getElementById("totalDays");
    let days = document.getElementsByClassName("dateDivv");
    totaldays.innerHTML = "Total Days  " + days.length + "";
}

// Counting total students, appears only after updating page
function totalStudents() {
    let totalStudents = document.getElementById("totalStudents");
    let students = document.getElementsByClassName("list");
    totalStudents.innerHTML = "Total Students   " + students.length + "";
}

// Counting missed lessons, appears only after updating page
function missedLessons() {
    let missLess = document.getElementById("missedLessons");
    let notMissed = document.getElementsByClassName("green");
    let totalLessons = document.getElementsByClassName("score");
    let missed = totalLessons.length - notMissed.length;
    missLess.innerHTML = "Missed Lessons   " + missed + "";
}


// Function Update;
function update() {
    totaldays();
    totalStudents();
    missedLessons();
}
