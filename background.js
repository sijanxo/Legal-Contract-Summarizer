const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function summarizeText(text) {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Summarize the following terms and conditions into bullet points." },
      { role: "user", content: text }
    ]
  });

  return response.data.choices[0].message.content;
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "summarize") {
    const summary = await summarizeText(request.text);
    sendResponse({ summary });
  }
});
