

function setColorBulletsForList(color)
    {   
        var bulletColor = color.getAttribute("data-valueColor");
        alert(bulletColor);
        alert( (("#".concat(bulletColor)).concat("::before")));
        
        $(("#".concat(bulletColor))).css("background-color",bulletColor);

        //Need to find a way to fix this
        $( ("#".concat(bulletColor)).concat("::before")).attr("content",'"\2022"')
        $( ("#".concat(bulletColor)).concat("::before")).css("color", bulletColor);
        $( ("#".concat(bulletColor)).concat("::before")).css("font-size", "40px");
        $( ("#".concat(bulletColor)).concat("::before")).css("display", "inline-block");
        $( ("#".concat(bulletColor)).concat("::before")).css("width", "20px");
        $( ("#".concat(bulletColor)).concat("::before")).css("margin-left", "-1px");

};
    



