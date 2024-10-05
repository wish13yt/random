function randomGen() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(10);
    num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    checkNumValue = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    if (num === checkNumValue) {
        console.log("number:" + num)
        console.log("yuo won!!!!")
        div1.innerHTML += num;
        console.log("checknum:" + checkNumValue)
        startConfetti();
        alert("YOU WON!!!!")
        document.getElementById("confettiButton").disabled = false;
    } else {
        console.log("yuo lost!111!!")
        console.log("number:" + num)
        div1.innerHTML += num;
        console.log("checknum:" + checkNumValue)
        alert("You lost!");
        stopConfetti();
        document.getElementById("confettiButton").disabled = true;
    }
}