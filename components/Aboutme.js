import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-12 mb-16">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">About Me</h2>

      {/* 自己紹介 */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          こんにちは、Miraiです！2004年6月1日生まれ、千葉県船橋市出身で、現在は兵庫県神戸市に住んでいます。
        </p>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">活動内容</h3>
          <p>
            Webアプリ開発とプログラミングがメインで、C++, C, PHP, Java, JavaScript, Python, HTML5, CSS3, Node.js などを扱っています。
            C105コミックマーケットにも売り子として参加しました！
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">最近のマイブーム</h3>
          <p>カラオケ中毒</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">好きな食べ物</h3>
          <p>マカロンが大好き</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">苦手なもの</h3>
          <p>牛乳とキノコは苦手</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">その他</h3>
          <p>LINEスタンプ売ってます! <Link className="text-sky-600" href="https://store.line.me/stickershop/product/16944672/ja" target="line">こちらから</Link></p>
          <p>グッズもあるよ〜 <Link className="text-sky-600" href="https://medica-liz.booth.pm/" target="goods">こちらから</Link></p>
          <p>私がモデルになったキャラクターが出てくる小説があるらしいですよ! <Link className="text-sky-600" href="https://library.ayutsuki.net/works/amanets/index.html" target="yuiama">こちらから</Link></p>
          <p>↑の二次創作書いちゃいました <Link className="text-sky-600" href="https://www.pixiv.net/novel/series/13060320" target="diami">こちらから</Link></p>

        </div>
      </div>

      {/* ギャラリー */}
      <div className="grid grid-cols-3 gap-4 mt-20">
        {/* 縦長画像1 */}
        <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform">
          <Image
            src="/images/Medica_sm_bg2.png"
            alt="Liz"
            width={300}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>

        {/* 縦長画像2 */}
        <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform">
          <Image
            src="/images/mirai_v2.png"
            alt="Mirai"
            width={300}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>

        {/* 正方形画像を縦に並べる */}
        <div className="flex flex-col justify-between gap-4">
          <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform">
            <Image
              src="/images/mirai_v0.jpg"
              alt="Mirai by KoHto"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform">
            <Image
              src="/images/mirai_v1.png"
              alt="Mirai by KoHto"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
