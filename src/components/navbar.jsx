import { Link  } from "react-router-dom"

export default function NavBar () {
    return <div className="bg-main text-text h-24 flex items-center drop-shadow justify-around">
        <Link to="/" className="font-semibold text-2xl">TegaBC</Link>
        <div className="flex gap-4 font-semibold">
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
        </div>
    </div>
} 