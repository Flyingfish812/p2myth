import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { translate } from '@docusaurus/Translate';

function HomepageHeader({ onButtonClick }) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.fade_in)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.fade_in, styles.fade_in_delay)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.fade_in, styles.fade_in_delay)}
            to="/docs/intro"
            onClick={onButtonClick}>
            <Translate>Let's Roll!</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [attributes, setAttributes] = useState({
    navbar: 'False',
    footer: 'False',
    background: 'True',
  });

const handleButtonClick = () => {
  setAttributes({
    navbar: 'True',
    footer: 'True',
    background: 'False',
  });
};
  return (
    <html data-navbar={attributes.navbar} data-footer={attributes.footer} background={attributes.background}>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <HomepageHeader onButtonClick={handleButtonClick}/>
      <main className={clsx(styles.center, styles.transparent)}>
        <div className={styles.center}>
          
        </div>
      </main>
      </body>
    </Layout>
    </html>
  );
}
