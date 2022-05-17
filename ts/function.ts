function loop(i) {
    // taking a recursive approach
    if (i == 0) {
        return;
    }

    console.log(i);
    loop(i - 1);
}

loop(10);