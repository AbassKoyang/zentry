import BentoCard from "./BentoCard";

const Features = () => {
    return(
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-[15.5px] text-blue-50">Explore the Zentry Universe</p>
                    <p className="max-w-md font-circular-web text-[15.5px] text-blue-50 opacity-50">Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy.</p>
                </div>
            </div>
            <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard
                src='/videos/feature-1.mp4'
                description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
                isComingSoon
                title={<>radia<b>n</b>t</>}
                />
            </div>
        </section>
    )
};
export default Features;