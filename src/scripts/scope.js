console.log("Scope throws me for a loop, but not inside of it because I don't have access to enter the curly braces.")

// Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

//  ***** BEGINNING OF C IS FOR COOKIE EXERCISE ***** //

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let i = 1

// for (let i = 1; i < cookies.length; i++) {
//     const currentCookie = cookies[i]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// // ***** BEGINNING OF CONJUNCTION FUNCTION EXERCISE ***** //

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }
// conjunction("Master", "Card")


// ***** BEGINNING OF MOD SQUAD EXERCISE ***** //

// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`
//     })
//     document.querySelector(".show-info").innerHTML = HTMLRepresentation
// }


// ***** BEGINNING OF SIMON SAYS EXERCISE ***** //

// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.


const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [4,1]]
let invalidLocation;
let invalidCounter = 0;

for (let i = 0; i < locations.length; i++) {
    const currentLocation = locations[i]

    if (currentLocation[0] > 2) {
        invalidLocation === true
        invalidCounter++
        console.log("This location is invalid.")
    }
    // if (invalidLocation === true) {
    //     console.log("This location is invalid")
    // }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidCounter} invalid locations`)