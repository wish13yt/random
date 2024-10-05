function loadData() {
    var br = document.createElement("br");
    const num = localStorage.getItem("num");
    const checknum = localStorage.getItem("checknum");
    score.innerHTML += "number: " + num;
    score.innerHTML += " checknum: " + checknum;
    score.appendChild(br);
}