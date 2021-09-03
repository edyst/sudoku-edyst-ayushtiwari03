const n=null;
var easyLevel=[
                   [1,4,2,n,9,n,n,n,5],
                   [7,n,n,4,n,n,n,8,9],
                   [8,n,5,n,n,n,n,2,4],
                   [2,n,n,n,n,4,8,n,n],
                   [n,3,n,n,n,1,2,6,n],
                   [n,8,n,n,7,2,9,4,1],
                   [n,5,n,2,n,6,n,n,n],
                   [n,2,8,n,n,9,4,1,n],
                   [n,7,9,1,n,8,5,3,n]
                ]

var mediumLevel=[
                   [n,5,n,6,n,n,n,n,8],
                   [n,n,n,4,n,n,n,n,2],
                   [n,n,n,n,n,n,n,5,9],
                   [n,n,n,1,6,n,n,n,4],
                   [4,n,1,8,7,n,6,n,5],
                   [6,n,n,n,n,n,7,n,1],
                   [9,n,n,n,n,1,n,n,n],
                   [n,n,8,n,n,6,5,2,n],
                   [2,n,4,5,n,n,9,n,n]
                ]

 var hardLevel=[
                   [1,n,n,7,n,n,n,n,n],
                   [n,n,n,n,n,n,2,9,n],
                   [n,6,n,n,n,n,n,n,n],
                   [7,n,9,n,n,n,n,n,n],
                   [n,5,n,n,n,n,6,n,n],
                   [n,n,n,8,4,n,n,n,1],
                   [5,4,n,9,n,2,1,n,n],
                   [n,7,n,5,n,8,n,6,2],
                   [n,n,n,n,n,6,n,n,5]
                ]
const easyButton=document.getElementById('easy');
const mediumButton=document.getElementById('medium');
const hardButton=document.getElementById('hard');

function easy(){
    var index=0;
    for(var i=0;i<easyLevel.length;++i)
    {
        for(var j=0;j<easyLevel.length;++j)
        {
            document.getElementById(index).value =easyLevel[i][j];
            if(easyLevel[i][j]!=null)
            {
                document.getElementById(index).style.backgroundColor='rgb(217, 218, 208)'
            document.getElementById(index).disabled=true
            }
            ++index;
        }
    }
 document.getElementById('hard').disabled=true;
 document.getElementById('medium').disabled=true;
}
easyButton.onclick=easy;

function medium(){
    var index=0;
    for(var i=0;i<mediumLevel.length;++i)
    {
        for(var j=0;j<mediumLevel.length;++j)
        {
            document.getElementById(index).value =mediumLevel[i][j];
            if(mediumLevel[i][j]!=null)
            {
                document.getElementById(index).style.backgroundColor='rgb(217, 218, 208)'
            document.getElementById(index).disabled=true
            }
            ++index;
        }
    }
    document.getElementById('hard').disabled=true;
 document.getElementById('easy').disabled=true;
}
mediumButton.onclick=medium;

function hard(){
    var index=0;
    for(var i=0;i<hardLevel.length;++i)
    {
        for(var j=0;j<hardLevel.length;++j)
        {
            document.getElementById(index).value =hardLevel[i][j];
            if(hardLevel[i][j]!=null)
            {
                document.getElementById(index).style.backgroundColor='rgb(217, 218, 208)'
            document.getElementById(index).disabled=true
            }
            ++index;
        }
    }
    document.getElementById('easy').disabled=true;
 document.getElementById('medium').disabled=true;
}
hardButton.onclick=hard;


const validateButton=document.getElementById('valid');

function validateRow()
{
    for(var i=0;i<=80;i+=9)
    {
        var arr=[];
        var index=0;
        for(var j=i;j<i+9;++j)
        {
          arr[index]=document.getElementById(j).value;
          index++;
        }
        var a='';
        arr=arr.sort();
        for(var k=0;k<arr.length-1;++k)
        {
           if(arr[k]==arr[k+1])
           {
             return 'row not solved'
           }
           else{
               a='row solved'
           }
        }
        
    }
    return a;
}

function validateCol()
{
    for(var i=0;i<9;i++)
    {
        var arr=[];
        var index=0;
        for(var j=i;j<=i+72;j+=9)
        {
          arr[index]=document.getElementById(j).value;
          index++;
        }
        var a='';
        arr=arr.sort();
        for(var k=0;k<arr.length-1;++k)
        {
           if(arr[k]==arr[k+1])
           {
             return 'column not solved'
           }
           else{
               a='column solved'
           }
        }
        
    }
    return a;
}

function validateBox()
{
    
    var vbi=0;
    for(var i=0;i<81;i+=3)
    {
        vbi++;
        var arr=[];
        var index=0;
        var vb=0;
      for(var j=i;j<i+21;++j)
      {
        ++vb;
        arr[index]=document.getElementById(j).value;
        index++;
        if(vb%3==0)
        {
            j=j+6;
        }
      }
      if(vbi%3==0)
    {
        i=i+18;
    }
    var a='';
        arr=arr.sort();
        for(var k=0;k<arr.length-1;++k)
        {
           if(arr[k]==arr[k+1])
           {
            return 'box not solved'
           }
           else{
               a='box solved'
           }
        }
    }
    return a;

}
 function validation()
 {
     if( validateBox()=='box solved' && validateColumn()=='column solved' && validateRow()=='row solved')
     {
         return 'solved'
     }
     else{
         return 'not solved'
     }
 }
 validateButton.onclick=()=>{
     if(validation()=='solved')
     {
         alert(' Congratulations, Sudoku solved !!!')
     }
     else{
        alert('Sudoku not solved')
     }
 }

 
 document.querySelector('.table_container').addEventListener('click',(e)=>{
     var clickedId=e.target.id
     
     var colNo=clickedId%9;
     var rowNo=Math.floor(clickedId/9);
     white() 
     highlightRow(clickedId,colNo)
     highlightColumn(clickedId,rowNo)
     highlightBox(clickedId)
     document.getElementById(clickedId).style.backgroundColor='rgb(67, 164, 243)';
})

function highlightColumn(clickedId,rowNo)
{
    var colStart=clickedId-(rowNo*9);
      for(var i=colStart;i<colStart+73;i+=9)
      {
        
            document.getElementById(i).style.backgroundColor='rgb(136, 197, 246)';
        
      }

}


function highlightRow(clickedId,colNo)
{
    var rowStart=clickedId-colNo;
    for(var i=rowStart;i<rowStart+9;++i)
    {
      
          document.getElementById(i).style.backgroundColor='rgb(136, 197, 246)';
      
    }
}


function white()
{
    for(var i=0;i<81;++i)
    {
        var c=document.getElementById(i).style.backgroundColor
        var d=document.getElementById(i).disabled;
      if(d)
      {
          document.getElementById(i).style.backgroundColor='rgb(217, 218, 208)';
      }
      else if(document.getElementById(i).value!='')
      {
        document.getElementById(i).style.backgroundColor='rgb(20, 145, 246)'
      }
      else{
        document.getElementById(i).style.backgroundColor='white'
      }
    }
 }


function highlightBox(clickedId)
{
    
   var boxRowStart=clickedId-(clickedId%3);
   var boxColStart=boxRowStart-((Math.floor(clickedId/9))%3)*9;
   var tf=0;
   for(var i=boxColStart;i<boxColStart+21;++i)
      {
        ++tf;
         document.getElementById(i).style.backgroundColor='rgb(136, 197, 246)';
        if(tf%3==0)
        {
            i=i+6;
        }
      }
}