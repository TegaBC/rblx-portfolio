import { Link } from  "react-router-dom"

export default function Landing() {
    return <div className="h-[380px] sm:h-[580px] bg-splash bg-cover bg-center sm:bg-left-top text-text">
       <div className="flex flex-col gap-6 items-center justify-center h-full">
            <h1 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-7xl sm:text-8xl font-bold">Tega</h1>
            <h2 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-lg sm:text-xl">Gameplay Programmer</h2>
            
            <div className="flex gap-4 font-medium">
                <Link to="/portfolio" className="bg-main px-7 py-3 rounded-md hover:bg-mainHover">Portfolio</Link>
                <Link to="/contact" className="bg-main px-7 py-3 rounded-md hover:bg-mainHover">Contact</Link>
            </div>
       </div>
    </div>
}