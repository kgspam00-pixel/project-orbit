// ======================
// PROJECT ORBIT
// MOBILE SAFE VERSION
// ======================

// June = 5 (months start from 0)
const reunionDate = new Date(
  2026,
  5,
  18,
  12,
  0,
  0
);

// ======================
// COUNTDOWN
// ======================

const subtitleMessages = [
  "Orbit holding steady...",
  "Awaiting planetary reunion...",
  "Missing Aman...",
  "Counting down...",
  "Return vector locked...",
  "Preparing welcome protocol..."
];

let subtitleIndex = 0;

function rotateSubtitle() {

  const el =
    document.getElementById(
      "countdownSubtext"
    );

  if (!el) return;

  subtitleIndex =
    (subtitleIndex + 1) %
    subtitleMessages.length;

  el.textContent =
    subtitleMessages[
      subtitleIndex
    ];
}

function updateCountdown() {

  const countdown =
    document.getElementById(
      "countdown"
    );

  if (!countdown) return;

  const now = new Date();

  const diff =
    reunionDate.getTime() -
    now.getTime();

  if (diff <= 0) {

    countdown.textContent =
      "MISSION COMPLETE";

    const sub =
      document.getElementById(
        "countdownSubtext"
      );

    if (sub) {
      sub.textContent =
        "Aman recovery successful.";
    }

    return;
  }

  const d =
    Math.floor(
      diff /
      (1000 * 60 * 60 * 24)
    );

  const h =
    Math.floor(
      diff /
      (1000 * 60 * 60)
    ) % 24;

  const m =
    Math.floor(
      diff /
      (1000 * 60)
    ) % 60;

  const s =
    Math.floor(
      diff / 1000
    ) % 60;

  countdown.textContent =
    `${d}d ${h}h ${m}m ${s}s`;
}

// ======================
// NAVIGATION
// ======================

function openView(id) {

  document
    .querySelectorAll(".view")
    .forEach(view => {
      view.classList.remove(
        "active"
      );
    });

  const target =
    document.getElementById(id);

  if (target) {
    target.classList.add(
      "active"
    );
  }

  window.scrollTo(0, 0);
}

function goHome() {

  document
    .querySelectorAll(".view")
    .forEach(view => {
      view.classList.remove(
        "active"
      );
    });

  const home =
    document.getElementById(
      "home"
    );

  if (home) {
    home.classList.add(
      "active"
    );
  }

  window.scrollTo(0, 0);
}

// ======================
// POPUP
// ======================

function popup(message) {

  const box =
    document.getElementById(
      "popup"
    );

  if (!box) return;

  box.textContent =
    message;

  box.style.display =
    "block";

  clearTimeout(
    window.popupTimer
  );

  window.popupTimer =
    setTimeout(() => {

      box.style.display =
        "none";

    }, 3200);
}

// ======================
// AMAN
// ======================

const amanMessages = [

  "SCAN COMPLETE • Beautiful human detected",
  "Handsome levels: abnormally high",
  "Current role: Responsible Son",
  "Known side effect: causes butterflies",
  "Planet classification: my favorite",
  "Current status: deeply appreciated",
  "Warning: highly lovable",
  "Khushi's rating: 11/10",
  "Reliability score: exceptional",
  "Smile effectiveness: dangerous",
  "Orbit center confirmed",
  "Currently being missed",
  "Mission note: Khushi is proud of you",
  "Energy source: ragebaiting Khushi"

];

function showAmanPopup() {

  popup(
    amanMessages[
      Math.floor(
        Math.random() *
        amanMessages.length
      )
    ]
  );
}

// ======================
// KHUSHI
// ======================

const khushiMessages = [

  "orbit stable: still in love",
  "trajectory locked on Aman",
  "awaiting planetary reunion",
  "distance: unacceptable",
  "i miss you, jaan",
  "i'm proud of you",
  "thank you for taking care of everyone",
  "butterfly remains gravitationally attached",
  "my universe revolves around you",
  "return vector requested",
  "you are my favorite orbit",
  "love levels: ridiculous",
  "still waiting for my favorite person",
  "come back soon, beautiful",
  "orbit status: missing Aman"

];

function showKhushiPopup() {

  popup(
    khushiMessages[
      Math.floor(
        Math.random() *
        khushiMessages.length
      )
    ]
  );
}

