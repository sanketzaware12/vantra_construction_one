/* Vantra Build — shared header/footer/CTA, inline icons, reveal, counters, parallax, tilt, spotlight, magnetic buttons */
(function(){
var NAV=[['index.html','Home'],['about.html','About'],['services.html','Services'],['projects.html','Projects'],['safety-quality.html','Safety & Quality'],['contact.html','Contact']];
var LOGO='<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M5 35V15L20 5l15 10v20h-9V22H14v13z" fill="none" stroke="#BD805B" stroke-width="2.6" stroke-linejoin="round"/><path d="M14 35V28h12v7" fill="#BD805B"/></svg>';
/* Inline icon set (no external icon font needed, so icons never fail to load) */
var IC={
'arrow-right':'M5 12h14M13 6l6 6-6 6','arrow-up-right':'M7 17L17 7M8 7h9v9','arrow-up':'M12 19V5M6 11l6-6 6 6','list':'M4 7h16M4 12h16M4 17h16','x-lg':'M6 6l12 12M18 6L6 18','check2':'M5 12.5l4.5 4.5L19 7.5',
'check2-square':'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 12.5l3 3 5-6',
'house-heart':'M3 11l9-8 9 8M5 10v10h14V10M12 17.5s-2.5-1.6-2.5-3.2a1.4 1.4 0 0 1 2.5-.8 1.4 1.4 0 0 1 2.5.8c0 1.6-2.5 3.2-2.5 3.2z',
'buildings':'M4 21V5l8-2v18M12 9l8 2v10M2 21h20M8 9h1M8 13h1M8 17h1M16 14h1M16 18h1',
'gear-wide-connected':'M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1',
'bricks':'M3 5h18v14H3zM3 9.7h18M3 14.3h18M10 5v4.7M15 9.7v4.6M8 14.3V19',
'arrow-repeat':'M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5',
'kanban':'M4 4h16v16H4zM9 8v6M12 8v9M15 8v4','rulers':'M3 16L16 3l5 5L8 21zM7 12l2 2M10 9l2 2M13 6l2 2',
'telephone':'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z','envelope':'M3 6h18v12H3zM3 7l9 7 9-7',
'geo-alt':'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z','clock':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
'whatsapp':'M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3zM9 8.5c0 3 3 6 6 6l1.2-1.3-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z',
'linkedin':'M4 4h16v16H4zM8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 5 0v4','instagram':'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5v.01',
'facebook':'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z','eye':'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
'bullseye':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z',
'gem':'M6 3h12l4 6-10 12L2 9zM2 9h20M9 3L7 9l5 12M15 3l2 6-5 12','shield-check':'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5',
'lightbulb':'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z','hard-hat':'M3 17h18v2H3zM5 17a7 7 0 0 1 14 0M12 6v5M9 7v4M15 7v4',
'clipboard2-check':'M8 4h8v3H8zM6 5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1M9 14l2.2 2.2L15.5 12','droplet-half':'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11zM12 3v17',
'journal-check':'M6 3h12v18H6zM6 7H4M6 12H4M6 17H4M9.5 12l2 2 3.5-4','person-check':'M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 21a7 7 0 0 1 14 0M16 11l2 2 4-4','ladder':'M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10',
'lightning-charge':'M13 2L4 14h7l-1 8 9-12h-7z','signpost-split':'M12 3v18M12 5h7l2 2.5-2 2.5h-7M12 12H5l-2 2.5L5 17h7',
'heart-pulse':'M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11zM6 12h3l1.5-2.5 2 4 1.5-1.5h3','calendar':'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
'award':'M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.5 14.5L7 21l5-3 5 3-1.5-6.5','people':'M9 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 20a6 6 0 0 1 12 0M17 7a2.5 2.5 0 1 0 0 5M16 14a5 5 0 0 1 5 6',
'star':'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z','send':'M3 11l18-8-8 18-2-8z','sun':'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19',
'sunset':'M4 18h16M7 18a5 5 0 0 1 10 0M12 6v3M5 10l1.5 1.5M19 10l-1.5 1.5','moon':'M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10z','flag':'M5 21V4M5 4h12l-2 4 2 4H5','layers':'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5','trophy':'M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M8 21h8'
};
function svg(n){var p=IC[n]||'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z';return'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="'+p+'"/></svg>'}
function $(s,r){return(r||document).querySelector(s)}function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
window.vIcons=function(root){$$('i[class*="bi-"]',root).forEach(function(i){var m=/bi-([\w-]+)/.exec(i.className);if(!m)return;var x=i.className.replace(/\bbi\b|\bbi-[\w-]+/g,'').trim();i.className='ico'+(x?' '+x:'');i.innerHTML=svg(m[1])})};
var page=document.body.dataset.page||'index';
var h=$('#site-header');
if(h){h.outerHTML='<a class="sk" href="#main">Skip to content</a><header class="hdr" id="hdr"><div class="w nv"><a class="lg" href="index.html" aria-label="Vantra Build home">'+LOGO+'<span><b>VANTRA</b><small>Build &amp; Engineering</small></span></a><button class="bg" id="bg" aria-label="Toggle menu" aria-expanded="false" aria-controls="lk"><i class="bi bi-list"></i></button><nav class="lk" id="lk" aria-label="Main">'+NAV.map(function(n){return'<a href="'+n[0]+'"'+(n[0].replace('.html','')===page?' class="on" aria-current="page"':'')+'>'+n[1]+'</a>'}).join('')+'<a class="btn" href="contact.html">Get a Quote <i class="bi bi-arrow-up-right"></i></a></nav><div class="prog" id="prog"></div></div></header>'}
$$('[data-cta]').forEach(function(e){e.outerHTML='<section class="cta"><div class="cta-bg" aria-hidden="true">LET\u2019S BUILD \u2022 LET\u2019S BUILD \u2022 LET\u2019S BUILD \u2022 LET\u2019S BUILD \u2022</div><div class="w cta-in"><div><h2>Planning a build? Let\u2019s talk it through.</h2><p>Book a free consultation with our project team.</p></div><div class="cta-act"><a class="btn k" href="contact.html">Book a Consultation <i class="bi bi-arrow-up-right"></i></a><a class="cta-tel" href="tel:+000000000000"><i class="bi bi-telephone"></i> Call us</a></div></div></section>'});
var f=$('#site-footer');
if(f){f.outerHTML='<footer class="ft"><div class="w"><div class="fg"><div><a class="lg" href="index.html">'+LOGO+'<span><b>VANTRA</b><small>Build &amp; Engineering</small></span></a><p>Residential, commercial and industrial construction, planned precisely and delivered with care.</p><div class="so"><a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a></div></div><div><h4>Company</h4><ul>'+NAV.map(function(n){return'<li><a href="'+n[0]+'">'+n[1]+'</a></li>'}).join('')+'</ul></div><div><h4>Services</h4><ul><li><a href="services.html">Residential</a></li><li><a href="services.html">Commercial</a></li><li><a href="services.html">Industrial</a></li><li><a href="services.html">Civil &amp; Structural</a></li><li><a href="services.html">Renovation</a></li></ul></div><div><h4>Contact</h4><ul><li>+00 00000 00000 (placeholder)</li><li>hello@your-domain.com</li><li>Office address placeholder</li></ul></div></div><div class="fbm"><span>&copy; 2026 Vantra Build &amp; Engineering. All rights reserved.</span><span>Project data on this site is illustrative.</span></div></div></footer>'}
var hd=$('#hdr'),pg=$('#prog'),rm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
var tp=document.createElement('button');tp.className='top';tp.setAttribute('aria-label','Back to top');tp.innerHTML='<i class="bi bi-arrow-up"></i>';tp.onclick=function(){window.scrollTo({top:0})};document.body.appendChild(tp);
function par(){if(rm)return;$$('[data-parallax]').forEach(function(el){var r=el.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;el.style.translate='0 '+(-r.top*.1)+'px'})}
function sc(){var y=window.scrollY,m=document.documentElement.scrollHeight-innerHeight;if(hd)hd.classList.toggle('s',y>20);tp.classList.toggle('v',y>600);if(pg)pg.style.transform='scaleX('+(m>0?y/m:0)+')';par()}
window.addEventListener('scroll',sc,{passive:true});sc();
var bg=$('#bg'),lk=$('#lk');if(bg){bg.onclick=function(){var o=lk.classList.toggle('o');bg.setAttribute('aria-expanded',o);bg.firstChild.innerHTML=svg(o?'x-lg':'list')};$$('a',lk).forEach(function(a){a.onclick=function(){lk.classList.remove('o');bg.setAttribute('aria-expanded',false);bg.firstChild.innerHTML=svg('list')}})}
/* mouse effects: spotlight, tilt, magnetic buttons, hero depth */
document.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||rm)return;var t=e.target.closest&&e.target.closest('.sp,.cd,.bt');
if(t){var r=t.getBoundingClientRect();t.style.setProperty('--mx',(e.clientX-r.left)+'px');t.style.setProperty('--my',(e.clientY-r.top)+'px');if(t.hasAttribute('data-tilt')){t.style.setProperty('--rx',((e.clientX-r.left)/r.width-.5)*8+'deg');t.style.setProperty('--ry',-((e.clientY-r.top)/r.height-.5)*8+'deg')}}
var b=e.target.closest&&e.target.closest('.btn');if(b){var q=b.getBoundingClientRect();b.style.setProperty('--bx',((e.clientX-q.left)/q.width-.5)*8+'px');b.style.setProperty('--by',((e.clientY-q.top)/q.height-.5)*6+'px')}
var m=e.target.closest&&e.target.closest('[data-mp]');if(m){var k=m.getBoundingClientRect(),x=(e.clientX-k.left)/k.width-.5,y=(e.clientY-k.top)/k.height-.5;$$('[data-d]',m).forEach(function(el){var d=+el.dataset.d;el.style.translate=(x*d)+'px '+(y*d)+'px'})}},{passive:true});
document.addEventListener('mouseout',function(e){var t=e.target.closest&&e.target.closest('[data-tilt]');if(t&&!t.contains(e.relatedTarget)){t.style.setProperty('--rx','0deg');t.style.setProperty('--ry','0deg')}var b=e.target.closest&&e.target.closest('.btn');if(b&&!b.contains(e.relatedTarget)){b.style.setProperty('--bx','0px');b.style.setProperty('--by','0px')}});
/* reveal + counters */
function count(el){var t=+el.dataset.count,s=el.dataset.suffix||'',st=performance.now();if(rm){el.textContent=t+s;return}(function k(now){var p=Math.min((now-st)/1600,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(k)})(st)}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add('in');$$('[data-count]',t).forEach(count);if(t.dataset.count)count(t);io.unobserve(t);setTimeout(function(){t.style.removeProperty('--d')},1800)}})},{threshold:.05});
window.revealNew=function(root){$$('[data-r]',root).forEach(function(e,i){if(!e.style.getPropertyValue('--d'))e.style.setProperty('--d',(i%4)*.08+'s');io.observe(e)});$$('.rev,.flow,.sg',root).forEach(function(e){io.observe(e)});window.vIcons(root)};
document.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'&&t.dataset.fb&&t.getAttribute('src')!==t.dataset.fb){t.src=t.dataset.fb}},true);$$('img[data-fb]').forEach(function(t){if(t.complete&&t.naturalWidth===0)t.src=t.dataset.fb});
revealNew(document);window.vIcons(document);
})();
