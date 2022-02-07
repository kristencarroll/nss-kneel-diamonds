import { getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        //style is the only function map will accept; it is defining the parameter for the map 
        //function
        return `<li>
        <input type ="radio" name="size" value="${style.id}" /> ${style.style}
        </li>`
    })
    //map() is iterating the listItemsArray and the code with style and the return
    //is the 


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

