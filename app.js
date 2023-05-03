const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const container = document.querySelector(".container1");


next.addEventListener("click", () => {
    if (container.className === "container1 article-discover") {
        container.classList.remove("article-discover");
        container.classList.add("article-across");
    } else if (container.className === "container1 article-across") {
        container.classList.remove("article-across");
        container.classList.add("article-manufactured");
    } else {
        container.classList.remove("article-manufactured");
        container.classList.add("article-discover");
    }
    }) 


previous.addEventListener("click", () => {
        if (container.className === "container1 article-discover") {
            container.classList.remove("article-discover");
            container.classList.add("article-manufactured");
        } else if (container.className === "container1 article-manufactured") {
            container.classList.remove("article-manufactured");
            container.classList.add("article-across");
        } else {
            container.classList.remove("article-across");
            container.classList.add("article-discover");
        }
        }) 
    



        // MOBILE MENU 

        // OPEN 
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".nav-bar");
        const modal = document.querySelector(".modal")

        hamburger.addEventListener("click", () => {
            menu.classList.remove("disabled");
            modal.style.display = "block";
        })

        // CLOSE 
        const cross = document.querySelector(".cross");

        cross.addEventListener("click", () => {
            menu.classList.add("disabled");
            modal.style.display = "none";
        })