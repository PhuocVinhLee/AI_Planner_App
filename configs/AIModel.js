/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GENMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [

    {
      role: "user",
      parts: [
        { text: "Generate Travel Plan for Location: Thành phố Vinh, Tỉnh Nghệ An, Việt Nam, for 3 Days and 2 Night for Just Me with a Cheap budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Uri, Geo Coordinates, ticket Pricing, Time t travel \neach of the location for 3 days and 2 night with each day plan with best time to visit in JSON format.\nz" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"trip\": {\n    \"destination\": \"Thành phố Vinh, Tỉnh Nghệ An, Việt Nam\",\n    \"duration\": \"3 days and 2 nights\",\n    \"traveler\": \"Solo traveler\",\n    \"budget\": \"Cheap\",\n    \"flights\": [\n      {\n        \"airline\": \"VietJet Air\",\n        \"flight_number\": \"VJ245\",\n        \"departure_city\": \"Hanoi\",\n        \"arrival_city\": \"Vinh\",\n        \"departure_date\": \"2023-12-15\",\n        \"arrival_date\": \"2023-12-15\",\n        \"price\": \"$40\",\n        \"booking_url\": \"https://www.vietjetair.com/\"\n      }\n    ],\n    \"hotels\": [\n      {\n        \"hotel_name\": \"Vinh Hotel\",\n        \"hotel_address\": \"100 Lê Hồng Phong, Vinh, Nghệ An\",\n        \"price\": \"$20/night\",\n        \"hotel_image_url\": \"https://example.com/vinh-hotel.jpg\",\n        \"geo_coordinates\": \"18.6565, 105.6322\",\n        \"rating\": \"3.5 stars\",\n        \"description\": \"A budget-friendly hotel in the city center with clean rooms and basic amenities.\"\n      },\n      {\n        \"hotel_name\": \"Ngọc Lan Hotel\",\n        \"hotel_address\": \"156 Nguyễn Văn Cừ, Vinh, Nghệ An\",\n        \"price\": \"$15/night\",\n        \"hotel_image_url\": \"https://example.com/ngoc-lan-hotel.jpg\",\n        \"geo_coordinates\": \"18.6598, 105.6305\",\n        \"rating\": \"3 stars\",\n        \"description\": \"A simple and affordable guesthouse with comfortable rooms and friendly staff.\"\n      }\n    ],\n    \"itinerary\": [\n      {\n        \"day\": \"Day 1\",\n        \"activities\": [\n          {\n            \"place_name\": \"Vinh City Museum\",\n            \"place_details\": \"Learn about the history and culture of Nghệ An province.\",\n            \"place_image_uri\": \"https://example.com/vinh-museum.jpg\",\n            \"geo_coordinates\": \"18.6552, 105.6344\",\n            \"ticket_pricing\": \"Free\",\n            \"time_to_travel\": \"2 hours\"\n          },\n          {\n            \"place_name\": \"Vinh Cathedral\",\n            \"place_details\": \"A beautiful historical church with stunning architecture.\",\n            \"place_image_uri\": \"https://example.com/vinh-cathedral.jpg\",\n            \"geo_coordinates\": \"18.6545, 105.6318\",\n            \"ticket_pricing\": \"Free\",\n            \"time_to_travel\": \"1 hour\"\n          },\n          {\n            \"place_name\": \"Vinh Night Market\",\n            \"place_details\": \"Explore local street food and souvenirs.\",\n            \"place_image_uri\": \"https://example.com/vinh-night-market.jpg\",\n            \"geo_coordinates\": \"18.6581, 105.6339\",\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"2 hours\"\n          }\n        ],\n        \"best_time_to_visit\": \"Morning and evening\"\n      },\n      {\n        \"day\": \"Day 2\",\n        \"activities\": [\n          {\n            \"place_name\": \"Cửa Lò Beach\",\n            \"place_details\": \"Relax and enjoy the beautiful beach.\",\n            \"place_image_uri\": \"https://example.com/cua-lo-beach.jpg\",\n            \"geo_coordinates\": \"18.7636, 105.5765\",\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"3 hours\"\n          },\n          {\n            \"place_name\": \"Nghi Liên Temple\",\n            \"place_details\": \"Visit this ancient temple dedicated to the dragon king.\",\n            \"place_image_uri\": \"https://example.com/nghi-lien-temple.jpg\",\n            \"geo_coordinates\": \"18.7665, 105.5788\",\n            \"ticket_pricing\": \"Free\",\n            \"time_to_travel\": \"1 hour\"\n          }\n        ],\n        \"best_time_to_visit\": \"Daytime\"\n      },\n      {\n        \"day\": \"Day 3\",\n        \"activities\": [\n          {\n            \"place_name\": \"Hoàng Long Cave\",\n            \"place_details\": \"Explore this beautiful cave with stunning stalactites and stalagmites.\",\n            \"place_image_uri\": \"https://example.com/hoang-long-cave.jpg\",\n            \"geo_coordinates\": \"18.7651, 105.6092\",\n            \"ticket_pricing\": \"$2\",\n            \"time_to_travel\": \"2 hours\"\n          },\n          {\n            \"place_name\": \"Vinh Market\",\n            \"place_details\": \"Shop for local produce and souvenirs.\",\n            \"place_image_uri\": \"https://example.com/vinh-market.jpg\",\n            \"geo_coordinates\": \"18.6578, 105.6355\",\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"2 hours\"\n          }\n        ],\n        \"best_time_to_visit\": \"Morning\"\n      }\n    ]\n  }\n}\n```\n\n**Note:**\n\n* This itinerary is just a suggestion and can be adjusted to your interests and preferences.\n* The flight prices and hotel prices are estimates and may vary depending on the time of year and availability.\n* It is always recommended to book flights and hotels in advance, especially during peak season.\n* The provided links for images and booking are placeholders and should be replaced with actual links. \n* It's crucial to research the actual pricing for attractions and transportation before your trip.\n\nRemember to check for updated information and current regulations for travel to Vietnam, especially regarding COVID-19, before your trip. Have a wonderful journey!\n" },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());


