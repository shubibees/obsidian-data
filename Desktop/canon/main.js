var times=0;

var myScrollFunc = function () {
   var y = window.scrollY;
   if(times>0){
      return;
   }
   if (y >= 800) {
       myID.className = "enquiry_popup active"
       times++;
   } else {
      if(!myID.classList.contains("active"))
       myID.className = "enquiry_popup hide"
   }
};