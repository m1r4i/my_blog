import Link from 'next/link';

import matter from 'gray-matter';
import Post from '../components/Post';

const Awards = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 mt-5">
            <h2 className="text-2xl font-semibold mb-4">🏆 Awards</h2>
            <ul className="space-y-3">
                <li>🏆 Indie Games Contest 学生選手権2024 優秀賞 - コナミデジタルエンターテイメント</li>
                <li>🏆 ゲームクリエイター甲子園2024 総合賞 佳作 - ゲームクリエイターズギルド</li>
                <li>🏆 ゲームクリエイター甲子園2024 宮田大介賞 - ゲームクリエイターズギルド</li>
                <li>🏆 ゲームクリエイター甲子園2024 インテルⓇ Blue Carpet Project賞 - ゲームクリエイターズギルド</li>
                <li>🏆 2024年度 Switch2Dゲーム学内コンテスト 意欲賞 - HAL大阪</li>
                <li>🏆 2023年度 HAL EVENT WEEK 技術賞 - HAL大阪</li>
                <li>🏆 神ゲー創造主エボリューション2024 ファイナリスト - NHKエンタープライズ</li>
            </ul>
            <hr className="mt-5 mb-5" />
            <h2 className="text-2xl font-semibold mb-4">📘 Certifications</h2>
            <ul className="space-y-3">
                <li>📘 ネットワークスペシャリスト試験 - 独立行政法人 情報処理推進機構</li>
                <li>📘 応用情報技術者試験 - 独立行政法人 情報処理推進機構</li>
                <li>📘 Webデザイナー検定エキスパート - 公益財団法人 画像情報教育振興協会</li>
                <li>📘 CGクリエイター検定ベーシック - 公益財団法人 画像情報教育振興協会</li>
                <li>📘 CGエンジニア検定ベーシック - 公益財団法人 画像情報教育振興協会</li>
                <li>📘 マルチメディア検定ベーシック - 公益財団法人 画像情報教育振興協会</li>
                <li>📘 情報システム試験 基本スキル - 一般財団法人 職業教育・キャリア教育財団 </li>
                <li>📘 情報活用試験 1級 - 一般財団法人 職業教育・キャリア教育財団 </li>
            </ul>
        </div>
    );
};

export default Awards;
