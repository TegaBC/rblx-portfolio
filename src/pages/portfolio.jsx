import NavBar from "../components/navbar";

export default function PortfolioPage() {
    return (
        <>
            <NavBar />
            <div className="h-[480px] bg-splash bg-cover text-text">
                <div className="flex flex-col gap-6 items-center justify-center h-full">
                    <h1 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-8xl font-bold">PORTFOLIO</h1>
                    <h2 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-xl">View my past work and projects</h2>
                </div>
            </div>
        </>
    )
}