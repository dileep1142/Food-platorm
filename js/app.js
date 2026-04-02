// ==========================================
// 1. DOM Elements & State Management
// ==========================================
// Selecting the form and the container where cards will be displayed
const donationForm = document.getElementById('donation-form');
const donationFeed = document.getElementById('donation-feed');

// Array to hold all our donation objects (acting as a temporary database)
let donations = [];

// ==========================================
// 2. Form Submission Handler
// ==========================================
donationForm.addEventListener('submit', function(event) {
    // Prevent the default browser refresh on form submission
    event.preventDefault();

    // -- A. Grab Food Details --
    const foodType = document.getElementById('food-type').value;
    const quantity = document.getElementById('quantity').value;

    // -- B. Grab Address Details --
    const houseNum = document.getElementById('house-num').value;
    const street = document.getElementById('street').value;
    const roadNum = document.getElementById('road-num').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // -- C. Format the Address --
    // We check if 'roadNum' exists. If the user left it blank, we don't add "Rd No." to the string.
    let fullAddress = `${houseNum}, ${street}`;
    if (roadNum.trim() !== '') {
        fullAddress += `, Rd No. ${roadNum}`;
    }
    fullAddress += `, ${city}, ${state}, ${country}`;

    // -- D. Create the Data Object --
    const newDonation = {
        id: Date.now(), // Unique identifier based on exact time
        type: foodType,
        qty: quantity,
        address: fullAddress,
        status: 'Available'
    };

    // -- E. Save and Update UI --
    // Add the new object to our array
    donations.push(newDonation);

    // Re-render the cards on the screen
    renderDonations();

    // Clear all input fields in the form for the next entry
    donationForm.reset();
});

// ==========================================
// 3. Render Engine (UI Updates)
// ==========================================
function renderDonations() {
    // Clear the current feed to prevent duplicate cards from piling up
    donationFeed.innerHTML = '';

    // Loop through the 'donations' array and build a card for each one
    donations.forEach(function(donation) {
        
        // Create the outer container for the card
        const card = document.createElement('div');
        card.className = 'donation-card';
        
        // Inject the HTML structure and populate it with the object's data
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="text-transform: capitalize; color: var(--text-main); margin: 0;">
                    ${donation.type}
                </h3>
                <span style="background-color: #e8f8f5; color: var(--dark-green); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
                    ${donation.status}
                </span>
            </div>
            
            <p style="margin-bottom: 8px;">
                <strong>Quantity:</strong> ${donation.qty} servings
            </p>
            
            <div style="background-color: var(--bg-light); padding: 10px; border-radius: 6px; margin-top: 12px;">
                <p style="font-size: 13px; color: #555; margin: 0; line-height: 1.4;">
                    <strong>📍 Pickup Location:</strong><br>
                    ${donation.address}
                </p>
            </div>
        `;

        // Append the finished card to the main feed container
        donationFeed.appendChild(card);
    });
}