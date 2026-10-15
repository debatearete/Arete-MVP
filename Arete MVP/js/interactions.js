const mockData = {
  student: {
    name: "Sarah Chen",
    role: "Student",
    organization: "Debate Academy",
    avatar: "SC",
    streak: 5,
    totalPractices: 23,
  },
  instructor: {
    name: "Jordan Hale",
    role: "Instructor",
    organization: "Debate Academy",
    avatar: "JH",
  },
  currentMotion: {
    text: "This House Would ban advertising targeted at children.",
    short: "THW ban advertising targeted at children",
    format: "WSDC",
    role: "1st Proposition",
    speechLength: "7:42 / 8:00",
  },
  leaderboard: [
    { name: "Sarah Chen", score: "5/5", time: "2:30", streak: 12, you: true },
    { name: "Michael Wong", score: "5/5", time: "3:15", streak: 8 },
    { name: "Emily Zhang", score: "5/5", time: "4:00", streak: 5 },
    { name: "James Lee", score: "4/5", time: "2:45", streak: 3 },
    { name: "Priya Nair", score: "4/5", time: "3:40", streak: 4 },
    { name: "Daniel Park", score: "4/5", time: "4:10", streak: 2 },
    { name: "Aisha Rahman", score: "3/5", time: "3:05", streak: 6 },
    { name: "Lucas Moretti", score: "3/5", time: "3:30", streak: 2 },
  ],
};

function toggleDropdown(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle("open");
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("open");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("open");
}

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-dropdown]")) {
    document.querySelectorAll(".dropdown.open").forEach((node) => node.classList.remove("open"));
  }
});

const PREP_KEY = "aretePrepMinutes";
const PREP_OPTIONS = [5, 15, 30, 60];

function getPrepMinutes() {
  const stored = Number(sessionStorage.getItem(PREP_KEY));
  return PREP_OPTIONS.includes(stored) ? stored : 15;
}

function setPrepMinutes(minutes) {
  const value = PREP_OPTIONS.includes(Number(minutes)) ? Number(minutes) : 15;
  sessionStorage.setItem(PREP_KEY, String(value));
  return value;
}

let prepDuration = getPrepMinutes() * 60;
let prepSeconds = prepDuration;
let prepRunning = false;
let prepTimerId = null;

const SPEECH_DURATION = 8 * 60;
let speechSeconds = SPEECH_DURATION;
let speechRunning = false;
let speechTimerId = null;

function formatTime(total) {
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updatePrepFace() {
  const face = document.getElementById("prep-face");
  const bar = document.getElementById("prep-bar");
  if (face) face.textContent = formatTime(prepSeconds);
  if (bar) {
    const used = Math.max(0, prepDuration - prepSeconds);
    bar.style.width = prepDuration ? `${(used / prepDuration) * 100}%` : "0%";
  }
}

function updateSpeechFace() {
  const face = document.getElementById("speech-face");
  const bar = document.getElementById("speech-bar");
  const status = document.getElementById("speech-status");
  const wave = document.getElementById("speech-wave");
  if (face) face.textContent = formatTime(speechSeconds);
  if (bar) {
    const used = Math.max(0, SPEECH_DURATION - speechSeconds);
    bar.style.width = `${(used / SPEECH_DURATION) * 100}%`;
  }
  if (status) status.textContent = speechRunning ? "Recording" : "Ready to record";
  if (wave) wave.classList.toggle("is-live", speechRunning);
}

function startPrepTimer() {
  if (prepRunning) return;
  prepRunning = true;
  prepTimerId = setInterval(() => {
    if (prepSeconds > 0) prepSeconds -= 1;
    updatePrepFace();
  }, 1000);
}

function pausePrepTimer() {
  prepRunning = false;
  clearInterval(prepTimerId);
}

function resetPrepTimer() {
  pausePrepTimer();
  prepDuration = getPrepMinutes() * 60;
  prepSeconds = prepDuration;
  updatePrepFace();
}

function startSpeechTimer() {
  if (speechRunning) return;
  speechRunning = true;
  speechTimerId = setInterval(() => {
    if (speechSeconds > 0) speechSeconds -= 1;
    else pauseSpeechTimer();
    updateSpeechFace();
  }, 1000);
  updateSpeechFace();
}

function pauseSpeechTimer() {
  speechRunning = false;
  clearInterval(speechTimerId);
  updateSpeechFace();
}

function resetSpeechTimer() {
  pauseSpeechTimer();
  speechSeconds = SPEECH_DURATION;
  updateSpeechFace();
}

function toggleSpeechRecording() {
  if (speechRunning) pauseSpeechTimer();
  else startSpeechTimer();
}

function startTimer() {
  startPrepTimer();
}

function pauseTimer() {
  pausePrepTimer();
}

function resetTimer() {
  resetPrepTimer();
}

function toggleSwitch(el) {
  el.classList.toggle("on");
}

document.addEventListener("DOMContentLoaded", () => {
  const prepSelect = document.getElementById("prep-time");
  if (prepSelect) {
    prepSelect.value = String(getPrepMinutes());
    prepSelect.addEventListener("change", () => {
      setPrepMinutes(prepSelect.value);
    });
  }

  prepDuration = getPrepMinutes() * 60;
  prepSeconds = prepDuration;
  updatePrepFace();
  updateSpeechFace();

  document.querySelectorAll(".segmented").forEach((group) => {
    group.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn || !group.contains(btn)) return;
      group.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
