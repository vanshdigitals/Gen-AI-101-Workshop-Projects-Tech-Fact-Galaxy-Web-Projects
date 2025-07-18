// --- DATA: 100 Tech Fun Facts (see previous message for full array) ---
const facts = [
  { fact: "Python was named after Monty Python, not the snake.", category: "Programming Languages", emoji: "🐍" },
  { fact: "The first computer mouse was made of wood.", category: "Hardware", emoji: "🖱️" },
  { fact: "The first computer bug was a real moth found in a relay.", category: "Tech History", emoji: "🦋" },
  { fact: "Ada Lovelace is considered the world's first computer programmer.", category: "Women in Tech", emoji: "👩‍💻" },
  { fact: "The QWERTY keyboard layout was designed to prevent typewriter jams.", category: "Hardware", emoji: "⌨️" },
  { fact: "The word 'robot' comes from the Czech word 'robota', meaning forced labor.", category: "Robotics", emoji: "🤖" },
  { fact: "Bluetooth is named after a Viking king, Harald Bluetooth.", category: "Networking", emoji: "🦷" },
  { fact: "The first website is still online: info.cern.ch.", category: "Internet", emoji: "🌐" },
  { fact: "The first email was sent by Ray Tomlinson in 1971.", category: "Internet", emoji: "📧" },
  { fact: "The term 'debugging' predates computers and was used by engineers.", category: "Tech History", emoji: "🔧" },
  { fact: "The first 1GB hard drive weighed over 500 pounds.", category: "Hardware", emoji: "💾" },
  { fact: "The first domain name ever registered was Symbolics.com.", category: "Web", emoji: "🌍" },
  { fact: "The first webcam was used to monitor a coffee pot at Cambridge University.", category: "Gadgets", emoji: "☕" },
  { fact: "The '@' symbol in email is called 'arroba' in Spanish and Portuguese.", category: "Internet", emoji: "@" },
  { fact: "The word 'spam' for unwanted emails comes from a Monty Python sketch.", category: "Digital Culture", emoji: "🥫" },
  { fact: "The first computer virus was called 'Creeper' and appeared in 1971.", category: "Cybersecurity", emoji: "🦠" },
  { fact: "The word 'pixel' is a blend of 'picture' and 'element'.", category: "Graphics", emoji: "🟦" },
  { fact: "The term 'open source' was coined in 1998.", category: "Open Source", emoji: "🔓" },
  { fact: "The '404' error code originated from a room number at CERN.", category: "Web", emoji: "🚪" },
  { fact: "The word 'algorithm' comes from Persian mathematician Al-Khwarizmi.", category: "Computer Science", emoji: "📐" },
  { fact: "The first smartphone was IBM Simon, released in 1994.", category: "Mobile", emoji: "📱" },
  { fact: "The term 'phishing' is a play on the word 'fishing'.", category: "Cybersecurity", emoji: "🎣" },
  { fact: "The word 'malware' is a blend of 'malicious' and 'software'.", category: "Cybersecurity", emoji: "💀" },
  { fact: "The CAPTCHA test stands for 'Completely Automated Public Turing test to tell Computers and Humans Apart'.", category: "AI", emoji: "🤖" },
  { fact: "The term 'byte' was coined by Werner Buchholz in 1956.", category: "Computer Science", emoji: "🧮" },
  { fact: "The word 'modem' is short for 'modulator-demodulator'.", category: "Networking", emoji: "📡" },
  { fact: "The 'root' user in Unix systems has unrestricted access.", category: "Operating Systems", emoji: "🌱" },
  { fact: "The term 'firewall' comes from barriers used to prevent the spread of fire.", category: "Cybersecurity", emoji: "🔥" },
  { fact: "The word 'wiki' comes from the Hawaiian word for 'quick'.", category: "Web", emoji: "🏝️" },
  { fact: "The favicon is the small icon displayed in browser tabs.", category: "Web", emoji: "🔖" },
  { fact: "The hash symbol (#) is called an 'octothorpe'.", category: "Digital Culture", emoji: "#" },
  { fact: "The term 'ping' comes from sonar technology.", category: "Networking", emoji: "📶" },
  { fact: "The mouse was named for its resemblance to the rodent.", category: "Hardware", emoji: "🐭" },
  { fact: "The word 'cyberspace' was coined by William Gibson in 1982.", category: "Digital Culture", emoji: "🌌" },
  { fact: "USB stands for 'Universal Serial Bus'.", category: "Hardware", emoji: "🔌" },
  { fact: "RAM stands for 'Random Access Memory'.", category: "Hardware", emoji: "🧠" },
  { fact: "ROM stands for 'Read-Only Memory'.", category: "Hardware", emoji: "📀" },
  { fact: "GUI stands for 'Graphical User Interface'.", category: "Programming", emoji: "🖥️" },
  { fact: "The term 'emoji' comes from Japanese: 'e' (picture) + 'moji' (character).", category: "Digital Culture", emoji: "😊" },
  { fact: "The bit is the smallest unit of data in computing.", category: "Computer Science", emoji: "⚫" },
  { fact: "The kilobyte was once 1024 bytes, but now sometimes means 1000 bytes.", category: "Computer Science", emoji: "📏" },
  { fact: "A rootkit is malware designed to hide its existence.", category: "Cybersecurity", emoji: "🕵️" },
  { fact: "The Trojan horse in computing refers to malware disguised as legitimate software.", category: "Cybersecurity", emoji: "🐴" },
  { fact: "DNS stands for 'Domain Name System'.", category: "Networking", emoji: "🌐" },
  { fact: "IP stands for 'Internet Protocol'.", category: "Networking", emoji: "🔢" },
  { fact: "HTML stands for 'HyperText Markup Language'.", category: "Web", emoji: "📄" },
  { fact: "CSS stands for 'Cascading Style Sheets'.", category: "Web", emoji: "🎨" },
  { fact: "JavaScript was originally called 'Mocha'.", category: "Programming Languages", emoji: "☕" },
  { fact: "API stands for 'Application Programming Interface'.", category: "Programming", emoji: "🔌" },
  { fact: "IoT stands for 'Internet of Things'.", category: "Gadgets", emoji: "📲" },
  { fact: "VPN stands for 'Virtual Private Network'.", category: "Cybersecurity", emoji: "🛡️" },
  { fact: "QR in QR code stands for 'Quick Response'.", category: "Gadgets", emoji: "🔳" },
  { fact: "GIF stands for 'Graphics Interchange Format'.", category: "Graphics", emoji: "🖼️" },
  { fact: "The sudo command in Unix stands for 'superuser do'.", category: "Operating Systems", emoji: "🧑‍💻" },
  { fact: "Linux was created by Linus Torvalds in 1991.", category: "Operating Systems", emoji: "🐧" },
  { fact: "The first video game was 'Tennis for Two' in 1958.", category: "Gaming", emoji: "🎮" },
  { fact: "The first computer programmer was Ada Lovelace.", category: "Women in Tech", emoji: "👩‍💻" },
  { fact: "The first search engine was Archie, created in 1990.", category: "Internet", emoji: "🔍" },
  { fact: "The first graphical web browser was Mosaic.", category: "Web", emoji: "🖥️" },
  { fact: "The first email attachment was sent in 1992.", category: "Internet", emoji: "📎" },
  { fact: "The first mobile phone call was made in 1973.", category: "Mobile", emoji: "📞" },
  { fact: "The first SMS was sent in 1992 and read 'Merry Christmas'.", category: "Mobile", emoji: "💬" },
  { fact: "The first computer game with graphics was 'Spacewar!'", category: "Gaming", emoji: "🚀" },
  { fact: "The first spreadsheet program was VisiCalc.", category: "Software", emoji: "📊" },
  { fact: "The first word processor was Electric Pencil.", category: "Software", emoji: "✏️" },
  { fact: "The first computer mouse patent was filed in 1967.", category: "Hardware", emoji: "🖱️" },
  { fact: "The first laptop was the Osborne 1, released in 1981.", category: "Hardware", emoji: "💻" },
  { fact: "The first 3D printer was created in 1983.", category: "Innovation", emoji: "🖨️" },
  { fact: "The first digital camera was invented in 1975.", category: "Gadgets", emoji: "📷" },
  { fact: "The first smartwatch was the Seiko Data 2000.", category: "Gadgets", emoji: "⌚" },
  { fact: "The first computer virus for MS-DOS was 'Brain'.", category: "Cybersecurity", emoji: "🧠" },
  { fact: "The first open source browser was Netscape Navigator.", category: "Open Source", emoji: "🌐" },
  { fact: "The first Wi-Fi standard was released in 1997.", category: "Networking", emoji: "📶" },
  { fact: "The first Bluetooth device was a hands-free mobile headset.", category: "Gadgets", emoji: "🎧" },
  { fact: "The first computer to use a mouse was the Xerox Alto.", category: "Hardware", emoji: "🖱️" },
  { fact: "The first programming language was Fortran.", category: "Programming Languages", emoji: "📜" },
  { fact: "The first computer to use a GUI was the Xerox Alto.", category: "Innovation", emoji: "🖥️" },
  { fact: "The first computer to use a hard disk drive was the IBM 305 RAMAC.", category: "Hardware", emoji: "💽" },
  { fact: "The first computer to use a microprocessor was the Intel 4004.", category: "Hardware", emoji: "🔬" },
  { fact: "The first computer to use a touch screen was the HP-150.", category: "Gadgets", emoji: "👆" },
  { fact: "The first computer to use a laser printer was the Xerox 9700.", category: "Hardware", emoji: "🖨️" },
  { fact: "The first computer to use a floppy disk was the IBM System/370.", category: "Hardware", emoji: "💾" },
  { fact: "The first computer to use a CD-ROM was the Sony SMC 70.", category: "Hardware", emoji: "💿" },
  { fact: "The first computer to use a USB port was the IBM PC 300GL.", category: "Hardware", emoji: "🔌" },
  { fact: "The first computer to use a Wi-Fi card was the Apple iBook.", category: "Gadgets", emoji: "📶" },
  { fact: "The first computer to use a solid-state drive was the IBM 305 RAMAC.", category: "Hardware", emoji: "💽" },
  { fact: "The first computer to use a graphics card was the IBM 3270.", category: "Graphics", emoji: "🖼️" },
  { fact: "The first computer to use a sound card was the Creative Labs Sound Blaster.", category: "Gadgets", emoji: "🔊" },
  { fact: "The first computer to use a webcam was the Connectix QuickCam.", category: "Gadgets", emoji: "📷" },
  { fact: "The first computer to use a scanner was the Microtek ScanMaker.", category: "Gadgets", emoji: "🖨️" },
  { fact: "The first computer to use a modem was the Bell 103.", category: "Networking", emoji: "📡" },
  { fact: "The first computer to use a router was the IMP.", category: "Networking", emoji: "🛣️" },
  { fact: "The first computer to use a firewall was the DEC SEAL.", category: "Cybersecurity", emoji: "🧱" },
  { fact: "The first computer to use a VPN was the PPTP protocol.", category: "Cybersecurity", emoji: "🛡️" },
  { fact: "The first computer to use a proxy server was CERN httpd.", category: "Networking", emoji: "🖧" },
  { fact: "The first computer to use a cloud service was Salesforce.", category: "Cloud Computing", emoji: "☁️" },
  { fact: "The first computer to use a blockchain was Bitcoin.", category: "Innovation", emoji: "⛓️" },
  { fact: "The first computer to use a quantum processor was IBM Q.", category: "Innovation", emoji: "⚛️" },
  { fact: "The first computer to use a neural network was the Perceptron.", category: "Artificial Intelligence", emoji: "🧠" },
  { fact: "The first computer to use a chatbot was ELIZA.", category: "Artificial Intelligence", emoji: "💬" },
  { fact: "The first computer to use a voice assistant was IBM Shoebox.", category: "Artificial Intelligence", emoji: "🎤" },
  { fact: "The first computer to use a facial recognition system was the 1960s Bell Labs system.", category: "Artificial Intelligence", emoji: "👤" },
  { fact: "The first computer to use a self-driving car system was the Carnegie Mellon Navlab.", category: "Robotics", emoji: "🚗" }
];

