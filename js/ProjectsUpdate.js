$(document).ready(function(){

    let $workbtn=$('.Work_Div button');
    
    $workbtn.click(function(f){

        // console.log(f.target)
        let work_btn_selector= $(f.target).attr("data-filter");
        // console.log(work_btn_selector)
        if(work_btn_selector=='Animated Landing Page'){
            document.getElementById('project_model_title').innerHTML="Animated Landing Page";
            document.getElementById('project_model_dis_txt').innerHTML="this is a simple animated landing page.<br> the animation made with only css no libary.";
            document.getElementById('project_model_tool_txt').innerHTML=`html <br> css`;
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Resto'){
            document.getElementById('project_model_title').innerHTML="Resto";
            document.getElementById('project_model_dis_txt').innerHTML="This is a web app that fetch a menu api of a restaurants. <br> take a order calculate the bill and show.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>java script";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='BlogX'){
            document.getElementById('project_model_title').innerHTML="BlogX";
            document.getElementById('project_model_dis_txt').innerHTML="web app that you can use for uplode your blogs ";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>java script<br>node js";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Cointopper'){
            document.getElementById('project_model_title').innerHTML="Cointopper";
            document.getElementById('project_model_dis_txt').innerHTML="this is a clone of cointopper website.<br> this website created with only css.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Covid-19 Tracker'){
            document.getElementById('project_model_title').innerHTML="Covid-19 Tracker";
            document.getElementById('project_model_dis_txt').innerHTML="Front – End and Bank End .<br> Developed a fully responsive web-app that allow users to track the status of Covid-19 cases.<br>data fetch through apis.";
            document.getElementById('project_model_tool_txt').innerHTML="php<br>css<br>java script<br>jquery<br>apis";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='D-Routine'){
            document.getElementById('project_model_title').innerHTML="D-Routine";
            document.getElementById('project_model_dis_txt').innerHTML="this is an web app with log in and log out.<br>it has a admin that make a accaunt and add the Routine.<br>admin get a id and password that he/she can share and with that any one can access the Routine.";
            document.getElementById('project_model_tool_txt').innerHTML="php<br>css<br>java script<br>jquery<br>mysql";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Poartfolio template'){
            document.getElementById('project_model_title').innerHTML="Poartfolio template";
            document.getElementById('project_model_dis_txt').innerHTML="this is a responsive poartfolio that has a unique hacking theme";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>java script<br>jquery";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Profile Card-1'){
            document.getElementById('project_model_title').innerHTML="Profile Card-1";
            document.getElementById('project_model_dis_txt').innerHTML="responsive simple minimal profile card. <br> this is make only with css no libary.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>java script";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Profile Card-2'){
            document.getElementById('project_model_title').innerHTML="Profile Card-2";
            document.getElementById('project_model_dis_txt').innerHTML="responsive simple minimal profile card. <br> this is make only with css no libary.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='eSport Website'){
            document.getElementById('project_model_title').innerHTML="eSport Website";
            document.getElementById('project_model_dis_txt').innerHTML="this is a fully responsive web app that host online games";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>php<br>css<br>java script";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='QRgen'){
            document.getElementById('project_model_title').innerHTML="QRgen";
            document.getElementById('project_model_dis_txt').innerHTML="a simple web app that genarate custom QR codes.<br>you can add text, link etc.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>java script";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='ChatX'){
            document.getElementById('project_model_title').innerHTML="ChatX";
            document.getElementById('project_model_dis_txt').innerHTML="this is a real time database app that anyone can ragister and sent meaaage that everybody can see.<br>";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>firebase<br>css<br>java script";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='TodoS'){
            document.getElementById('project_model_title').innerHTML="TodoS";
            document.getElementById('project_model_dis_txt').innerHTML="a responsive todo app that can help you to organize your tasks.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>java script";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='N-Todo'){
            document.getElementById('project_model_title').innerHTML="N-Todo";
            document.getElementById('project_model_dis_txt').innerHTML="a responsive todo app that can help you to organize your tasks.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>php<br>css<br>java script<br>node js";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Cric-S'){
            document.getElementById('project_model_title').innerHTML="Cric-S";
            document.getElementById('project_model_dis_txt').innerHTML="a responsive app that can help you to get everything about cricket<br>you can view the live match score, previous matchs score upcomeing matches date etc";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>php<br>css<br>java script<br>react js<br>apis";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Wea-R'){
            document.getElementById('project_model_title').innerHTML="Wea-R";
            document.getElementById('project_model_dis_txt').innerHTML="a responsive app that can help you to get the current weather of your area.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>php<br>css<br>java script<br>react js<br>apis";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='Tic-Tac-To'){
            document.getElementById('project_model_title').innerHTML="Tic-Tac-To";
            document.getElementById('project_model_dis_txt').innerHTML="Tic-Tac-To , a two player game.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>js";
            document.getElementById('goto_link').setAttribute('href', '#');
        }


        if(work_btn_selector=='Fluffy bird Game'){
            document.getElementById('project_model_title').innerHTML="Fluffy bird Game";
            document.getElementById('project_model_dis_txt').innerHTML="Fluffy bird Game";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>js";
            document.getElementById('goto_link').setAttribute('href', '#');
        }


        if(work_btn_selector=='Dice Game'){
            document.getElementById('project_model_title').innerHTML="Dice Game";
            document.getElementById('project_model_dis_txt').innerHTML="Dice Game";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>js";
            document.getElementById('goto_link').setAttribute('href', '#');
        }


        if(work_btn_selector=='Guess the number'){
            document.getElementById('project_model_title').innerHTML="Guess the number";
            document.getElementById('project_model_dis_txt').innerHTML="A web - app game that check your ability to guess a think.";
            document.getElementById('project_model_tool_txt').innerHTML="html<br>css<br>js";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='singup and singin system'){
            document.getElementById('project_model_title').innerHTML="singup and singin system";
            document.getElementById('project_model_dis_txt').innerHTML="this is a system that create your account by useing your email  With OTP verification. later on you can login with your password.if you forgot your password you can also change that.";
            document.getElementById('project_model_tool_txt').innerHTML="php<br>html<br>css<br>js<br>mysql";
            document.getElementById('goto_link').setAttribute('href', '#');
        }

        if(work_btn_selector=='studentdesk'){
            document.getElementById('project_model_title').innerHTML="studentdesk website";
            document.getElementById('project_model_dis_txt').innerHTML=`degine the <a href="studentdesk.in" target="_blank"> student desk </a> book view and details page.`;
            document.getElementById('project_model_tool_txt').innerHTML="reactjs<br>html<br>css<br>js<br>json<database>";
            document.getElementById('goto_link').setAttribute('href', '#');
        }


        if(work_btn_selector=='More Game'){
            document.getElementById('project_model_title').innerHTML="More Games";
            document.getElementById('project_model_dis_txt').innerHTML="More games comeing soon stay tuned.";
            document.getElementById('project_model_tool_txt').innerHTML="";
            document.getElementById('goto_link').setAttribute('href', '#');
        }



    })




});