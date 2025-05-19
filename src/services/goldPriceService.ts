import axios from 'axios';

export interface GoldPrice {
  key: string;
  buy: string;
  sell: string;
  percent: string;
  arrow: 'up' | 'down';
  last_update: string;
}

const options = {
  method: 'GET',
  url: 'https://cors-anywhere.herokuapp.com/https://harem-altin-live-gold-price-data.p.rapidapi.com/harem_altin/prices',
  headers: {
    'x-rapidapi-key': 'f1a0ebe80amsh22ff0f20a9f5d65p15a04ejsn7d5092e7269a',
    'x-rapidapi-host': 'harem-altin-live-gold-price-data.p.rapidapi.com',
    'Origin': 'http://localhost:3000'
  }
};

// Demo veri
const demoPrices: GoldPrice[] = [
  {
    key: 'GRAM ALTIN',
    buy: '4.080,08',
    sell: '4.158,61',
    percent: '2.27',
    arrow: 'up',
    last_update: '20.05.2025 00:11:20'
  },
  {
    key: 'YENİ ÇEYREK',
    buy: '6.684',
    sell: '6.784',
    percent: '1.85',
    arrow: 'up',
    last_update: '20.05.2025 00:11:20'
  },
  {
    key: 'YENİ YARIM',
    buy: '13.368',
    sell: '13.568',
    percent: '1.85',
    arrow: 'up',
    last_update: '20.05.2025 00:11:20'
  },
  {
    key: 'YENİ TAM',
    buy: '26.654',
    sell: '27.053',
    percent: '1.84',
    arrow: 'up',
    last_update: '20.05.2025 00:11:21'
  },
  {
    key: 'GÜMÜŞ TL',
    buy: '40,334',
    sell: '42,200',
    percent: '4.54',
    arrow: 'up',
    last_update: '20.05.2025 00:11:22'
  },
  {
    key: 'ONS',
    buy: '3.230,2',
    sell: '3.230,5',
    percent: '0.85',
    arrow: 'up',
    last_update: '20.05.2025 00:11:19'
  }
];

export async function getGoldPrices(): Promise<GoldPrice[]> {
  try {
    // API çağrısı başarısız olursa demo veriyi kullan
    const response = await axios.request(options);
    const prices = response.data[0];
    if (Array.isArray(prices)) {
      return prices;
    }
    return demoPrices;
  } catch (error) {
    console.error('Altın fiyatları alınamadı, demo veri kullanılıyor:', error);
    return demoPrices;
  }
}

// Önemli altın türlerini filtrele
export function getImportantGoldPrices(prices: GoldPrice[]): GoldPrice[] {
  const importantTypes = [
    'GRAM ALTIN',
    'YENİ ÇEYREK',
    'YENİ YARIM',
    'YENİ TAM',
    'GÜMÜŞ TL',
    'ONS'
  ];
  
  return prices.filter(price => importantTypes.includes(price.key));
} 