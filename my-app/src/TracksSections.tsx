import Track from "./components/Track"

export default function TracksSection() {
    return (
        <>  
            <div className="grid font-avant-garde-lt lg:-mt-6 lg:h-[1044px] -mt-4 h-auto">
                <div className="lg:bg-gradient-to-t lg:from-white lg:from-[98%] lg:blur-xs col-start-1 row-start-1"/>
                <div className="-mt-4 bg-[url('../public/Binary.png')] lg:h-[1044px] h-auto col-start-1 row-start-1">
                    <div className="flex h-full lg:flex-row flex-col items-center justify-center gap-16">
                        <div className="flex flex-col items-center gap-16">
                            <Track icon="/education.svg" title="EDUCATION"/>
                            <Track icon="/gaming.svg" title="GAMING"/>
                            <Track icon="/blockchain.svg" title="BLOCKCHAIN"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="object-top grid flex place-items-center leading-[0rem]">
                                <h1 className="font-bold lg:text-[160px] text-[60px] text-[#3D68FF] col-start-1 row-start-1">Tracks</h1>
                                <h1 className="font-bold lg:text-[170px] text-[70px] text-[#3D68FF]/[.20] blur-sm col-start-1 row-start-1">Tracks</h1>
                                <h1 className="font-bold lg:text-[190px] text-[80px] text-[#3D68FF]/[.20] blur-sm col-start-1 row-start-1">Tracks</h1>
                                <h1 className="font-bold lg:text-[210px] text-[90px] text-[#3D68FF]/[.20] blur-sm col-start-1 row-start-1">Tracks</h1>
                            </div>
                            <img src="/play.png" alt="Play" className="lg:mt-24 lg:size-[700px] mt-12 size-[200px] animate-spin-slow"/>
                        </div>
                        <div className="flex flex-col items-center gap-16">
                            <Track icon="/healthcare.svg" title="HEALTHCARE"/>
                            <Track icon="/cleantech.svg" title="CLEANTECH"/>
                            <a href="https://hackdartmouth-virtual.devpost.com" target="_blank">
                                <div className="flex flex-col items-center">
                                    <h1 className="font-bold text-xl">SEE PAST PROJECTS</h1>
                                    <img src="/barcode.svg" alt="Barcode"></img>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}