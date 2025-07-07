import { useState, useEffect } from "react";

/**
 * スクロールに応じて sticky 要素の opacity を制御するカスタムフック。
 *
 * @param {string} className - 対象となる要素のクラス名。
 * @param {number} [startOffset=0] - opacity の変化が開始するスクロール量。
 * @param {number} [endOffset=200] - opacity が 1 に達するスクロール量。
 * @returns {Object} - `style` オブジェクトを返し、コンポーネントに適用可能。
 * 
 *   使用方法:const { style } = useStickyOpacity("sticky-target", 2500, 3500);
 
 */
const useStickyOpacity = (className, startOffset = 0, endOffset = 200) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 指定されたクラス名のエレメントを取得
      const element = document.querySelector(`.${className}`);

      // 要素が存在しない場合は何もしない
      if (!element) return;

      // 要素の位置やサイズに関する情報を取得
      const rect = element.getBoundingClientRect();

      // 現在のページのY軸方向のスクロール量を取得
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // rect.top: 要素の上端からビューポートの上端までの距離
      // 要素がビューポート内に表示されている場合
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // スクロール位置がどの程度進んでいるかを算出
        // (scrollPosition - startOffset) はスクロール位置の差
        // (endOffset - startOffset) はスクロール量の範囲
        const progress = Math.min(
          Math.max(
            (scrollPosition - startOffset) / (endOffset - startOffset), // 進行具合を0～1に正規化
            0 // 最小値は0
          ),
          1 // 最大値は1
        );

        // 進行具合に応じて opacity を設定
        setOpacity(progress);
      }
      // 要素がビューポートの外に出た場合（上部または下部）
      else if (rect.bottom < 0 || rect.top > window.innerHeight) {
        // ビューポートの外に出た場合は opacity を 0 に設定
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
