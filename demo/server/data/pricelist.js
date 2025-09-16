const pricelist = {
  "Normal Recyclables": [
    { name: "Newspaper", price: 14, unit: "kg" },
    { name: "Clothes", price: 4, unit: "kg", note: "Accepted only with other scrap" },
    { name: "Glass bottles", price: 2, unit: "kg", note: "Accepted only with other scrap" },
    { name: "Office Paper (A3/A4)", price: 14, unit: "kg" },
    { name: "Copies/Books", price: 12, unit: "kg" },
    { name: "Cardboard", price: 8, unit: "kg" },
    { name: "PET Bottles/ Other Plastic", price: 8, unit: "kg" },
    { name: "Iron", price: 24, unit: "kg" },
    { name: "Steel Utensils", price: 40, unit: "kg" },
    { name: "Aluminium", price: 105, unit: "kg" },
    { name: "Brass", price: 305, unit: "kg" },
    { name: "Copper", price: 425, unit: "kg" }
  ],
  "Large Appliances": [
    { name: "Split AC 1.5 Ton (Copper)", price: 4150, unit: "piece" },
    { name: "Window AC 1.5 Ton (Copper)", price: 4050, unit: "piece" },
    { name: "Split/Window AC 1 Ton (Copper)", price: 3000, unit: "piece" },
    { name: "Split/Window AC 2 Ton (Copper)", price: 5600, unit: "piece" },
    { name: "Front Load Washing Machine", price: 1350, unit: "piece" },
    { name: "Top Load Washing Machine", price: 1000, unit: "piece" },
    { name: "Semi Automatic Washing Machine", price: 750, unit: "piece" },
    { name: "Geyser", price: 20, unit: "kg" },
    { name: "Single Door Fridge", price: 1200, unit: "piece" },
    { name: "Double Door Fridge", price: 1350, unit: "piece" },
    { name: "Iron Cooler", price: 24, unit: "kg" },
    { name: "Plastic cooler", price: 15, unit: "kg" }
  ],
  "Small Appliances": [
    { name: "Printer/scanner/fax machine", price: 20, unit: "kg" },
    { name: "Metal E-waste", price: 28, unit: "kg" },
    { name: "Plastic E-waste", price: 15, unit: "kg" },
    { name: "CRT TV", price: 200, unit: "piece" },
    { name: "Ceiling Fan", price: 35, unit: "kg" },
    { name: "Motors (Copper wiring)", price: 35, unit: "kg" },
    { name: "Microwave", price: 350, unit: "piece" },
    { name: "UPS", price: 180, unit: "piece" },
    { name: "Inverter/Stabilizer (Copper)", price: 40, unit: "kg" },
    { name: "Battery (used with inverters)", price: 81, unit: "kg" }
  ],
  "Mobiles & Computers": [
    { name: "Scrap Laptop", price: 300, unit: "piece" },
    { name: "CRT Monitor", price: 150, unit: "piece" },
    { name: "LCD Monitor", price: 20, unit: "kg" },
    { name: "Computer CPU", price: 225, unit: "piece" }
  ],
  "Others": [
    { name: "Bike", price: 2100, unit: "piece" },
    { name: "Car", price: 20000, unit: "piece" }
  ]
};

export default pricelist;
