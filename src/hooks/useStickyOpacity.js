import { useState, useEffect } from "react";

/**
 * スクロールに応じて sticky 要素の opacity を制御するカスタムフック。
 *
 * @param {string} className - 対象となる要素のクラス名。
 * @param {number} [startOffset=0] - opacity の変化が開始するスクロール量。
 * @param {number} [endOffset=200] - opacity が 1 に達するスクロール量。
 * @returns {Object} - `style` オブジェクトを返し、コンポーネントに適用可能。
 */
const useStickyOpacity = (className, startOffset = 0, endOffset = 200) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${className}`);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const progress = Math.min(
          Math.max(
            (scrollPosition - startOffset) / (endOffset - startOffset),
            0
          ),
          1
        );
        setOpacity(progress);
      } else if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className, startOffset, endOffset]);

  return { style: { opacity } };
};

export default useStickyOpacity;
