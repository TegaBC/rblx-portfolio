import Socials from "../components/socials";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function ContactPage() {
    return <>
        <NavBar />
        <div className="h-[380px] sm:h-[480px] bg-splash bg-cover text-text bg-center sm:bg-left-top">
            <div className="flex flex-col gap-6 items-center justify-center h-full">
                <h1 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-center text-5xl lg:text-8xl font-bold">CONTACT ME</h1>
                <h2 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-lg lg:text-xl">Ways to get in contact.</h2>
            </div>
        </div>
        <div className="bg-main py-20">
            <Socials />
        </div>
        <Footer />
    </>
}