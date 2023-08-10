function addBoxEventListener(box, p, c) {
    box.addEventListener('click', () => {
        p.classList.toggle('hidden');
        c.classList.toggle('unhidden');
    });
}

var box1 = document.getElementById('box1');
var p1 = document.getElementById("d1");
var c1 = document.getElementById("c1");
addBoxEventListener(box1, p1, c1);

var box2 = document.getElementById('box2');
var p2 = document.getElementById("d2");
var c2 = document.getElementById("c2");
addBoxEventListener(box2, p2, c2);

var box3 = document.getElementById('box3');
var p3 = document.getElementById("d3");
var c3 = document.getElementById("c3");
addBoxEventListener(box3, p3, c3);

var box4 = document.getElementById('box4');
var p4 = document.getElementById("d4");
var c4 = document.getElementById("c4");
addBoxEventListener(box4, p4, c4);

var box5 = document.getElementById('box5');
var p5 = document.getElementById("d5");
var c5 = document.getElementById("c5");
addBoxEventListener(box5, p5, c5);
