import "./styles.css"
import coverImgPath from "../images/coverImg.png"
// import { greeting } from "./content";
// import resImage from "./restaurant.jpg"

// setting the hero
const hero = document.createElement("div")
hero.setAttribute("class", "hero-container")

const heroImg = document.createElement("img")
heroImg.setAttribute("class", "hero-img")
heroImg.src = coverImgPath
const heroText = document.createElement("div")
heroText.setAttribute("class", "hero-text")
document.body.appendChild(heroImg)
// overlay name and line (Innisfree, simple serenity)
// lunch -> image -> linked to the menu
// dinner -> image -> linked to the menu
// snacks -> image -> linked to the menu

//our service ->> dine in -> delivery -> booking
//contact ->> 

// console.log(greeting)
// const image = document.createElement("img")
// image.src = resImage

// document.body.appendChild(image)
