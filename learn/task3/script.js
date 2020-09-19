const my = {};
window.my = my;
function createModal(options) {
  const DEFAULT_WIDTH = "600PX";
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
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
  title: "Булытки пиваса!!!",
  closable: true,
  content: `Количество бутылок `,
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

  if (Number(inputEasy) === NaN || Number(inputEasy) === undefined) {
    inputEasy = 0;
  } else if (Number(inputMedium) === NaN || Number(inputMedium) === undefined) {
    inputMedium = 0;
  } else if (Number(inputHard) === NaN || Number(inputHard) === undefined) {
    inputHard = 0;
  }
  const bottles = Number(inputEasy) + Number(inputMedium) + Number(inputHard);
  return bottles;
}

function createBottle() {
  const bottle = document.createElement("div");
  bottle.classList.add("bottle");
  bottle.insertAdjacentHTML("afterbegin", `<div class="bottle"></div>`);
  document.body.appendChild(bottle);
  return bottle;
}
