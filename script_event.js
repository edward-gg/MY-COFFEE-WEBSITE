/*JQUERY supports actions for this page*/
$(document).ready(function(){
    //alert("JQUERY ReADY");

    //handle the click on event card
    $('.event-card').on('click',function(){
        /*data-event-id.      data-event-name*/
        const eventName=$(this).data('event-name');
        //alert("You selected "+eventName);

        /*removed the selected card*/
        $('.event-card').removeClass('selected');
        /*removed the selected checkcircle */
        $('.event-card')
            .find('.card-header i')
            .attr('class','fa-regular fa-circle');

        /*add the selected card and circle*/
        $(this).addClass('selected');
        $(this)
            .find('.card-header i')
            .attr('class','fa-regular fa-circle-check');

            $('#eventSelect').val(eventName);
    });


    //handle the click on drop down list event
    $('#eventSelect').on('change',function(){
        /*<option value="Coffee Tasting Session">*/
        const selectedValue=$(this).val();
        //alert("Drop down ==>"+selectedValue);

        /*iterate each card */
        $('.event-card').each(function(){
            /*check current event card name equal to the selected value*/
            if($(this).data('event-name') === selectedValue){
                /*removed the selected card*/
                $('.event-card').removeClass('selected');
                /*removed the selected checkcircle */
                $('.event-card')
                    .find('.card-header i')
                    .attr('class','fa-regular fa-circle');

                /*add the selected card and circle*/
                $(this).addClass('selected');
                $(this)
                    .find('.card-header i')
                    .attr('class','fa-regular fa-circle-check');
            }
        });
    });

    function showError($groupEl){
        $groupEl.removeClass('success').addClass('error');
        $groupEl.find('.error-message').slideDown(150);
    }
    function showSuccess($groupEl){
        $groupEl.removeClass('error').addClass('success');
        $groupEl.find('.error-message').slideUp(150);
    }
    function isValidEmail(email){
        const regex=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
        //false: not match format
        //true:  match format
    }

    //check first name must be 2 characters */
    function validateFirstName(){
        const val=$('#firstName').val().trim(); //get the value
        const $group=$("#groupFirstName");//show to error message
        if(val.length<2){
            //error
            showError($group);
            return false;
        }else{
            //no error
            showSuccess($group);
            return true;
        }
    }

    //check last name must be 2 characters */
    function validateLastName(){
        const val=$('#lastName').val().trim(); //get the value
        const $group=$("#groupLastName");//show to error message
        if(val.length<2){
            //error
            showError($group);
            return false;
        }else{
            //no error
            showSuccess($group);
            return true;
        }
    }

    //check email must be format */
    function validateEmail(){
        const val=$('#email').val().trim(); //get the value
        const $group=$("#groupEmail");//show to error message
        if(!isValidEmail(val)){
            //error
            showError($group);
            return false;
        }else{
            //no error
            showSuccess($group);
            return true;
        }
    }
    //handle the first name text box typing....
    $('#firstName').on('keyup blur',validateFirstName);
    $('#lastName').on('keyup blur',validateLastName);
    $('#email').on('keyup blur',validateEmail);
    $('#multiEventForm').on('submit',function(e){
        e.preventDefault();
        //alert("YOU click submit button");
        const isFirstNameValid=validateFirstName();
        const isLastNameValid=validateLastName();
        const isEmailValid=validateEmail();

        if(isFirstNameValid && isLastNameValid && isEmailValid){
            //NO error at register form

            const userEmail=$('#email').val().trim();//get value from email box
            const userFname=$('#firstName').val().trim();
            const userLname=$('#lastName').val().trim();
            const selectEvent=$('#eventSelect').val();

            //show Toastify success message
            myNotiToast(`Registered for ${selectEvent}! Check your email.`, 'success');

            //email opener
            const subject=encodeURIComponent(`Event Registration: ${selectEvent}`);
            const body=encodeURIComponent(
                `Hello,\n\nI would like to confirm your registration for the event.\n\n`+
                `Details:\n`+
                `- Full Name : ${userFname} ${userLname}\n`+
                `- Event Name : ${selectEvent}\n`+
                `Thank you!`
            );
            //send to the mail
            window.location.href=`mailto:${userEmail}?subject=${subject}&body=${body}`;
            //alert("FINISH MAIL");
        }
    });
});