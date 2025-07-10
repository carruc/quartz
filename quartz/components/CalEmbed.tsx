import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { useEffect } from "react"

export default (() => {
  return function CalEmbed(props: QuartzComponentProps) {
    useEffect(() => {
      // Dynamically load the Cal.com embed script
      const script = document.createElement("script")
      script.src = "https://app.cal.com/embed/embed.js"
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        if (window.Cal) {
          window.Cal("init", "15min", { origin: "https://app.cal.com" })
          window.Cal.ns["15min"]("inline", {
            elementOrSelector: "#my-cal-inline-15min",
            config: { layout: "month_view" },
            calLink: "carruc/15min",
          })
          window.Cal.ns["15min"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
          })
        }
      }

      return () => {
        document.head.removeChild(script)
      }
    }, [])

    return (
      <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-15min"></div>
    )
  }
}) as QuartzComponentConstructor

