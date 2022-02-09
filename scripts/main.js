
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

//Main module needs to be listening for the "state changed" event since it is where all the 
//HTML is being generated

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

// let totalCost = addPrices()


// const costString = totalCost.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD"
// })

// `<li>
//     Order #${order.id} cost ${costString}
// </li>`