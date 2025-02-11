window.addEventListener("load", function() {
    let preloader = document.getElementById("preloader");
    let body = document.body;

    setTimeout(() => {
        preloader.style.opacity = "0"; 
        setTimeout(() => {
            preloader.style.display = "none"; 
            body.style.opacity = "1";
        }, 500); 
    }, 2000);
});

const prompts = {
    romantic: [
        "My love, {name},<br><br> happy Valentine’s Day! Having you in my life makes everything better, and I wouldn’t trade that for anything. Here’s to us—today and always. ❤️",
        "Beloved {name},<br><br> no grand speeches, just a simple truth — I love you, and I always will. Happy Valentine’s Day!❤️",
        "Dear {name},<br><br> you make even the ordinary moments special. I’m grateful for you, for us, and for every day we get to spend together. Happy Valentine’s, my love. ❤️"
    ],
    funny: [
        "My sweet baby, {name},<br><br>our love is like the national grid — full of promises but always collapsing under the slightest pressure. Here’s to hoping one day, it’ll be stable or at least get backup. Happy Valentine’s!❤️",
        "Hey Pookie! {name},<br><br> happy Valentine’s! Our love is like a Lagos road — full of potholes and traffic. But don’t worry, just like Nigerian politicians, I’ll keep making empty promises to fix it. JK!!!💕",
        "Hey {name},<br><br> the love I have for you is as sweet as Nigerian jollof. Here’s to hoping it doesn't burn like the bottom of the pot! 🌹"
    ],
    poetic: [
        "Oh {name},<br><br> Like the morning sun, you brighten my days. Like the gentle breeze, you calm my soul. My love for you will never fade. 🌸",
        "Dearest {name},<br><br> You are the melody to my song, the rhythm to my heart. With every heartbeat, I whisper your name. ❤️",
        "My love {name},<br><br> Like a river flows to the sea, my heart flows only to you. Boundless, endless, eternal. 💙"
    ],
    jemima: [
        "{name}, you're looking for love instead of working. My friend, go and read jor! Orisirisi!!!"
    ]
};

const musicTracks = {
    romantic: "romantic_song.mp3",
    funny: "funny_song.mp3",
    poetic: "poetic_song.mp3",
    jemima: "jemima_song.mp3"
};

function generateLetter() {
    let name = document.getElementById("nameInput").value.trim();
    let style = document.getElementById("styleSelect").value;
    let letterDiv = document.getElementById("letter");

    let randomIndex = Math.floor(Math.random() * prompts[style].length);
    let letterText = prompts[style][randomIndex].replace("{name}", name);

    letterDiv.innerHTML = `<h2>You've got mail!'</h2> <br> <p>${letterText}</p>`;
    letterDiv.style.display = "block";
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("goBack").style.display = "block";
    document.getElementById("shareButton").style.display = "block";

    let audio = document.getElementById("backgroundMusic");
            audio.src = musicTracks[style];
            audio.play();
}

    function goBack() {
        let audio = document.getElementById("backgroundMusic");
        let fadeOutInterval = setInterval(() => {
            if (audio.volume > 0.05) {
                audio.volume -= 0.05;
            } else {
                clearInterval(fadeOutInterval);
                audio.pause();
                audio.volume = 1; 
            }
        }, 200);
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("letter").style.display = "none";
    document.getElementById("goBack").style.display = "none";
}
function shareLetter() {
    let letterContent = document.getElementById("letter").innerText;
    navigator.clipboard.writeText(letterContent).then(() => {
        alert("Letter copied! Paste and send it to your loved one.");
    });
}