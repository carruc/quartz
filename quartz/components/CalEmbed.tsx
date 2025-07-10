import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const CalEmbed: QuartzComponent = (props: QuartzComponentProps) => {
  // Only render on the main page (index.md)
  if (
    props.fileData?.slug !== "index" &&
    props.fileData?.filePath !== "index.md" &&
    props.fileData?.filePath !== "content/index.md"
  ) {
    return null
  }

  return (
    <div
      style={{
        width: "100%",
        height: "470px", // Fixed height based on your 770x470 ratio
        maxHeight: "470px",
        overflow: "hidden",
        border: "1px solid #e1e5e9",
        borderRadius: "8px",
        marginBottom: "2rem"
      }}
      id="my-cal-inline-15min"
    ></div>
  )
}

CalEmbed.afterDOMLoaded = `
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
`

export default (() => CalEmbed) satisfies QuartzComponentConstructor
