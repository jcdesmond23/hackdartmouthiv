export default function WelcomeSection() {
    return (
        <>
            <div className="bg-black">
                <div className="bg-[url('../public/Grid.png')] bg-center h-[1118px] ">
                    <a id="mlh-trust-badge" className="block max-w-['100px'] min-w-['60px'] fixed w-[8%] z-[1000] top-0 right-10" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank">
                        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{width:'100%'}}/>
                    </a>
                    <div className="flex flex-col items-center">
                        <div className="mt-32 flex flex-row relative justify-between w-screen">
                            <img src="/color-bar-left.png" alt="Color Bar Left Side" className="object-left"/>
                            <h1 className="mx-2 text-center text-[54px] font-avant-garde inline-block font-normal bg-title bg-clip-text text-transparent leading-none">WELCOME TO HACKDARTMOUTH IV</h1>
                            <img src="/color-bar-right.png" alt="Color Bar Right Side" className="object-right"/>
                        </div>
                        <div className="mt-10 border-2 bg-black py-[22px] px-[134px] border-[#9F7300]">
                            <h1 className="text-center text-6xl font-avant-garde inline-block font-normal bg-gradient-to-b from-white to-[#9F7300] to-80% bg-clip-text text-transparent">NOW IN FULL COLOR</h1>
                        </div>
                        <div className="flex -mt-16 -mb-20 items-center justify-center bg-[url('../public/radial.png')] w-[972px] h-[572px]">
                            <div className="grid flex place-items-center">
                                <h1 className="bg-contain leading-[.8] inline-block bg-[url('../public/rainbow.jpeg')] text-[400px] font-puente bg-clip-text text-transparent col-start-1 row-start-1">$8K</h1>
                                <h1 className="bg-contain leading-[.8] inline-block bg-[url('../public/rainbow.jpeg')] text-[400px] font-puente bg-clip-text text-transparent col-start-1 row-start-1 blur">$8K</h1>
                            </div>
                        </div>
                        <h1 className="text-white text-xl font-avant-garde">IN PRIZES AND REWARDS | 24 HOUR LIMIT | APRIL 20TH & 21ST</h1>
                        <hr className="w-8/12 my-6 h-1 mx-auto bg-white border-0"></hr>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwUfoLNV0ZoQ9kCWdzBtB6T9VBRMymG9HJPiLx9M0hpCVaKA/viewform?usp=sf_link" target="_blank">
                            <div className="flex justify-center items-center">
                                <h1 className="text-[150px] font-compacta text-white font-normal -my-12 w-full block hover:scale-110">REGISTER NOW</h1>
                            </div>
                        </a>
                        <p className="text-white text-xl font-avant-garde my-6">
                            HACK WITH A <span className="text-[#FA00FF]">BLAST</span> FROM THE <span className="text-[#FA00FF]">PAST</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}