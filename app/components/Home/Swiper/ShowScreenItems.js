import news1title from "../../images/news1title.webp"
import poster from "../../images/poster.webp"
import callOfDuty from "../../images/callOfDuty.webp"
import callLogo from "../../images/callLogo.png"
import DragonBall from "../../images/DragonBall.webp"
import DragonBallLogo from "../../images/DragonBallLogo.webp"
import cyb from "../../images/cyb.webp"
import iconcyber from "../../images/iconcyber.webp"


    const items = [
        {
            id: 1,
            name: "spiderman",
            image: poster,
            video : "/spidervideo.mp4",
            description : "Marvel's Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.",
            logo:news1title 
        },
        {
            id: 2,
            name: "callofduty",
            image: callOfDuty,
            video : "/callofduty.mp4",
            description : "Call of Duty: Modern Warfare 2 is a first-person shooter video game published by Activision and developed by Infinity Ward, based on Call of Duty: Black Ops.",
            logo:callLogo
        },
        {
            id: 3,
            name: "dragonball",
            image: DragonBall,
            video : "",
            description : "Dragon Ball is a Japanese manga series written and published by Viz Media. The story follows the adventures of Goku, a powerful Saiyan warrior, and his friends.",
            logo:DragonBallLogo
        },
        {
            id: 4,
            name: "cyberpunk",
            image: cyb,
            video : "/cyberpunk.mp4",
            description : "Cyberpunk 2077 is an open-world action role-playing game set in Night City, a metropolis that is a dystopian version of the United States of America in the year 2020.",
            logo:iconcyber
        }
    ]
    

export default items