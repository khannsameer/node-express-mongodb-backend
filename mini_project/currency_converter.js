import https from "https";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "136f5ce54271f2f921115eaa";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/AED`;

const currencyConverter = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
    rl.question("Enter the amount in AED::", (amount) => {
      rl.question(
        "Enter the target curreny (e.g., INR, EUR, ADE)::",
        (curreny) => {
          const rate = rates[curreny.toUpperCase()];
          if (rate) {
            console.log(
              chalk.blue.bgGray.bold(
                `${amount} USD is approximately ${currencyConverter(
                  amount,
                  rate
                )} ${curreny}`
              )
            );
          } else {
            console.log("Invalid Currency Code");
          }
          rl.close();
        }
      );
    });
  });
});
