function loadData() {
    const num = localStorage.getItem("num");
    const checknum = localStorage.getItem("checknum");
    score.innerHTML += num;
    score.innerHTML += checknum;
    loadButton = document.getElementById("loadButton")
    loadButton.remove();
}