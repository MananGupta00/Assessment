var index = 1;



function getCookieVals() {

  console.log("getting cookies");

  for(index=1; index<=40; index=index+4){

  var sel = accessCookie("Pexample" + index);
  console.log(sel);
  var got= document.getElementById(sel);
  console.log(document.getElementById(sel).name + " = " + got);
  got.checked= true;

	}
}

function handleChange(ele) {
  createCookie("P" + ele.name, ele.id, 0.5);
  console.log("P" + ele.name + " = " + ele.id);
}

getCookieVals();