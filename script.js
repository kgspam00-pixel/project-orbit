const reunionDate = new Date("2026-06-18T14:00:00");

function updateCountdown(){

  const now = new Date();
  const diff = reunionDate - now;

  if(diff <= 0){
    document.getElementById("countdown").innerHTML =
      "MISSION COMPLETE";
    return;
  }

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor(diff/(1000*60*60))%24;
  const m = Math.floor(diff/(1000*60))%60;
  const s = Math.floor(diff/1000)%60;

  document.getElementById("countdown").innerHTML =
    `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown,1000);
updateCountdown();

function openView(id){
  document
    .querySelectorAll(".view")
    .forEach(v=>v.classList.remove("active"));

  document
    .getElementById(id)
    .classList.add("active");
}

function goHome(){
  document
    .querySelectorAll(".view")
    .forEach(v=>v.classList.remove("active"));

  document
    .getElementById("home")
    .classList.add("active");
}

const amanMessages = [
"Handsome levels: abnormally high",
"Boyfriend rating: 11/10",
"Warning: highly lovable",
"Current role: responsible son",
"Planet classification: my favorite",
"Smile effectiveness: dangerous",
"Known side effect: causes butterflies",
"Currently being missed"
];

const khushiMessages = [
"orbit stable: still in love",
"i miss you, jaan",
"awaiting planetary reunion",
"trajectory locked on aman",
"my universe revolves around you",
"distance: unacceptable",
"still waiting for my favorite person",
"i'm really proud of you",
"thank you for taking care of everyone"
];

function popup(msg){

  const box = document.getElementById("popup");

  box.innerText = msg;
  box.style.display = "block";

  clearTimeout(window.popupTimer);

  window.popupTimer = setTimeout(()=>{
    box.style.display = "none";
  },3000);
}

document
.getElementById("amanPlanet")
.addEventListener("click",()=>{
  popup(
    amanMessages[
      Math.floor(Math.random()*amanMessages.length)
    ]
  );
});

document
.getElementById("khushiMoon")
.addEventListener("click",()=>{
  popup(
    khushiMessages[
      Math.floor(Math.random()*khushiMessages.length)
    ]
  );
});

const diagnostics = [
`Kindness: PASS
Reliability: PASS
Return Speed: FAIL`,

`Responsible Son Protocol
Working As Intended`,

`Issue Detected

Khushi misses Aman`,

`Aman Scan Complete

Status: Wonderful`
];

function runDiagnostic(){
  document.getElementById("diagnosticOutput").innerText =
    diagnostics[Math.floor(Math.random()*diagnostics.length)];
}

const locate = [
"Pretending to work",
"Thinking about Aman",
"Wondering if Aman has eaten",
"Checking countdown again",
"Looking forward to Thursday",
"Missing Aman",
"Smiling at old memories"
];

function locateKhushi(){
  document.getElementById("locateOutput").innerText =
    "Khushi located.\n\nCurrent activity:\n\n" +
    locate[Math.floor(Math.random()*locate.length)];
}

function showOrbitStatus(){

  document.getElementById("orbitOutput").innerText =
`Distance: Too Much

Patience: Decreasing

Love: Ridiculous

Reunion Probability: 100%`;
}

const transmissions = [
"hey",
"i know you're busy",
"and doing important things",
"but i'm thinking about you",
"i miss you",
"i'm really proud of you",
"thank you for showing up for the people you love",
"can't wait to see you thursday",
"love,\nKhushi"
];

let transmissionIndex =
parseInt(localStorage.getItem("orbitTransmission")) || 0;

function nextTransmission(){

  if(transmissionIndex >= transmissions.length){
    transmissionIndex = transmissions.length - 1;
  }

  document.getElementById("transmissionOutput").innerText =
    transmissions[transmissionIndex];

  transmissionIndex++;

  localStorage.setItem(
    "orbitTransmission",
    transmissionIndex
  );
}
