function Getname()
{
    var name=prompt("Please enter your name",'click here...');
    alert('Hello '+ name + " welcome to our page");
}
function GetCompleteName() {
    var firstName=prompt("Please enter your first name",'click here...');
    var lastName=prompt("Please enter your last name",'click here...');
    var completeName=firstName +" " +lastName;
    alert('Hello '+ completeName + " welcome to our page");
}
function Addnum()
{
    var num1=parseInt(prompt("Please enter first number ",'click here...'));
    var num2=parseInt(prompt("Please enter second number ",'click here...'));
    var sum=num1+num2;
    alert("Submission of two numbers is "+sum);
}
function Calculator()
{
    var num1=parseInt(prompt("Please enter first number ",'click here...'));
    var num2=parseInt(prompt("Please enter second number ",'click here...'));
    var opt=prompt("Please enter operator",'click here...');
    if (opt==="+")
    {
        alert("Addition result is "+ (num1+num2));
    }
    else if (opt==="-")
    {
        alert("Subtraction result is "+ (num1-num2));
    } 
    
    else if (opt==="*")
    {
        alert("Multiplication result is "+(num1*num2));
    } 
    
    else if (opt==="/")
    {
        alert("Divison result is "+ (num1/num2));
    } 
}