var education_innertxt=`
<div class="card ">
<div class="modal-header ">
    <h5>Education</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>
    <div class="card-body ">
        <div class="card-body bg-danger mb-1">
            <p class="card-title"id="institute_degree">Primary card title</p>
            <p class="card-text"id="institute_duration">Se up the bulk of the card's content.</p>
            <p class="card-text"id="institute_name">Primary card title</p>
        </div> 
        <div class="card-body bg-warning mb-1">
            <p class="card-title"id="institute_degree">Primary card title</p>
            <p class="card-text"id="institute_duration">Se up the bulk of the card's content.</p>
            <p class="card-text"id="institute_name">Primary card title</p>
        </div>
        <div class="card-body bg-success mb-1">
            <p class="card-title"id="institute_degree">Primary card title</p>
            <p class="card-text"id="institute_duration">Se up the bulk of the card's content.</p>
            <p class="card-text"id="institute_name">Primary card title</p>
        </div>  
    </div>
</div>
`;

var expriance_innertxt=`
<div class="card">
<div class="modal-header">
    <h5>Expriance</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>
    <div class="card-body ">
        <div class="card-body bg-warning mb-1">
            <p class="card-title"id="institute_degree">Primary card title</p>
            <p class="card-text"id="institute_duration">Se up the bulk of the card's content.</p>
            <p class="card-text"id="institute_name">Primary card title</p>
        </div> 
        <div class="card-body bg-success mb-1">
            <p class="card-title"id="institute_degree">Primary card title</p>
            <p class="card-text"id="institute_duration">Se up the bulk of the card's content.</p>
            <p class="card-text"id="institute_name">Primary card title</p>
        </div>
        <div class="card-body bg-danger mb-1">
            <p class="card-title"id="institute_degree">Primary card title</p>
            <p class="card-text"id="institute_duration">Se up the bulk of the card's content.</p>
            <p class="card-text"id="institute_name">Primary card title</p>
        </div>  
    </div>
</div>
`;
$(document).ready(function(){



    let $others_dropdown_btn=$('.others_dropdown a');
    
    $others_dropdown_btn.click(function(w){

        // console.log(w.target)
        let others_dropdown_selector= $(w.target).attr("data-filter");
        let v=document.getElementById('other_contant_model')
        // console.log(others_dropdown_selector)
        if(others_dropdown_selector=='education'){
            // console.log(v);
            v.innerHTML=education_innertxt;
        }
        if(others_dropdown_selector=='expriance'){
            // console.log(v);
            v.innerHTML=expriance_innertxt;
        }


    })




});
