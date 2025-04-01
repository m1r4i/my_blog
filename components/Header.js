import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <>
      {/* 上部背景＋ナビゲーション */}
      <section
        className="relative h-[60vh] bg-cover bg-top"
        style={{ backgroundImage: 'url("/images/Medica_bg.png")' }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/5 to-transparent z-0" />

        {/* ナビゲーション */}
        <header className="sticky top-0 left-0 transform z-10 w-full px-6 py-3 border border-white/20 bg-white/60 backdrop-blur-sm shadow-lg flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-black text-xl font-bold tracking-wide hover:text-black-200 transition">
              About me, Mirai.
            </a>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com/mlr4i" target="_blank" legacyBehavior>
              <a className="text-sky-500 hover:text-sky-600 transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>
            <Link href="https://github.com/m1r4i" target="_blank" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800 transition">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
