function loadData() {
    var br = document.createElement("br");
    const num = localStorage.getItem("num");
    const checknum = localStorage.getItem("checknum");
    let cookie = document.cookie;
    score.innerHTML += "number: " + num;
    score.innerHTML += " checknum: " + checknum;
    score.appendChild(br);
    scorec.innerHTML += cookie
    scorec.appendChild(br);
}