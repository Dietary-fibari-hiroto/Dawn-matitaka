import { Link } from "react-router-dom"

import React from "react"
import Header from "../components/Header"

import ImagesRoutes from "../assets/ImagesRoutes"
import Album from "../components/Album"

import UseOpacityAnimation from "../hooks/UseOpacityAnimation"
import Catch from "../components/Catch"
import Finder from "../components/Finder"

const Home = () => {
    const { AOStyle } = UseOpacityAnimation();
    return (
        <div className={``}>
            <Header />
            <Finder />
            {/**TOP */}
            <section className={`relative section-frame top-background text-white `} style={{ backgroundImage: `url(${ImagesRoutes.manami_hydoro})`, backgroundPosition: '50% 45%' }}>
                <div className={`absolute z-[20] right-[15%] top-[50%] translate-y-[-50%] VDL-PenLetter text-[50px] max-sm:top-[30%] max-sm:right-[10%]`}>
                    <div className="relative flex justify-center items-start w-[200px] h-[300px] ">

                        <p className={`absolute top-0 left-0  text-vertical bg-[#FF6DCDA0]`}>街角の</p>
                        <p className={`ml-[50px] text-vertical bg-[#FF6DCDA0]`}>たからもの。</p>
                        <p className={`absolute bottom-0 right-0 text-vertical bg-[#FF6DCDA0] string-ss tracking-[5px] `}>Photo portfolio</p>

                    </div>
                </div>
            </section>
            {/**TITLE */}
            <section className={`relative section-frame flex-all-center VDL-PenLetter text-black`}>
                <div className={`absolute z-[3] top-[45%] right-[20%] w-[20vw] border-b border-black`}></div>
                <div className={`absolute z-[3] bottom-[45%] left-[20%] w-[20vw] border-t border-black`}></div>

                <div className={`rotating-animation absolute z-[3] top-[10%] left-[10%] w-[300px] h-[150px] bg-gradient-to-b from-[#00DCFF] to-[#FFEE00] blur-[50px] rounded-[50%] opacity-[50%]`}></div>
                <div className={`rotating-animation absolute z-[3] bottom-[10%] right-[10%] w-[300px] h-[150px] bg-gradient-to-t from-[#00DCFF] to-[#FFA078] blur-[50px] rounded-[50%] opacity-[50%]`}></div>

                <p className={`useAO ${AOStyle} string-rg z-[5]`}>街角のたからもの</p>
            </section>
            {/** EXSANPLE */}
            <section className={`relative section-frame flex justify-around items-center max-sm:flex-col`}>
                <div className={`rotating-animation absolute z-[3] top-[50%] left-[30%] w-[300px] h-[150px] bg-gradient-to-b from-[#BC78FF] to-[#3DBBFF] blur-[50px] rounded-[50%] opacity-[50%]`}></div>

                <div className={`space-y-[50px] z-[5] max-sm:order-2`}>
                    <p className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL`}>「街角のたからもの」って？</p>
                    <p className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-start border-l border-black pl-[10px] space-y-[5px] mx-[20px]`}>
                        「街角のたからもの」へようこそ。<br />
                        趣味でカメラマンもやっている私のお写真のポートフォリオです。<br />
                        普段撮影したお写真はInstagramに少し投稿するくらいだったのですが、<br />
                        もっと魅力的に展示したいと思いこのサイトを作成しようと思い立ちました。<br />
                        私がレンズ越しに捉えた景色とモデルの皆様の魅力的な表情を、<br />
                        どうぞお楽しみください。<br />
                        私が撮影するお写真が、誰かの好きになれますように
                    </p>
                    <Link to="/about" className={`useAO ${AOStyle} flex justify-center arrow space-x-[10px]`}>
                        <p className={`string-sss A-OTF-Ryumin-Pr6N-L-KL`}>View more</p>
                        <div className={`relative flex justify-center items-center`}>
                            <div className={`arrow-rod`}></div>
                            <div className={`arrow-right`}></div>
                        </div>

                    </Link>
                </div>
                <figure className={`useAO ${AOStyle} z-[5] max-sm:order-1`}>
                    <img className={`w-[300px]`} src={ImagesRoutes.IMG_manami3} alt="photo1" />
                </figure>
            </section>
            {/**ALBUM */}
            <section className={`relative A-OTF-Ryumin-Pr6N-L-KL section-frame flex items-center justify-start overflow-x-hidden`}>
                <div className={`rotating-animation absolute z-[3] bottom-[10%] right-[10%] w-[300px] h-[150px] bg-[#2EFF17] blur-[50px] rounded-[50%] opacity-[50%]`}></div>

                <div className={`z-[5] text-90rotate border-r border-black py-[150px] mx-[20px]`}>Album</div>
                <div className={`useAO ${AOStyle} z-[5] w-[90%] overflow-x-auto py-[10px]`}>準備中...</div>
            </section>


            <Catch Class={`useAO`} Style={AOStyle} />
            <section className={`relative section-frame flex justify-around items-center max-sm:flex-col`}>
                <div className={`rotating-animation absolute z-[3] top-[50%] left-[30%] w-[300px] h-[150px] bg-gradient-to-b from-[#BC78FF] to-[#3DBBFF] blur-[50px] rounded-[50%] opacity-[50%]`}></div>


                <figure className={`z-[5]`}>
                    <img className={`useAO ${AOStyle} h-[250px]`} src={ImagesRoutes.IMG_manami1} alt="photo2" />
                </figure>
                <div className={`space-y-[50px] z-[5]`}>
                    <p className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL`}>Contact</p>
                    <p className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-start border-l border-black pl-[10px] space-y-[5px]`}>
                        撮影依頼などのご連絡はProfile内に記載してあります<br />
                        Instagram、または「hirorig11@gmail.com」で<br />
                        お受けしております。<br />
                        基本相互無償でご用意しております。<br />
                        気軽にご連絡ください。<br />
                    </p>
                    <Link to="/about" className={`useAO ${AOStyle} flex justify-center arrow space-x-[10px]`}>
                        <p className={`string-sss A-OTF-Ryumin-Pr6N-L-KL`}>View more</p>
                        <div className={`relative flex justify-center items-center`}>
                            <div className={`arrow-rod`}></div>
                            <div className={`arrow-right`}></div>
                        </div>

                    </Link>
                </div>
            </section>


            <section className={`relative section-frame flex-all-center`}>
                <div className={`absolute z-[3] top-50% left-50% translate-1/2`}>
                    <img className={`useAO ${AOStyle} w-[100px] h-[100px]`} src={ImagesRoutes.matitaka_wh} alt="logo" />
                    <p className={`useAO ${AOStyle} text-white A-OTF-Ryumin-Pr6N-L-KL`}>Night shot</p>
                </div>
                <img className={`h-full w-full`} src={ImagesRoutes.IMG_4047} alt="photo4" />
            </section>

        </div>
    )
}

export default Home