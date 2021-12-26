import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/user1.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                안녕하세요, <span> Front-end Developer 꿈인.</span>
              </p>
              <h2 className="about__heading">예비 개발자 김동원입니다.</h2>
              <div className="about__info">
                <PText>
                  좋은 개발자가 되기위해 갖추어야 한다고 생각하는 덕목을
                  말하라고하면 3가지가 떠오릅니다. 첫째, 유연한 소통능력
                  둘째,새로움을 받아들이는 능력 셋째, 하루를 정리하는 습관
                  3가지입니다.
                  <br /> <br />
                  이런이야기를 왜 적었느냐면, 저에게 있어 개발자란 직업에 대해
                  어떻게 생각하는지 어떤 성향의 개발자 자가 될것인지 스스로
                  자신에게 한번쯤은 물어보고 준비할수있는 개발자 라는것을
                  알려드리고싶습니다. 감사합니다
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">ABOUT ME</h1>

              <AboutInfoItem title="이름" items={['김동원']} />
              <AboutInfoItem title="생년월일" items={['94.03.14']} />
              <AboutInfoItem title="주소지" items={['서울특별시 금천구']} />
              <AboutInfoItem
                title="학력"
                items={[
                  '서울금융고등학교(사이버경영)졸업',
                  '장안대학(인터넷정보통신3년제)졸업',
                ]}
              />
              <AboutInfoItem title="경력사항" items={['신입']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem title="BackEnd" items={['Node', 'Express']} />
              <AboutInfoItem title="Design" items={['Photoshop']} />
              <AboutInfoItem title="DB" items={['MongoDB']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
