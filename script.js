// ── PARTICLES ──
const pc=document.getElementById('particles');
for(let i=0;i<20;i++){
  const p=document.createElement('div');p.className='particle';
  p.style.left=Math.random()*100+'%';
  p.style.width=p.style.height=(Math.random()*2+1)+'px';
  p.style.background=Math.random()>0.5?'#00f5ff':'#ffd166';
  p.style.animationDuration=(Math.random()*8+6)+'s';
  p.style.animationDelay=(Math.random()*8)+'s';
  pc.appendChild(p);
}

// ── NAVIGATION ──
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  const links=document.querySelectorAll('.nav-link');
  const map={'home':0,'features':1,'rules':2,'admin':3,'about':4,'fiturku':5};
  links[map[name]].classList.add('active');
  window.scrollTo(0,0);
}

// ── CLOCK & STATUS ──
const days=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const months=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
function pad(n){return String(n).padStart(2,'0');}
function getWIB(){const now=new Date();return new Date(now.getTime()+now.getTimezoneOffset()*60000+7*3600000);}

function updateClock(){
  const wib=getWIB();
  const h=wib.getHours(),m=wib.getMinutes(),s=wib.getSeconds();
  const open=true;
  document.getElementById('clockTime').textContent=`${pad(h)}:${pad(m)}:${pad(s)}`;
  document.getElementById('clockDate').textContent=`${days[wib.getDay()]}, ${wib.getDate()} ${months[wib.getMonth()]} ${wib.getFullYear()}`;
  document.getElementById('navDot').className='nav-dot '+(open?'open':'closed');
  document.getElementById('navStatusText').textContent=`${pad(h)}:${pad(m)}`;
  const heroBadge=document.getElementById('heroStatus');
  const heroDot=document.getElementById('heroDot');
  const heroText=document.getElementById('heroStatusText');
  heroBadge.className='status-hero '+(open?'open':'closed');
  heroDot.className='nav-dot '+(open?'open':'closed');
  heroText.textContent='GRUP BUKA 24 JAM 🔓';
}
updateClock();
setInterval(updateClock,1000);