// --- CATEGORY COLOR PALETTE ---
const categoryColors = {
  "Programming Languages": "#1976D2",
  "Programming": "#1565C0",
  "Hardware": "#FF9800",
  "Tech History": "#8D6E63",
  "Women in Tech": "#E91E63",
  "Robotics": "#00BFAE",
  "Networking": "#00B8D4",
  "Internet": "#43A047",
  "Cybersecurity": "#D32F2F",
  "Gadgets": "#7C4DFF",
  "Operating Systems": "#607D8B",
  "Web": "#009688",
  "Mobile": "#388E3C",
  "AI": "#9C27B0",
  "Artificial Intelligence": "#8E24AA",
  "Graphics": "#FBC02D",
  "Open Source": "#388E3C",
  "Digital Culture": "#F06292",
  "Cloud Computing": "#039BE5",
  "Innovation": "#FF5722",
  "Software": "#4CAF50",
  "Gaming": "#C62828",
  "Computer Science": "#455A64",
  "Tech Firsts": "#FFB300",
  "Startups": "#00C853",
  "Blockchain": "#607D8B",
  "Quantum Computing": "#00B8D4",
  "Electronics": "#FF7043"
};

// --- DOM Elements ---
const factText = document.getElementById('factText');
const emojiBadge = document.getElementById('emojiBadge');
const categoryBadge = document.getElementById('categoryBadge');
const factCard = document.getElementById('factCard');
const nextFactBtn = document.getElementById('nextFactBtn');
const copyBtn = document.getElementById('copyBtn');
const tweetBtn = document.getElementById('tweetBtn');

