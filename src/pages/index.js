import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero--primary', styles.heroBanner)}>
          <div className="container">
              <Heading as="h1" className="hero__title">
                  {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                  <Link
                      className="button button--secondary button--lg"
                      to="/blog/index">
                      About Me
                  </Link>
              </div>
          </div>
      </header>
  );
}

/**
 * 标签页
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
