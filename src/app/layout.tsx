import Menu from '@components/menu';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaChrome, FaWeibo, FaWeixin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import './globals.css';
import './layout.scss';

export const metadata: Metadata = {
  title: 'Fun 4 Yeah',
  description: 'Fun 4 Yeah',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="f4y__nav">
          <div className="f4y__nav__container">
            <div className="f4y__nav__container__logobar">
              <Image
                className="f4y__nav__container__logobar__logo"
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
              />
            </div>
            <Menu />
          </div>
        </header>
        <div className="f4y__body__scroll">
          {children}
          <footer className="f4y__footer">
            <div className="f4y__footer__container">
              <Image
                className="f4y__footer__container__logo"
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
              />
              <div className="f4y__footer__container__links">
                <div className="f4y__footer__container__links__item">
                  <h3>关于</h3>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#home">公司介绍</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#brand">品牌理念</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#team">团队介绍</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#fun4lab">最新公告</Link>
                  </div>
                </div>
                <div className="f4y__footer__container__links__item">
                  <h3>关于产品</h3>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#home">作品展示</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#brand">在线商城</Link>
                  </div>
                </div>
                <div className="f4y__footer__container__links__item">
                  <h3>资源</h3>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#home">IP LIBRARY</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#brand">设计师和合作招募</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#team">Ant Cool</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <Link href="/#fun4lab">AntD Library</Link>
                  </div>
                </div>
                <div className="f4y__footer__container__links__item">
                  <h3>关注</h3>
                  <div className="f4y__footer__container__links__item__row">
                    <FaWeixin size={18} color="#fff" />
                    <Link href="/#brand">FUN4YEAH</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <FaWeibo size={18} color="#fff" />
                    <Link href="/#brand">FUN4YEAH</Link>
                  </div>
                  <div className="f4y__footer__container__links__item__row">
                    <FaChrome size={18} color="#fff" />
                    <Link href="/#brand">FUN4YEAH</Link>
                  </div>
                </div>
              </div>
              <div className="f4y__footer__container__location">
                <div className="f4y__footer__container__location__image">
                  <Image
                    src="/images/location.png"
                    alt="Location"
                    width={386}
                    height={265}
                  />
                  <div className="f4y__footer__container__location__contactus">
                    <h3 className="f4y__footer__container__location__contactus__title">
                      联系我们
                    </h3>
                    <div
                      className="f4y__footer__container__location__contactus__row"
                      style={{ top: '97px' }}
                    >
                      <MdEmail size={18} color="#1A1A1A" />
                      <span className="f4y__footer__container__location__contactus__row__text">
                        上海市黄浦区瑞金二路272号502室
                      </span>
                    </div>
                    <div
                      className="f4y__footer__container__location__contactus__row"
                      style={{ top: '127px' }}
                    >
                      <MdLocationOn size={18} color="#1A1A1A" />
                      <span className="f4y__footer__container__location__contactus__row__text">
                        400-8888-9999
                      </span>
                    </div>
                    <div
                      className="f4y__footer__container__location__contactus__row"
                      style={{ top: '157px' }}
                    >
                      <MdPhone size={18} color="#1A1A1A" />
                      <span className="f4y__footer__container__location__contactus__row__text">
                        fei@fun4yeah.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
