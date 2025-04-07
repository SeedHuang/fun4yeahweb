import Banner from '@components/banner';
import Image from 'next/image';
import './page.scss';
// import { Switch, NavBar, Checkbox, Radio, Input } from "antd-mobile";

export default function Home() {
  const srcs = [
    '/images/poster1.png',
    '/images/poster2.jpg',
    '/images/poster3.jpg',
  ];
  return (
    <div className="f4y__home" id="home">
      <div className="f4y__banner">
        <Banner srcs={srcs} />
      </div>
      <div className="f4y__home__band" id="brand">
        <h2 className="f4y__home__band__title">品牌介绍</h2>
        <p className="f4y__home__band__desc">
          凭借自主研发的实时串流、容器和云边协同的弹性调度等核心技术，以及覆盖全球的云算力节点、企业级的服务能力，
          为客户打造最佳的实时互动计算体验，为元宇宙发展提供稳定基础设施和核心技术能力。
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
      <div className="f4y__home__team" id="team">
        <h2 className="f4y__home__team__title">团队介绍</h2>
        <div className="f4y__home__team__board">
          <div className="f4y__home__team__board__members">
            <div className="f4y__home__team__board__members__person">
              <div className="f4y__home__team__board__members__person__avator">
                <Image
                  src="/images/e1.png"
                  alt="designer"
                  width={130}
                  height={130}
                  quality={100}
                />
              </div>
              <div className="f4y__home__team__board__members__person__position">
                <div className="f4y__home__team__board__members__person__position__c"></div>
                <div className="f4y__home__team__board__members__person__position__name">
                  设计
                </div>
              </div>
            </div>
            <div className="f4y__home__team__board__members__person">
              <div className="f4y__home__team__board__members__person__avator">
                <Image
                  src="/images/e2.png"
                  alt="developer"
                  width={130}
                  height={130}
                  quality={100}
                />
              </div>
              <div className="f4y__home__team__board__members__person__position">
                <div className="f4y__home__team__board__members__person__position__c"></div>
                <div className="f4y__home__team__board__members__person__position__name">
                  策划
                </div>
              </div>
            </div>
            <div className="f4y__home__team__board__members__person">
              <div className="f4y__home__team__board__members__person__avator">
                <Image
                  src="/images/e3.png"
                  alt="band"
                  width={130}
                  height={130}
                  quality={100}
                />
              </div>
              <div className="f4y__home__team__board__members__person__position">
                <div className="f4y__home__team__board__members__person__position__c"></div>
                <div className="f4y__home__team__board__members__person__position__name">
                  品牌
                </div>
              </div>
            </div>
            <div className="f4y__home__team__board__members__person">
              <div className="f4y__home__team__board__members__person__avator">
                <Image
                  src="/images/e4.png"
                  alt="planning"
                  width={130}
                  height={130}
                  quality={100}
                />
              </div>
              <div className="f4y__home__team__board__members__person__position">
                <div className="f4y__home__team__board__members__person__position__c"></div>
                <div className="f4y__home__team__board__members__person__position__name">
                  策划
                </div>
              </div>
            </div>
          </div>
          <div className="f4y__home__team__board__desc">
            创始团队在IP衍生品行业深耕多年，拥有丰富的商品设计与开发经验，在痛包、毛绒、3C数码等品类上，打造过多款国内ACG行业的现象级产品，深受消费者喜爱。
            <span className="f4y__home__team__board__desc__import">
              【过去已去，将至已至，远方不远，唯变不变】
            </span>
            这一次，带着热爱的力量，我们重新出发，将再次与你们相遇。
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
