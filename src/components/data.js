
import bitcoinURL from '../assets/Bitcoin SV (BSV).png'
import EthereumURL from '../assets/Ethereum (ETH).png'
import SolanaURL from '../assets/Solana (SOL).png'
import BinanceURL from '../assets/Binance Coin (BNB).png'
import ShibaURL from '../assets/SHIBA INU (SHIB).png'
var coindata = {
    'BTC': {
        'name': 'Bitcoin (BTC)',
        'path': bitcoinURL,
        'price': 31812.80,
        'difference': 10,
        'tvl': 60000,
        'pairs': ['SOL', 'ETH', 'BUSD']
    },
    'SOL': {
        'name': 'Solana (SOL)',
        'path': SolanaURL,
        'price': 32.83,
        'difference': -12.32,
        'tvl': 60000,
        'pairs': ['BTC', 'ETH', 'BUSD']
    }
    ,
    'ETH': {
        'name': 'Ethereum (ETH)',
        'path': EthereumURL,
        'price': 1466.45,
        'difference': -11.93,
        'tvl': 60000,
        'pairs': ['SOL', 'BTC', 'BUSD']
    }
    , 'BUSD': {
        'name': 'Binance USB(BUSD)',
        'path': BinanceURL,
        'price': 1,
        'difference': 0.26,
        'tvl': 60000,
        'pairs': ['SOL', 'ETH', 'BUSD']
    }
    , 'SHB': {
        'name': 'Shiba Inu(SHIB)',
        'path': ShibaURL,
        'price': 0.000000000019148,
        'difference': -8.1,
        'tvl': 60000,
        'pairs': ['SOL', 'ETH', 'BUSD']
    }
}
export { coindata }