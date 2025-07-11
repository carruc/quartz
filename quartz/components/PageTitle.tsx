import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} onClick="window.location.href = this.href; return false;">{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  display: flex;
  align-items: center;
  text-shadow: 0px 0px 1.5px rgba(108, 41, 255, 0.6);
  gap: 0.5rem;
}

.page-title a {
  flex: 1;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
