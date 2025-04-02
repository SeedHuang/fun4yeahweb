/**
 * @description: Banner Item
 */
interface IBannerItemProps {
  /**
   * @description: 图片地址
   * @type {string}
   */
  src: string;
}

/**
 * @description: Banner Item
 * @param {IBannerItemProps} props - 组件属性
 */
export const Item: React.FC<IBannerItemProps> = ({
  src,
}): React.ReactElement => {
  return (
    <div className="f4y__banner__item">
      <img className="f4y__banner__item__img" src={src}></img>
    </div>
  );
};

export default Item;
