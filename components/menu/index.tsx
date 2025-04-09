'use client';
import Image from 'next/image';
import Link from 'next/link';

export const Menu: React.FC = (): React.ReactElement => {
  return (
    <div className="f4y__nav__container__menu">
      <div className="f4y__nav__container__menu__item">
        <Link href="/#home">
          <Image src="/images/logo.png" alt="logo" width={156} height={30} />
        </Link>
      </div>
      <div className="f4y__nav__container__menu__item">
        <Link href="/#brand">品牌介绍</Link>
      </div>
      <div className="f4y__nav__container__menu__item">
        <Link href="/#fun4lab">FUN4 LAB</Link>
      </div>
      <div className="f4y__nav__container__menu__item f4y__nav__container__menu__item--selected">
        <Link href="/zooplan">野生动物园计划</Link>
      </div>
    </div>
  );
};

export default Menu;
