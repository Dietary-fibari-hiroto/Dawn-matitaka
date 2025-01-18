import { Link } from "react-router-dom";

import React from "react";
import Header from "../components/Header";

import ImagesRoutes from "../assets/ImagesRoutes";
import Album from "../components/Album";

import UseOpacityAnimation from "../hooks/UseOpacityAnimation";
import Catch from "../components/Catch";
import Finder from "../components/Finder";

import useScrollActivation from "../hooks/useScrollActivation";
import useStickyOpacity from "../hooks/useStickyOpacity";

const Home = () => {
  const { style } = useStickyOpacity("sticky-target", 3000, 3300);
  const scrollActivation = useScrollActivation("scrollItem");
  const { AOStyle } = UseOpacityAnimation();
  return (
    <div className={`w-[100vw] `}>
      <Header />
      <Finder />
      {/**TOP */}
      <section
        className={`relative section-frame top-background text-white `}
        style={{
          backgroundImage: `url(${ImagesRoutes.manami_hydoro})`,
          backgroundPosition: "50% 45%",
        }}
      >
        <div
          className={`absolute z-[20] right-[15%] top-[50%] translate-y-[-50%] VDL-PenLetter text-[50px] max-sm:top-[30%] max-sm:right-[10%]`}
        >
          <div className="relative flex justify-center items-start w-[200px] h-[300px] ">
            <p
              className={`absolute top-0 left-0  text-vertical title-bg-style`}
            >
              街角の
            </p>
            <p className={`ml-[50px] text-vertical title-bg-style`}>
              たからもの。
            </p>
            <p
              className={`absolute bottom-0 right-0 text-vertical title-bg-style string-ss tracking-[5px] `}
            >
              Photo portfolio
            </p>
          </div>
        </div>
      </section>
      {/**TITLE */}
      <section
        className={`relative section-frame flex-all-center VDL-PenLetter text-black`}
      >
        <p
          className={`useAO ${AOStyle} string-sm z-[5]  overflow-x-hidden tracking-[10px]`}
        >
          街角のたからもの
        </p>
      </section>
      {/** EXSANPLE */}
      <section
        className="relative h-[500lvh]"
        style={{
          backgroundImage: `url(${ImagesRoutes.IMG_2713})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className={`sticky-target sticky top-0 z-5  h-[100lvh] flex `}
          style={{ ...style }}
        >
          <div className="flex-1"></div>
          <div className="flex-1 bg-[#000000] bg-opacity-50 backdrop-blur"></div>
        </div>
        <div className="h-[200lvh]"></div>
        {/* sticky が動作するよう修正 */}
        <div className="sticky z-10 top-0 flex justify-evenly items-center max-sm:flex-col sm:h-[100lvh] ">
          {/* 左側の要素 */}
          <div className="z-[5] max-sm:order-1 sm:flex-1 h-auto bg-black">
            {/* コンテンツ */}
          </div>

          {/* 右側の要素 */}
          <div className="space-y-[50px] max-sm:order-2 sm:flex-1 text-white px-[10px] h-full content-center">
            <p
              className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL text-center mx-[20px]`}
            >
              「街角のたからもの」って？
            </p>
            <p
              className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-center leading-10`}
            >
              「街角のたからもの」へようこそ。
              <br />
              趣味でカメラマンもやっている私のお写真のポートフォリオです。
              <br />
              普段撮影したお写真はInstagramに少し投稿するくらいだったのですが、
              <br />
              もっと魅力的に展示したいと思いこのサイトを作成しようと思い立ちました。
              <br />
              私がレンズ越しに捉えた景色とモデルの皆様の魅力的な表情を、
              <br />
              どうぞお楽しみください。
              <br />
              私が撮影するお写真が、誰かの好きになれますように
              <br />
            </p>
            <Link
              to="/about"
              className={` useAO flex justify-center items-center space-x-[10px]`}
            >
              <p className="string-sss A-OTF-Ryumin-Pr6N-L-KL">View more</p>
              <div className="relative flex justify-center items-center ">
                <div className="arrow-rod border-[#fff]"></div>
                <div className="arrow-right border-[#fff]"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/**ALBUM */}
      <section
        className={`relative A-OTF-Ryumin-Pr6N-L-KL section-frame flex items-center justify-start overflow-y-hidden`}
      >
        <div
          className={`z-[5] text-90rotate border-r border-black py-[150px] mx-[20px]`}
        >
          Album
        </div>
        <div
          className={`useAO ${AOStyle} z-[5] w-[90%] overflow-x-auto py-[10px]`}
        >
          準備中...
        </div>
      </section>

      <Catch Class={`useAO`} Style={AOStyle} />
      <section
        className={`relative my-[100px] space-y-[10px] flex justify-start space-x-[100px] items-center max-sm:flex-col`}
      >
        <figure className={` z-[5]`}>
          <img
            className={`useAO ${AOStyle} h-[80lvh]`}
            src={ImagesRoutes.IMG_manami1}
            alt="photo2"
          />
        </figure>
        <div className={`space-y-[50px] z-[6] flex-all-center`}>
          <p
            className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL border-b-black border-b-[3px] w-[100px] `}
          >
            Contact
          </p>
          <p
            className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-center leading-10 tracking-[3px] pl-[10px] space-y-[5px]`}
          >
            撮影依頼などのご連絡はProfile内に記載してあります
            <br />
            Instagram、または「hirorig11@gmail.com」で
            <br />
            お受けしております。
            <br />
            基本相互無償でご用意しております。
            <br />
            気軽にご連絡ください。
            <br />
          </p>
          <Link
            to="/about"
            className={`useAO ${AOStyle} flex justify-center arrow space-x-[10px]`}
          >
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
          <img
            className={`useAO ${AOStyle} w-[100px] h-[100px]`}
            src={ImagesRoutes.matitaka_wh}
            alt="logo"
          />
          <p className={`useAO ${AOStyle} text-white A-OTF-Ryumin-Pr6N-L-KL`}>
            Night shot
          </p>
        </div>
        <img
          className={`h-full w-full`}
          src={ImagesRoutes.IMG_4047}
          alt="photo4"
        />
      </section>
    </div>
  );
};

export default Home;
