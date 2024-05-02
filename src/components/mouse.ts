document.onmousemove = (e) => {
  var boxw = document.body.getBoundingClientRect().width;
  var boxh = document.body.getBoundingClientRect().height;
  var x = e.clientX - boxw / 2;
  var y = e.clientY - boxh / 2;
  var rad = Math.atan(y / x) + Math.PI * (x < 0 ? 1.5 : 0.5);
  var deg = (rad * 180) / Math.PI;
  document.body.style.backgroundImage =
    "linear-gradient(" +
    rad +
    "rad, hsl(" +
    deg +
    ",90%,30%), hsl(" +
    (deg + 120) +
    ",90%,30%))";
};

// let checkbox = document.querySelector('input[name=theme]');

// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// })
const gridElem: Element | any = document.querySelector("#grid");
const gridElemBg: Element | any = document.querySelector("#grid-bg");
const gridElemContent: Element | any = document.querySelector("#grid-content");
const gridFontSize: Element | any = parseInt(
  getComputedStyle(gridElem).fontSize,
  10
);

var colCount = 0;
var rowCount = 0;
var pixelCount = 0;
var pixels: any[] = [];

const charRangeStart = 33;
const charRangeEnd = 126;
const charRangeMax = charRangeEnd - charRangeStart;

function updateSize() {
  gridElemContent.innerHTML = "";
  gridElemBg.style.backgroundSize = "";
  gridElemBg.style.backgroundImage = "";

  colCount = Math.floor(gridElem.clientWidth / gridFontSize);
  rowCount = Math.floor(gridElem.clientHeight / gridFontSize);
  pixelCount = colCount * rowCount;

  pixels = Array(pixelCount).fill(String.fromCharCode(charRangeStart));

  let bgSize = [];
  for (let row = 0; row < rowCount; row++) {
    bgSize.push(`${colCount * gridFontSize}px ${row * gridFontSize}px`);
  }
  gridElemBg.style.backgroundSize = bgSize.join(",");

  render();
}

function generate(ticks: number) {
  let cx = Math.floor(colCount / 2);
  let cy = Math.floor(rowCount / 2);

  for (let i = 0; i < pixelCount; i++) {
    let x = i % colCount;
    let y = Math.floor(i / colCount);

    let t = 100 + ticks * 0.001;
    let v = (Math.cos((x - cx) / 8.0) + Math.sin((y - cy) / 8.0) + t) * 16;

    let charVal = v % charRangeMax;

    pixels[i] = String.fromCharCode(charRangeStart + (charVal % charRangeMax));
  }
}

function generateColors() {
  let bgImage = [];
  let bgImageParts = [];
  let percent = 0;

  const percentInterval = 100 / colCount;

  for (let i = 0; i < pixelCount; i++) {
    let pixel = pixels[i];

    let hslAngle =
      ((pixel.charCodeAt(0) - charRangeStart) / charRangeMax) * 360;
    let pixelColor = `hsl(${hslAngle}, 70%, 50%)`;

    let bgImagePart = `${pixelColor} ${percent}%`;
    percent += percentInterval;
    bgImagePart += `, ${pixelColor} ${percent}%`;

    bgImageParts.push(bgImagePart);

    if ((i + 1) % colCount === 0) {
      bgImage.push(`linear-gradient(to right, ${bgImageParts.join(", ")})`);

      percent = 0;
      bgImageParts = [];
    }
  }

  gridElemBg.style.backgroundImage = bgImage.join(",");
}

function render(ticks = 0) {
  generate(ticks);
  generateColors();

  let content = "";

  //content += colCount + " x " + rowCount + " = " + pixelCount + "\n";

  content = pixels.reduce((prev, curr, idx) => {
    return prev + curr + ((idx + 1) % colCount === 0 ? "\n" : "");
  });

  gridElemContent.innerHTML = content;

  requestAnimationFrame(render);
}

window.addEventListener("resize", updateSize);

updateSize();
