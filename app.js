"use strict";
const boxes = document.querySelector(".boxes");

const addImg = async (btn) => {
  try {
    const imgURL = await getImg();
    const img = document.createElement("img");
    img.src = imgURL;
    btn.parentNode.appendChild(img);
    btn.remove();
  } catch (err) {
    btn.innerText = err.message;
  }
};

function getImg() {
  return new Promise((res, rej) => {
    const imgURL = `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/5000/2500`;
    const image = new Image();
    image.src = imgURL;
    image.onload = () => res(imgURL);
    image.onerror = () => rej(new Error("not found img"));
  });
}

function init() {
  const fragment = document.createDocumentFragment();

  for (let idx = 0; idx < 12; idx++) {
    const div = document.createElement("div");
    div.classList.add("box");

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `Add IMG-${idx + 1}`;

    btn.addEventListener("click", () => {
      btn.innerText = idx + 1;
      const interval = setInterval(() => {
        btn.innerText = +btn.innerText - 1;
        if (+btn.innerText === 0) {
          clearInterval(interval);
          addImg(btn);
        }
      }, 1000);
    });

    div.appendChild(btn);

    fragment.appendChild(div);
  }

  boxes.appendChild(fragment); //
}

init();
