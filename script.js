// script.js



// Function to navigate to a page
function goToPage(page) {
    window.location.href = page; // Navigate to the specified page
}

// Function to include header content
function includeHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Insert the header content into the placeholder element
            document.getElementById('header-placeholder').innerHTML = data;

            // Add event listeners to the buttons in the header
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const page = button.getAttribute('data-page');
                    goToPage("recycle" + page);
                });
            });
        })
        .catch(error => console.error('Error fetching header:', error));
}

const items = [
'W 2021 roku niemal połowa (49,6%) wszystkich odpadów komunalnych w UE poddawana była recyklingowi lub kompostowaniu',
'Z 35 plastikowych butelek można stworzyć jedną bluzę polarową',
'W recyklingu przodują Szwedzi, doskonale sobie radzą z przetwarzaniemodpadów. Dziś jedynie 3% odpadów w tym skandynawskim kraju trafia na wysypiska, reszta jest efektywnie wykorzystywana',
'Pierwszy przypadek recyklingu odnotowano w 1776 roku',
'Recykling jednej tony papieru może uratować około 17 drzew, 7 000 galonów wody, 3 metry sześcienne miejsca na wysypisku śmieci i 4 000 kWh energii elektrycznej',
'Szkło jest jednym z najbardziej trwałych materiałów i może być recyklowane wielokrotnie bez utraty jakości',
'Opony samochodowe są jednym z najtrudniejszych do utylizacji odpadów. Jednak mogą być one poddane recyklingowi. Stare opony mogą być przetwarzane na nowe opony, materiały izolacyjne, nawierzchnie dróg, gumowe kruszywo do podłoża i inne produkty',
'W jednym z japońskich miast, Jokohamie, można spotkać strażników segregacji,którzy zajmują się pilnowaniem przestrzegania zasad postępowania z odpadami',
'W mieście Kanton w Chinach są nakładane ogromne kary pieniężne jeśli człowiek w ciągu dnia wyprodukuje więcej 1kg śmieci dziennie',
'W Indiach w mieście Ghazipur znajduje się wysypisko śmieci o wielkości 40 boisk piłkarskich'
];

// Function to pick a random item and display it
function pickRandomItem() {
    // Get user input
    const userInput = parseInt(document.getElementById('userInput').value);

    // If user input is valid (between 1 and 10)
    if (userInput >= 1 && userInput <= 10) {
        // Get the corresponding item from the list
        const selectedItem = items[userInput - 1]; // Adjusting for 0-based indexing

        // Display the result
        document.getElementById('result').textContent = `${selectedItem}!`;
    } else {
        // If user input is invalid, display an error message
        document.getElementById('result').textContent = 'Prosze podaj numer od 1 do 10.';
    }
}

// Initialize with a random item at the beginning
window.onload = function() {
    const randomIndex = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    const randomItem = items[randomIndex];
    document.getElementById('result').textContent = ` ${randomItem}`;
};