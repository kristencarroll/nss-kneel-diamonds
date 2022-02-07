import { KneelDiamonds } from "./KneelDiamonds.js"

//main.js does not define the mainHTML structure of your application
//that responsibility is deferred the the KneelDiamonds component

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

// renderAllHTML function is needed later in the growth of application, 
// because we are reacting to the user choosing options