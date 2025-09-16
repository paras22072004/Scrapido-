import OpenAI from "openai";



export const analyzeScrap = async (req, res) => {
  try {
    // ✨ FIX 1: OpenAI ko function ke andar initialize karein ✨
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { subCategory, basePrice, unit, weight, description } = req.body;
    const numericBasePrice = parseFloat(basePrice) * parseFloat(weight);

    const prompt = `
      You are an expert scrap evaluator for "Scrap2Value".
      Details:
      - Item: ${subCategory}
      - Base Price: ₹${basePrice} per ${unit}
      - Quantity: ${weight} ${unit}
      - Calculated Base Value: ₹${numericBasePrice}
      - User's Description: "${description}"

      Your Instructions:
      1. Analyze the user's description to judge the item's condition (good, average, or poor).
      2. Suggest a final price RANGE in INR. Adjust the price based on the condition:
         - Poor/Broken/Damaged: Decrease the price by about 15-25%.
         - Average/Not specified: Keep the price close to the base value.
         - Good/Clean/Working: Increase the price by about 10-20%.
      3. Provide a short, one-line reasoning for your price adjustment.

      Respond ONLY with a valid JSON object with these keys: "finalPrice", "reasoning".
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
      response_format: { type: "json_object" }, 
    });

    // Ab humein JSON.parse() ki zaroorat nahi hai, kyunki jawab pehle se hi JSON hai
    const aiData = JSON.parse(response.choices[0].message.content);

    res.json(aiData);

  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ error: "⚠️ AI analysis fail ho gaya." });
  }
};