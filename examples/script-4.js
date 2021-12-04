let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return (count + " Bet");
    } else {
        return (count + " Hold");
    }
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// Code Explanation
// Check the value of each card via a switch statement.
// The variable count:
// Increases by 1 if the card is a 2, 3, 4, 5, or 6.
// Since 7, 8, and 9 aren’t worth anything, we ignore those cards in our switch statement.
// Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.
// Check the value of count and return the appropriate response.
// Example Run

// cc(2); runs.
// The switch statement hits case 2, jumps down and adds 1 to the variable count.
// The switch statement then hits the break and cc(3); runs.
// This cycle continues until the final call is made, cc('A');.
// After the switch statement, the if statement checks count, which is now 0.
// This then drops down to the else statement, which will return 0 Hold.
// Note: As mentioned earlier, the switch statement could have also been an else if statement.

// Solution 2 (Click to Show/Hide)
// function cc(card) {
//     // Only change code below this line
//     var regex = /[JQKA]/;
//     if (card > 1 && card < 7) {
//         count++;
//     } else if (card === 10 || regex.test(card)) {
//         count--;
//     }

//     if (count > 0) return count + " Bet";
//     return count + " Hold";

    // Only change code above this line
// }
// Code Explanation
// · The function first evaluates if the condition card is a value greater than 1 and lower than 7, in which case it increments count by one.
// · Then if the card is 10 or higher it decrements count by one.
// · The variable regex is a regular expression 1.3k representing values (letters) for the higher cards.
// · The else statement checks those values with the || (logical OR) operator; first for 10 and then for any string that matches the regular expression using String.match() 338.