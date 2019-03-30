const axios = require('axios');

var BTCprice = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')

//bitcoin
function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
        const BTC_cryptos = res.data.BTC.USD
        BTC_price.innerHTML = '$'+BTC_cryptos.toLocaleString('en')
    })
} 

//ethererum
function getETH(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
    .then(res => {
        const ETH_cryptos = res.data.ETH.USD
        ETH_price.innerHTML = '$'+ETH_cryptos.toLocaleString('en')
    })
}

//EOS
function getEOS()
{
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=EOS&tsyms=USD')
    .then(res => {
        const EOS_cryptos = res.data.EOS.USD
        EOS_price.innerHTML = '$'+EOS_cryptos.toLocaleString('en')
    })
}

//Litecoin
function getLTC()
{
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC&tsyms=USD')
    .then(res => {
        const LTC_cryptos = res.data.LTC.USD
        LTC_price.innerHTML = '$'+LTC_cryptos.toLocaleString('en')
    })
}

//XRP
function getXRP()
{
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP&tsyms=USD')
    .then(res => {
        const XRP_cryptos = res.data.XRP.USD
        XRP_price.innerHTML = '$'+XRP_cryptos.toLocaleString('en')
    })
}

//NEO
function getNEO()
{
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=NEO&tsyms=USD')
    .then(res => {
        const NEO_cryptos = res.data.NEO.USD
        NEO_price.innerHTML = '$'+NEO_cryptos.toLocaleString('en')
    })
}

function getCrypto()
{
    getBTC();
    getETH();
    getEOS();
    getLTC();
    getXRP();
    getNEO();
}

getCrypto();
setInterval(getCrypto(), 30000) //30000 ms = 30 seconds
