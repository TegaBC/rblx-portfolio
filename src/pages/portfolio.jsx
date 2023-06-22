import Divider from "../components/divider";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function PortfolioPage() {
    return (
        <>
            <NavBar />
            <div className="h-[480px] bg-splash bg-cover text-text">
                <div className="flex flex-col gap-6 items-center justify-center h-full">
                    <h1 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-center text-6xl lg:text-8xl font-bold">PORTFOLIO</h1>
                    <h2 className="[text-shadow:_0px_2px_26px_rgba(0_0_0_/_59%)] text-xl">View my past work and projects</h2>
                </div>
            </div>
            <div className="flex flex-col items-center bg-main pt-8 text-text">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4 text-center px-2">PAST GAMES</h1>    
                <h2 className="text-xl font-bold text-accent mb-8 text-center px-2">Games I have developed or contributed to.</h2>
                <div className="bg-main flex flex-col gap-12 items-center justify-center mb-8">
                   
                   { /*  Each one of the following divs is a project  */}
                    <div className="flex gap-8 flex-wrap items-center justify-center">
                        <div className="max-w-xs flex gap-2 flex-col">
                            <h1 className="font-semibold text-2xl">Escape The Evil Crush Obby</h1>
                            <p className="text-sm">This project consisted of me debugging the game code, delivering critical content updates including fixing game breaking bugs and shipping out an update making the game console ready.</p>
                           
                            <a href="https://www.roblox.com/games/8528477351/Escape-Evil-Bae-Obby" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                Live project
                            </a>
                        </div>
                        <div>
                            <div className="rounded-xl border-solid border-white border-2 bg-black w-80 h-52 bg-[url('/src/assets/crush.png')] bg-center bg-cover"></div>
                            
                            <div className="flex gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <figure>13.8M+</figure>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/YongBrosGames" className="hover:text-accent transition-colors">YongBros</a>
                            </div>
                           
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row gap-8 flex-wrap items-center justify-center">
                        <div>
                            <div className="rounded-xl border-solid border-white border-2 bg-black w-80 h-52 bg-[url('/src/assets/battlesim.png')] bg-center bg-cover"></div>
                            
                            <div className="flex gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <figure>120.1K+</figure>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/YongBrosGames" className="hover:text-accent transition-colors">YongBros X Tega</a>
                            </div>
                           
                        </div>
                        <div className="max-w-xs flex gap-2 flex-col">
                            <h1 className="font-semibold text-2xl">Anime Battle Sword Simulator</h1>
                            <p className="text-sm">In this project I was lead programmer and played a helping hand in designing the game mechanics. This game features fun combat gameplay, with lots of progression and monetization features.</p>
                           
                            <a href="https://www.roblox.com/games/9180151012/Anime-Sword-Battle-Simulator" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                Live project
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-8 flex-wrap items-center justify-center">
                        <div className="max-w-xs flex gap-2 flex-col">
                            <h1 className="font-semibold text-2xl">Guess The Character Tower</h1>
                            <p className="text-sm">This was an early game, fully developed by me from the ground up, including UI design. It features simple game mechanics that would allow players to choose quizzes to complete. Sadly, this game is no longer available to play.</p>
                           
                            <a href="https://www.roblox.com/games/8649235309/Content-Deleted" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                Live project
                            </a>
                        </div>
                        <div>
                            <div className="rounded-xl border-solid border-white border-2 bg-black w-80 h-52 bg-[url('/src/assets/guess.png')] bg-center bg-cover"></div>
                            
                            <div className="flex gap-2 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <figure>68.4K+</figure>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <a target="_blank" rel="noreferrer" href="https://www.roblox.com/groups/13874921/T3-Platformers" className="hover:text-accent transition-colors">T3 X YongBros</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="flex flex-col items-center bg-main pt-8 text-text px-8">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4">MODULES</h1>    
                <h2 className="text-xl font-bold text-accent mb-8 text-center">Libraries and modules I am currently working on.</h2>

                <div className="bg-main flex flex-col gap-8 items-center justify-center mb-8">
                    <div className="text-center max-w-sm flex flex-col gap-2 justify-center items-center">
                        <h1 className="font-semibold text-2xl">Camera Control Module</h1>
                        <p className="text-sm">A module that exposes simple functions to the end user to control the camera. Allows for multiple cameras and utility functions to manipulate the cameras.</p>

                        <a href="#" className="flex gap-2 hover:text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            Live code<span className="italic">(coming soon)</span>
                        </a>
                    </div>
                    <div className="text-center max-w-sm flex flex-col gap-2 justify-center items-center">
                        <h1 className="font-semibold text-2xl">Notification System Module</h1>
                        <p className="text-sm">A simple module that makes it easy to notify players of what is going on in the server, highly customizable and easy to use. Features notification queueing.</p>
                    
                        <a href="#" className="flex gap-2 hover:text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            Live code<span className="italic">(coming soon)</span>
                        </a>
                    </div>
                    <div className="text-center max-w-sm flex flex-col gap-2 justify-center items-center">
                        <h1 className="font-semibold text-2xl">Party System Module (WIP)</h1>
                        <p className="text-sm">A work in progress module that makes it extremely easy to manage party's of players within games.</p>
                    
                        <div className="flex gap-2 hover:text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg>
                            In Development
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="flex flex-col items-center bg-main pt-8 text-text p-8">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4">PROJECTS</h1>    
                <h2 className="text-xl font-bold text-accent mb-8 text-center">Small projects and games by me.</h2>

                <div className="bg-main flex flex-col gap-12 items-center justify-center mb-8">
                    <h1 className="italic">Coming soon...</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}