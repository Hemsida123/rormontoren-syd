const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-nav');
function closeMenu(){if(!toggle||!menu)return;menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Öppna menyn');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Stäng menyn':'Öppna menyn');menu.hidden=!open;});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(toggle?.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}document.querySelectorAll('.nav-dropdown[open]').forEach(el=>{el.removeAttribute('open');el.querySelector('summary').focus();});}});
document.addEventListener('click',event=>{document.querySelectorAll('.nav-dropdown[open]').forEach(el=>{if(!el.contains(event.target))el.removeAttribute('open');});});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
matchMedia('(min-width: 951px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
