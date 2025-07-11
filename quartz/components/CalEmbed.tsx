import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const CalEmbed: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      id="my-cal-inline-15min"
    ></div>
  )
}

CalEmbed.afterDOMLoaded = `
  function initCalEmbed() {
    // Clear any existing Cal instance
    if (window.Cal) {
      window.Cal = undefined;
    }
    
    // Reinitialize the Cal.com embed
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal, ar = arguments;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    Cal("init", "15min", {origin:"https://app.cal.com"});
    Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "month_view" },
      calLink: "carruc/15min",
    });
    Cal.ns["15min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }
  
  // Initialize on first load
  initCalEmbed();
  
  // Re-initialize on navigation
  document.addEventListener("nav", () => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      const calElement = document.getElementById("my-cal-inline-15min");
      if (calElement) {
        initCalEmbed();
      }
    }, 100);
  });
`

export default (() => CalEmbed) satisfies QuartzComponentConstructor
