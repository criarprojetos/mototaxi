$(document).on('pageinit', function() {    
    $('#frm_login').submit(function(e){
        e.preventDefault();
        _constant.redirect('menu.html');        
    });

});
