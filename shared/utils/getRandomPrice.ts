export const getRandomPrice = (min = 21, max = 33) => {
    return Number(Math.random() * (max - min + 1) + min).toFixed(2);
};
