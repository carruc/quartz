import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import PageTitle from "./PageTitle"
import Darkmode from "./Darkmode"

const HeaderGroup: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div class="header-group">
      {PageTitle()(props)}
      {Darkmode()(props)}
    </div>
  )
}

HeaderGroup.css = `
.header-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-group .darkmode {
  transform: scale(1.25);
  top: 0.1rem;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

/* Add shadow to both icons */
.header-group .darkmode svg {
  filter: drop-shadow(0px 0px 1px rgba(255, 222, 76, 0.8));
  transition: filter 0.5s ease;
}

/* Different shadow colors for light/dark mode */
[saved-theme='dark'] .header-group .darkmode svg {
  filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.28));
}

[saved-theme='dark'] .header-group .darkmode {
  transform: scale(0.9) rotate(0deg);
}

[saved-theme='light'] .header-group .darkmode {
  transform: scale(0.9) rotate(360deg);
}

.header-group .page-title {
  position: relative;
  z-index: 2;
  margin-left: 0;
}
`

export default (() => HeaderGroup) satisfies QuartzComponentConstructor 