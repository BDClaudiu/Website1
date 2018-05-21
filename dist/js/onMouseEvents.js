
function onMouseEvents(cathegoryID)
{

var clothingCategories =["newCathegory","womensCathegory","mensCathegory","girlsCathegory","boysCathegory","beautyCathegory","homeCathegory","saleCathegory"];

for (i in clothingCategories)
{ 
     {
        $("#".concat(clothingCategories[i])).mouseover(function(){
            $("#".concat(clothingCategories[i],"Div")).css("display","block");
            $("#".concat(clothingCategories[i],"Div")).css("color","white");
            $(".cathegorySelection ").css("height", "40px");
            $(".cathegorySelection ").css("background-color", "black");
            
        });
        $("#".concat(clothingCategories[i])).mouseout(function(){
            $("#".concat(clothingCategories[i],"Div")).css("display", "none");
            $("#".concat(clothingCategories[i],"Div")).css("color","white");
            $(".cathegorySelection ").css("height", "0px");
            $(".cathegorySelection ").css("background-color", "white");
        });
    } 
    //why does the loop not break if placed on top?
    if(clothingCategories[i]==cathegoryID.id) break;
}

};