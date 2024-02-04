/* eslint-disable max-len */
// Siga as orientações do README!

// 4
const createMenu = (parametro) => {
    let consumption = [];
    return {
        fetchMenu() {
            return {
                food: parametro.food,
                drinks: parametro.drinks,
            };
        },
        // 6
        consumption,
        order(parametroOrder) {
            if (parametroOrder in parametro.food
                || parametroOrder in parametro.drinks) {
                consumption.push(parametroOrder);
            } else {
                return 'Item indisponível';
            }
        },
        pay() {
            let valorTotal = 0;
            for (let i = 0; i < consumption.length; i += 1) {
                if (consumption[i] in parametro.food) {
                    valorTotal += parametro.food[consumption[i]] * 1.1;
                }
                if (consumption[i] in parametro.drinks) {
                    valorTotal += parametro.drinks[consumption[i]] * 1.1;
                }
            }
            let valorFinal = valorTotal.toFixed(2);
            return valorFinal;
        },
    };
};

module.exports = createMenu;
