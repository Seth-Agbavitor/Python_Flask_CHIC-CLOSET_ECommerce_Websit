// Event listener for click events on elements with the class "target"
$(".target").on("click", function() {
    let $button = $(this);
    let oldVal = parseInt($button.parent().find("input").val()); // Get the current value of the input field
    let newVal = 0;

    // Increment or decrement the input value based on the button text
    if ($button.text() == '+') {
        newVal = oldVal + 1;
    } else {
        // Ensure the value doesn't go below 0
        if (oldVal > 0) {
            newVal = oldVal - 1;
        } else {
            newVal = 0;
        }
    }

    // Update the input field with the new value
    $button.parent().find("input").val(newVal);
});

// Event listener for click events on elements with the class "addToCart"
$('.addToCart').on("click", function(event) {
    console.log('hello');
    let $input = $(this).prev().prev().prev().find("input");
    let inputVal = $input.val();

    // Check if the quantity selected is 0
    if (inputVal == '0') {
        event.preventDefault(); // Prevent form submission
        let $message = $(this).next().next().next();
        $message.html("You need to select at least one clothing.");
        $message.css("display", "block");
        $message.delay(3000).slideUp();
    }

    let $loginCheck = $(this).prev();
    // Check if the user is logged in (assuming value 0 means not logged in)
    if ($loginCheck.val() == "0") {
        event.preventDefault(); // Prevent form submission
        let $message = $(this).next().next().next();
        $message.html("Please log in to proceed with your purchase!");
        $message.css("display", "block");
        $message.delay(3000).slideUp();
    }
});

// Automatically hide elements with the class "flashMessage" after 3 seconds
$(".flashMessage").delay(3000).slideUp();
