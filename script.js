let tool = document.getElementById("tool")
tool.addEventListener("click", () => {
    window.location.href = "/web.html"
})

let study = document.getElementById("study")
study.addEventListener("click", () => {
    window.location.href = "/langauges.html"
})

let shoping = document.getElementById("shoping")
shoping.addEventListener("click", () => {
    window.location.href = "/shopping.html"
})

let game = document.getElementById("game")
game.addEventListener("click", () => {
    window.location.href = "/game.html"
})

let contact = document.getElementById("contact")
contact.addEventListener("click", () => {
    window.location.href = "/contact.html"
})

let profile = document.getElementById("profile")
profile.addEventListener("click", () => {
    window.location.href = "/profile.html"
})

let about = document.getElementById("about")
about.addEventListener("click", () => {
    window.location.href = "/about.html"
})

let blog = document.getElementById("blog")
blog.addEventListener("click",()=>{
    window.location.href = "/blog.html"
})

let search = document.getElementById("search")
search.addEventListener("click",()=>{
    window.location.href="https://www.google.com"
})

let quetion = document.getElementById("quetion")
quetion.addEventListener("click",()=>{
    window.location.href = "/quetions.html"
})

let task = document.getElementById("task")
task.addEventListener("click",()=>{
   window.location.href="/taskManager.html"
})


function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);


const names = [
    "your Demotivative",
    "your Helplessness",
    "your Cowerdness",
    "your Resume",
]
const typer = document.getElementById("typer");
let i = 0;
let n = names.length;
setInterval(() => {
    let word = names[i];
    let j = 0;
    const value = setInterval(() => {
        if (j < word.length) {
            typer.innerHTML = typer.innerHTML.slice(0, -1)
            typer.innerHTML += word[j];
            if (j == 3 && word.substring(j - 3, 4) == "your") {
                typer.innerHTML += " ";
            }
            typer.innerHTML += "|"
        }
        else {
            stopinterval();
        }
        function stopinterval() {
            clearInterval(value)
        }
        j++;
    }, 100);
    i++;
    i = i % n;
    typer.innerHTML = "";
}, 2000);


const settingsBtn = document.getElementById('setting');
const sidePanel = document.getElementById('sidePanel');
const fontSelect = document.getElementById('fontSelect');
const darkModeToggle = document.getElementById('darkModeToggle');
let font_size = document.getElementById("font_size")


settingsBtn.addEventListener('click', () => {
    sidePanel.classList.toggle('open');
});

function closePanel() {
    sidePanel.classList.remove('open');
}

fontSelect.addEventListener('change', (e) => {
    document.body.style.fontFamily = e.target.value;
});

font_size.addEventListener('change', (e)=>{
   document.body.style.fontSize = e.target.value;
})

font_weight.addEventListener("click",(e)=>{
 document.body.style.fontWeight = e.target.value;
})


darkModeToggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
});
