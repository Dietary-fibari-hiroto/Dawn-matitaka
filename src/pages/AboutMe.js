import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import ImagesRoutes from "../assets/ImagesRoutes";

import UseOpacityAnimation from "../hooks/UseOpacityAnimation";
import Catch from "../components/Catch";

const AboutMe = () => {
  const { AOStyle } = UseOpacityAnimation();
  const retouchImg = [ImagesRoutes.IMG_7804, ImagesRoutes.IMG_7804_2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % retouchImg.length);
    }, 4000);

    return () => clearInterval(interval);
  });
  return (
    <div className="w-[100vw] overflow-x-hidden ">
      <Header />
      <section
        className={`relative section-frame top-background text-white`}
        style={{ backgroundImage: `url(${ImagesRoutes.sakura})` }}
      >
        <div
          className={`absolute left-[20%] top-[50%] translate-y-[-50%] VDL-PenLetter flex items-start text-[50px]`}
        >
          <p>About me</p>
        </div>
      </section>
      {/**TITLE */}
      <section
        className={`relative section-frame flex-all-center VDL-PenLetter text-black`}
      >
        <div
          className={`absolute z-[3] top-[45%] right-[20%] w-[20vw] border-b border-black`}
        ></div>
        <div
          className={`absolute z-[3] bottom-[45%] left-[20%] w-[20vw] border-t border-black`}
        ></div>

        <div
          className={`rotating-animation absolute z-[3] top-[10%] left-[10%] w-[300px] h-[150px] bg-gradient-to-b from-[#00DCFF] to-[#FFEE00] blur-[50px] rounded-[50%] opacity-[50%]`}
        ></div>
        <div
          className={`rotating-animation absolute z-[3] bottom-[10%] right-[10%] w-[300px] h-[150px] bg-gradient-to-t from-[#00DCFF] to-[#FFA078] blur-[50px] rounded-[50%] opacity-[50%]`}
        ></div>

        <p className={`useAO ${AOStyle} text-[30px] z-[5] max-sm:text-[15px] `}>
          誰かにとって、大切な景色が街中にあふれている。
        </p>
      </section>

      {/** EXSANPLE */}
      <section
        className={`relative flex justify-around items-center max-sm:flex-col max-sm:space-y-[20px] my-[20px]`}
      >
        <div
          className={`rotating-animation absolute z-[3] top-[50%] left-[30%] w-[300px] h-[150px] bg-gradient-to-b from-[#BC78FF] to-[#3DBBFF] blur-[50px] rounded-[50%] opacity-[50%]`}
        ></div>

        <div className={`space-y-[50px] z-[6] max-sm:order-2 flex-all-center`}>
          <p
            className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL border-b-black border-b-[3px] w-[380px]`}
          >
            「街角のたからもの」とは？
          </p>
          <p
            className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-center leading-10 tracking-[3px] pl-[10px] space-y-[5px] `}
          >
            このポートフォリオサイトの名前は、
            <br />
            「誰かにとって大切な景色が街中にあふれている」
            <br />
            という言葉を別の表現に変換して名付けました。
            <br />
            一見なんでもない場所でも、この世界の誰かにとっては、
            <br />
            特別な意味を持つ景色であることを表しています。
            <br />
          </p>
        </div>
        <figure className={`z-[5] max-sm:order-1`}>
          <img
            className={`useAO ${AOStyle} h-[80lvh] rounded-[10px] max-sm:w-[250px]`}
            src={ImagesRoutes.manami_hydoro}
            alt="photo1"
          />
        </figure>
      </section>

      <section
        className={`relative flex justify-around items-center max-sm:flex-col max-sm:space-y-[20px]`}
      >
        <div
          className={`rotating-animation absolute z-[3] top-[50%] right-[30%] w-[300px] h-[150px] bg-gradient-to-b from-[#CCCCCC] to-[#3DBBFF] blur-[50px] rounded-[50%] opacity-[50%]`}
        ></div>

        <figure className={`z-[5]`}>
          <img
            className={`rounded-[10px] useAO ${AOStyle} h-[80lvh]`}
            src={ImagesRoutes.IMG_manami1}
            alt="photo2"
          />
        </figure>
        <div className={`space-y-[50px] z-[6] mx-[20px] flex-all-center`}>
          <p
            className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL border-b-black border-b-[3px] `}
          >
            撮影スタイル
          </p>
          <p
            className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-center leading-10 tracking-[3px] pl-[10px] space-y-[5px]`}
          >
            私は普段、写真を撮る際に特にテーマを決めず、
            <br />
            行き当たりばったりで撮影することが多いです。
            <br />
            もちろん、テーマを決めて撮影することもありますが、
            <br />
            基本的にはその時々の感覚でシャッターを切っています。
            <br />
            ポートレート撮影では、被写体の方としっかりコミュニケーションを取り、
            <br />
            リラックスしていただけるよう心がけています。
            <br />
          </p>
        </div>
      </section>
      <section
        className={`relative section-frame flex justify-evenly items-center max-md:flex-col min-h-[80lvh]`}
      >
        <div className={` space-y-[50px] z-[6] max-sm:order-2 flex-all-center`}>
          <p
            className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL border-b-black border-b-[3px]`}
          >
            レタッチ
          </p>
          <p
            className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-center leading-10 tracking-[3px] pl-[10px] space-y-[5px] mx-[20px]`}
          >
            レタッチには主にAdobe LightroomとPhotoshopを使用しています。
            <br />
            なんでもない写真を鮮やかに。をモットーに
            <br />
            撮影後は、写真の色調や明るさを調整し、
            <br />
            ふんわりとした柔らかな雰囲気を作り出すことを意識しています。
            <br />
            特に、光が少し漏れているような感じや、自然なハイライトを加えることで、
            <br />
            温かみのある印象を与えるようにレタッチしています。
            <br />
          </p>
        </div>
        <figure
          className={`max-sm:order-1 slideshow-container useAO ${AOStyle} z-[5] max-h-[80lvh] max-w-[60vw]  max-sm:max-w-[250px]`}
        >
          {retouchImg.map((image, index) => (
            <div
              key={index}
              className="slide h-full w-full rounded-[10px] max-sm:h-[400px]"
              style={{
                backgroundImage: `url(${image})`,
                animationDelay: `${index * 4}s`, // それぞれのスライドに異なる遅延を設定
              }}
            ></div>
          ))}
        </figure>
      </section>

      <section
        className={`relative flex justify-evenly items-center max-sm:flex-col max-sm:space-y-[20px] my-[20px]`}
      >
        <div
          className={`rotating-animation absolute z-[3] top-[50%] left-[30%] w-[300px] h-[150px] bg-gradient-to-b from-[#BC78FF] to-[#3DBBFF] blur-[50px] rounded-[50%] opacity-[50%]`}
        ></div>

        <figure className={`z-[5]`}>
          <img
            className={`useAO ${AOStyle} h-[80lvh]`}
            src={ImagesRoutes.IMG_4047}
            alt="photo1"
          />
        </figure>
        <div className={`space-y-[50px] z-[6] flex-all-center`}>
          <p
            className={`useAO ${AOStyle} string-md A-OTF-Ryumin-Pr6N-L-KLL border-b-black border-b-[3px]`}
          >
            Contact
          </p>
          <p
            className={`useAO ${AOStyle} A-OTF-Ryumin-Pr6N-L-KL string-ssm text-center leading-10 tracking-[3px] pl-[10px] space-y-[5px]`}
          >
            ご連絡、または撮影依頼は下記e-mail
            <br />
            かSNSからお待ちしております。
            <br />
            <br />
            Email:hirorig12@gmail.com
            <br />
          </p>
          <div
            className={`useAO ${AOStyle} flex justify-center arrow space-x-[10px]`}
          >
            <a
              href="https://www.instagram.com/hirotone.photo1357/"
              className={`relative flex justify-center items-center`}
            >
              <img
                className={`h-[50px] w-[50px]`}
                src={ImagesRoutes.Instagram_icon}
                alt="photo5"
              />
            </a>
          </div>
        </div>
      </section>

      <Catch Class={`useAO`} Style={AOStyle} />
    </div>
  );
};

export default AboutMe;
