import type { Payfrom, Youpay } from './Type';

export const youpay: Youpay[] = [
  {
    name: 'USDT-CELO',
    image: '/assets/Images/USDT-CELO.png',
  },
  {
    name: 'USDT-TON',
    image: '/assets/Images/USDT-TON.png',
  },
  {
    name: 'USDT-BNB',
    image: '/assets/Images/USDT-BNB.png',
  },
  {
    name: 'ETH',
    image: '/assets/Images/ETH.png',
  },
];

export const payfrom : Payfrom[] = [
  {
    name: 'Metamask',
    image: '/assets/Images/meta.png',
  },
  {
    name: 'Rainbow',
    image: '/assets/Images/rainbow.png',
  },
  {
    name: 'WalletConnect',
    image: '/assets/Images/wallet.png',
  },
  {
    name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    image: "/assets/Images/others.svg"
  }
];

export const banks : string[]= [
  'Access Bank',
  'Citibank Nigeria',
  'Ecobank Nigeria',
  'Fidelity Bank',
  'First Bank of Nigeria',
  'First City Monument Bank (FCMB)',
  'Globus Bank',
  'Guaranty Trust Bank (GTBank)',
  'Heritage Bank',
  'Keystone Bank',
  'Kuda Bank',
  'Moniepoint Microfinance Bank',
  'Opay',
  'Palmpay',
  'Polaris Bank',
  'Providus Bank',
  'Stanbic IBTC Bank',
  'Standard Chartered Bank',
  'Sterling Bank',
  'SunTrust Bank',
  'Titan Trust Bank',
  'Union Bank of Nigeria',
  'United Bank for Africa (UBA)',
  'Unity Bank',
  'Wema Bank',
  'Zenith Bank'
]
