function  showResult(){
    document.getElementById("outputTable").style.display="flex";
    document.getElementById("inputdata").style.display="none";
}

function showFields(){
    document.getElementById("outputTable").style.display="none";
    document.getElementById("inputdata").style.display="flex";

}

function updateTable(marks,gpa){
   
 document.getElementById("s1").innerText=`${marks[0]}`;
 document.getElementById("s2").innerText=`${marks[1]}`;
 document.getElementById("s3").innerText=`${marks[2]}`;
 document.getElementById("s4").innerText=`${marks[3]}`;
 document.getElementById("gpa").innerText=`${gpa.toFixed(2)}`;
 return 1;
 

}

let res=()=>{
    //check for empty fields
    if(document.getElementById("sub1").value===''||document.getElementById("sub2").value===''||document.getElementById("sub3").value===''||document.getElementById("sub4").value===''){
        alert("Please Enter Marks of all Subjects");
        return;
    }


    let m1=parseInt(document.getElementById("sub1").value);
    let m2=parseInt(document.getElementById("sub2").value);
    let m3=parseInt(document.getElementById("sub3").value);
    let m4=parseInt(document.getElementById("sub4").value);

    let marks=[m1,m2,m3,m4];
    let total=0;
    //check for out of range
  let val= marks.find((m)=> {
        
        total+=m;
        return m<0 || m>100;
    });
    if(val<0 ||val>100) {
        alert("Please Enter marks in range");
        return;
    }

   //when everything is fine
    let gpa=(total/4)/10;
    updateTable(marks,gpa);
    showResult();

}