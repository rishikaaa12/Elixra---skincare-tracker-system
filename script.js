// Get form
const form = document.getElementById("skinForm");

// When form is submitted
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Create entry object
    const entry = {
        date: document.getElementById("date").value,
        skinType: document.getElementById("skinType").value,
        acne: document.getElementById("acne").value,
        dryness: document.getElementById("dryness").value,
        oiliness: document.getElementById("oiliness").value
    };

    // Get old data
    let entries = JSON.parse(localStorage.getItem("skinEntries")) || [];

    // Add new entry
    entries.push(entry);

    // Save to localStorage
    localStorage.setItem("skinEntries", JSON.stringify(entries));

    // Success message
    alert("Data Saved Successfully ✨");

    // Reset form
    form.reset();

    console.log(entries); // for checking in browser console
});
