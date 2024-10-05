function randomGen() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(10);
    num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    checknum = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    if (num === checknum) {
        console.log("number:" + num)
        console.log("yuo won!!!!")
        div1.innerHTML += num;
        console.log("checknum:" + checknum)
        startConfetti();
        alert("YOU WON!!!!")
        document.getElementById("confettiButton").disabled = false;
        localStorage.setItem("num", num);
localStorage.setItem("checknum", checknum);
    } else {
        console.log("yuo lost!111!!")
        console.log("number:" + num)
        div1.innerHTML += num;
        console.log("checknum:" + checknum)
        alert("You lost!");
        stopConfetti();
        document.getElementById("confettiButton").disabled = true;
        localStorage.setItem("num", num);
localStorage.setItem("checknum", checknum);
    }
}