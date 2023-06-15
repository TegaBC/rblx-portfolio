
export default function Landing() {
    return <div className="h-[580px] bg-splash bg-cover bg-blend-darken text-text backdrop-brightness-50">
       <div className="flex flex-col gap-6 items-center justify-center h-full">
            <h1 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-8xl font-bold">Tega</h1>
            <h2 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-xl">Gameplay Programmer</h2>
            
            <div className="flex gap-4 font-medium">
                <button className="bg-main px-7 py-3 rounded-md">Portfolio</button>
                <button className="bg-main px-7 py-3 rounded-md">Contact</button>
            </div>
       </div>
    </div>
}