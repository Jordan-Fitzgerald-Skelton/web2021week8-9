<!--external javascript website-->


function validate(){
  //gets data from the form
  var input = document.getElementById("formData").value;
  //check - more than 1 letter
  if(input.length < 2){
    document.getElementById("feedback").innerHTML="not a valid name";
    }
    //give user feedback
}
