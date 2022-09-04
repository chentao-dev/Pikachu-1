let str = `
.skin {
    position: relative;
    height: 100vh;
}

.skin>* {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.nose {
    transform: translate(0);
    margin-left: -12px;
    width: 0px;
    height: 0px;
    border: 12px solid blue;
    border-color: black transparent transparent;
    border-radius: 12px;
}

.eye {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #000;
    background: #2e2e2e;
}

.eye::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 50%;
    background: #fff;
    margin-left: 8px;
}

.eye.left {
    margin-left: -115px;
}

.eye.right {
    margin-left: 115px;
}

.mouth {
    margin-top: 120px;
    width: 180px;
    height: 200px;
    border-radius: 50px;
    overflow: hidden;
}

.mouth .up {
    position: absolute;
    top: -10px;
    left: 40px;
    width: 100px;
    height: 50px;
    border: 3px solid black;
    border-radius: 50%;
    border-color: transparent transparent black black;
    background: #ffe600;
}

.mouth .up.left {
    margin-left: -41px;
    transform: rotateZ(-15deg);
}

.mouth .up.right {
    margin-left: 41px;
    transform: rotateY(180deg)rotateZ(-15deg);
}

.mouth .down {
    position: absolute;
    top: 4px;
    left: 0;
    width: 180px;
    height: 200px;
    border-radius: 60px;
    overflow: hidden;
}

.mouth .yuan {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 160px;
    height: 650px;
    border: 3px solid #000;
    border-radius: 50%;
    background: #9b000a;
    z-index: -1;
    overflow: hidden;
}

.mouth .yuan::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #ff485f;
}

.face {
    margin-top: 135px;
    width: 84px;
    height: 84px;
    border: 3px solid black;
    border-radius: 50%;
    background: #ff0000;
}

.face.left {
    margin-left: -165px;
}

.face.right {
    margin-left: 165px;
}

.face img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left img {
    transform: rotateY(180deg);
    transform-origin: left top;
}

@keyframes shake {
    0% {}

    33% {
        transform: rotate(10deg);
    }

    66% {
        transform: rotate(-10deg);
    }

    100% {}
}

.nose:hover {
    animation: shake 0.2s infinite;
}
`;
let code = document.querySelector(".code");
let style = document.querySelector(".style");
let imgs = document.querySelectorAll("img");

let id;
let n = 1;
let time = 30;
function play(t) {
  clearInterval(id);
  if (typeof t === "number") {
    time = t;
  }
  id = setInterval(() => {
    if (n >= str.length) {
      imgs.forEach((v) => {
        v.hidden = "";
      });
      clearInterval(id);
    }
    code.textContent = str.substring(0, n + 1);
    style.innerHTML = str.substring(0, n + 1);
    code.scrollTo(0, 99999);
    n++;
    console.log(n); //查看循环是否停止
  }, time);
}
play();

// 按钮
btnPause.onclick = () => clearInterval(id);
btnPlay.onclick = () => play();
btnSlow.onclick = () => play(100);
btnNormal.onclick = () => play(30);
btnFast.onclick = () => play(0);
