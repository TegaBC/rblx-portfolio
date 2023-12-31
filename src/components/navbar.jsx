import { Link  } from "react-router-dom"

export default function NavBar () {
    return <div className="bg-main text-text h-20 sm:h-24 py-1 sm:py-0 flex items-center drop-shadow justify-around">
        <Link to="/" className="font-semibold text-2xl h-full">
        <img className="h-full" src="/icon.png" alt="" />
        </Link>
        <div className="hidden sm:flex gap-4 font-semibold">
            <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
    </div>
} 