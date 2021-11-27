function testLogicalOr(val) {
    // Only change code below this line

    if (val) {
        return "Outside";
    }

    if (val) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);


// Combine the two if statements into one statement which returns the string Outside if val is not between 10 
// and 20, inclusive. Otherwise, return the string Inside.

// Объедините два ifоператора в один оператор, который возвращает строку, Outsideесли valона не находится 
//между 10и 20, включительно. В противном случае верните строку Inside. 


function testLogicalOr(val) {
    // Only change code below this line

    if ((val > 10 || val == 10) && val <= 20) {
        return "Inside";
    } else {
        return "Outside";
    }
}

testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);