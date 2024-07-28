
import { AnimatedoneD } from "../components/animated1d"
import ParticleRing from "../components/animatedCard"
import { Header } from "../components/header"

export const Dashboard=()=>{
    return <div className="">
        <Header/>
        <div className="bg-black h-lvh grid grid-cols-2">
            <div className="text-white items-center flex flex-col justify-center px-24">
                <div className="font-extrabold text-6xl items-center">Empowering Underprivileged Girls Through Education</div>
                <div className="pt-8 text-xl">Our mission is to provide access to quality education for girls in underserved communities, breaking the cycle of poverty and empowering them to reach their full potential.</div>
                
                
            </div>
            <div className="text-white items-center flex flex-col justify-center">
                <ParticleRing/>
            </div>
        </div>
        <div className="grid grid-cols-3 h-64 px-10 py-8">
            <div className="mx-8"><AnimatedoneD content={"80 girls taught"}/></div>
            <div className="mx-8"><AnimatedoneD/></div>
            <div className="mx-8"><AnimatedoneD/></div>
        </div>
        <div className="grid grid-cols-2 h-96 bg-white">
            <div className="border bottom-2 rounded-lg m-10 p-10">
                <div className="p-2 text-xl">Fatima, 17</div>
                <div className="p-2 font-light">"Before joining Connecting Dots, I had no idea what programming was. The dedicated mentors and comprehensive curriculum transformed my life. Today, I'm proud to be a Junior Developer at TechWave, where I contribute to exciting projects daily. Connecting Dots didn't just teach me coding; it empowered me with confidence and a bright future. I am eternally grateful for this life-changing opportunity."</div>
            </div>
            <div className="border bottom-2 rounded-lg m-10 p-10">
                <div className="p-2 text-xl">Ayesha Khan, 22</div>
                <div className="p-2 font-light">"Connecting Dots opened doors I never thought possible. Coming from a background where higher education was a dream, the hands-on software engineering training provided by the NGO gave me the skills needed to excel. Now, as a Full Stack Developer at Innovatech, I build applications that make a difference. The support and knowledge I gained from Connecting Dots have been instrumental in my success, proving that with the right guidance, anyone can achieve their dreams."</div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center h-64 px-10 py-8 bg-slate-200">
            <div className="text-3xl font-semibold p-2">Join Us in Empowering Girls</div>
            
            <div className="text-xl p-2 font-thin ">Your support can make a lasting difference in the lives of underprivileged girls. Donate or volunteer today to help us expand our reach and impact.</div>
            <div className="text-lg p-2 underline cursor-pointer">Join the community</div>
        </div>
    </div>
}