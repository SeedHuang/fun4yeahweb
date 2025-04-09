import Banner from '@components/banner';
import Image from 'next/image';
import './page.scss';
// import { Switch, NavBar, Checkbox, Radio, Input } from "antd-mobile";

export default function Home() {
  const srcs = ['/images/poster1.png'];
  return (
    <div className="f4y__home" id="home">
      <div className="f4y__banner">
        <Banner srcs={srcs} />
      </div>
      <div className="f4y__home__band" id="brand">
        <h2 className="f4y__home__band__title">品牌介绍</h2>
        <p className="f4y__home__band__desc">
          放肆耶 FUN4YEAH
          <br />
          一个为年轻人而生的、有趣的、态度鲜明的文创消费品牌。
          <br />
          我们专注于打造高品质、有创意、富有表达力的IP衍生品。无论是徽章、毛绒、饰品、文具，还是限定收藏品，我们都希望它不仅仅是一件商品，更是一种情绪的载体，一种个性的延伸。
          <br />
          “放肆”是表达的自由，“耶”是情绪的释放。
          <br />
          FUN4YEAH代表的是当代年轻人敢于表达、乐于分享、不被定义的生活方式。
          <br />
          我们相信，在快节奏与高压的日常中，每个人都需要一份有趣的出口。而我们的存在，就是为这种“有趣”赋予实体、为快乐赋能。
        </p>
        <div className="f4y__home__band__cards">
          <div className="f4y__home__band__cards__item">
            <div className="f4y__home__band__cards__item__word">M</div>
            <label className="f4y__home__band__cards__item__title">
              MISSION
            </label>
            <span className="f4y__home__band__cards__item__desc">
              我们因爱而生
            </span>
          </div>
          <div className="f4y__home__band__cards__item">
            <div className="f4y__home__band__cards__item__word">V</div>
            <label className="f4y__home__band__cards__item__title">
              VISION
            </label>
            <span className="f4y__home__band__cards__item__desc">
              为IP创造价值
            </span>
          </div>
          <div className="f4y__home__band__cards__item">
            <div className="f4y__home__band__cards__item__word">V</div>
            <label className="f4y__home__band__cards__item__title">VALUE</label>
            <span className="f4y__home__band__cards__item__desc">
              追求有趣，勇敢无畏
            </span>
          </div>
        </div>
      </div>
      <div className="f4y__home__lab" id="fun4lab">
        <h2 className="f4y__home__lab__title">FUN4 LAB</h2>
        <h2 className="f4y__home__lab__subtitle">设计故事于作品展示</h2>
        <div className="f4y__home__lab__items">
          <div className="f4y__home__items__item">
            <Image
              src="/images/d1.png"
              alt="设计故事与作品展示MOMO"
              width={300}
              height={400}
              quality={100}
            />
          </div>
          <div className="f4y__home__items__item">
            <Image
              src="/images/d2.png"
              alt="设计故事与作品展示SWEET7"
              width={300}
              height={400}
              quality={100}
            />
          </div>
          <div className="f4y__home__items__item">
            <Image
              src="/images/d3.png"
              alt="设计故事与作品展示FROG"
              width={300}
              height={400}
              quality={100}
            />
          </div>
          <div className="f4y__home__items__item">
            <Image
              src="/images/d4.png"
              alt="设计故事与作品展示LOOKUP"
              width={300}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="f4y__home__library">
        <h2 className="f4y__home__library__title">IP LIBRARY</h2>
        <h2 className="f4y__home__library__subtitle">开放合作资源</h2>
        <div className="f4y__home__library__items">
          <div className="f4y__home__library__items__item">
            <Image
              src="/images/l1.png"
              alt="IP LIBRARY"
              width={300}
              height={200}
              quality={100}
            />
          </div>
          <div className="f4y__home__library__items__item">
            <Image
              src="/images/l2.png"
              alt="IP LIBRARY"
              width={300}
              height={200}
              quality={100}
            />
          </div>
          <div className="f4y__home__library__items__item">
            <Image
              src="/images/l3.png"
              alt="IP LIBRARY"
              width={300}
              height={200}
              quality={100}
            />
          </div>
          <div className="f4y__home__library__items__item">
            <Image
              src="/images/l4.png"
              alt="IP LIBRARY"
              width={300}
              height={200}
              quality={100}
            />
          </div>
          <div className="f4y__home__library__items__item">
            <Image
              src="/images/l5.png"
              alt="IP LIBRARY"
              width={300}
              height={200}
              quality={100}
            />
          </div>
        </div>
        <div className="f4y__home__library__more">了解更多行业</div>
      </div>
    </div>
  );
}
