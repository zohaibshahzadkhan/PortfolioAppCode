var data=[];

function AddToDo()
{
    var get_userTask =document.getElementById('task').value;
    var firstLetter=get_userTask.slice(0,1);
    firstLetter=firstLetter.toUpperCase();
    var rest=get_userTask.slice(1);
    get_userTask=firstLetter+rest;
    if(get_userTask==null ||get_userTask=="")
    {
        alert("Please enter task to add in your [ToDo] list");
    }
    else
    {
        data.push(get_userTask);   
        var currentTime =new Date();
        document.getElementById('heading3').innerHTML= currentTime+'<br /> <br />'+"Today's Task";
        
    }

display();
    
}

function display()

    {

        var collectData="";
var taskList=document.getElementById('taskList');

 
    for(var i=0;i<data.length;i++)
    {
        
        collectData+= "<li class='list-group-item'>"+data[i]+'<button id="Xbut" class="btn btn-primary" onclick="remove('+i+')"><span class="glyphicon glyphicon-remove"> </button>'+"</li>"+'<br />';
        taskList.innerHTML=collectData;
    }
    document.getElementById('task').value="";

}

function RemoveAll()
{
    document.getElementById('taskList').innerHTML='';
    data=[];
}

function remove(index)
{
if (index==0 && data.length==1)
{
    data.splice(index,1);
    taskList.innerHTML='';
    display();

}

    data.splice(index,1);
    display();

}




