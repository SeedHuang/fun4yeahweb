import Image from 'next/image';
import React from 'react';
export const Team: React.FC = () => {
  return (
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
  );
};

export default Team;
