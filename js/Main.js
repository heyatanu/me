$(document).ready(function(){


    let $btns=$('.work_section .container .button_group button');
    
    $btns.click(function(e){
        $('.work_section .container .button_group button').removeClass('active_filter_btn');
        e.target.classList.add("active_filter_btn");
        // console.log( e.target)
        let selector= $(e.target).attr("data-filter");
        $('.work_section .row').isotope({
            filter:selector
        });
        return false
        
    })




});



setTimeout(function(){ 
document.getElementById("popular_i").click()
}, 300);

