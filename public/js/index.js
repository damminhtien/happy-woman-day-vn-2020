let countHeartOver = 0;
let audio = new Audio("../music/beat.mp3");

for (i = 0; i < 300; i++)
  document.body.innerHTML += '<div id="' + i + '" class="TwitterHeart"></div>';

window.addEventListener("mouseover", HeartAnimation);

function HeartAnimation(event) {
  if (event.target.tagName != "HTML") {
    try {
      audio.play();
      countHeartOver++;
      var targetHeart = document.getElementById(event.target.id);
      var heartStateCounter = 1;
      var timer = setInterval(function () {
        if (heartStateCounter != 29 && targetHeart)
          targetHeart.style.backgroundPosition =
            -100 * heartStateCounter++ + "px 0";
        else {
          clearInterval(timer);
        }
      }, 100);
    } catch (err) {
      // console.log(err)
    }

    let randomNumber = Math.floor(Math.random() * 10);
    document.getElementById("image" + randomNumber).style.opacity = 1;
    setTimeout(function () {
      document.getElementById("image" + randomNumber).style.opacity = 0;
    }, 5000);
  }
}
