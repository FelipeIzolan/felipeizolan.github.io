var ROOT = document.getElementById("root");
var PATH = window.location.pathname;

if (PATH === "/") {
  __3D("felipinho");
  __subtitle();
}

if (PATH === "/setup.html") {
  __3D("notebook");
}

function __subtitle() {
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

function __3D(name) {
  new p5(worker => {
    let model;
    let texture;

    worker.setup = () => { 
      let canvas = worker.createCanvas(295, 340, worker.WEBGL).canvas;
      canvas.onclick = () => PATH === "/" ? window.location.href = "/setup.html" : window.location.href = "/";
    }

    worker.preload = () => {
      model = worker.loadModel(`./assets/model/${name}.obj`, true);
      texture = worker.loadImage(`./assets/model/${name}.png`);
    }

    worker.draw = () => {
      worker.background("black");

      worker.rotateX(24.60);
      worker.rotateY(worker.millis() / 250);
      worker.rotateZ(15.700);

      worker.pointLight(10, 125, 50, 1, 1, 1);
      worker.directionalLight(110, 150, 40, 1.3, 0.8, -1);
      worker.directionalLight(200, 255, 200, -1.3, 0.8, -1);
      
      if (PATH === "/setup.html") {
        worker.scale(0.930);
      }

      worker.normalMaterial();
      worker.texture(texture);
      worker.model(model);  
    }
  }, ROOT);
}
