// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const HALF = 50;
    const QUATER = 25;
    const DIMES = 10;
    const NICKEL = 5;
    const PENNY = 1;

    let exchange = {"H": 0, "Q": 0, "D": 0, "N": 0, "P": 0};

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    if (currency < 0) {
        return {};
    }

    exchange.H = Math.trunc(currency/HALF);
    exchange.Q = Math.trunc((currency - exchange.H * HALF) / QUATER);
    exchange.D = Math.trunc((currency - exchange.H * HALF - exchange.Q * QUATER) / DIMES);
    exchange.N = Math.trunc((currency - exchange.H * HALF - exchange.Q * QUATER - exchange.D * DIMES) / NICKEL);
    exchange.P = Math.trunc((currency - exchange.H * HALF - exchange.Q * QUATER - exchange.D * DIMES
                            - exchange.N * NICKEL));

    exchange.H == 0 ? delete exchange['H'] : null;
    exchange.Q == 0 ? delete exchange['Q'] : null;
    exchange.D == 0 ? delete exchange['D'] : null;
    exchange.N == 0 ? delete exchange['N'] : null;
    exchange.P == 0 ? delete exchange['P'] : null;

    return exchange;
}
