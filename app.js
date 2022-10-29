"use strict";

const btns = document.querySelectorAll("button");

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

function startRender(e) {
  const btn = e.target;

  btn.innerText = "Loading...";

  addImg(btn);
}

btns.forEach((btn) => btn.addEventListener("click", startRender));
