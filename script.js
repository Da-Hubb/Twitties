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

const openContactDesktop = document.querySelector(".major_title"); // initiate contact list for the desktop view

const closeContact = document.getElementById("return_btn");

const contactList = document.querySelector(".contactList");// the contact list

const contactListDisplay = document.querySelector(".contactList_display");// availableContacts

const totalContact = document.querySelector(".num_of_contact");// show the total num of my contacts

const encryptPage = document.querySelector(".encrypt_page");// the encrypt information

const openEncrypt = document.querySelectorAll(".encryption");// openencrypt button

const closeEncrypt = document.querySelectorAll(".encrypt_close");// close the encrypt message

const dmHolder = document.querySelector(".dm_holder");// this hold every person we have contacted

const dm = dmHolder.querySelector(".dm"); // single dm

const msg_view = document.querySelector(".message_view");// the area where our messages go in

const headOfMsgDisplay = document.querySelector(".personInfo");// header of the message view

const inputText = document.getElementById("user_message");// the textarea 

const send = document.getElementById("send");// the send button

let textDisplayArea = document.querySelector(".text_display_area");




inputText.addEventListener("keyup", (e) => {
    inputText.style.height = "auto";

    let scHeight = e.target.scrollHeight;
    
    let height = scHeight;

    if (height >= 90) height = 90;

    inputText.style.height = `${height}px`;

})// function to control the height of my input bar

closeEncrypt.forEach(closer => {
    closer.addEventListener("click", () => {
    close (encryptPage, "showEncrypt");
    })
})// this will close the encrypt page

openEncrypt.forEach(openner => {
    openner.addEventListener("click", (e) => {
        e.preventDefault();
        open (encryptPage, "showEncrypt")
    })
})// this will open the encrypt page

const showAvailableContact = (array) => {
    let totalCon = 0; // let total contact be zero;

    let conList = array.map(item => {
        totalCon++;

        return `
        <div class="indi">
            <picture class="indi_img">
                <img src=${item.dp} alt="people" loading="lazy" class="indi_pic">
            </picture>
            <span class="indi_name">
                <h5>${item.naming}</h5>
                <p class="quote">${item.quote}</p>
            </span>
        </div>`
    })// conList simply means contact list

    totalContact.textContent = totalCon; // total number of contacts

    contactListDisplay.innerHTML += conList.join("");
    /*** at this juncture the display contacts is done */

    const singleDMS = document.querySelectorAll(".indi");

    singleDMS.forEach (dm => {
        
        // for any of the dm is clicked the msgview area will open
        dm.addEventListener("click", () => {
            open (msg_view, "showmsgview");
            close (contactList, "showtrans");
            textDisplayArea.innerHTML = "";
        })

        singleChat(dm);
    })
    

    // every single thing that should happen when i click on the send button
    send.addEventListener("click", () => {
        let image = headOfMsgDisplay.querySelector(".personInfo_img img").src;

        let personName = headOfMsgDisplay.querySelector(".person_name").textContent;

        let text = inputText.value;

        // let lastmsg = text.trim().slice(0, 20);

        
        if (text == "") 
        {
            return;
        }
        else 
        {
            Update(text, image, personName);
        }
    
        inputText.value = "";
    
        inputText.style.height = `15px`;

        returnMsg();
    })// send the text on the the input bar

}// show available contact

closeContact.addEventListener("click", () => {
    close (contactList, "showtrans");
})// close contact list

openContact.addEventListener("click", () => {
    open (contactList, "showtrans");
})// show contact list button for mobile

openContactDesktop.addEventListener("click", () => {
    open (contactList, "showtrans");
})// show contaact list button for desktop

window.addEventListener("DOMContentLoaded", () => {
    changePage(-100);
    showAvailableContact(contact);
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
}// function for the open contact button

const singleChat = (elem) => {
        let chatName = elem.querySelector(".indi_name h5").textContent;
        
        let chatProfilePic = elem.querySelector(".indi_pic").src;
        
        elem.addEventListener("click", (e) => {


            headOfMsgDisplay.innerHTML = `
            <span class="return">
                <img src="assets/return.png" alt="return">
            </span>

            <span class="personInfo_img">
                <img src="${chatProfilePic}" alt="" loading="eager">
            </span>

            <span class="personInfo_detail">
                <h3 class="person_name">${chatName}</h3>
                <p class="status">Online</p>
            </span>
            
            <span class="initiate_contact">
                <img src="assets/phone-call-svgrepo-com (1).svg" alt="" loading="eager">
                <img src="assets/video-svgrepo-com.svg" alt="" loading="eager">
                <img src="assets/icons8-search-100.png" alt="">
            </span>
            `

            const closeMsgView = document.querySelector(".personInfo .return");
            
            closeMsgView.addEventListener("click", () => {
                close (msg_view, "showmsgview")
            })
        } )
}// when message box is open


function Update (txt, img, Name) {
    textDisplayArea.innerHTML += `
            <section class="user">
                <p class="user_text">
                    ${txt}
                </p>
            </section>`// this is for the user or the owner of the account on the social media

            dmHolder.classList.remove("hide"); // the screen for the contacted pesonnel

            dmHolder.innerHTML += `
            <div class="dm">
                <picture class="profile_pic">
                    <img loading="eager" src="${img}" alt="profile image" class="profile_image">
                </picture>

                <section class="msg_detail">
                    <span class="name_time">
                        <h3 class="name">${Name}</h3>
                        <p class="time">15:23</p>
                    </span>

                    <span class="utilities">
                        <!-- the tick both for video and the rest -->
                        <img src="assets/icons8-barber-scissors-48.png" alt="delivered seen and arrived" class="delivery">

                        <!-- the message -->
                        
                        <p class="text_message">${txt}...</p>
                        <!-- the mute -->
                        <img src="assets/icons8-lock-64.png" alt="mute" class="mute">
            
                        <!-- the number of messages -->
                        <p class="num_messages">5</p>
                    </span>

                </section>
            </div>`
}

const returnMsg = () => {
    let time = Math.floor(Math.random() * 5000);
    
    text = "Online";

    let stats = headOfMsgDisplay.querySelector(".status");
    
    stats.textContent = "typing..."

    setTimeout(() => {
        stats.textContent = text;

        textDisplayArea.innerHTML += `
            <section class="receiver">
                <p class="receiver_text">
                    Hello, and welcome to you!!,
                    i am not fully functional at the moment.
                    But very soon i will. Love you.
                    Hope to see you again at the end of this project.
                </p>
            </section>`
    }, time);
}