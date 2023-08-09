var box1 = document.getElementById('box1');  
var p1 = document.getElementById("d1");
var c1 = document.getElementById("c1");
var box2 = document.getElementById('box2');
var p2 = document.getElementById("d2");
var c2 = document.getElementById("c2");
var box3 = document.getElementById('box3');
var p3 = document.getElementById("d3");
var c3 = document.getElementById("c3");
var box4 = document.getElementById('box4');
var p4 = document.getElementById("d4");
var c4 = document.getElementById("c4");
var box5 = document.getElementById('box5');
var p5 = document.getElementById("d5");
var c5 = document.getElementById("c5");

box1.addEventListener('click',() => {
    if (p1.classList.contains('hidden')){
        p1.classList.remove('hidden');
    } else {
        p1.classList.add('hidden');
    }
    if (c1.classList.contains("unhidden")){
        c1.classList.remove('unhidden');
    } else {
        c1.classList.add('unhidden');
    }
});
box2.addEventListener('click',() => {
    if (p2.classList.contains('hidden')){
        p2.classList.remove('hidden');
    } else {
        p2.classList.add('hidden');
    }
    if (c2.classList.contains("unhidden")){
        c2.classList.remove('unhidden');
    } else {
        c2.classList.add('unhidden');
    }
});
box3.addEventListener('click',() => {
    if (p3.classList.contains('hidden')){
        p3.classList.remove('hidden');
    } else {
        p3.classList.add('hidden');
    }
    if (c3.classList.contains("unhidden")){
        c3.classList.remove('unhidden');
    } else {
        c3.classList.add('unhidden');
    }
});
box4.addEventListener('click',() => {
    if (p4.classList.contains('hidden')){
        p4.classList.remove('hidden');
    } else {
        p4.classList.add('hidden');
    }
    if (c4.classList.contains("unhidden")){
        c4.classList.remove('unhidden');
    } else {
        c4.classList.add('unhidden');
    }
});
box5.addEventListener('click',() => {
    if (p5.classList.contains('hidden')){
        p5.classList.remove('hidden');
    } else {
        p5.classList.add('hidden');
    }
    if (c5.classList.contains("unhidden")){
        c5.classList.remove('unhidden');
    } else {
        c5.classList.add('unhidden');
    }
});
