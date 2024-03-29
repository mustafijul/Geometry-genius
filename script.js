// triangle
let triangle_res = 0;
function triangle() {
  if (
    document.getElementById("triangle_b").value <= 0 ||
    document.getElementById("triangle_h").value <= 0
  ) {
    alert("Please enter a valid number");
  } else {
    let b = document.getElementById("triangle_b").value;
    let h = document.getElementById("triangle_h").value;
    document.getElementById("result__tri").style.display = "flex";
    triangle_res = 0.5 * b * h;
    document.getElementById("result__tri").innerHTML = 0.5 * b * h + "cm²";
  }
}
// rectangle
let rectangle_res = 0;
function rectangle() {
  if (
    document.getElementById("rectangle_l").value <= 0 ||
    document.getElementById("rectangle_w").value <= 0
  ) {
    alert("Please enter a valid number");
  } else {
    let w = document.getElementById("rectangle_w").value;
    let l = document.getElementById("rectangle_l").value;
    document.getElementById("result__rect").style.display = "flex";
    rectangle_res = w * l;
    document.getElementById("result__rect").innerHTML =triangle_res + w * l + "cm²";
    total1 = triangle_res + w * l ;
  }
}
// parrallelogram

let parallelogram_res = 0;
function parallelogram() {
  if (
    document.getElementById("parallelogram_b").value <= 0 ||
    document.getElementById("parallelogram_h").value <= 0
  ) {
    alert("Please enter a valid number");
  } else {
    let b = document.getElementById("parallelogram_b").value;
    let h = document.getElementById("parallelogram_h").value;
    document.getElementById("result__para").style.display = "flex";
    parallelogram_res = b * h;
    document.getElementById("result__para").innerHTML =total1 + b * h + "cm²";
    total2 = total1 + b * h ;
  }
}


// Rhombus

let Rhombus_res = 0;
function Rhombus() {
  if (
    document.getElementById("Rhombus_d1").value <= 0 ||
    document.getElementById("Rhombus_d2").value <= 0
  ) {
    alert("Please enter a valid number");
  } else {
    let d1 = document.getElementById("Rhombus_d1").value;
    let d2 = document.getElementById("Rhombus_d2").value;
    document.getElementById("result__rhom").style.display = "flex";
    Rhombus_res = 0.5*d1*d2;
    document.getElementById("result__rhom").innerHTML =0.5*d1*d2 + total2 + "cm²";
   total3 = 0.5*d1*d2 + total2;
  }
}

// pentagon


let pentagon_res = 0;
function pentagon() {
  if (
    document.getElementById("pentagon_p").value <= 0 ||
    document.getElementById("pentagon_b").value <= 0
  ) {
    alert("Please enter a valid number");
  } else {
    let p = document.getElementById("pentagon_p").value;
    let b = document.getElementById("pentagon_b").value;
    document.getElementById("result__penta").style.display = "flex";
    pentagon_res = p*b ;
    document.getElementById("result__penta").innerHTML =p*b+ total3 + "cm²";
    total4 = p*b+ total3;
  }
}


// ellipse

let ellipse_res = 0;
function ellipse() {
  if (
    document.getElementById("ellipse_a").value <= 0 ||
    document.getElementById("ellipse_b").value <= 0
  ) {
    alert("Please enter a valid number");
  } else {
    let a = document.getElementById("ellipse_a").value;
    let b = document.getElementById("ellipse_b").value;
    document.getElementById("result__ellipse").style.display = "flex";
    ellipse_res = 3.14*a*b ;
    document.getElementById("result__ellipse").innerHTML =total4 +3.14*a*b + "cm²";
  }
}