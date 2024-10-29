const loveme = document.querySelector(".post-image");
const times = document.querySelector("#times");
const heart = document.getElementById("heart");

let clicktime = 0;
let timesclicked = 0;

loveme.addEventListener("click", (e) => {
    if (clicktime === 0) {
        clicktime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clicktime) < 800) {
            createheart(e);
            clicktime = 0;
        } else {
            clicktime = new Date().getTime();
        }
    }
});

function createheart(e) {
    const heartElement = document.createElement("i");
    heartElement.classList.add("fas", "fa-heart");

    const x = e.clientX;
    const y = e.clientY;

    const box = e.target.getBoundingClientRect();

    const xinside = x - box.left;
    const yinside = y - box.top;

    heartElement.style.top = `${yinside}px`;
    heartElement.style.left = `${xinside}px`;
    heartElement.style.color = "red";


    loveme.appendChild(heartElement);

    times.innerHTML = ++timesclicked;

    setTimeout(() => heartElement.remove(), 1000);

    if (timesclicked > 0) {
        heart.classList.add("red");
        heart.style.color = "red";
    }
}
