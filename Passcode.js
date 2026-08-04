// Passcode.js

// Correct birthday passcode

const correctPasscode = "080502";

// User input

let enteredCode = "";

// Get all six boxes

const boxes =

document.querySelectorAll(".box");

// Get number buttons

const keys =

document.querySelectorAll(".key");

// Get popup

const popup =

document.getElementById("popup");

// Number button click

keys.forEach(


function(key) {


    key.addEventListener(

        "click",

        function() {


            const number =

            key.dataset.number;


            // Only allow six inputs

            if (

                enteredCode.length < 6

            ) {


                enteredCode += number;


                updateBoxes();


                // Check code after six inputs

                if (

                    enteredCode.length === 6

                ) {


                    setTimeout(

                        checkPasscode,

                        400

                    );

                }

            }

        }

    );

}


);

// Put numbers inside boxes

function updateBoxes() {

boxes.forEach(

    function(box, index) {


        box.textContent =

        enteredCode[index] || "";


        box.classList.remove(

            "active"

        );


    }

);


// Highlight latest box

if (

    enteredCode.length > 0

) {


    boxes[

        enteredCode.length - 1

    ].classList.add(

        "active"

    );

}


}

// Check password

function checkPasscode() {


// Correct password

if (

    enteredCode === correctPasscode

) {


    // Go to present page

    window.location.href =

    "present.html";


}


// Wrong password

else {


    popup.classList.add(

        "show"

    );

}


}

// Delete last input

document

.getElementById(


"deleteButton"


)

.addEventListener(


"click",

function() {


    enteredCode =

    enteredCode.slice(

        0,

        -1

    );


    updateBoxes();

}


);

// Try again button

document

.getElementById(

"tryAgain"


)

.addEventListener(


"click",

function() {


    // Clear password

    enteredCode = "";


    updateBoxes();


    // Hide popup

    popup.classList.remove(

        "show"

    );

}


);
 