// ── PARTICLES ──
const pc = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.width = p.style.height = (Math.random() * 2 + 1) + 'px';
  p.style.background = Math.random() > 0.5 ? '#00f5ff' : '#ffd166';
  p.style.animationDuration = (Math.random() * 8 + 6) + 's';
  p.style.animationDelay = (Math.random() * 8) + 's';
  pc.appendChild(p);
}

// ── NAVIGATION ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const links = document.querySelectorAll('.nav-link');
  const map = { 'home': 0, 'features': 1, 'rules': 2, 'admin': 3, 'about': 4, 'fiturku': 5 };
  if (map[name] !== undefined) links[map[name]].classList.add('active');
  window.scrollTo(0, 0);
}

// ── CLOCK & STATUS ──
const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
function pad(n) { return String(n).padStart(2, '0'); }
function getWIB() { const now = new Date(); return new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 7 * 3600000); }

function updateClock() {
  const wib = getWIB();
  const h = wib.getHours(), m = wib.getMinutes(), s = wib.getSeconds();
  const open = true;

  const ct = document.getElementById('clockTime');
  const cd = document.getElementById('clockDate');
  const nd = document.getElementById('navDot');
  const nt = document.getElementById('navStatusText');
  const hb = document.getElementById('heroStatus');
  const hd = document.getElementById('heroDot');
  const ht = document.getElementById('heroStatusText');

  if (ct) ct.textContent = pad(h) + ':' + pad(m) + ':' + pad(s);
  if (cd) cd.textContent = days[wib.getDay()] + ', ' + wib.getDate() + ' ' + months[wib.getMonth()] + ' ' + wib.getFullYear();
  if (nd) nd.className = 'nav-dot ' + (open ? 'open' : 'closed');
  if (nt) nt.textContent = pad(h) + ':' + pad(m);
  if (hb) hb.className = 'status-hero ' + (open ? 'open' : 'closed');
  if (hd) hd.className = 'nav-dot ' + (open ? 'open' : 'closed');
  if (ht) ht.textContent = 'GRUP BUKA 24 JAM 🔓';
}

updateClock();
setInterval(updateClock, 1000);
