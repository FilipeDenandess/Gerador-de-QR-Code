const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos

// Gerar qrCode
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value; //pega o valor do input ;)

  console.log(qrCodeInputValue);

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; //api de gerar qr code

  qrCodeImg.addEventListener("load", function () {
    //evento de carregamento
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!!!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQrCode();
  }
});

//Limpar
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerHTML = "Gerar QR Code";
  }
});
