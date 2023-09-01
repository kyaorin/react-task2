// pages/helthcheck.jsx

// 🔽 追加
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Helthcheck = () => {
    // 🔽 追加
    const [helthcheckResult, setHelthcheckResult] = useState("");
    
// 🔽 追加
  const getHelthcheck = () => {
    const result = ["自分の理想に向かって直進する！あなたは、「キャリアマスター」", "理想までもう一歩。あなたは、「キャリアの途上戦士」", "人生の岐路に立っているあなたは、まさに「キャリアのクロスロード」", "今のあなたは、人生に迷える「キャリアの模索者」", "一度立ち止まって自分と向き合おう。今こそ「キャリアの原点回帰」"][
      Math.floor(Math.random() * 5)
    ];
      console.log(result);
      // 🔽 追加
    setHelthcheckResult(result);
  };

  return (
    <>
          <p>キャリアの命名診断</p>
          {/* 🔽 編集 */}
          <ActionButton text="診断をする" action={getHelthcheck} />
          {/* 🔽 追加 */}
      <h2>{helthcheckResult}</h2>
    </>
  );
};