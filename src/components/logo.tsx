import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div >
        <Link to="/">
        <h1 className="text-2xl font-bold text-[#00baf2]">
          Pay<span className="text-[#002970]">X</span>
        </h1>
        </Link>
    </div>
  )
}
