$(document).ready(function() {
    // Apply the fade-in-visible class to all elements with the fade-in class
    $('.fade-in').each(function(i) {
        $(this).delay(i * 500).queue(function() {
            $(this).addClass('fade-in-visible').dequeue();
        });
    });
});
