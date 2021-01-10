$(document).ready(function(){


    let $btns=$('.work_section .container .button_group button');
    
    $btns.click(function(e){
        $('.work_section .container .button_group button').removeClass('btn-danger');
        e.target.classList.add("btn-danger");
        // console.log( e.target)
        let selector= $(e.target).attr("data-filter");
        $('.work_section .row').isotope({
            filter:selector
        });
        return false
        
    })






    let $workbtn=$('.Work_Div button');
    
    $workbtn.click(function(f){

        // console.log(f.target)
        let work_btn_selector= $(f.target).attr("data-filter");
        console.log(work_btn_selector)
        if(work_btn_selector=='first_project'){
            console.log(document.getElementById('exampleModalLabel').innerHTML)
            document.getElementById('exampleModalLabel').innerHTML="First Project";
            document.getElementById('goto_link').setAttribute('href', 'google.com');
        }

    })




});



setTimeout(function(){ 
document.getElementById("popular_i").click()
}, 300);

