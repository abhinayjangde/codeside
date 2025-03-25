import { ChatGroq } from "@langchain/groq";
import { useState } from "react";


const AIHelp = ({ description }: { description: string }) => {

    // Initialize Groq LLM client
    const llm = new ChatGroq({
        model: "llama-3.3-70b-versatile",
        temperature: 0,
        maxTokens: undefined,
        maxRetries: 2,
        apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
    });

    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([
        { text: "Hello! How can I help you with this coding problem?", isBot: true }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        // Add user message to chat history
        setChatHistory(prev => [...prev, { text: userInput, isBot: false }]);

        // Clear input and set loading
        const userMessage = userInput;
        setUserInput("");
        setIsLoading(true);

        try {
            // In a real implementation, this would call your AI service
            setTimeout(async () => {
                const aiReply = await llm.invoke([
                    {
                        role: "system",
                        content:
                            `You are a coding assistant helping with the following problem:

                    ${description}

                    IMPORTANT GUIDELINES:
                    1. Do NOT provide complete solutions to the coding problem
                    2. Only give hints, tips, and guidance that helps the user learn
                    3. You can explain concepts and approaches
                    4. Suggest potential algorithms or data structures when relevant
                    5. If asked directly for the solution, politely explain you can only provide guidance, not answers

                    Your goal is to help the user understand how to solve the problem themselves.`
                    },
                    { role: "user", content: userMessage },
                ]);

                // Format the AI response with proper styling
                const formattedResponse = String(aiReply.content)
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\* (.*?)(?=\n|$)/g, '<li>$1</li>')
                    .replace(/(<li>.*?<\/li>)+/g, match =>
                        `<ul class="list-disc ml-5 my-2">${match}</ul>`
                    )
                    .replace(/\n\n/g, '<br/><br/>')
                    .replace(/\n/g, '<br/>');

                // Add the formatted response to chat history
                setChatHistory(prev => [...prev, {
                    text: formattedResponse,
                    isBot: true,
                    isHtml: true // Flag to indicate HTML content
                }]);

                // Update the chat rendering section to handle HTML content
                const existingRenderLogic = document.querySelector('.flex-1.overflow-auto.p-4.border-b');
                if (existingRenderLogic) {
                    const messageElements = existingRenderLogic.querySelectorAll('.mb-4');
                    if (messageElements.length > 0) {
                        const lastMessage = messageElements[messageElements.length - 1];
                        const contentDiv = lastMessage.querySelector('div[class*="bg-"]');
                        if (contentDiv && chatHistory[chatHistory.length - 1]) {
                            contentDiv.innerHTML = formattedResponse;
                        }
                    }
                }

                setIsLoading(false);
            }, 1000);

            // For actual API implementation:
            // const response = await fetchAIResponse(userMessage);
            // setChatHistory(prev => [...prev, { text: response, isBot: true }]);
        } catch (error) {
            setChatHistory(prev => [...prev, {
                text: "Sorry, I couldn't process your request. Please try again.",
                isBot: true
            }]);
            setIsLoading(false);
        }

        
    }
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    return (
        <div className="flex flex-col h-[80vh]">
                <div className="flex-1 overflow-auto p-4 border-b">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className={`mb-4 ${!msg.isBot && 'flex justify-end'}`}>
                            <p className="font-medium text-gray-500 my-auto mx-2">
                                {msg.isBot ? 'AI' : 'You'}
                            </p>
                            <div className={`p-3 rounded-lg mt-1 ${msg.isBot
                                ? 'bg-gray-100 dark:bg-gray-800'
                                : 'bg-blue-100 dark:bg-blue-900'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="mb-4">
                            <p className="font-medium text-gray-500">AI Assistant</p>
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-1">
                                <div className="flex space-x-2">
                                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask a question about this problem..."
                            className="flex-1 p-2 border-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading || !userInput.trim()}
                            className={`p-2 rounded-r-md ${isLoading || !userInput.trim()
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                                } text-white`}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
    );

}
export default AIHelp;