const my = {};
window.my = my;
function createModal(options) {
  const DEFAULT_WIDTH = "600PX";
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class = "scroll-container>"
  <div class="modal-overlay" data-close="true">
    <div class="modal-window" style='width: ${options.width || DEFAULT_WIDTH}'>
      <div class="modal-header">
        <span class="modal-title">${options.title || "Всплывающее окно"}</span>
        ${
          options.closable
            ? `<span class="modal-close" data-close="true" >&times;</span>`
            : ""
        }
      </div>
      <div class="modal-body">
        ${options.content || ""}
      </div>
      <div class="modal-footer">
        <button id="myButton">OK</button>
        <button id="close" data-close="true" >Cancel</button>
      </div>
      </div>
    </div>
  </div>
`
  );
  document.body.appendChild(modal);
  return modal;
}
my.modal = function (options) {
  const ANIMATION_SPEED = 200;
  let closing = false;

  const modal = {
    open() {
      const count = countBottle();
      for (i = 0; i < count; i++) {
        createBottle();
      }
      !closing && newModal.classList.add("open");
    },
    close() {
      document.querySelector(".modal-body").innerHTML = "";
      closing = true;
      newModal.classList.remove("open");
      newModal.classList.add("hide");
      setTimeout(() => {
        newModal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    },
  };
  const newModal = createModal(options);
  newModal.addEventListener("click", (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  });
  return modal;
};

const mod = my.modal({
  title: "Пивасик!!!",
  closable: true,
  content: ` `,
  width: "400px",
});

const btnCount = document.getElementById("count");
const imageBottle = document.querySelector("bottle");
btnCount.addEventListener("click", function (event) {
  mod.open();
});

function countBottle() {
  const inputEasy = document.getElementById("easy-task").value;
  const inputMedium = document.getElementById("medium-task").value;
  const inputHard = document.getElementById("hard-task").value;

  if (Number.isNaN(inputEasy) === NaN || Number(inputEasy) === undefined) {
    inputEasy = 0;
  } else if (
    Number.isNaN(inputMedium) === NaN ||
    Number(inputMedium) === undefined
  ) {
    inputMedium = 0;
  } else if (
    Number.isNaN(inputHard) === NaN ||
    Number(inputHard) === undefined
  ) {
    inputHard = 0;
  }
  const easy = Math.floor(Number(inputEasy));
  const medium = Math.floor(Number(inputMedium / 2));
  const hard = Math.floor(Number(inputHard / 3));
  const bottles = easy + medium + hard;

  return bottles;
}

function createBottle() {
  const bottle = document.createElement("div");
  bottle.classList.add("bottle");
  bottle.insertAdjacentHTML("afterbegin", `<div class="bottle"></div>`);
  document.querySelector(".modal-body").appendChild(bottle);
  return bottle;
}
