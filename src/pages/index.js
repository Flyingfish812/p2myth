import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    history.push("/docs/intro/"); // Navigate to the page
    window.location.reload(); // Refresh the page
  };
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.fade_in)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.fade_in, styles.fade_in_delay)}>
          <Translate>{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.fade_in, styles.fade_in_delay)}
            to="/docs/intro"
            onClick={handleButtonClick}>
            <Translate>Let's Roll!</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <html data-navbar="False" data-footer="False" background="True">
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to the Phoenix 2 Wiki Site! -Love from Myth Group Members">
      <body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <HomepageHeader/>
      <main className={clsx(styles.center, styles.transparent)}>
        <div className={styles.center}>
          
        </div>
      </main>
      </body>
    </Layout>
    </html>
  );
}
