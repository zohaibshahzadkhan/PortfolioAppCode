var name=prompt('Please enter your name');
var Fname=prompt('Please enter your father name');
var Html=parseInt(prompt('Your percentage in Hyper Text Markup Language (HTML)'));
var css1 =parseInt(prompt('Your percentage in Cascading Style Sheet(Css Test-1)'));
var css2=parseInt(prompt('Your percentage in Cascading Style Sheet(Css Test-2)'));
var avg=parseInt((Html+css1+css2)/3);
document.getElementById("studentname").innerHTML=name;
document.getElementById("fathername").innerHTML=Fname;
if (avg>=90 && avg<100)
{
document.getElementById("avg").innerHTML=avg +"%" +"A+";
}
else if (avg>=90 && avg<100)
{
document.getElementById("avg").innerHTML=avg +"%" +"A+";
}
else if (avg>=80 && avg<90)
{
document.getElementById("avg").innerHTML=avg +"%" +"A";
}
else if (avg>=70 && avg<80)
{
document.getElementById("avg").innerHTML=avg +"%" +"B+";
}
else if (avg>=60 && avg<70)
{
document.getElementById("avg").innerHTML=avg +"%" +"B";
}

else if (avg>=50 && avg<60)
{
document.getElementById("avg").innerHTML=avg +"%" +"C";
}

else if (avg>=40 && avg<50)
{
document.getElementById("avg").innerHTML=avg +"%" +"D";
}

else
{
document.getElementById("avg").innerHTML=avg +"%" +"F";
}



if(Html>=90 && Html<100)
{
    document.getElementById("htmltest").innerHTML=Html+'%' + ' A+ '; 
}
else if (Html>=80 && Html<90)
{
    
    document.getElementById("htmltest").innerHTML=Html+'%' + ' A ';
}

else if (Html>=70 && Html<80)
{
    document.getElementById("htmltest").innerHTML=Html+'%' + ' B+ ';

}

else if (Html>=60 && Html<70)
{
    document.getElementById("htmltest").innerHTML=Html+'%' + ' B ';
}
else if (Html>=50 && Html<60)
{
    document.getElementById("htmltest").innerHTML=Html+'%' + ' C ';

}
else if (Html>=40 && Html<50)
{  
    document.getElementById("htmltest").innerHTML=Html+'%' + ' D ';

}
else 
{
    document.getElementById("htmltest").innerHTML=Html+'%' + ' F ';
}
//---------------------------------------
if(css1>=90 && css1<100)
{
    document.getElementById("css1test").innerHTML=css1+'%' + ' A+ ';    
}
else if (css1>=80 && css1<90)
{
    
    document.getElementById("css1test").innerHTML=css1+'%' + ' A ';
}
 else if (css1>=70 && css1<80)
{
    document.getElementById("css1test").innerHTML=css1+'%' + ' B+ ';

}
else if (css1>=60 && css1<70)
{
    document.getElementById("css1test").innerHTML=css1+'%' + ' B ';
}
else if (css1>=50 && css1<60)
{
    document.getElementById("css1test").innerHTML=css1+'%' + ' C ';

}
 else if (css1>=40 && css1<50)
{  
    document.getElementById("css1test").innerHTML=css1+'%' + ' D ';

}
else 
{
    document.getElementById("css1test").innerHTML=css1+'%' + ' F ';
}




//--------------------

 if(css2>=90 && css2<100)
{
    document.getElementById("css2test").innerHTML=css2+'%' + ' A+ ';    
}
else if (css2>=80 && css2<90)
{
    
    document.getElementById("css2test").innerHTML=css2+'%' + ' A ';
}
 else if (css2>=70 && css2<80)
{
    document.getElementById("css2test").innerHTML=css2+'%' + ' B+ ';

}

else if (css2>=60 && css2<70)
{
    document.getElementById("css2test").innerHTML=css2+'%' + ' B ';
}

else if (css2>=50 && css2<60)
{
    document.getElementById("css2test").innerHTML=css2+'%' + ' C ';

}
else if (css2>=40 && css2<50)
{  
    document.getElementById("css2test").innerHTML=css2+'%' + ' D ';

}

else 
{
    document.getElementById("css2test").innerHTML=css2+'%' + ' F';

}