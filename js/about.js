$(document).ready(function () {
    function animateCounter() {
        $(".counter-number").each(function () {
            const $this = $(this);
            const target = parseInt($this.attr("data-count"));
            let current = 0;

            // Incremental animation
            const increment = () => {
                current += 1; // Increase by 1
                $this.text(current);
                if (current < target) {
                    setTimeout(increment, 1); // Repeat until target is reached
                }
            };

            increment(); // Start animation
        });
    }

    // Trigger animation when counters are in view
    $(window).on("scroll", function () {
        const counterOffset = $(".counter-section").offset().top - $(window).height();
        if ($(window).scrollTop() > counterOffset) {
            animateCounter();
            $(window).off("scroll"); // Trigger only once
        }
    });

    // Initialize animation if already in view
    if ($(window).scrollTop() > $(".counter-section").offset().top - $(window).height()) {
        animateCounter();
    }
});