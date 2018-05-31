function setColorBulletsForList(color)
    {   
        var bulletColor = color.getAttribute("data-valueColor");
        $('<style>'+ (("#".concat(bulletColor)).concat("::before"))+' {color:' + bulletColor + '}</style>').appendTo('head');
};
    





