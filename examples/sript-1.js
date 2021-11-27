function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        console.log('Tiny');
    } else if (num < 10) {
        console.log('Small');
    } else if (num < 15) {
        console.log('Medium');
    } else if (num < 20) {
        console.log('Large');
    } else if (num >= 20) {
        console.log('Huge');
    } else console.log("Change Me");
    // Only change code above this line
}

testSize(7);
// testSize(0);
// testSize(4);
// testSize(5);
// testSize(8);
// testSize(10);
// testSize(14);
// testSize(15);
// testSize(17);
// testSize(20);
// testSize(25);