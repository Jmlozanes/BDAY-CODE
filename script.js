let count = 1;

const counter = document.getElementById("count");

const progressBar =
    document.getElementById("progressBar");


const loading = setInterval(() => {

    count++;

    counter.textContent = count;

    progressBar.style.width =
        count * 10 + "%";


    // When the count reaches 10
    if (count >= 10) {

        clearInterval(loading);

        // Open the birthday page
        setTimeout(() => {

            window.location.href =
                "Passcode.html";

        }, 500);

    }

}, 1000);