// ======================
// DIAGNOSTICS
// ======================

const diagnostics = [

`AMAN DIAGNOSTIC REPORT

Kindness ........ PASS
Reliability ..... PASS
Handsome ........ PASS
Return Speed .... FAIL`,

`RESPONSIBLE SON PROTOCOL

Status:
Working as intended.`,

`ISSUE DETECTED

Khushi misses Aman.`,

`SCAN COMPLETE

No anomalies detected.

Subject remains wonderful.`,

`EMERGENCY REPORT

Boyfriend currently too far away.`,

`MISSION ANALYSIS

Aman is doing a good job.
Khushi is proud.`

];

function runDiagnostic() {

  const output =
    document.getElementById(
      "diagnosticOutput"
    );

  if (!output) return;

  output.innerText =
    diagnostics[
      Math.floor(
        Math.random() *
        diagnostics.length
      )
    ];
}

// ======================
// LOCATE
// ======================

const locateMessages = [

  "Pretending to work",
  "Thinking about Aman",
  "Wondering if Aman has eaten",
  "Checking the countdown again",
  "Looking forward to Thursday",
  "Missing Aman",
  "Smiling at old memories",
  "Looking at photos",
  "Sending imaginary hugs",
  "Wondering what Aman is doing",
  "Definitely not concentrating"

];

function locateKhushi() {

  const output =
    document.getElementById(
      "locateOutput"
    );

  if (!output) return;

  output.innerText =
`KHUSHI LOCATED

Current Activity:

${
locateMessages[
Math.floor(
Math.random() *
locateMessages.length
)
]
}`;
}

// ======================
// ORBIT STATUS
// ======================

function showOrbitStatus() {

  const output =
    document.getElementById(
      "orbitOutput"
    );

  if (!output) return;

  const diff =
    reunionDate -
    new Date();

  const hours =
    diff /
    (1000 * 60 * 60);

  let distance;

  if (hours < 6) {
    distance =
      "Almost Resolved";
  }

  else if (
    hours < 24
  ) {
    distance =
      "Shrinking";
  }

  else {
    distance =
      "Too Much";
  }

  output.innerText =
`ORBIT REPORT

Distance:
${distance}

Patience:
Decreasing

Love:
Ridiculous

Reunion Probability:
100%

System Status:
Stable`;
}

// ======================
// TRANSMISSIONS
// ======================

const transmissions = [

"hey aman",

"orbit check-in:\nstill thinking about you",

"i know you're busy",

"and taking care of everyone",

"thank you for being that kind of person",

"i'm really proud of you",

"the distance is temporary",

"the missing you part is not",

"see you thursday ❤️",

"love,\nKhushi"

];

let transmissionIndex = 0;

try {

  transmissionIndex =
    parseInt(
      localStorage.getItem(
        "orbitTransmission"
      )
    ) || 0;

} catch (e) {

  transmissionIndex = 0;

}

function nextTransmission() {

  const output =
    document.getElementById(
      "transmissionOutput"
    );

  if (!output) return;

  if (
    transmissionIndex >=
    transmissions.length
  ) {

    output.innerText =
`END OF TRANSMISSION

Message archive complete.

Love,
Khushi`;

    return;
  }

  output.innerText =
    transmissions[
      transmissionIndex
    ];

  transmissionIndex++;

  try {

    localStorage.setItem(
      "orbitTransmission",
      transmissionIndex
    );

  } catch (e) {}
}

// ======================
// STARTUP
// ======================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateCountdown();

    setInterval(
      updateCountdown,
      1000
    );

    setInterval(
      rotateSubtitle,
      8000
    );

    const amanPlanet =
      document.getElementById(
        "amanPlanet"
      );

    if (amanPlanet) {

      amanPlanet.addEventListener(
        "click",
        showAmanPopup
      );

      amanPlanet.addEventListener(
        "touchstart",
        showAmanPopup,
        { passive: true }
      );
    }

    const khushiMoon =
      document.getElementById(
        "khushiMoon"
      );

    if (khushiMoon) {

      khushiMoon.addEventListener(
        "click",
        showKhushiPopup
      );

      khushiMoon.addEventListener(
        "touchstart",
        showKhushiPopup,
        { passive: true }
      );
    }
  }
);
