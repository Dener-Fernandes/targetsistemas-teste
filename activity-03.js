const fs = require("fs");

fs.readFile("revenue.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error when reading the file:", err);
    return;
  }

  const { revenue } = JSON.parse(data);

  const validRevenue = revenue.filter((value) => value !== null);

  const lowestRevenue = Math.min(...validRevenue);
  const highestRevenue = Math.max(...validRevenue);

  const totalRevenue = validRevenue.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  const monthlyAverage = totalRevenue / validRevenue.length;

  const daysAboveAverage = validRevenue.filter(
    (value) => value > monthlyAverage
  ).length;

  console.log(`Lowest daily revenue: $ ${lowestRevenue.toFixed(2)}`);

  console.log(`Highest daily revenue: $ ${highestRevenue.toFixed(2)}`);

  console.log(
    `Number of days with revenue above the monthly average: ${daysAboveAverage}`
  );
});
