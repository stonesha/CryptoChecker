const axios = require('axios');

var BTCprice = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
        const BTC_cryptos = res.data.BTC.USD
        BTC_price.innerHTML = '$'+BTC_cryptos.toLocaleString('en')
    })
} 

function getETH(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
    .then(res => {
        const ETH_cryptos = res.data.ETH.USD
        ETH_price.innerHTML = '$'+ETH_cryptos.toLocaleString('en')
    })
}

getBTC();
getETH();