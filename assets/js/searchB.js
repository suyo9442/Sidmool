// 상품 리스트 생성
import { doctor, minJung, acbye, mugija, saccharo, ETC } from '../js/prodData.mjs';

let resultBinding = function (data) {
    let searchBox = document.querySelector('#searchRes_list .result_wrap');

    data.forEach((a, i) => {
        let list = `
        <li class="result_item">
            <div class="list_img">
                <a href="#" class="listDetail">
                    <img src="../assets/img/products/${a.category}0${i}.jpg" alt="products">
                </a>
            </div>
            <div class="list_desc">
                <strong style="color: #97BF42; font-weight: 500;">SIDMOOL</strong>
                <a class="title">${a.title}</a>
                <strong class="price">${a.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</strong>&nbsp;원
                <span class="desc" style="display:none;">${a.desc}</span>
                <p class="button clearfix">
                    <a href="#" class="bt"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg></a>
                    <a href="#" class="bt"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></a>
                </p>
            </div>
        </li>`;
        searchBox.insertAdjacentHTML('beforeend', list);
    });

    return data;
}



let dataName = [doctor, minJung, acbye, mugija, saccharo, ETC];
function dataFunc() {
    dataName.forEach((data) => {
        resultBinding(data);
    });
}
dataFunc();


let 오름차순 = document.getElementById('ascending');

오름차순.addEventListener('click', e => {
    e.preventDefault();

    for (let i = 0; i < dataName.length; i++) {
        let sortAS = dataName[i].sort(function (a, b) {
            if (a.title < b.title) {
                return 1
            } else {
                return -1
            }
        })
        // console.log(Array.from(sortAS[i].title))
        // console.log(sortAS)
    }
})

