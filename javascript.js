let barPiece, depthPiece;
let barRemaining = 500;
let minWidth = 25;
let maxWidth = 100;
let minDepth = 25;
let maxDepth = 200;
let pieceSize = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
let currentDepth = Math.floor(Math.random() * (maxDepth - minDepth) + minDepth);
let fullValue = 0;
let animationDelay = 0;
let animationDelayOffset = parseFloat((Math.random() * (4 - 2) + 2).toFixed(2));

barPiece = document.createElement("div");
barPiece.style.width = pieceSize + "px";
barPiece.setAttribute("data-width", pieceSize);
barPiece.setAttribute(
  "style",
  `--duration: ${animationDelayOffset}s; --delay: ${animationDelay}s; width: ${pieceSize}px;`
);
document.querySelector(".loader").appendChild(barPiece);
barRemaining -= pieceSize;
fullValue += pieceSize;
animationDelay += animationDelayOffset;

while (barRemaining > 0) {
  if (pieceSize >= barRemaining) {
    pieceSize = barRemaining;
  }

  depthPiece = document.createElement("div");
  depthPiece.setAttribute(
    "style",
    `--duration: ${animationDelayOffset}s; --delay: ${animationDelay}s; width: ${currentDepth}px; left: ${fullValue}px;`
  );
  depthPiece.setAttribute("data-width", "in");
  depthPiece.setAttribute("class", "depth");
  document.querySelector(".loader").appendChild(depthPiece);
  animationDelay += animationDelayOffset;

  pieceSize = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

  barPiece = document.createElement("div");
  barPiece.style.width = pieceSize + "px";
  barPiece.setAttribute(
    "style",
    `--duration: ${animationDelayOffset}s; --delay: ${animationDelay}s; width: ${pieceSize}px; transform: translateZ(-${currentDepth}px);`
  );
  barPiece.setAttribute("data-width", pieceSize);
  document.querySelector(".loader").appendChild(barPiece);
  barRemaining -= pieceSize;
  fullValue += pieceSize;
  pieceSize = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
  animationDelay += animationDelayOffset;

  depthPiece = document.createElement("div");
  depthPiece.setAttribute(
    "style",
    `--duration: ${animationDelayOffset}s; --delay: ${animationDelay}s; width: ${currentDepth}px; left: ${fullValue}px;`
  );
  depthPiece.setAttribute("data-width", "out");
  depthPiece.setAttribute("class", "depth");
  document.querySelector(".loader").appendChild(depthPiece);
  animationDelay += animationDelayOffset;
  currentDepth = Math.floor(Math.random() * (maxDepth - minDepth) + minDepth);

  barPiece = document.createElement("div");
  barPiece.setAttribute(
    "style",
    `--duration: ${animationDelayOffset}s; --delay: ${animationDelay}s; width: ${pieceSize}px;`
  );
  barPiece.setAttribute("data-width", pieceSize);
  document.querySelector(".loader").appendChild(barPiece);
  barRemaining -= pieceSize;
  fullValue += pieceSize;
  pieceSize = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
  animationDelay += animationDelayOffset;
}

document.querySelector("svg g").addEventListener("click", toggleTheTruth);
let truth = false;

function toggleTheTruth() {
  document.querySelector(".loader").classList.toggle("show");
  document.querySelector(".bg-loader").classList.toggle("truth");
  if (truth) {
    truth = false;
    document.querySelector(".container p").innerHTML =
      "Click to show the truth";
  } else {
    truth = true;
    document.querySelector(".container p").innerHTML =
      "Click to hide the truth";
  }
}

document
  .querySelector(".btn-reload")
  .addEventListener("click", reloadAnimation);

function reloadAnimation() {
  document.querySelector(".loader").classList.remove("run-animation");
  setTimeout(function () {
    document.querySelector(".loader").classList.add("run-animation");
  }, 500);
}
