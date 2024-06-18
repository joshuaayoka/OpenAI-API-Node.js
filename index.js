const openAI = require("openai");

const client = new openAI.OpenAI({apiKey: "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"});

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
