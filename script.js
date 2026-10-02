/* ============ EDIT THIS PART ============
   Anything left empty is hidden or skipped automatically. */
const CONFIG = {
  whatsapp: "923156170695",   // digits only with country code (92 = Pakistan, no leading 0)
  email: "ayeshu456789@gmail.com",      // e.g. yourname@gmail.com
  linkedin: "https://www.linkedin.com/in/ayesha-nadeem-b378413a2/",   // full LinkedIn profile URL
  github: "https://github.com/ayesha48819-blip",     // full GitHub profile URL
};
/* Your prices in PKR: [lowest, highest]. Change them to your own rates. */
const PRICES = {
  types:  { landing:[8000,15000], business:[15000,30000], webapp:[40000,80000] },
  addons: { seo:[5000,10000], contact:[1500,3000], admin:[10000,25000] },
};
const NAMES = { landing:"Landing page", business:"Business website", webapp:"Web app",
                seo:"On-page SEO", contact:"Contact form and WhatsApp button", admin:"Admin panel" };

/* Your story. Edit every line so it sounds like you. Each item is one paragraph. */
const STORY = [
  "I'm Ayesha, a web developer from Lahore who builds websites small businesses can be proud of.",
  "I studied Computer Science in Matric (1014 out of 1100) and in 2026 started a six-month Full Stack course at Arfa Software Technology Park, where I learned the MERN stack.",
  "I focus on three things: careful work, clear communication and clean delivery. I explain things in plain language, show you a design before I build it, and keep you updated until your site is live.",
];
const SPECIALITY = "Mobile-first websites for small businesses, with a WhatsApp button so customers can reach you in one tap.";
const BEST_FIT = ["Local shops and bakeries", "Boutiques and clothing brands", "Tuition academies and schools", "Clinics and service providers", "Freelancers who need a portfolio"];

/* Feedback from real people only (classmates, your instructor, people you built a site for).
   Leave this empty and the section stays hidden. Never add made-up quotes.
   label is optional, e.g. "Classmate", "Instructor", "Practice project". */
const TESTIMONIALS = [
  // { text:"Ayesha explained everything clearly and the site worked perfectly on my phone.",
  //   name:"Full name", role:"Owner, Business name", label:"Practice project" },
];

/* Your real projects. Delete the placeholders once you have yours. */
const PROJECTS = [
  { label:"Demo project", title:"Restaurant Landing Page",
    text:"A modern, responsive website for a restaurant with a menu section, a reservation form and a mobile-friendly layout.",
    tech:["HTML","CSS","JavaScript"], image:"images/restaurant.jpg", live:"restaurant.html", code:"" },
  { label:"Demo project", title:"Online Store UI",
    text:"A clean e-commerce interface with product cards, category filter, a working shopping cart and a free-delivery progress bar.",
    tech:["HTML","CSS","JavaScript"], image:"images/store.jpg", live:"store.html", code:"" },
  { label:"Demo project", title:"Small Business Website",
    text:"A professional website for a small home-services business, with service cards, a quote request form and an FAQ.",
    tech:["HTML","CSS","JavaScript"], image:"images/business.jpg", live:"business.html", code:"" },
  // When a project is ready: add its screenshot in image:"...", the hosted site in live:"...", and the GitHub repo in code:"..."
  // Example: { label:"Demo project", title:"...", text:"...", tech:["React"], image:"shots/one.png", live:"https://...", code:"https://github.com/..." },
];
/* ======================================== */

const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pkr = n => n.toLocaleString('en-US');


// before/after slider
const frame=$("#frame"), slider=$("#slider");
slider.addEventListener("input",()=>frame.style.setProperty("--p",slider.value+"%"));

// story
$("#story").innerHTML = STORY.map(t=>`<p>${esc(t)}</p>`).join("");
$("#speciality").textContent = SPECIALITY;
$("#fitList").innerHTML = BEST_FIT.map(t=>`<li>${esc(t)}</li>`).join("");

// testimonials (only shown when real ones exist)
if (TESTIMONIALS.length) {
  $("#feedback").hidden = false;
  $("#quotes").innerHTML = TESTIMONIALS.map(q=>`<figure class="quote">${q.label?`<span class="lab">${esc(q.label)}</span>`:""}<p>&ldquo;${esc(q.text)}&rdquo;</p><figcaption class="who">${esc(q.name)}${q.role?`<small>${esc(q.role)}</small>`:""}</figcaption></figure>`).join("");
}

