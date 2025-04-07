/**
 * @description: Banner Item
 */
import Image from 'next/image';

interface IBannerItemProps {
  /**
   * @description: 图片地址
   * @type {string}
   */
  src: string;
  /**
   * @description: 图片标题
   * @type {string}
   */
  title?: string;
}

/**
 * @description: Banner Item
 * @param {IBannerItemProps} props - 组件属性
 */
export const Item: React.FC<IBannerItemProps> = ({
  src,
  title,
}): React.ReactElement => {
  return (
    <div className="f4y__banner__item">
      <Image
        src={src}
        alt={title || 'Banner image'}
        width={1920}
        height={800}
        className="banner-image"
        priority
      />
    </div>
  );
};

export default Item;
