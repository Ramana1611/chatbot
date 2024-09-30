document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        displayMessage(userMessage, 'user');
        userInput.value = '';
        generateBotResponse(userMessage);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateBotResponse(userMessage) {
    let botMessage;

    // Simple response logic
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        botMessage = 'Hi there! How can I assist you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
        botMessage = 'I\'m just a bot, but I\'m here to help you!';
    } else if (lowerCaseMessage.includes('help')) {
        botMessage = 'Sure! What do you need help with?';
    } else if (lowerCaseMessage.includes('bye')) {
        botMessage = 'Goodbye! Have a great day!';
    } else {
        botMessage = 'I\'m not sure how to respond to that. Can you ask something else?';
    }

    setTimeout(() => {
        displayMessage(botMessage, 'bot');
    }, 1000); // Simulate a delay for a more natural conversation
}
