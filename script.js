// pages
const boxes = document.querySelectorAll(".box");

// the current page 
const pageon = document.querySelectorAll(".page");

pageon.forEach(activepage => {
    activepage.addEventListener("click", (e) => {
        let data = e.currentTarget.dataset.id;

        if (data == "chat") changePage(0);

        if (data == "group") changePage(-100);

        if (data == "my_status") changePage(-200);

        if (data == "calls") changePage(-300);
        
        pageon.forEach(currentpages => {
            currentpages.classList.remove("pageactive");
        })

        e.currentTarget.classList.add("pageactive");
    })
})

window.addEventListener("DOMContentLoaded", () => {
    changePage(0);
})


// fuction to change page 
const changePage = (num) => {
    boxes.forEach(boxPage => {
        boxPage.style.top = `${num}%`;
        num += 100;
    })
}