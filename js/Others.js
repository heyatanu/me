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
            <p class="card-title"id="institute_degree">Bachelor of Technology , Computer Science Engineering</p>
            <p class="card-text"id="institute_duration">Future Institute of Engineering and Management</p>
            <p class="card-text"id="institute_name">2018- Present</p>
        </div> 
        <div class="card-body bg-warning mb-1">
            <p class="card-title"id="institute_degree">wbchse[HIGher secondary]</p>
            <p class="card-text"id="institute_duration">Manbazar Radha Madhab institution</p>
            <p class="card-text"id="institute_name">2016-2018</p>
        </div>
        <div class="card-body bg-success mb-1">
            <p class="card-title"id="institute_degree">wbbse[secondary]</p>
            <p class="card-text"id="institute_duration">Manbazar Radha Madhab institution</p>
            <p class="card-text"id="institute_name">2010-2016</p>
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
            <p class="card-title"id="institute_degree">intern at codecrunch</p>
            <p class="card-text"id="institute_duration">web developer intern at codecrunch<br> G-308, Titanium City Centre,<br>Nr. Anand Nagar, 100ft Road, Ahmedabad,<br>Gujarat, India (IN) 380015 </p>
            <p class="card-text"id="institute_name">09/2020-Present</p>
        </div> 
        <div class="card-body bg-success mb-1">
            <p class="card-title"id="institute_degree">ethical hackiing</p>
            <p class="card-text"id="institute_duration">learn ethical hackiing at internshala.com<br>top peformer</p>
            <p class="card-text"id="institute_name">8/2020-11/2020</p>
        </div>
    </div>
</div>
`;
$(document).ready(function(){



    let $others_dropdown_btn=$('.dropdown-content a');
    
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
