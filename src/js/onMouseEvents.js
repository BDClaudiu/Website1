
function btnSearch(buttonID)
{   

    $("#".concat(buttonID.id)).click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $("#searchTopInputBar").css("display","block");
            $('tr:has(input[type=text])').css('top', '40px');
            $('tr:has(input[type=text])').css('right', '10px');
        } else {
            $("#searchTopInputBar").css("display","none");
            $('tr:has(input[type=text])').css('top', '0px');
            $('tr:has(input[type=text])').css('right', '0px');
        }
        $(this).data("clicks", !clicks);
      });
}

function onMouseEvents(cathegoryID)
{

var clothingCategories =["newCathegory","womensCathegory","mensCathegory","girlsCathegory","boysCathegory","beautyCathegory","homeCathegory","saleCathegory"];

for (i in clothingCategories)
{ 
     {
        $("#".concat(clothingCategories[i])).mouseover(function(){
            $("#".concat(clothingCategories[i])).css("border-bottom","1px solid black");
            $("#".concat(clothingCategories[i])).css("padding-bottom","5px");



            
            $("#".concat(clothingCategories[i],"Div")).css("display","block");
            $("#".concat(clothingCategories[i],"Div")).css("color","white");
            $(".cathegorySelection ").css("height", "30px");
            $(".cathegorySelection ").css("background-color", "black");
            
            
        });

        $("#".concat(clothingCategories[i])).mouseout(function(){
            $("#".concat(clothingCategories[i],"Div")).css("display", "none");
            $("#".concat(clothingCategories[i],"Div")).css("color","white");
            $(".cathegorySelection ").css("height", "unset");
            $(".cathegorySelection ").css("background-color", "white");
        });
        
    } 
    //why does the loop not break if placed on top?
    if(clothingCategories[i]==cathegoryID.id) break;
}

};