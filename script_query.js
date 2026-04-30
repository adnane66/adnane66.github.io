$(document).ready(function() {

    // 1. Animation des barres de compétences au scroll
    let animated = false; 
    
    $(window).scroll(function() {
        let skillsTop = $('#skills').offset().top - window.innerHeight + 100;
        
        if ($(window).scrollTop() > skillsTop && !animated) {
            $('.progress-bar').each(function() {
                let percent = $(this).attr('data-percent');
                $(this).animate({ width: percent }, 1500);
            });
            animated = true;
        }
    });

    // 2. Accordéon interactif pour la Formation
    $('.timeline-item').first().find('.timeline-body').slideDown();
    $('.timeline-item').first().find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');

    $('.timeline-header').click(function() {
        let body = $(this).next('.timeline-body');
        let icon = $(this).find('i');

        if (body.is(':visible')) {
            body.slideUp();
            icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        } else {
            $('.timeline-body').slideUp();
            $('.timeline-header i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            
            body.slideDown();
            icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    });

    // 3. Validation du formulaire de contact (Injecté par React)
    $(document).on('submit', '#contact-form', function(event) {
        event.preventDefault(); 
        
        let isValid = true;
        
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        $('.error-msg').hide();
        $('.form-group input, .form-group textarea').css('border-color', 'var(--gray)');

        if (name === '') {
            $('#error-name').slideDown();
            $('#name').css('border-color', '#ef4444');
            isValid = false;
        }

        if (!emailPattern.test(email)) {
            $('#error-email').slideDown();
            $('#email').css('border-color', '#ef4444');
            isValid = false;
        }

        if (message === '') {
            $('#error-message').slideDown();
            $('#message').css('border-color', '#ef4444');
            isValid = false;
        }

        if (isValid) {
            let btn = $(this).find('button');
            let originalText = btn.html();
            
            btn.html('<i class="fas fa-check"></i> Message envoyé !')
               .css('background', '#10b981'); 
               
            $('#contact-form')[0].reset();
            
            setTimeout(() => {
                btn.html(originalText).css('background', 'var(--primary)');
            }, 3000);
        }
    });

});