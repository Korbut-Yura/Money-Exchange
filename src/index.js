// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = { };

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
 
    if (Math.floor(currency/50) > 0) {
        result.H = Math.floor(currency/50);
        currency = currency- result.H*50;
    }
    if (Math.floor(currency/25) > 0) {
     result.Q = Math.floor(currency/25);
     currency = currency- result.Q*25;
    }
    if (Math.floor(currency/10) > 0) {
     result.D = Math.floor(currency/10);
     currency = currency- result.D*10;
    }
    if (Math.floor(currency/5) > 0) {
     result.N = Math.floor(currency/5);
     currency = currency- result.N*5;
    }
    if (Math.floor(currency/1) > 0) {
     result.P = Math.floor(currency/1);
     currency = currency - result.P;
    }
    
    return result;
}
