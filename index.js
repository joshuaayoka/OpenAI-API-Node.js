const openAI = require("openai");

const client = new openAI.OpenAI({apiKey: "ENTER-YOUR-API-KEY-HERE"});

async function runPrompt() {
    try {
        const prompts = [
            "Tell me a joke about cats",
            "Tell me a joke about dogs"
        ];

        for (const prompt of prompts) {
            const completions = await client.chat.completions.create({
                messages: [{
                    role: "system",
                    content: prompt
                }],
                model: "gpt-3.5-turbo"
            });

            console.log(completions.choices[0]);
        }
    }
    catch(error) {
        console.log(error);
    }
}

runPrompt();
