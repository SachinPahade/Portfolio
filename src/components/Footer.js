import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
    justify-content: space-around;
  }
  .footer__col1 {
    flex: 3;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 2;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  .para {
    width: 100;
    margin-left: 0;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sachin Pahade</h1>
          <PText>A freelance web designer and developer.</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 9200004888',
              },
              {
                title: 'sachin.pahade888@gmail.com',
              },
            ]}
          />
        </div>
        {/* <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div> */}
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Sachin Pahade | Designed By Sachin</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
