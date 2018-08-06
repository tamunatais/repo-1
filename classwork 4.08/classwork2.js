for (i = 0; i < 151; i++) {
    let newNumber = document.createElement('SPAN');
    newNumber.innerHTML = i;
    document.getElementById('numbers').appendChild(newNumber);
}


function shuffleFunc() {
    let numDiv = document.getElementById('numbers');
    let shuffle = document.getElementById('shuffle');

    for (let i = numDiv.children.length; i >= 0; i--) {
        numDiv.appendChild(numDiv.children[Math.random() * i | 0]);
    }
}

function ascendFunc() {
    document.getElementById('numbers').innerHTML = '';
    for (i = 0; i < 151; i++) {
        let newNumber = document.createElement('SPAN');
        newNumber.innerHTML = i;
         document.getElementById('numbers').appendChild(newNumber);
    }
}

function descendFunc() {
    document.getElementById('numbers').innerHTML = '';
    for (i = 150; i > -1; i--) {
        let newNumber = document.createElement('SPAN');
        newNumber.innerHTML = i;
         document.getElementById('numbers').appendChild(newNumber);
    }
}






