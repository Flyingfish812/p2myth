import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { translate } from '@docusaurus/Translate';

function HomepageHeader() {
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
            to="/docs/intro">
            <translate>Let's Roll!</translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <html data-navbar='false' data-footer='false' background='True'>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <HomepageHeader />
      <main className={clsx(styles.center, styles.transparent)}>
        <div className={styles.center}>
          
        </div>
      </main>
      </body>
    </Layout>
    </html>
  );
}
