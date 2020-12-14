const menu = document.getElementById("id_menu-btn");

menu.addEventListener("click", dropdown);

function dropdown(){
  const panel = document.getElementById("id-menu-panel");
  // panel.classList.toggle("active");
  if (panel.style.display == "none") {
    panel.style.display = "flex";
  } else {
          panel.style.display = "none";
        }
}
