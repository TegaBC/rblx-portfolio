

export default function NavBar () {
    return <div className="bg-main text-text h-24 flex items-center drop-shadow justify-around">
        <h1 className="font-semibold text-2xl">TegaBC</h1>
        <div className="flex gap-4 font-semibold">
            <a href="" className="hover:text-accent transition-colors">Contact</a>
            <a href="" className="hover:text-accent transition-colors">Portfolio</a>
        </div>
    </div>
} 