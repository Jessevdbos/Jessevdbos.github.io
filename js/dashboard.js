window.addEventListener("load", init);

function init(event) {
    countEC();
    changeEC();
}

function countEC() {
    const EC = document.getElementsByClassName("countableEC");
    let finalEC = 0;
    for (let i = 0; i < EC.length; i++) {
        if (Number(EC[i].innerHTML) > 0) {
            finalEC += Number(EC[i].innerHTML);
        }
    }
    document.getElementById("finalEC").innerText = finalEC;
}

function changeEC() {
    const finalEC = document.getElementById("finalEC").innerText;
    let passed = document.getElementById("passed");
    let notpassed = document.getElementById("notpassed");
    if (finalEC >= 45) {
        passed.classList.add("passed");
    } else {
        notpassed.classList.add("notpassed");
    }
}