// projects
const real = PROJECTS.filter(p=>!p.placeholder);
const list = real.length ? real : PROJECTS;
$("#projects").innerHTML = list.map(p => p.placeholder
  ? `<article class="proj empty"><div class="shot">Project screenshot</div><div class="body"><h3>Your next project here</h3><p>Add a real project in the PROJECTS list at the bottom of this file, with a live link and your GitHub code.</p></div></article>`
  : `<article class="proj">
      <div class="shot">${p.image?`<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">`:esc(p.title)}</div>
      <div class="body">${p.label?`<span class="lab">${esc(p.label)}</span>`:""}<h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
      <div class="chips">${(p.tech||[]).map(t=>`<span>${esc(t)}</span>`).join("")}</div>
      <div class="row">${p.live?`<a href="${esc(p.live)}" target="_blank" rel="noopener">Live demo</a>`:""}${p.code?`<a href="${esc(p.code)}" target="_blank" rel="noopener">Source code</a>`:""}</div></div></article>`).join("");

// contact buttons
const ICONS = {
  whatsapp:'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4a12 12 0 0 0-10.3 18L4 28l6.2-1.6A12 12 0 1 0 16 4z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M12 10c-.7 0-1.6 1-1.6 2.2 0 3.6 4.7 8.3 8.3 8.3 1.2 0 2.2-.9 2.2-1.6l-2.6-1.6-1.5 1c-1.7-.7-3.4-2.4-4.1-4.1l1-1.5L12 10z" fill="currentColor"/></svg>',
  email:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg>',
  github:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>'
};
const WA_HELLO = encodeURIComponent("Hi Ayesha, I saw your portfolio and I'd like to talk about a website.");
const btns=[];
const add=(key,label,href,ext)=>btns.push(`<a class="btn ${btns.length?'':'fill'}" href="${esc(href)}"${ext?' target="_blank" rel="noopener"':''}>${ICONS[key]}${label}</a>`);
if (CONFIG.whatsapp) add("whatsapp","WhatsApp",`https://wa.me/${CONFIG.whatsapp}?text=${WA_HELLO}`,true);
if (CONFIG.email)    add("email","Email",`mailto:${CONFIG.email}?subject=${encodeURIComponent("Website project")}`,false);
if (CONFIG.linkedin) add("linkedin","LinkedIn",CONFIG.linkedin,true);
if (CONFIG.github)   add("github","GitHub",CONFIG.github,true);
$("#contactLinks").innerHTML = btns.length ? btns.join("") : `<span style="color:#bcd6d1">Add your WhatsApp, email and LinkedIn in the CONFIG list at the bottom of this file.</span>`;

// floating WhatsApp button
if (CONFIG.whatsapp) {
  const f=document.createElement("a");
  f.className="wa-float"; f.target="_blank"; f.rel="noopener";
  f.href=`https://wa.me/${CONFIG.whatsapp}?text=${WA_HELLO}`;
  f.setAttribute("aria-label","Chat with Ayesha on WhatsApp");
  f.innerHTML=`<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path d="M16 4a12 12 0 0 0-10.3 18L4 28l6.2-1.6A12 12 0 1 0 16 4z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M12 10c-.7 0-1.600 1-1.600 2.200 0 3.600 4.700 8.300 8.300 8.300 1.200 0 2.200-.9 2.200-1.600l-2.600-1.600-1.500 1c-1.700-.7-3.400-2.400-4.100-4.100l1-1.500L12 10z" fill="#fff"/></svg>`;
  document.body.appendChild(f);
}

// estimate
function estimate(){
  const type=document.querySelector('input[name=type]:checked').value;
  const adds=[...document.querySelectorAll('input[name=addon]:checked')].map(i=>i.value);
  let lo=PRICES.types[type][0], hi=PRICES.types[type][1];
  adds.forEach(a=>{lo+=PRICES.addons[a][0]; hi+=PRICES.addons[a][1];});
  $("#price").textContent=`PKR ${pkr(lo)} to ${pkr(hi)}`;
  $("#breakdown").innerHTML=[type,...adds].map(k=>{
    const r=PRICES.types[k]||PRICES.addons[k]; return `<li>${NAMES[k]}: PKR ${pkr(r[0])} to ${pkr(r[1])}</li>`;}).join("");
  const msg=`Hi Ayesha, I'd like a ${NAMES[type]}`+(adds.length?` with ${adds.map(a=>NAMES[a]).join(", ")}`:"")+`. Your estimate was PKR ${pkr(lo)} to ${pkr(hi)}. Can we talk?`;
  const a=$("#sendEst");
  if (CONFIG.whatsapp) { a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`; a.target="_blank"; a.rel="noopener"; }
  else if (CONFIG.email) { a.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("Project estimate")}&body=${encodeURIComponent(msg)}`; }
}
document.querySelectorAll('.calc input').forEach(i=>i.addEventListener('change',estimate));
estimate();