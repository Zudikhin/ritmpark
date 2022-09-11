let sidebar = document.getElementById("aside");
let sidebarBack = document.getElementById("sidebarBack");
let sidebarLogo = document.getElementById("sidebarLogo");
let main = document.getElementById("main");

sidebarBack.addEventListener("click", function(){
    sidebar.classList.add("hide");
    main.classList.add("open");
});

sidebarLogo.addEventListener("click", function(){
    sidebar.classList.remove("hide");
    main.classList.remove("open");
});