
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener('click', () => {
        document.getElementById('navbar').style.right = "0";
    })
}
if (close) {
    close.addEventListener('click', () => {
        document.getElementById("navbar").style.right = "-300px";
    })
}
