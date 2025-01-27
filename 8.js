let day = "  monday  ";

day = day.trim().at(0).toUpperCase() + day.trim().slice(1);

switch (day) {
    default:
        console.log(`Its Not A Valid Day`);
        break;
    case "Monday":
    case "Thursday":
        console.log(`From 10:00 AM To 5:00 PM`);
        break;
    case "Tuesday":
        console.log(`From 10:00 AM To 6:00 PM`);
        break;
    case "Wednesday":
        console.log(`From 10:00 AM To 7:00 PM`);
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log(`No Appointments Available`);
        break;
}