let lastFactIndex = -1;

// --- Functions ---
function getRandomFact() {
  let idx;
  do {
    idx = Math.floor(Math.random() * facts.length);
  } while (idx === lastFactIndex && facts.length > 1);
  lastFactIndex = idx;
  return facts[idx];
}

function setFact(factObj) {
  factText.textContent = factObj.fact;
  emojiBadge.textContent = factObj.emoji;
  categoryBadge.textContent = factObj.category;
  // Adaptive theming
  const color = categoryColors[factObj.category.replace(/\s/g, '')] || "#1976D2";
  factCard.style.background = `linear-gradient(135deg, ${color}22 0%, #fff 100%)`;
  categoryBadge.style.background = color;
  categoryBadge.style.color = "#fff";
  emojiBadge.style.transform = "scale(1.2)";
  setTimeout(() => { emojiBadge.style.transform = "scale(1)"; }, 300);
}

function showRandomFact() {
  const factObj = getRandomFact();
  setFact(factObj);
}

function copyFact() {
  const text = `${factText.textContent} (${categoryBadge.textContent})`;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => { copyBtn.textContent = "📋 Copy"; }, 1200);
  });
}

function tweetFact() {
  const text = encodeURIComponent(`"${factText.textContent}" (${categoryBadge.textContent}) #TechFactGalaxy`);
  const url = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(url, '_blank');
}

// --- Event Listeners ---
nextFactBtn.addEventListener('click', showRandomFact);
copyBtn.addEventListener('click', copyFact);
tweetBtn.addEventListener('click', tweetFact);

// Keyboard accessibility
nextFactBtn.addEventListener('keyup', e => { if (e.key === "Enter" || e.key === " ") showRandomFact(); });
copyBtn.addEventListener('keyup', e => { if (e.key === "Enter" || e.key === " ") copyFact(); });
tweetBtn.addEventListener('keyup', e => { if (e.key === "Enter" || e.key === " ") tweetFact(); });

// --- Initial Load ---
showRandomFact();

