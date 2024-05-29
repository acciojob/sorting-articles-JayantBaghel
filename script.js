// Data for the articles
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to sort articles while ignoring certain words
function sortArticles(bands) {
    const ignoredWords = ['a', 'an', 'the'];
    
    // Sort the articles while ignoring certain words
    return bands.sort((a, b) => {
        const firstArticle = a.replace(/^(a|an|the) /i, '');
        const secondArticle = b.replace(/^(a|an|the) /i, '');
        return firstArticle.localeCompare(secondArticle);
    });
}

// Get the ul element
const ul = document.getElementById('band');

// Sort the articles and update the HTML
const sortedBands = sortArticles(bands);
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
