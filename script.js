function subtitle() {
  const span = document.querySelector("span");
  const words = ["The best programmer!", "I like javascript,typescript,c,...", "Brazil/SP (UTC/-3)"];
  
  let word_index = 0;

  let type_delay = 150;
  let transition_delay = 1000;
  let is_deleting = false;

  setInterval(() => {
    let word = words[word_index].split("");
    let text = span.innerHTML;
    let char = word[text.length];

    if (is_deleting) {
      span.innerHTML = text.slice(0, text.length - 1);
      if (text === "") {
        is_deleting = false;
        word_index = word_index === words.length - 1 ? 0 : word_index + 1;
      }
    } else {
      word.length !== text.length ? 
      (span.innerHTML += char !== " " ? char : "_"):
      (setTimeout(() => is_deleting = true, transition_delay));
    }

  }, type_delay);
}

function _3D() {
  const root = document.querySelector("#root");
  const instance = new p5(worker => {
    let model;
    let texture;
    let is_crazy;

    worker.setup = () => { 
      let canvas = worker.createCanvas(275, 340, worker.WEBGL).canvas;
      canvas.onclick = () => is_crazy = is_crazy ? false : true;
    }

    worker.preload = () => {
      model = worker.loadModel("./assets/model/felipinho.obj", true);
      texture = worker.loadImage("./assets/model/felipinho.png");
    }

    worker.draw = () => {
      worker.background(5, 5, 7);

      worker.rotateX(24.60);
      worker.rotateY(worker.millis() / 1000);
      worker.rotateZ(15.700);

      if (is_crazy) {
        worker.scale(0.9);
        worker.rotateY(worker.millis() / -200);
        worker.rotateZ(worker.millis() / 500)
      }

      worker.pointLight(112, 195, 252, 1, 1, 1);
      worker.directionalLight(255, 255, 255, 1.3, 0.8, -1);
      worker.directionalLight(255, 255, 255, -1.3, 0.8, -1);

      worker.normalMaterial();
      worker.texture(texture);
      worker.model(model);  
    }
  }, root);
}

_3D();
subtitle();
