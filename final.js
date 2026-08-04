/* final.js */

/* Kind words */

const kindWords = [

    
    "Beautiful ✨",
    
    "Cute 💕",
    
    "Adorable 🥰",
    
    "Lovely 💖",
    
    "Amazing 🌟",
    
    "Sweet 🍬",
    
    "Wonderful ✨",
    
    "Special 💗",
    
    "Gorgeous 🌸",
    
    "Pretty 💕",
    
    "Lovely Girl 💖",
    
    "Fantastic 🎉",
    
    "Charming ✨",
    
    "Kind Heart 💗",
    
    "Perfect 🥰",
    
    "Brilliant ⭐",
    
    "Lovely Smile 😊",
    
    "Angel 😇",
    
    "Precious 💎",
    
    "Beautiful Soul ✨",
    
    "Cute Baby 💕",
    
    "Magical 🌙",
    
    "Awesome 🎊",
    
    "Lovely Eyes 💖",
    
    "Shining Star ⭐",
    
    "Sweetest 💗",
    
    "Incredible ✨",
    
    "Unique 🌸",
    
    "Favorite Person 🥰",
    
    "Birthday Queen 👑"
    
    
    ];
    
    /* Word animations */
    
    const animations = [
    
    
    "jump",
    
    "spin",
    
    "fade",
    
    "move",
    
    "pop",
    
    "wiggle"
    
    
    ];
    
    /* Word container */
    
    const wordWorld =
    
    document.getElementById(
    
    
    "wordWorld"
    
    
    );
    
    /* Create words */
    
    kindWords.forEach(
    
    
    function(
    
        text,
    
        index
    
    ) {
    
    
        const word =
    
        document.createElement(
    
            "span"
    
        );
    
    
        word.className =
    
        "word " +
    
        animations[
    
            index %
    
            animations.length
    
        ];
    
    
        word.textContent =
    
        text;
    
    
        /* Random position */
    
        word.style.top =
    
        Math.random() *
    
        95 +
    
        "%";
    
    
        word.style.left =
    
        Math.random() *
    
        90 +
    
        "%";
    
    
        /* Random size */
    
        word.style.fontSize =
    
        14 +
    
        Math.random() *
    
        15 +
    
        "px";
    
    
        /* Animation speed */
    
        word.style.animationDuration =
    
        2 +
    
        Math.random() *
    
        6 +
    
        "s";
    
    
        /* Animation delay */
    
        word.style.animationDelay =
    
        Math.random() *
    
        4 +
    
        "s";
    
    
        wordWorld.appendChild(
    
            word
    
        );
    
    }
    
    
    );
    
    /* Create sparkle */
    
    function createSparkle() {
    
    
    const sparkle =
    
    document.createElement(
    
        "span"
    
    );
    
    
    sparkle.textContent =
    
    "✨";
    
    
    sparkle.style.position =
    
    "absolute";
    
    
    sparkle.style.left =
    
    Math.random() *
    
    100 +
    
    "%";
    
    
    sparkle.style.top =
    
    Math.random() *
    
    100 +
    
    "%";
    
    
    sparkle.style.fontSize =
    
    15 +
    
    Math.random() *
    
    25 +
    
    "px";
    
    
    sparkle.style.animation =
    
    "popWord 1.5s forwards";
    
    
    document
    
    .getElementById(
    
        "sparkleWorld"
    
    )
    
    .appendChild(
    
        sparkle
    
    );
    
    
    /* Remove sparkle */
    
    setTimeout(
    
        function() {
    
    
            sparkle.remove();
    
    
        },
    
        1500
    
    );
    
    
    }
    
    /* Create sparkles */
    
    setInterval(
    
    
    createSparkle,
    
    500
    
    
    );
    
    /* Music */
    
    const music =
    
    document.getElementById(
    
    
    "birthdayMusic"
    
    
    );
    
    const musicButton =
    
    document.getElementById(
    
    
    "musicButton"
    
    
    );
    
    /* Try autoplay */
    
    music.play()
    
    .then(

    
    function() {
    
    
        musicButton.textContent =
    
        "🔊 Music On";
    
    
    }
    
    
    )
    
    .catch(
    
    
    function() {
    
    
        musicButton.textContent =
    
        "🎵 Play Music";
    
    
    }
    
    
    );
    
    /* Play or pause music */
    
    musicButton.addEventListener(
    
    
    "click",
    
    function() {
    
    
        if (
    
            music.paused
    
        ) {
    
    
            music.play();
    
    
            musicButton.textContent =
    
            "🔊 Music On";
    
    
        }
    
    
        else {
    
    
            music.pause();
    
    
            musicButton.textContent =
    
            "🔇 Music Off";
    
    
        }
    
    }
    
    
    );
    