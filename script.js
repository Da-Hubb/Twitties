// pages
const boxes = document.querySelectorAll(".box");


// the current page 
const pageon = document.querySelectorAll(".page");

// hero_header and current page
const hero_header = document.querySelector(".hero_header");

const currentpage = document.querySelector(".currentpage");

const messages = document.querySelector(".messages");

// to change the active page we are on
pageon.forEach(activepage => {
    activepage.addEventListener("click", (e) => {
        let data = e.currentTarget.dataset.id;

        if (data == "community") changePage(0);

        else if (data == "chat") changePage(-100);
        
        else if (data == "group") changePage(-200);
        
        else if (data == "my_status") changePage(-300);

        else changePage(-400);
        
        pageon.forEach(currentpages => {
            currentpages.classList.remove("pageactive");
        })
        
        e.currentTarget.classList.add("pageactive");
    })
})

// window on dom content loaded
window.addEventListener("DOMContentLoaded", () => {
    changePage(-100);
})

// window on scroll
boxes.forEach(page => {
    page.addEventListener("scroll", (e) => {
        scrooling(e);
    })
})

messages.addEventListener("scroll", (e) => {
    scrooling(e);
})


/*********** All functions be found here ****** */

// function scroll
const scrooling = (e) => {
    let heroHeight = hero_header.getBoundingClientRect().height;
    
    let PageY = e.currentTarget.scrollTop;
    
    PageY > heroHeight ? currentpage.classList.add("glued") : currentpage.classList.remove("glued");
    
}

// fuction to change page 
const changePage = (num) => {
    boxes.forEach(boxPage => {
        boxPage.style.transform = `translateX(${num}%)`;
        num += 100;
    })
}