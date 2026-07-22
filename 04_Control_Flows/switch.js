// ========================================================
// CONTROL FLOW (PART 2) - Switch Cases
// ========================================================
// Switch statements are cleaner than writing massive if-else ladders 
// when checking the same variable against multiple values.

// Syntax:
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

// --------------------------------------------------------
// 1. SWITCH WITH NUMBERS
// --------------------------------------------------------
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); // Output: "March"
        // INTERVIEW TIP: If we forget the 'break' here, it will execute ALL the code 
        // below this point (except default) until it hits another break! (Fall-through)
        break; 
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}


// --------------------------------------------------------
// 2. SWITCH WITH STRINGS
// --------------------------------------------------------
const stringMonth = "march";

switch (stringMonth) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March"); // Output: "March"
        break;
    default:
        console.log("Default case match");
        break;
}