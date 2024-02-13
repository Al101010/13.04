export function calculateTotal (purchases) {
    return purchases.reduce((total, item) => {
        return total + (item.count * item.price);
    }, 0);
}



// export function calculateTotal (purchases) {
//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//         result += purchases[i].count * purchases[i].price;
//     }
//     return result;
// }



// function calculateTotal (purchases) {
//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//         result += purchases[i].count * purchases[i].price;
//     }
//     return result;
// }

// module.exports = {
//     calculateTotal
// }