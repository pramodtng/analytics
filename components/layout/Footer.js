import { useRouter } from 'next/router';
import Script from 'next/script';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Link from 'components/common/Link';
import styles from './Footer.module.css';

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <footer className={classNames(styles.footer, 'row')}>
      <div className="col-12 col-md-4" />
      <div className="col-12 col-md-4">
        <FormattedMessage
          id="message.powered-by"
          defaultMessage="Powered by {name}"
          values={{
            name: (
              <Link>
                <b>BlogSpot</b>
              </Link>
            ),
          }}
        />
      </div>
      {!pathname.includes('/share/') && <Script src={`/telemetry.js`} />}
    </footer>
  );
}
