// 상품 정보 추가
function infoAdd() {
    let infoGet = JSON.parse(localStorage.getItem('prod-info'))
    let detailImg = document.querySelector('#detail_tit .tit_img img');
    let detailTit = document.querySelector('#detail_tit .tit_desc .tit');
    let detailDesc = document.querySelector('#detail_tit .tit_desc .desc');
    let detailPrice = document.querySelector('#detail_tit .tit_desc .price > em');

    detailImg.src = infoGet.img;
    detailTit.innerHTML = infoGet.name;
    detailDesc.innerHTML = infoGet.desc;
    detailPrice.innerHTML = infoGet.price;
}
infoAdd();


// 메인 탭
let tab = document.querySelectorAll('#tab_list ul li');
let tabCont = document.querySelectorAll('#tab_cont .cont_item');

tabCont[0].classList.add('show');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (e.currentTarget == tab[i]) {
            tab.forEach(tab => { tab.classList.remove('active') })
            tabCont.forEach(tabCont => { tabCont.classList.remove('show') })
            tab[i].classList.add('active');
            tabCont[i].classList.add('show');
        }
    })
}


// 리뷰 탭
let reviewTab = document.querySelectorAll('.review_sort li');
let tabContAll = document.querySelectorAll('.reviewCont .all');
let tabContPho = document.querySelectorAll('.reviewCont .photo');

for (let i = 0; i < reviewTab.length; i++) {
    reviewTab[i].addEventListener('click', function (e) {
        e.preventDefault();
        let tabData = e.currentTarget.dataset.name;

        if (e.currentTarget == reviewTab[i]) {
            reviewTab.forEach(tab => { tab.classList.remove('active') });
            reviewTab[i].classList.add('active');
        }

        if (tabData == 'all') {
            tabContAll.forEach(cont => { cont.style.display = 'block'; });
            tabContAll.forEach(cont => { cont.style.display = 'flex'; });
        }
        else if (tabData == 'photo') {
            tabContAll.forEach(cont => { cont.style.display = 'none'; });
            tabContPho.forEach(cont => { cont.style.display = 'block'; });
            tabContPho.forEach(cont => { cont.style.display = 'flex'; });
        }
    })
}