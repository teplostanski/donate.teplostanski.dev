import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './App.module.scss';
import { GoCopy } from 'react-icons/go';
import { currencies } from './App.constants';

export default function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    console.log(JSON.stringify(currencies[index], null, 2));
    setTimeout(() => {
      setCopiedIndex(null);
    }, 4000);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.currency}>
        {currencies.map((currency, index) => (
          <div key={index} className={styles.card}>
            {copiedIndex === index ? (
              <div className={styles.address}>
                <div className={styles.message}>
                  <span className={styles.messageThin}>Copied! Network:</span>
                  <span className={styles.messageBold}>{currency.network}</span>
                </div>
              </div>
            ) : (
              <div className={styles.address}>
                <span>
                  {currency.name} ({currency.network})
                </span>
                <span className={styles.addressNumber}>
                  {formatAddress(currency.address)}
                </span>
              </div>
            )}
            <CopyToClipboard
              text={currency.address}
              onCopy={() => handleCopy(index)}
            >
              <button>
                <GoCopy size={18} color="#3a3a3a" />
              </button>
            </CopyToClipboard>
          </div>
        ))}
      </div>

      <div className={styles.links}>
        <a className={styles.link} href="mailto:teplostanski@yandex.ru">
          teplostanski@yandex.ru
        </a>
        <a className={styles.link} href="https://t.me/teplostanski/">
          t.me/teplostanski
        </a>
        <a className={styles.link} href="https://github.com/teplostanski/">
          github.com/teplostanski
        </a>
      </div>
    </div>
  );
}
