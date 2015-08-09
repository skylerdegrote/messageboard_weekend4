/**
 * Created by Skyler DeGrote on 8/7/15.
 */


// in html file make a form with 1)name input 2)message input and 3) a post button
// in html file make a refresh button at the top of the page
// in the scripts/app.js create a post button click event
    //take information from form and send to the server
        //how do I know that the server received it?
    //store input value in a variable and use .serialize();

//
//
//


//CREATE VARIABLES HERE
    //store value from input in a variable
  //  var userPost = $("#message").val();

//CREATE FUNCTIONS HERE

    //with .data its 'id' (in quotes)
    //with the attribute its data-id (not in quotes)
function getData(){
    $.ajax({
        type:"GET",
        url: "/requests",
        success: function(data){
            console.log(data);

            for(var i=0; i<data.length; i++){
                $("#container").empty();
                updateContainerData(data);
            }


        }
    });
}

function updateContainerData(data){
    $("#container").empty();
    for (var i=0;i<data.length; i++){
        ("#container").append("<div class='row'></div>");
        var $el = ("#container").children().last();
        $el.append("<p class='author'>" + data[i].name + " says: </p>");
        $el.append("<p class='message'>" + data[i].message + "</p>");
        $el.append("<button class='col-md-1 btn btn-danger deleteButton' data-id='" + data[i]._id + "'>DELETE</button>");

    }
}





    //ajax call
    //click event for the post button
    //click event for the refresh button



//INTERACTIVE AND EVENT LISTENERS GO IN DOC READY FUNCTION
$(document).ready(function (){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",//sends data to the server
            url: "/requests",
            data: formData,
            success: function(data){
                getData();
                console.log(data);
            }
        });
    });
    getData();

    //with .data its 'id' (in quotes)
    //with the attribute its data-id (not in quotes)
    $('body').on('click', '#refresh', function(){
        getData();
    });


    $("#container").on("click", "button", function(){
        $.ajax({
            type: "DELETE",
            url: "/requests/" + $(this).data("id"),
            success:function(){
                console.log("Success");
            },
            error:function(xhr, status){
                alert("Error "+ status);
            },
            complete:function(){
                console.log("Delete Complete");
            }
        });
        $(this).parent().remove();
    });
});

