function LaunchList() {
    // Get the current page URL
    var loc = window.location.toString();
    var queryString = loc.split('?')[1]; // Extract the query string if present

    // Select all forms with the class 'launchlist-form'
    let forms = document.querySelectorAll(".launchlist-form");

    forms.forEach(form => {
        // Set the base action URL with your form key
        let action = "https://getlaunchlist.com/s/qFYydD";

        // Check if a query string is present in the current URL
        if (queryString) {
            // Append the query string to the action URL, handling '?' and '&' correctly
            let newAction = action.includes('?') ? action + '&' + queryString : action + '?' + queryString;
            form.setAttribute("action", newAction); // Update form action with the new URL
        } else {
            // If no query string, keep the default action URL
            form.setAttribute("action", action);
        }
    });
}

// Run the function to update form actions on page load
LaunchList();