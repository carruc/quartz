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
    
    // Determine if current page is homepage
    const calElement = document.getElementById("my-cal-inline-15min");
    const path = window.location.pathname.toLowerCase();
    const isHomePage = path === "/" || path === "/index.html" || path === "/index.md";
    
    if (calElement) {
      if (isHomePage) {
        // Show calendar on homepage
        calElement.style.height = "100%";
        calElement.style.overflow = "scroll";
        Cal("init", "15min", {origin:"https://app.cal.com"});
        Cal.ns["15min"]("inline", {
          elementOrSelector: "#my-cal-inline-15min",
          config: { layout: "month_view" },
          calLink: "carruc/15min",
        });
        Cal.ns["15min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } else {
        // Hide the calendar and remove space on all other pages
        calElement.style.height = "0";
        calElement.style.overflow = "hidden";
        calElement.innerHTML = ""; // Clear content to avoid residual UI
      }
    }
  }
  
  // Initialize on first load
  initCalEmbed();
  
  // Re-initialize on navigation with improved event handling
  if (window._calEmbedNavListener) {
    document.removeEventListener("nav", window._calEmbedNavListener);
  }
  
  window._calEmbedNavListener = () => {
    setTimeout(() => {
      const calElement = document.getElementById("my-cal-inline-15min");
      if (calElement) {
        initCalEmbed();
      }
    }, 100);
  };
  document.addEventListener("nav", window._calEmbedNavListener);
`

export default (() => CalEmbed) satisfies QuartzComponentConstructor
