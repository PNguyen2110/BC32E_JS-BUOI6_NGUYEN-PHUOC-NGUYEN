// BÀI 1: TÌM SỐ NGUYÊN DƯƠNG NHỎ NHẤT

var btnTim = document.getElementById('btnTim');
btnTim.onclick = function() {
    var pKetQua = document.getElementById('pKetQua');

    var ketQua = 0;
    for(var i = 1; i < 10000; i++){
        ketQua += i
        if(ketQua > 10000){
            pKetQua.innerHTML = 'số nguyên dương nhỏ nhất: ' + i;
            break;
        }
    }
}

// BÀI 2: TÍNH TỔNG X, N

var btnTinhTong = document.getElementById('btnTinhTong');
btnTinhTong.onclick = function (){
    var nhapX = +document.getElementById('nhapX').value;
    var nhapN = +document.getElementById('nhapN').value;

    var total = 0;

    for(var i = 1; i<=nhapN; i++){
        total += nhapX ** i
    }
    document.getElementById('pTinhTong').innerHTML = total;
}

// BÀI 3: TÍNH GIAI THỪA

var btnGiaiThua = document.getElementById('btnGiaiThua');
btnGiaiThua.onclick = function(){
    var nhapSo2 = document.getElementById('nhapSo2').value;

    var kQ2 = 1;
    for(var i = 1; i <= nhapSo2; i++){
        kQ2 *= i

    }
    document.getElementById('pKetQua2').innerHTML = kQ2;
}

// BÀI 4: TẠO THẺ DIV

var btnTaoThe = document.getElementById('btnTaoThe');
btnTaoThe.onclick = function(){
    var pTaoThe = document.getElementById('pTaoThe')

    var html ='';
    for(var i = 1; i <=10; i++){
        if(i % 2 !== 0){
            var taoDivL = '<div class="bg-primary">div lẻ</div>'
            html += taoDivL
            pTaoThe.innerHTML = html;
        }else{
            var taoDivC = '<div class="bg-danger">div chẵn</div>'
            html += taoDivC
            pTaoThe.innerHTML = html;
        }
    }
}
