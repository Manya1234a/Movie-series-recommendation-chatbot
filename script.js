// Expanded Movie and Series Recommendations
const recommendations = {
    movies: {
        English: [
            { title: "Inception", genre: "Sci-Fi", year: 2010 },
            { title: "The Matrix", genre: "Sci-Fi", year: 1999 },
            { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
            // Add more movies
        ],
        Hindi: [
            { title: "3 Idiots", genre: "Comedy", year: 2009 },
            { title: "Sholay", genre: "Action", year: 1975 },
            { title: "Gully Boy", genre: "Drama", year: 2019 },
            // Add more movies
        ]
        // Add more languages if needed
    },
    series: {
        English: [
            { title: "Breaking Bad", genre: "Crime", year: 2008 },
            { title: "Stranger Things", genre: "Horror", year: 2016 },
            { title: "The Crown", genre: "Biography", year: 2016 },
            // Add more series
        ],
        Hindi: [
            { title: "Sacred Games", genre: "Crime", year: 2018 },
            { title: "Mirzapur", genre: "Action", year: 2018 },
            { title: "Paatal Lok", genre: "Thriller", year: 2020 },
            // Add more series
        ]
        // Add more languages if needed
    }
};

function displayMessage(text, type) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');

    // Simply set the text content without highlighting
    messageDiv.textContent = text;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}


// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    document.getElementById('user-input').value = ''; // Clear input field

    if (userInput) {
        displayMessage(userInput, 'user');
        let response = '';
        if (userInput.includes('movie')) {
            response = getRecommendations('movies', userInput);
        } else if (userInput.includes('series')) {
            response = getRecommendations('series', userInput);
        } else if (userInput.includes('recent movies')) {
            response = 'Recent movies include: ...'; // Add recent movies logic
        } else if (userInput.includes('hero')) {
            response = 'pathan'; // Add hero movies logic
        } else {
            response = 'Please ask about movies or series.';
        }
        displayMessage(response, 'bot');
        prepareCopy(response);
    }
}

// Function to get recommendations based on query
function getRecommendations(type, query) {
    let response = '';
    const language = 'English'; // Default or can be detected/selected by the user
    const items = recommendations[type][language] || [];
    
    if (query.includes('language')) {
        // Handle language-specific recommendations
        // Assume 'English' as default for simplicity
    } else {
        response = items.map(item => `${item.title} (${item.year})`).join(', ');
    }
    
    return `Here are some ${type} recommendations: ${response}`;
}

// Function to prepare and display copy button
function prepareCopy(content) {
    const copyInfo = document.getElementById('copy-info');
    const copyBtn = document.getElementById('copy-btn');
    
    copyInfo.classList.remove('hidden');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(content)
            .then(() => alert('Copied to clipboard!'))
            .catch(err => alert('Failed to copy text.'));
    };
}

// Function to handle background image upload


document.getElementById('send-btn').addEventListener('click', handleUserInput);
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserInput();
});
document.getElementById('background-upload').addEventListener('change', handleBackgroundUpload);
