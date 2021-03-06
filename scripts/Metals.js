//update the import to get the setMetal function
import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            //window.alert(`User chose metal ${event.target.value}`)
            setMetal(parseInt(event.target.value))
            //why use parseInt() if value is already an int?
            //is it because of the string interpolation below?
        }
    }
)
// when the user selects a radio input option, that the value of the event target 
// will be the value attribute of the chosen option.




export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

