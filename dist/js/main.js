function onMouseEvents(e){var s=["newCathegory","womensCathegory","mensCathegory","girlsCathegory","boysCathegory","beautyCathegory","homeCathegory","saleCathegory"];for(i in s)if($("#".concat(s[i])).mouseover(function(){$("#".concat(s[i],"Div")).css("display","block"),$("#".concat(s[i],"Div")).css("color","white"),$(".cathegorySelection ").css("height","40px"),$(".cathegorySelection ").css("background-color","black")}),$("#".concat(s[i])).mouseout(function(){$("#".concat(s[i],"Div")).css("display","none"),$("#".concat(s[i],"Div")).css("color","white"),$(".cathegorySelection ").css("height","0px"),$(".cathegorySelection ").css("background-color","white")}),s[i]==e.id)break}var slideIndex=[1,1],slideId=["mySlides1","mySlides2"],slideIndexOne=0,slideIndexUnique=1;function plusSlidesUnique(e){showSlidesUnique(slideIndexUnique+=e)}function plusSlides(e,s){showSlides(slideIndex[s]+=e,s)}function currentSlide(e,s){showSlides(slideIndex[s]=e,s)}function showSlides(e,s){var n,i=document.getElementsByClassName(slideId[s]),l=document.getElementsByClassName("dot");for(e>i.length&&(slideIndex[s]=1),e<1&&(slideIndex[s]=i.length),n=0;n<i.length;n++)i[n].style.display="none";for(n=0;n<l.length;n++)l[n].className=l[n].className.replace(" active","");i[slideIndex[s]-1].style.display="block",l[slideIndex[s]-1].className+=" active"}function showSlidesOne(){var e,s=document.getElementsByClassName("mySlides");for(e=0;e<s.length;e++)s[e].style.display="none";slideIndexOne++,slideIndex>s.length&&(slideIndexOne=1),s[slideIndexOne-1].style.display="block",setTimeout(showSlidesOne,2e3)}function showSlidesUnique(e){var s,n=document.getElementsByClassName("mySlidesUnique");for(e>n.length&&(slideIndexUnique=1),e<1&&(slideIndexUnique=n.length),s=0;s<n.length;s++)n[s].style.display="none";n[slideIndexUnique-1].style.display="block"}showSlidesUnique(slideIndexUnique),showSlidesOne(),showSlides(1,0),showSlides(1,1);