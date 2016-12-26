$(document).ready(function()
{
   $('section#items a').on('click',function()

        {
            $('div#modal img').attr('src',$(this).attr('data-image-url'));
        });


});


