import React from 'react';
import Theme from '../assets/styles/Theme';
import GlobalStyle from '../assets/styles/globalStyles';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

const Layout = ({ children, data = {} }) => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Container>{children}</Container>
      <Footer {...data?.allDatoCmsArticle} />
    </Theme>
  );
};

export default Layout;
