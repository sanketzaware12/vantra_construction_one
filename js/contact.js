/* Contact form: front-end validation + feedback.
   INTEGRATION POINT: replace sendEnquiry() with a real call (Formspree, EmailJS, your own API). */
(function(){
var f=document.getElementById('cf');if(!f)return;
var fb=document.getElementById('fb');
/* Calendar: today is the earliest selectable date (past dates blocked) */
function iso(d){var m=d.getMonth()+1,x=d.getDate();return d.getFullYear()+'-'+(m<10?'0':'')+m+'-'+(x<10?'0':'')+x}
var dt=document.getElementById('date'),today=iso(new Date());dt.min=today;
function sendEnquiry(data){/* TODO: fetch('YOUR_ENDPOINT',{method:'POST',body:JSON.stringify(data)}) */return new Promise(function(r){setTimeout(r,600)})}
var rules={name:function(v){return v.trim().length>=2||'Please enter your full name.'},email:function(v){return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)||'Please enter a valid email address.'},phone:function(v){return/^[+\d][\d\s()-]{6,17}$/.test(v.trim())||'Please enter a valid phone number.'},service:function(v){return!!v||'Please choose a service.'},date:function(v){if(!v)return'Please choose a preferred date.';return v>=today||'Past dates are not allowed. Please pick today or a later date.'},message:function(v){return v.trim().length>=10||'Please tell us a little about your project (10+ characters).'}};
function check(el){var r=rules[el.name](el.value),ok=r===true,er=document.getElementById('e-'+el.name);el.setAttribute('aria-invalid',!ok);er.textContent=ok?'':r;return ok}
function checkTime(){var ok=!!f.querySelector('input[name=time]:checked');document.getElementById('e-time').textContent=ok?'':'Please pick a preferred time.';return ok}
[].forEach.call(f.elements,function(el){if(rules[el.name]){el.addEventListener('blur',function(){check(el)});if(el.name==='date')el.addEventListener('change',function(){check(el)})}});
[].forEach.call(f.querySelectorAll('input[name=time]'),function(r){r.addEventListener('change',checkTime)});
f.addEventListener('submit',function(e){e.preventDefault();fb.className='fb';fb.textContent='';var bad=null;[].forEach.call(f.elements,function(el){if(rules[el.name]&&!check(el)&&!bad)bad=el});var tOk=checkTime();
if(bad||!tOk){fb.className='fb no';fb.textContent='Please fix the highlighted fields and try again.';if(bad)bad.focus();return}
var d={};[].forEach.call(f.elements,function(el){if(el.name&&(el.type!=='radio'||el.checked))d[el.name]=el.value});var b=f.querySelector('button[type=submit]');b.disabled=true;
sendEnquiry(d).then(function(){fb.className='fb ok';fb.textContent='Thank you, '+d.name.split(' ')[0]+'. Your enquiry for '+d.date+' ('+d.time+') is valid. (Demo mode: connect an email service in js/contact.js to receive it.)';f.reset();dt.min=today}).catch(function(){fb.className='fb no';fb.textContent='Something went wrong. Please call or WhatsApp us instead.'}).then(function(){b.disabled=false})});
})();
