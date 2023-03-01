// Array of profile picture of contacts

const contact = [
    {
        dp: "assets/profile/profile1.jpg",
        naming: "Josh",
        quote: "i can be anything"
    },
    {
        dp: "assets/profile/profile2.jpg",
        naming: "Lollipop",
        quote: "Come for the king?..."
    },
    {
        dp: "assets/profile/profile3.jpg",
        naming: "Mary Jane",
        quote: "Eat me as you like, i love it"
    },
    {
        dp: "assets/profile/profile4.jpg",
        naming: "Ericsson",
        quote: "I actually don't give a fuck"
    },
    {
        dp: "assets/profile/profile5.jfif",
        naming: "Squid Master",
        quote: "Game of squid"
    },
    {
        dp: "assets/profile/profile6.jpg",
        naming: "Hacker",
        quote: "Infiltration"
    },
    {
        dp: "assets/profile/profile7.jfif",
        naming: "Edward Higginson",
        quote: "Inner peace"
    },
    {
        dp: "assets/profile/profile8.jpg",
        naming: "My guy",
        quote: "Nerd will rule one day"
    },
    {
        dp: "assets/profile/profile9.jfif",
        naming: "Deborah",
        quote: "The happier the merrier"
    },
    {
        dp: "assets/profile/profile10.jfif",
        naming: "Isabella",
        quote: "The world is so big"
    },
    {
        dp: "assets/profile/profile11.jfif",
        naming: "Dragon Lord",
        quote: ""
    },
    {
        dp: "assets/profile/profile12.jpg",
        naming: "Jessica",
        quote: "Lick you balls"
    },
    {
        dp: "assets/profile/profile13.webp",
        naming: "Mirabel",
        quote: "Call when you need me"
    },
    {
        dp: "assets/profile/profile14.png",
        naming: "Nate",
        quote: "Meticulously active"
    },
    {
        dp: "assets/profile/profile15.jfif",
        naming: "Car Dealer",
        quote: "I sell the ride you need"
    },
]



/* elements needed */
const pages = document.querySelectorAll(".box");// diferent pages

const switchpage = document.querySelectorAll(".page");// the indicator for the current page i am on

const hero_header = document.querySelector(".hero_header");// the toppest header

const sub_header = document.querySelector(".currentpage");// the subordinate header

const messages = document.querySelector(".messages");// where the dm i am dmming is

const openContact = document.querySelector(".addNewChat"); // the openchat fixed at the bottom

const closeContact = document.getElementById("return_btn");

const contactList = document.querySelector(".contactList");// the contact list

const contactListDisplay = document.querySelector(".contactList_display");// availableContacts

const totalContact = document.querySelector(".num_of_contact");// show the total num of my contacts

const encryptPage = document.querySelector(".encrypt_page");

const openEncrypt = document.querySelector(".encryption");

const closeEncrypt = document.querySelector(".encrypt_close");


closeEncrypt.addEventListener("click", () => {
    close (encryptPage, "showEncrypt");
})

openEncrypt.addEventListener("click", (e)  => {
    e.preventDefault();
    open (encryptPage, "showEncrypt")
})// this will open the encrypt page

const showAvailableContact = () => {
    
    let randomNum = Math.floor(Math.random() * 200);
    
    let contactNum = contact.length;
    

    for(x = 0; x < randomNum; x++) {
        let ranConNum = Math.floor(Math.random() * contactNum);
        
        totalContact.textContent = x;

        contactListDisplay.innerHTML += `
        <div class="indi">
        <picture class="indi_img">
                <img src=${contact[ranConNum].dp} alt="people" loading="lazy" class="indi_pic">
                </picture>
    
                <span class="indi_name">
                <h5>${contact[ranConNum].naming}</h5>
                <p class="quote">${contact[ranConNum].quote}</p>
            </span>
        </div>`
    }
}// show available contact

closeContact.addEventListener("click", () => {
    close (contactList, "showtrans");
})// close contact list

openContact.addEventListener("click", () => {
    // contactList.classList.add("showtrans");
    open (contactList, "showtrans");
})// show contact list

window.addEventListener("DOMContentLoaded", () => {
    changePage(-100);
    showAvailableContact();
})// window on dom content loaded

switchpage.forEach(activepage => {
    activepage.addEventListener("click", (e) => {
        let data = e.currentTarget.dataset.id;

        showOpenContact(data);
        
        if (data == "community") {
            changePage(0);

        }
        else if (data == "chat") changePage(-100);
        
        else if (data == "group") changePage(-200);
        
        else if (data == "my_status") changePage(-300);

        else changePage(-400);
        
        switchpage.forEach(currentpages => {
            currentpages.classList.remove("pageactive");
        })
        
        e.currentTarget.classList.add("pageactive");
    })
})// to swicthpage

pages.forEach(page => {
    page.addEventListener("scroll", (e) => {
        scrooling(e);
    })
})// any of the pages onscrool make subheader fixed

messages.addEventListener("scroll", (e) => {
    scrooling(e);
})// message on scroll should make subheader fixed

const scrooling = (e) => {
    let heroHeight = hero_header.getBoundingClientRect().height;
    
    let PageY = e.currentTarget.scrollTop;
    
    PageY > heroHeight ? sub_header.classList.add("glued") : sub_header.classList.remove("glued");
    
}// function scroll

const changePage = (num) => {
    pages.forEach(boxPage => {
        boxPage.style.transform = `translateX(${num}%)`;
        num += 100;
    })
}// fuction to change page 

const open = (element, klas) => {
    element.classList.add(`${klas}`)
}// function for any open button that adds class

const close = (element, klas) => {
    element.classList.remove(`${klas}`);
}// functions for any close button that removes class

const showOpenContact = (d) => {
    if (d == "chat") openContact.style.display = "grid";
    else openContact.style.display = "none";
}