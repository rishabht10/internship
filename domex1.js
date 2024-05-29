let addNum=()=>{

    // using default value 0 ifnot provided
    let a=document.getElementById("input1").value===''?"0":document.getElementById("input1").value;
    let b=document.getElementById("input2").value===''?"0":document.getElementById("input2").value;

    //when entered numbers are not valid  
   if(isNaN(parseInt(a))|| isNaN(parseInt(b))) {
    alert("Please Enter valid Numbers");
    return;
    }

document.getElementById("res").value=parseInt(a)+parseInt(b);

}