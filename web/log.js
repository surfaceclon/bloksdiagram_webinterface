var count = 1;
var count_l = 1;
var coordX;
var coordY;

// функция создания прямоугольника
function rectangle(tops = 250, lefts = 250, count_s=count){
    var rec = document.querySelector('.field');
    var recs = document.createElement('div');
    var textInBTN = document.createTextNode(count_s + 'R');
    recs.className = 'recs';
    recs.draggable = true;
    recs.style.top = tops + 'px';
    recs.style.left = lefts + 'px';
    recs.appendChild(textInBTN);
    recs.ondblclick = function(){
        recs.remove()
        document.querySelector('.num').innerHTML = '';
        texA = document.getElementById('textAr');
        texA.value = '';
    }
    recs.onclick = function(){
        console.log(textInBTN, recs.style.left, recs.style.top);
        document.querySelector('.num').innerHTML = textInBTN.textContent;
        console.log(document.getElementById('textAr').value)
    }
    
    rec.appendChild(recs);

    count ++;
    // drag and drop и отправка данных 218 130
    recs.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    recs.addEventListener('dragend', (e) => {
        recs.style.position = 'absolute';
        recs.style.left = (e.pageX-coordX-215) + 'px';
        recs.style.top = (e.pageY-coordY-10) + 'px';
        document.querySelector('.num').innerHTML = textInBTN.textContent + ' ' + recs.style.left
        + ' ' + recs.style.top;
    });
}

// функция создания ромба 180 110
function romb(tops = 250, lefts = 250, count_s=count){
    var rom = document.querySelector('.field');
    var roms = document.createElement('div');
    var textInBTN = document.createTextNode(count_s + 'RM');
    roms.className = 'roms';
    roms.draggable = true;
    roms.style.top = tops + 'px';
    roms.style.left = lefts + 'px';
    roms.appendChild(textInBTN);
    roms.ondblclick = function(){
        roms.remove();
        document.querySelector('.num').innerHTML = '';
        texA = document.getElementById('textAr');
        texA.value = '';
    }
    roms.onclick = function(){
        console.log(textInBTN, roms.style.left, roms.style.top);
        document.querySelector('.num').innerHTML = textInBTN.textContent;
    }

    rom.appendChild(roms);
    
    count ++;
    // drag and drop
    roms.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    roms.addEventListener('dragend', (e) => {
        roms.style.position = 'absolute';
        roms.style.left = (e.pageX-coordX-190) + 'px';
        roms.style.top = (e.pageY-coordY) + 'px';
        document.querySelector('.num').innerHTML = textInBTN.textContent + ' ' + roms.style.left
        + ' ' + roms.style.top;
    });
}

// функция создания овала 217 130
function oval(tops = 250, lefts = 250, count_s=count){
    var ova = document.querySelector('.field');
    var ovals = document.createElement('div');
    var textInBTN = document.createTextNode(count_s + 'OL');
    ovals.className = 'ovals';
    ovals.draggable = true;
    ovals.style.top = tops + 'px';
    ovals.style.left = lefts + 'px';
    ovals.appendChild(textInBTN);
    ovals.ondblclick = function(){
        ovals.remove();
        document.querySelector('.num').innerHTML = '';
        texA = document.getElementById('textAr');
        texA.value = '';
    }
    ovals.onclick = function(){
        console.log(textInBTN, ovals.style.left, ovals.style.top);
        document.querySelector('.num').innerHTML = textInBTN.textContent;
    }

    count ++;
    // drag and drop
    ovals.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    ovals.addEventListener('dragend', (e) => {
        ovals.style.position = 'absolute';
        ovals.style.left = (e.pageX-coordX-220) + 'px';
        ovals.style.top = (e.pageY-coordY) + 'px';
        document.querySelector('.num').innerHTML = textInBTN.textContent + ' ' + ovals.style.left
        + ' ' + ovals.style.top;
    });

    ova.appendChild(ovals);
}

// функция создания горизонтальной линии 217 130
function hor_lin(tops = 250, lefts = 250){
    var horiz = document.querySelector('.field');
    var hor_b = document.createElement('div');
    hor_b.className = 'horizont';
    hor_b.draggable = true;
    hor_b.style.top = tops + 'px';
    hor_b.style.left = lefts + 'px';
    hor_b.ondblclick = function(){hor_b.remove()}
    hor_b.onclick = function(){console.log(textInBTN, hor_b.style.left, hor_b.style.top);}

    count_l ++;

    hor_b.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    hor_b.addEventListener('dragend', (e) => {
        hor_b.style.position = 'absolute';
        hor_b.style.left = (e.pageX-coordX-225) + 'px';
        hor_b.style.top = (e.pageY-coordY-7) + 'px';
    });

    horiz.appendChild(hor_b);
}

// функция создания вертикальной линии 217 130
function ver_lin(tops = 250, lefts = 250){
    var vert = document.querySelector('.field');
    var ver_b = document.createElement('div');
    ver_b.className = 'vertical';
    ver_b.draggable = true;
    ver_b.style.top = tops + 'px';
    ver_b.style.left = lefts + 'px';
    ver_b.ondblclick = function(){ver_b.remove()}
    ver_b.onclick = function(){console.log(textInBTN, ver_b.style.left, ver_b.style.top);}

    count_l ++;

    ver_b.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    ver_b.addEventListener('dragend', (e) => {
        ver_b.style.position = 'absolute';
        ver_b.style.left = (e.pageX-coordX-220) + 'px';
        ver_b.style.top = (e.pageY-coordY-5) + 'px';
    });

    vert.appendChild(ver_b);
}

// функция полной очистки поля
function clear_all(){
    location.reload();
}