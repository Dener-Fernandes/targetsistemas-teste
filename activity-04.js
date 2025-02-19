const revenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Others: 19849.53,
};

const total = Object.values(revenue).reduce(
  (acc, currentValue) => acc + currentValue,
  0
);

console.log("Percentage of representation for each state:\n");

for (const state in revenue) {
  const percentage = (revenue[state] / total) * 100;
  console.log(`${state}: ${percentage.toFixed(2)}%`);
}
