import { useEffect, useState } from "react";

const useScrollActivation = (className) => {
  const [scrollValue, setScrollValues] = useState({});

  const DetectionRate = 1;

  const handleScroll = () => {
    const sections = document.querySelectorAll(`.${className}`);
    const newScrollValues = {};
    sections.forEach((section, index) => {
      //各要素のビューポートないでの位置情報を取得
      const rect = section.getBoundingClientRect();
      //ビューポートの高さを取得
      const viewportHeight = window.innerHeight;

      //要素がビューポートないに少しでも表示されている場合の処理
      if (rect.top < viewportHeight && rect.bottom > 0) {
        //要素の高さを取得
        const elementHeight = rect.height;
        //要素がviewポートないいｎ表示されている範囲を計算
        const scrollableDistance =
          Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top);

        //要素のスクロール進捗を計算(0~1の範囲に正規化)
        const progress = Math.min(
          scrollableDistance / elementHeight,
          DetectionRate
        );

        //計算した進捗値を一時オブジェクトに格納
        newScrollValues[index] = progress * 2;
      } else {
        // 要素がビューポート外の場合、進捗は0とする

        newScrollValues[index] = 0;
      }
    });
    // 計算した進捗値を状態変数にセット
    setScrollValues(newScrollValues);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollValue;
};

export default useScrollActivation;
