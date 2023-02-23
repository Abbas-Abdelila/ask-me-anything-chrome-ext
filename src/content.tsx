import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

// import { CountButton } from "~features/count-button"


import "~base.css"
import SearchInput from "~features/SearchInput"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <></>
  )
}

export default PlasmoOverlay
