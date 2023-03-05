let random_number = Math.floor(Math.random() * 5) + 1;

number = (form1) => {
  form1.random.value=random_number;
  document.getElementById('guess_num').readOnly=true;
  document.getElementById('random_num').readOnly=true;
};

checkCondition = (form1) => {
  if (form1.guess.value == "" || form1.random.value == "") {
    return empty();
  } else if (form1.guess.value == form1.random.value) {
    return won();
  } else {
    return lose();
  }
};

let a=document.querySelectorAll(".abc");
let bg=document.body.children;

empty=()=>{
  a[0].style.display="block";
  var cls2=a;
  bg[0].style.opacity="0.4";
  bg[1].style.opacity="0.4";
};
won=()=>{
  a[1].style.display="block";
  var cls2=a;
  bg[0].style.opacity="0.4";
  bg[1].style.opacity="0.4";
};
lose=()=>{
  a[2].style.display="block";
  var cls2=a;
  bg[0].style.opacity="0.4";
  bg[1].style.opacity="0.4";
};

clos=()=>{
  a[0].style.display="none";
  a[1].style.display="none";
  bg[0].style.opacity="1";
  bg[1].style.opacity="1";
  window.location.reload(true);
}
