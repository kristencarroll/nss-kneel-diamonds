/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ],
    //add new key to the database object to keep track of the changed state as a user 
    //chooses options with their mouse

    //why this state has to be stored as an object, and not an array, string, or number?
    //I think because it will have multiple properties/values, but they will change with each new user order?
    //because it is a changing state?
    orderBuilder: {},
}
   //Not understanding what I am supposed to be inspecting in database.orderBuilder
   //after state is updated???  Never mind, got it!

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}
// Define three more functions to get copies of the sizes, styles, and customOrders arrays and export them
//these return copies of the current state
//other modules invoke these to GET state

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

//Define and export three functions whose responsibility is to SET state

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}


//Define a function that executes the new task..where its SOLE responsibility is to take temporary choices
//currently being stored in the orderBuilder state object and make them permanent

//is this the function we want to call when the event occurs?
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    //.length is the length of the array
    //add id property to newOrder
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    //date now adds the date from the time the order was placed
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
    //Need more understanding of this line of code.
}