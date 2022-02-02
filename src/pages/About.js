import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/hero1.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding-top: 20rem;
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
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 910px) {
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
                Hi, I am <span>Sachin Pahade</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  Passionate to learn new technologies and excel innovative
                  technology application. Seeking a challenging, which will
                  enable me to continuously learn, create, innovate and
                  simultaneously contribute to the short and long term goals of
                  the organization.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Collage"
                items={['Rajiv Gandhi Proudyogiki Mahavidhyalaya Bhopal']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['Rajiv Gandhi Proudyogiki Vishwavidyalaya']}
              />
              <AboutInfoItem
                title="School"
                items={['Nasirabad Govt. High School, Chattogram']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Programming Skills"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="Development tools"
                items={['Visual Studio Code ', 'GitHub', 'JIRA']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Previous Experiences</h1>

              <AboutInfoItem title="2016-2018" items={['']} />
              <AboutInfoItem title="2018-2019" items={['']} />
              <AboutInfoItem title="2019-2020" items={['']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
