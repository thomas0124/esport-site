import React from 'react';

const TournamentInfo: React.FC = () => {
return (
<div className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">名城大学 大学祭スマブラトーナメント</h1>
    <div className="mb-4">
        <h2 className="text-xl font-bold">大事なこと</h2>
        <p>スマブラの大会に慣れてない人も楽しめるような大会を目指しています。</p>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-bold">ルール説明</h2>
        <ul className="list-disc pl-6">
        <li>形式: BO3 シングルエリミネーショントーナメント（決勝戦のみ BO5）</li>
        <li>乱闘の設定: 乱闘のルールは「名城大学祭」を選択</li>
        <li>ステージ選択ルール:
            <ul className="list-disc pl-6">
                <li>1戦目に選べるステージ：終点・戦場・小戦場・ポケモンスタジアム2・ホロウバスティオン</li>
                <li>2戦目以降に選べるステージ：村と街・すま村</li>
            </ul>
        </li>
        <li>対戦の流れ:
            <ol className="list-decimal pl-6">
                <li>じゃんけんをする</li>
                <li>じゃんけんに負けた方が2ステージ拒否する</li>
                <li>じゃんけんに勝った方が拒否されたステージ以外から選択</li>
                <li>2戦目以降は試合に勝った方が2ステージ拒否する</li>
            </ol>
        </li>
        </ul>
    </div>
    <div className="mb-4">
        <h2 className="text-xl font-bold">注意事項</h2>
        <ul className="list-disc pl-6">
            <li>13時30分に試合前点呼を行います。それまでには教室にいてください。</li>
            <li>トーナメント開始前に再度ルール説明を行います。</li>
            <li>わからないことがあれば、X(Twitter)公式アカウント<a href="https://x.com/meijo_esclub?s=20" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">@meijo_esclub</a>、もしくはその場にいるスタッフにお声かけください。</li>
            </ul>
    </div>
    <div className="mt-6">
        <p>以上のルール確認を終えた方は<a href="https://docs.google.com/forms/d/e/1FAIpQLSeB23jiTlbL75sf8lzuvBuvdzZuzaDANNa9ikRTT3ZHiTkbNA/viewform?usp=sf_link" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">こちらのURLからエントリーを行ってください。</a></p>
    </div>
</div>
);
};

export default TournamentInfo;
