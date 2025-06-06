//- Switch
   //? Switch statements are used to execute one block of code among many based on the value of a variable or expression.


let day = 3; //? Example day of the week (0-6)
switch (day) {
    case 0:
        console.log("Sunday");
        break; //? Breaks out of the switch block. if not used, the code will continue to execute the next case
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day"); //? Default case if no match is found
}