---
title: Pietro Carrucciu
description: A personal web-page with resume, projects and more!
date: 2025-03-06

---

<div class="big-gray">
CompSci & Engineering MSc <a href="https://www.polimi.it/">@PoliMi</a>, X-AI Project Member <a href="https://polimidatascientists.it/">@PMDS</a>.
</div>
<br>
👈 Check my resume right here! 

You can find me on <a href="https://www.linkedin.com/in/pietro-carrucciu/">LinkedIn <i class="fa-brands fa-linkedin"></i></a>, <a href="https://github.com/carruc">GitHub <i class="fa-brands fa-github"></i></a> and <a href="https://instagram.com/p_carruc">Instagram <i class="fa-brands fa-instagram"></i></a>. 

For any serious inquiry: <a href="mailto:pietro@carrucciu.com">pietro@carrucciu.com <i class="fa-brands fa-google"></i></a>, or book an appointment on right here 👇!

<br>

<br>

<!-- Cal.com Inline Embed -->
<div style="width:100%;height:600px;border:1px solid #ccc;" id="my-cal-inline">
  <p>Loading calendar...</p>
</div>

<script type="text/javascript">
(function (C, A, L) { 
  let p = function (a, ar) { 
    a.q.push(ar); 
  }; 
  let d = C.document; 
  C.Cal = C.Cal || function () { 
    let cal = C.Cal; 
    let ar = arguments; 
    if (!cal.loaded) { 
      cal.ns = {}; 
      cal.q = cal.q || []; 
      d.head.appendChild(d.createElement("script")).src = A; 
      cal.loaded = true; 
    } 
    if (ar[0] === L) { 
      const api = function () { 
        p(api, arguments); 
      }; 
      const namespace = ar[1]; 
      api.q = api.q || []; 
      typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); 
      return; 
    } 
    p(cal, ar); 
  }; 
})(window, "https://cal.com/embed/embed.js", "init");

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  Cal("init", "default", {
    origin: "https://cal.com"
  });

  Cal("inline", {
    elementOrSelector: "#my-cal-inline",
    calLink: "carruc"
  });
});
</script>
