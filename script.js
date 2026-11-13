const services=[
    {title:"Web Design", rate:50},
    {title:"game Design", rate:100},
    {title:"software Design", rate:500}
];

const service_list = document.querySelector("#service-list")

for (const service of services){
    const card = document.createElement("p");

    card.textContent = `${service.title} - $${service.rate}`;

    service_list.append(card);
}

