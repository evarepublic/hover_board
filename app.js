const board = document.querySelector("#board"),
  colors = [
    "#ADFF2F",
    "#00FFFF",
    "#FF1493",
    "#FFFF00",
    "#6A5ACD",
    "#7FFFD4",
    "#FF4500",
    "#FFE4E1",
  ],
  SQUARES_NUMBER = 1480;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function setColor(e) {
  const elem = e.target;
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  const elem = e.target;
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
