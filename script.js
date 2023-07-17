/*
    Función para dar formato de moneda
*/

function format_currency ( num ) {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return currencyFormatter.format(num);
}

let response = format_currency(1822923.45);
console.log("🚀 ~ file: script.js:16 ~ response:", response)

