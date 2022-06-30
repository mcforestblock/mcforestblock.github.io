const buttons = document.querySelectorAll('[data-carousel-button]');

const dotsNav = document.querySelector('.carousel__nav');
var dots = Array.from(dotsNav.children);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-carouselContainer]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const textDisplay = document.querySelectorAll('[data-carousel-text]');

const hentaText = "Hi, my name is Henta! Forestblock's creation began on my computer and has gone through many changes, I have been there for every step of the way in good and bad times helping to move it along. My job is making sure that everything works with our server. It is a lot of fun but my favorite part of Forestblock is the monsters and mobs, I love to give players challenging bosses!";
const nubbText = "Hey, it's Nubb. I am Forestblock's creative director and Web Developer. My work is based on the main website as well as our branding designs. My tasks are creating promotion designs, designing our branding and creating this sick website you are currently interacting with. I love working on Forestblock, making quality products and paying attention to the smallest details!";
const jonathanText = "Hey, I'm Jonathan! I am Forestblock's lead bot developer and backend manager. I'm constantly developing and updating Forestblock's custom discord bot, Forestbot! I also make sure that the server's functionality is updated to reflect the current server needs. I love working on the server and can't wait to see where this takes us!";
const jinchaeText = "Hi, I'm Jin! I'm the Community and Relations Manager. I manage Forestblock's partners, community events, and everything else related to the community! Please feel free to ask questions. I love working with the Forestblock community, and feedback on how we can improve the server is always appreciated!";

function setStaff(name, title, text, image) {
    this.name = name;
    this.title = title;
    this.text = text;
    this.image = image;
}

const henta = new setStaff("Henta", "Creator & Project Lead", hentaText, "");
const nubb = new setStaff("Nubb", "Creative Director & Web Developer", nubbText, "");
const jonathan = new setStaff("Jonathan", "Project Engineer & Game Master", jonathanText, "");
const jinchae = new setStaff("Jincahe", "Community Manager & HR coordinator", jinchaeText, "");

// if (textDisplay === 0) {
// }


// click left = move slide left
// click right = move to the right
// indicator = move slide