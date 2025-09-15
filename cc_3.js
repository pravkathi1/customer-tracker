// Coding Challenge 3A

let customers = [
    {email:"asmitha@gmail.com", name:"Asmitha", purchases: ["Laptop", "Headphones", "Mouse"]},
    {email:"sree@gmail.com", name:"Sree", purchases: ["Phone", "Charger", "Case", "Earbuds"]},
    {email:"adhira@gmail.com", name:"Adhira", purchases: ["Laptop", "Headphones", "Mouse"]},
]

customers.forEach(obj => console.log(`Customer Email: ${obj.email}\t | \t Customer Name: ${obj.name} | \t Purchases: ${obj.purchases}\t`));

customers.push({email: "pravallika@gmail.com", name: "Pravallika", purchases: ["Monitor", "Webcam"]});

console.log(customers);

console.log("Removed Customer:", customers.shift());

customers.forEach(c => {if (c.name === "Sree") {c.email = "sree123@usf.edu";}});

customers.forEach(c => {if (c.name === "Adhira") {c.purchases.push("Smartwatch");}});

console.log("Updated Customers:");
customers.forEach(c => {console.log(`Name: ${c.name} | Email: ${c.email} | Purchases: ${c.purchases.length}`);});

