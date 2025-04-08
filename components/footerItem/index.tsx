'use client';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
export const FooterItem: React.FC<{
  title: string;
  url?: string;
  desc?: any;
  icon?: React.ReactNode;
}> = ({ title, url, desc, icon }) => {
  console.log(url, '>>>>>');
  return (
    <div className="f4y__footer__container__links__item__row">
      {(desc && (
        <Tooltip content={desc} placement="top">
          <div className="f4y__footer__container__links__item__row__container">
            {icon ?? <></>}
            {(url && <Link href={url}>{title}</Link>) || <span>{title}</span>}
          </div>
        </Tooltip>
      )) || (
        <div className="f4y__footer__container__links__item__row__container">
          {icon ?? <></>}
          {(url && <Link href={url}>{title}</Link>) || <span>{title}</span>}
        </div>
      )}
    </div>
  );
};
