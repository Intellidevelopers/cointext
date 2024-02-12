
    const optionMenu = document.querySelector(".select-menus"),
   selectBtn = optionMenu.querySelector(".select-btns"),
   options = optionMenu.querySelectorAll(".options"),
   sBtn_text = optionMenu.querySelector(".sBtn-texts");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
option.addEventListener("click", ()=>{
    let selectedOption = option.querySelector(".option-texts").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
});
});