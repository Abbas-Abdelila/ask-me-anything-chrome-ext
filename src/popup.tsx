
import "~base.css"
import "~style.css"
import SearchInput from "~features/SearchInput"
import Footer from "~features/Footer"

function IndexPopup() {
  return (
    <div className="z-50 flex flex-col !bg-slate-200 h-full">
      <SearchInput />
      <Footer />
    </div>
  )
}

export default IndexPopup
