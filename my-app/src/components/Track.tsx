export default function Track({icon, title}:{icon: string, title: string}) {
    return (
        <>
            <div className="flex flex-col items-center">
                <img src={icon} alt="Track"/>
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="font-normal text-[15px]">EdTECH</p>
                <p className="font-normal text-[15px]">RESEARCH</p>
                <p className="font-normal text-[15px]">K-12 EDUCATION</p>
                <p className="font-normal text-[15px]">SOCIAL IMPACT</p>
                <p className="font-normal text-[15px]">CONTINUING EDUCATION</p>
                <p className="font-normal text-[15px]">GAMIFICATION</p>
            </div>
        </>
    )
}