const Rawprices = [
    25, 60, 120, 250, 500
];

const discounted = Rawprices.map((p) => {
    return p * 0.9 ;
});

discounted.forEach((price, index) => {
    console.log(`Price ${index + 1}: $${price}`)
});
