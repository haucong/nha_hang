window.onload = function(){


    const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("click", function(){
        menuBar.classList.toggle("active");
        document.querySelector(".top-menu").classList.toggle("active");
    })
    
    const top = document.querySelector(".top")
    window.addEventListener("scroll", function(){
        const x = this.pageYOffset;
        if(x>80){top.classList.add("active")}
        else{top.classList.remove("active")}
    })
    
    //xu ly menu
    const menuTitle = document.querySelector('.menu-title');
    menuTitle.addEventListener("click", function(a){
        if(a.target.classList.contains("menu-button")) {
            const Target = a.target.getAttribute("data-title");
            menuTitle.querySelector(".active").classList.remove("active");
            a.target.classList.add("active");
    
             var menuItem = document.querySelector(".menu");
             menuItem.querySelector(".menu-item-content.active").classList.remove("active");
             menuItem.querySelector(Target).classList.add("active");
        }
    })
    }