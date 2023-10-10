import React from 'react';
import Header from '../Components/Header';

function InnerLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}

export default InnerLayout;
