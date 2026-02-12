/* TERMINAL INTRO */
const text = [
"> Accessing system...",
"> Verifying user...",
"> Access granted."
];

let i = 0;
let term = document.getElementById("terminal");

function typeLine(){
if(i < text.length){
term.innerHTML += text[i] + "\n";
i++;
setTimeout(typeLine,800);
}else{
setTimeout(()=>{document.getElementById("loader").style.display="none";},1000);
}
}
typeLine();

/* CLOCK */
setInterval(()=>{
let now = new Date();
document.getElementById("time").innerText =
"SYSTEM TIME: " + now.toLocaleTimeString();
},1000);

/* SYSTEM MONITOR */
function random(min,max){
return Math.floor(Math.random()*(max-min)+min);
}

setInterval(()=>{
let cpu = random(10,100);
let ram = random(10,100);
let ping = random(5,120);

document.getElementById("cpu").style.width = cpu+"%";
document.getElementById("ram").style.width = ram+"%";
document.getElementById("ping").style.width = ping+"%";

document.getElementById("cpuPercent").innerText = cpu+"%";
document.getElementById("ramPercent").innerText = ram+"%";
document.getElementById("pingPercent").innerText = ping+"ms";

if(cpu > 85){
document.getElementById("warning").innerText = "⚠ WARNING: HIGH CPU LOAD";
}else{
document.getElementById("warning").innerText = "";
}

},2000);

/* MUSIC */
const audio = document.getElementById("audio");
function toggleMusic(){
if(audio.paused){audio.play();}
else{audio.pause();}
}

/* GALLERY */
function openImg(img){
document.getElementById("popup").style.display="flex";
document.getElementById("popupImg").src=img.src;
}
function closeImg(){
document.getElementById("popup").style.display="none";
}