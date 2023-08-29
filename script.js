let wrapper =  document.querySelector(".wrapper")
let generateBtn = document.getElementById("generate-btn")
let qrText = document.getElementById("qr_text")
let qrImg = document.getElementById("qr_img")

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let data = qrText.value;
    if(!data) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`

    wrapper.classList.add("active");
})

