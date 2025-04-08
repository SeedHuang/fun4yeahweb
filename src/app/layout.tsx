import { FooterItem } from '@components/footerItem';
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
  icons: {
    icon: '/favicon.ico', // 基本图标
    shortcut: '/favicon.ico', // 快捷方式图标
    apple: '/apple-icon.png', // iOS设备
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
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
                  <FooterItem
                    title="FUN4YEAH"
                    desc={
                      <div className="f4y__footer__container__links__item__row__desc__img">
                        <Image
                          src="/images/wechat.jpg"
                          alt="wechat"
                          width={300}
                          height={300}
                        />
                      </div>
                    }
                    icon={<FaWeixin size={18} color="#fff" />}
                  />
                  <FooterItem
                    title="FUN4YEAH"
                    url="https://weibo.com/u/7970966421"
                    icon={<FaWeibo size={18} color="#fff" />}
                  />
                  <FooterItem
                    title="FUN4YEAH"
                    url="https://www.xiaohongshu.com/user/profile/673f38e3000000001100a585"
                    icon={<FaChrome size={18} color="#fff" />}
                  />
                </div>
              </div>
              <div className="f4y__footer__container__location">
                <div className="f4y__footer__container__location__image">
                  <Image
                    src="/images/location.jpg"
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
                        上海市黄浦区
                      </span>
                    </div>
                    <div
                      className="f4y__footer__container__location__contactus__row"
                      style={{ top: '127px' }}
                    >
                      <MdLocationOn size={18} color="#1A1A1A" />
                      <span className="f4y__footer__container__location__contactus__row__text">
                        021-63300889
                      </span>
                    </div>
                    <div
                      className="f4y__footer__container__location__contactus__row"
                      style={{ top: '157px' }}
                    >
                      <MdPhone size={18} color="#1A1A1A" />
                      <span className="f4y__footer__container__location__contactus__row__text">
                        business@fun4yeah.com
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
