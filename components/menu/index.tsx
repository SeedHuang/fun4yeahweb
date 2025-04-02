'use client';
import Link from 'next/link';

export const Menu: React.FC = (): React.ReactElement => {
  return (
    <div className="f4y__nav__container__menu">
      <div className="f4y__nav__container__menu__item">
        <Link href="/#home">首页</Link>
      </div>
      <div className="f4y__nav__container__menu__item">
        <Link href="/#brand">品牌介绍</Link>
      </div>
      <div className="f4y__nav__container__menu__item">
        <Link href="/#team">团队介绍</Link>
      </div>
      <div className="f4y__nav__container__menu__item">
        <Link href="/#fun4lab">FUN4 LAB</Link>
      </div>
      <div className="f4y__nav__container__menu__item f4y__nav__container__menu__item--selected">
        野生动物园计划
      </div>
    </div>
  );
};

export default Menu;
