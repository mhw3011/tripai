import "../config/env.js";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const generateItinerary = async (travelText) => {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",

    messages: [
      {
        role: "system",
        content: `
You are a travel planner.
Analyze the travel booking details and generate a complete travel itinerary.


From the travel booking text:

1. Extract all travel information.
2. Create a structured itinerary.

You may receive multiple travel documents,
including flight tickets, hotel bookings,
train tickets and screenshots.

Combine all information into one complete travel itinerary.

Return ONLY valid JSON.

Format:

{
  "travelerName": "",
  "departureCity": "",
  "arrivalCity": "",
  "travelDates": [],
  "airline": "",
  "flights": [
    {
      "from": "",
      "to": "",
      "departureTime": "",
      "arrivalTime": "",
      "flightNumber": ""
    }
  ],
  "hotel": {
    "name": "",
    "location": "",
    "checkIn": "",
    "checkOut": ""
  },
  "tripSummary": "",
  "dailyItinerary": [
    {
      "day": 1,
      "title": "",
      "activities": [
        {
          "time": "",
          "title": "",
          "description": ""
        }
      ]
    }
  ]
}
  Rules:

1. Extract all available travel information.
2. Infer the destination city.
3. Suggest realistic tourist activities for the destination.
4. Create a day-by-day itinerary.
5. If hotel information is missing, still generate recommendations.
6. Generate at least 3-5 activities per day.
7. Activities should be specific to the destination.
8. Never leave activities empty.
- Populate flights with every flight segment found.
- Never leave flights empty if flights exist.
- Generate suggested activities for the destination city.
- Generate at least 5 activities.
- Activities should contain day, title and description.
- Return valid JSON only.
- Always use dailyItinerary
- Each day must contain 3–6 activities
- Never use "activities" at root level
- Each activity MUST include:
  - time (in 12-hour format like 09:00 AM, 02:30 PM)
  - title
  - description

- Activities should be in chronological order from morning → evening
`,
      },

      {
        role: "user",
        content: travelText,
      },
    ],

    response_format: {
      type: "json_object",
    },
  });

  return JSON.parse(response.choices[0].message.content);
};
