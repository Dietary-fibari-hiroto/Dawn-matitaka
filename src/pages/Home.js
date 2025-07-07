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
import MoreViewButton from "../components/UI/MoreViewButton";

const Home = () => {
  const { style } = useStickyOpacity("sticky-target", 2500, 3500);
  const { AOStyle } = UseOpacityAnimation();
  return (
    <div className={`w-[100vw] UDDigiKyokashoProR`}>
      <Header />
      {/**TOP */}
      <section
        className={`relative section-frame top-background text-white `}
        style={{
          backgroundImage: `url(${ImagesRoutes.IMG_2855})`,
          backgroundPosition: "50% 45%",
        }}
      >
        <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-[-25%] A-OTF-Ryumin-Pr6N-L-KL string-md leading-[50px] tracking-[15px] text-start underline">
          <p>誰かにとって大切な景色が、</p>
          <p>そこら中に広がっている。</p>
          <p>そんなありふれる日常の一瞬を</p>
        </div>
        <p className="absolute bottom-0 right-0 string-big A-OTF-Ryumin-Pr6N-L-KL tracking-[50px]">
          DAWN
        </p>
      </section>
      {/**TITLE */}

      {/** EXSANPLE */}
      <section
        className="bg-fixed-option relative parallax h-[600lvh] bg-center max-sm:bg-[position:35%]"
        style={{
          backgroundImage: `url(${ImagesRoutes.IMG_2713})`,
        }}
      >
        <div
          className={`sticky-target sticky top-0 z-5  h-[100lvh] flex `}
          style={{ ...style }}
        >
          <div className="flex-1 max-lg:hidden"></div>
          <div className="flex-1 bg-[#00000088] bg-opacity-50 backdrop-blur-[20px]"></div>
        </div>
        <div className="h-[200lvh]"></div>
        {/* sticky が動作するよう修正 */}
        <div className="sticky z-10 top-0 flex justify-evenly items-center max-lg:flex-col h-[100lvh] ">
          {/* 左側の要素 */}
          <div className="z-[5] max-lg:order-1 lg:flex-1 h-auto bg-black">
            {/* コンテンツ */}
          </div>

          {/* 右側の要素 */}
          <div className="space-y-[50px] max-lg:order-2 lg:flex-1 lg:pl-[200px] text-white px-[10px] h-full content-center text-start">
            <p
              className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL x-[20px]`}
            >
              「街角のたからもの」って？
            </p>
            <p
              className={`color-line useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ss leading-10`}
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
            <MoreViewButton color="white" to="/about" />
          </div>
        </div>
      </section>

      {/**ALBUM */}
      <section className="relative flex justify-evenly items-center my-[100px] max-lg:flex-col overflow-x-hidden">
        <div className="absolute top-[10%] right-0 z-[1] w-[1200px] h-[500px] bg-[#F2F2F2]"></div>
        <div className="absolute bottom-[10%] left-0 z-[1] w-[1200px] h-[500px] bg-[#F2F2F2]"></div>
        <figure className="size-auto z-[3]">
          <img
            className="max-w-[600px] max-h-[800px]"
            src={ImagesRoutes.IMG_2722}
            alt=""
          />{" "}
        </figure>
        <div className=" z-[3] max-w-[600px] max-h-[800px]  max-lg:p-[50px] text-black text-start space-y-[50px]">
          <p className="string-llg  border-b border-b-black inline">
            煌々と光あふれる雰囲気で
          </p>
          <p className="color-line string-ss leading-[30px]">
            レタッチにはAdobe
            LightroomとPhotoshopを使用し、鮮やかで光があふれるような、やわらかな雰囲気を意識しています。特に、光が少し漏れているような感じや、自然なハイライトを加えることで、温かみのある印象を与えるようにレタッチしています。
          </p>
          <MoreViewButton color="black" to="/about" />
        </div>
      </section>

      <section className="flex flex-col items-start">
        <div className="relative flex items-center justify-evenly w-full">
          <div className="max-lg:absolute max-lg:top-[10%] max-lg:left-[10%]  relative w-[100px] h-[400px] max-lg:h-[300px] vertical-text string-sm tracking-[5px]">
            <p className="absolute top-0 right-0 color-line max-lg:bg-[#ffffffcc]">
              シンプルなのに
            </p>
            <p className="absolute bottom-0 left-0 color-line max-lg:bg-[#ffffffcc]">
              鮮やかな仕上がりを
            </p>
          </div>
          <figure className="size-auto">
            <img
              className="w-[870px] h-[1300px]"
              src={ImagesRoutes.IMG_2847}
              alt=""
            />
          </figure>
        </div>
      </section>
      <section className="block w-full overflow-x-hidden">
        <div className="relative bg-white my-auto  mt-[10%] pt-[50%] w-full">
          <img
            className="max-w-[900px] max-h-[600px] max-lg:w-[400px] z-[5] absolute top-0 left-[20%]"
            src={ImagesRoutes.IMG_2691}
            alt=""
          />
          <img
            className="absolute max-w-[700px] max-h-[1000px] max-lg:h-[400px] z-[6] right-0 top-[40%] max-lg:top-full"
            src={ImagesRoutes.IMG_2883}
            alt=""
          />
        </div>
        <div className="relative  my-auto  mt-[10%] pt-[70%] w-full max-sm:pt-[250%]">
          <img
            className="max-w-[600px] max-h-[900px] absolute top-0 left-[20%]  max-lg:h-[400px] max-lg:left-0 max-lg:top-[40%]"
            src={ImagesRoutes.IMG_28582}
            alt=""
          />
          <img
            className="absolute max-w-[900px] max-h-[600px] max-lg:w-[400px] right-[10%]  bottom-0 max-lg:right-0"
            src={ImagesRoutes.IMG_2675}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="text-start ml-[100px] my-[50px]">
          <p className="inline string-sm border-b border-b-black">Album</p>
          <p className="string-rg">撮影したお写真</p>
        </div>
        <div className=" px-[100px] space-x-[50px] w-full h-auto flex  flex-nowrap items-center overflow-x-scroll">
          <figure className="album-card-container">
            <img src={ImagesRoutes.IMG_3844} alt="" />
            <div className="bg-[#00000077] px-[50px] absolute bottom-[5%] right-[5%] text-white ">
              <p className="border-b border-b-white string-md">浴衣と君</p>
              <p className="string-ss">Location</p>
            </div>
          </figure>
          <figure className="album-card-container">
            <img src={ImagesRoutes.IMG_7909} alt="" />
          </figure>
          <figure className="album-card-container">
            <img src={ImagesRoutes.IMG_manami2} alt="" />
          </figure>
          <figure className="album-card-container">
            <img src={ImagesRoutes.IMG_manami2} alt="" />
          </figure>
        </div>
      </section>
      <section
        className="w-full h-[400px] my-[100px] bg-fixed-option"
        style={{
          backgroundImage: `url(${ImagesRoutes.IMG_2828})`,
        }}
      ></section>
      <section className="flex-all-center my-[100px]">
        <div className="flex-all-center space-y-[50px] bg-[#FFF8FB] p-[100px] max-lg:p-[10px] max-lg:w-[90vw]">
          <p className="section-title">ご依頼のご案内</p>
          <p className="w-[90%] text-start string-md border-l border-l-black">
            提供できるサービス
          </p>
          <p className="text-center string-ss leading-[50px]">
            ポートレート、ライブ撮影などの撮影、編集などを承っております。
            <br />
            基本的に相互無償です。ライブハウスなどの団体様の撮影は要相談でお願いします。
            <br />
            ＊＊＊ヌード、セミヌード、水着などの過度な露出のある服での撮影はお断りしております。＊＊＊
          </p>
          <div className="flex max-lg:flex-col items-center justify-center space-x-[50px] max-lg:space-y-[50px] max-lg:space-x-[0px]">
            <div className="flex-all-center text-center">
              <p className="string-sm">撮影</p>
              <img
                className="size-[128px]"
                src={ImagesRoutes.cam_icon}
                alt=""
              />
              <p className="max-w-[500px] string-ss">
                ポートレート撮影、ライブ撮影、ストロボを使わないナイトショットなどが可能です。被写体様とコミュニケーションをとり笑顔を引き出すことを意識して撮影しています。
              </p>
            </div>
            <div className="bg-black w-[3px] h-[300px] max-lg:w-[300px] max-lg:h-[3px]"></div>
            <div className="flex-all-center text-center">
              <p className="string-sm">レタッチ(編集作業)</p>
              <img
                className="size-[128px]"
                src={ImagesRoutes.edit_icon}
                alt=""
              />
              <p className="max-w-[500px] string-ss">
                色味あせることなくどこか光が飽和したようなふんわりと角のない優しい雰囲気に仕上げるのが得意です。ライブハウス写真の編集経験もあり照明などで癖のある色味のお写真も違和感のない写真に仕上げることができます。
              </p>
            </div>
          </div>
          <p className="w-[90%] text-start string-md border-l border-l-black">
            ご依頼について
          </p>
          <p className="text-center string-ss leading-[50px]">
            ご依頼は下記Instagram又はemailでお待ちしております。
            <br />
            Instagram:@hirotone.photo1357
            <br />
            email:hirorig12@gmail.com
            <br />
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
