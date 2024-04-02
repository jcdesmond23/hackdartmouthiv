export default function FAQ({title, content}:{title: string, content: string}) {
    return (
        <div className="w-full sm:w-auto mb-5 sm:mb-20">
            <div className="grid flex">
                <h1 className="text-base sm:text-xl text-white font-avant-garde-lt font-bold col-start-1 row-start-1">{title}</h1>
                <h1 className="text-base sm:text-xl text-white font-avant-garde-lt font-bold blur-sm col-start-1 row-start-1">{title}</h1>
            </div>
            <div className="text-base sm:text-xl text-white font-avant-garde pt-3 max-w-md block">
                <p className="text-[#EEE9D7] text-sm sm:text-base">{content}</p>
            </div>
        </div>
    );
}