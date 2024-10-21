// // Ref query string example - 
// // Your website URL https://example.com/?ref=alex83
// // Below function will modify the form action to https://getlaunchlist.com/s/JZIFPd/?ref=alex83


function LaunchList() {
    // Get query string from url
    var loc = window.location.toString();
    var queryString = loc.split('?')[1];
  
    // Get all the forms with .launchlist-form class
    let forms = document.querySelectorAll(".launchlist-form");
  
    // Update the form with referral id or query params
    forms.forEach(form => {
      // Get the action url of the form
      let action = form.getAttribute("action");
  
      // Check if query string is present
      if (queryString) {
        let queryParams = "?" + queryString;
  
        // Append query params to action URL only if they aren't already present
        if (!action.includes(queryParams)) {
          form.setAttribute("action", action + queryParams);
        }
      } else {
        form.setAttribute("action", action);
      }
    });
  }
  
  LaunchList();





function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.querySelectorAll('.launchlist-form').forEach(form => {
    form.addEventListener('submit', function(event) {
      const emailInput = form.querySelector('input[name="email"]');
      if (emailInput && !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        event.preventDefault(); // Stop form submission
      }
    });
  });