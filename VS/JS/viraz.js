
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.onmousemove = function(event){    // функция расчитывает координаты курсора!
    let x = event.x - 50;
    let y = event.y - 50;
    //console.log(x+' '+y);
    document.querySelector('.y-1').style.transform = 'rotate('+57.2958*arcctg(x,y)+'45deg)';
    document.querySelector('.y-3').style.transform = 'rotate('+57.2958*arcctg(x - 116,y)+'45deg)';

    function arcctg(x,y){
        if (x > 0 && y > 0 ) return Math.PI/2 - Math.atan(x/y);    // && - оператор и, || оператор - или
        if (x < 0 && y > 0 ) return Math.PI/2 - Math.atan(x/y);
        if (x < 0 && y < 0 ) return Math.PI + Math.atan(y/x);
        if (x > 0 && y < 0 ) return 3*Math.PI/2 + Math.abs(Math.atan(x/y));
    }
}
