$(document).ready(function() {

    $('#couponContact').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#couponName').val();
        // get phone number
        var phone = $('#couponPhone').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#couponText').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/systems@brandster.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                phone:phone,
                email:email,
                comments:comments,
                _subject:'Design Center Contact - Coupon Book',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#formBlock').hide();
                $('#thankyouBlock').show();
            }   

        });     
        
    });

}); 