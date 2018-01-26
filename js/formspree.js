$(document).ready(function() {

    $('#storeForm').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var number = $('#number').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/sales@brandster.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                number:number,
                _subject:'Brandster Store Customer Contact',
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