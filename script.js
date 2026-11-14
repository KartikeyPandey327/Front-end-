const clientTasks = [
  { service: "Landing Page Design", hours: 10, rate: 50 },
  { service: "Mobile Menu Bug Fix", hours: 3, rate: 60 },
  { service: "SEO Optimization", hours: 5, rate: 40 }
];

const invoice_list = document.querySelector("#invoice-list");
const grand_total = document.querySelector("#grand-total");

const billedTasks = clientTasks.map((task) => {
  return {
    service: task.service,
    total: task.hours * task.rate
  };
});

let grandTotal = 0;

billedTasks.forEach((task, index) => {
  grandTotal += task.total;

  const card = document.createElement("p");
  card.textContent = `${index + 1}. ${task.service} - $${task.total}`

    invoice_list.append(card);
});
grand_total.textContent=` Grand Total: $${grandTotal}`;

