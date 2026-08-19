


);

// Get the portal

const portal =

document.getElementById(


"portal"


);

// Get the flash

const flash =

document.getElementById(


"flash"


);

// Open portal function

function openPortal() {


// Add opening animation

document.body.classList.add(

    "opening"

);


// Show white flash

setTimeout(

    function() {


        flash.classList.add(

            "show"

        );

    },

    900

);


// Go to next page

setTimeout(

    function() {


        window.location.href =

        "final.html";


    },

    1800

);


}

// Click button

enterButton.addEventListener(


"click",

openPortal


);

// Click portal

portal.addEventListener(


"click",

openPortal
);
