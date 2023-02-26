const openAdd = document.querySelector(".open");
const paint = document.querySelector(".paint");
const receipt = document.querySelector(".receipt");
const clock = document.querySelector(".clock");
const chat = document.querySelector(".chat");
const subherohold = document.querySelector(".subherohold");
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".overlay");

const connect = document.querySelectorAll(".connect");
const lastConnect = connect[connect.length - 1];

const menunav = document.querySelector(".menunav");

const firstmenu = document.querySelectorAll(".firstmenu");

const pages = document.querySelectorAll(".page");
let pagetranslate = 0;

// adding active class to know page i am on
const subs = document.querySelectorAll(".sub");

subs.forEach(sub => {
    sub.addEventListener("click", (e) => {
        e.preventDefault();

        subs.forEach(allsub => {
            allsub.classList.remove("active");
        })

        e.currentTarget.classList.add("active");

        if (subs[1].classList.contains("active")){
            pagetranslate = -100;
            pages.forEach(page => {
                page.style.transform = `translate(${pagetranslate}%)`;
                pagetranslate += 100;
            })
        }
         
        if (subs[2].classList.contains("acitve")){
            pagetranslate = -200;
            pages.forEach(page => {
                page.style.transform = `translate(${pagetranslate}%)`;
                pagetranslate += 100;
            })
        }
    })
})

// function loadContact
const loadContact = () => {

    pages.forEach(page => {
        page.style.transform = `translate(${pagetranslate}%)`;
        pagetranslate += 100;
    })

    displayContacts = contact.map(item => {
        return `
        <div class="dm">
        <span class="profile_pic">
        <img loading="eager" src=${item.profile_pic} alt="profile image">
        </span>
        
        <span class="profile_detail">
        <h4 class="name">${item.contact_name}</h4>
        <span class="msg_info">
        <img src="" alt="">
        <p class="dm_msg">lol na my camp commandant</p>
        </span>
        </span>
        
        <span class="timestamp">
        <p class="day_date">Yesterday</p>
        <p class="currenttime">
        <span class="today">today</span> @ <span class="time">8:20</span> <span class="pm">PM</span>
        </p>
        </span>
        </div>`
    });
    
    displayContacts = displayContacts.join("");
    
    // looping it to make them many enough for this project
    let conNum = 0;
    
    while (conNum < 3) {
        message.innerHTML += displayContacts;
        conNum++;
    }
}

// fucntion scrooling
const scrooling = () => {

    let pageY = window.pageYOffset;
    let heroHeight = hero.getBoundingClientRect().height;
    
    pageY > heroHeight ? subherohold.classList.add("glue") : subherohold.classList.remove("glue");

    hidemenu();
}



// for contacts on phone
const contact = [
    {
        profile_pic: "assets/stephanie.png",
        contact_name: "Stephanie"
    },
    {
        profile_pic: "assets/richard.png",
        contact_name: "Richard"
    },
    {
        profile_pic: "assets/isabella.png",
        contact_name: "Isabella"
    },
    {
        profile_pic: "assets/anisha.png",
        contact_name: "Anisha"
    }
]

// the contacts to be displayed in the message section
const message = document.querySelector(".messages");


window.addEventListener("DOMContentLoaded", loadContact);

window.addEventListener("scroll", scrooling);
window.addEventListener("load", () => {
    setTimeout(() => {
        overlay.classList.add("display");
    }, 4000)
})

// this will display the menu navigation zone on click
lastConnect.addEventListener("click", () => {
    let num = 0;
    let height;
    let menuheight = menunav.getBoundingClientRect().height;

    firstmenu.forEach(link => {
        height = link.getBoundingClientRect().height;
        num += height;
    })

    menuheight == 0 ? menunav.style.height = `${num}px`: menunav.style.height = `0px`;

    menunav.classList.add("showmenunav");
})


message.addEventListener("click", () => {
   hidemenu();
})

openAdd.addEventListener("click", () => {
    openAdd.classList.toggle("rotate");
    paint.classList.toggle("two");
    receipt.classList.toggle("three");
    clock.classList.toggle("four");
    chat.classList.toggle("five");
    hidemenu();
})

// fucntion to remove showmenu nav
const hidemenu = () => {
    menunav.classList.remove("showmenunav");
    menunav.style.height = `0px`;
}