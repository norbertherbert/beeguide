import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Trackers',
    description: (
      <>
        Device-specific docs for each tracker model, including hardware notes,
        behavior differences, and deployment recommendations.
      </>
    ),
  },
  {
    title: 'Payload Formats',
    description: (
      <>
        Decoding and encoding references for uplink messages and downlink
        commands with practical examples.
      </>
    ),
  },
  {
    title: 'Configuration and Integration',
    description: (
      <>
        Step-by-step setup guides covering tracker profiles, geolocation modes,
        ThingPark setup, and third-party LNS integration.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
