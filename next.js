// // Ref query string example - 
// // Your website URL https://example.com/?ref=alex83
// // Below function will modify the form action to https://getlaunchlist.com/s/JZIFPd/?ref=alex83


function LaunchList() {

//     // Get query string from url
var loc = window.location.toString();
queryString = loc.split('?')[1];

//     // Get all the forms with .launchlist-form class
let forms = document.querySelectorAll(".launchlist-form");

//     // Update the form with referral id
forms.forEach(form => {

//         // Get the action url of the form
let action = form.getAttribute("action");

//         // Check if query string is present
if (
queryString !== null &&
queryString !== undefined &&
queryString !== ""
) {

queryParams = "?" + queryString;
//             // update action url with query params
form.setAttribute("action", action + queryParams);
}
else {
//             // update action url without query params
form.setAttribute("action", action);
}
});

}

LaunchList();