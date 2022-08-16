// 검색 기능
let searchFunc = function (searchKey, callback) {
    let serachItem = document.querySelectorAll('#searchRes_list .result_wrap .result_item');
    let searchWord = document.querySelector('#searchRes_sort .search_desc .serchWord');
    let searchNum = document.querySelector('#searchRes_sort .search_desc .searchNum');
    let searchTit = document.querySelectorAll('#searchRes #searchRes_list .result_item .list_desc > a.title');

    serachItem.forEach(item => {
        let itemKey = item.textContent;

        if (itemKey.includes(searchKey)) {
            item.style.display = 'block';
            item.classList.add('count');
        } else {
            item.style.display = 'none';
            item.classList.remove('count');
            searchNum.innerHTML = 0;
        }
    });

    searchNum.innerHTML = document.querySelectorAll('.count').length;
    searchWord.innerHTML = searchKey;

    callback();
}


// 버튼 클릭 시 검색
let searchBtn = document.querySelector('#searchBox_bar .search_wrap .searchBtn');
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    searchFunc(searchInput.value.trim(), detailPage);
})


let searchInput = document.querySelector('#searchBox_bar #searchBar');
// 엔터 시 검색
function enter() {
    searchFunc(searchInput.value.trim(), detailPage);
}


// 키워드 클릭 시 검색
let keyList = document.querySelectorAll('.keywordList > a');
keyList.forEach((key, i) => {
    key.addEventListener('click', (e) => {
        e.preventDefault();
        searchFunc(keyList[i].textContent.slice(1, 5), detailPage);
    })
})


// 정렬 기능


// var 어레이 = ['가', '나', '다'];
// function sortFunc(array) {
//     array.sort(function (a, b) {
//         if (a < b) {
//             return 1
//         } else {
//             return -1
//         }
//     });
// }
// let 오름차순 = document.getElementById('ascending');
// let 내림차순 = document.getElementById('descending');
// 오름차순.addEventListener('click', function () {
//     array.sort(function (a, b) {
//         if (a < b) {
//             return 1
//         } else {
//             return -1
//         }
//     });
// })


// 콜백: 상품정보 전송
function detailPage() {
    let searchBox = document.querySelectorAll('#searchRes_list .result_wrap .listDetail');
    searchBox.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // 데이터 변수
            let prodImg = e.target.src;
            let prodName = e.currentTarget.parentNode.nextSibling.nextSibling.childNodes[3].textContent
            let prodPrice = e.currentTarget.parentNode.nextSibling.nextSibling.childNodes[5].textContent
            let prodDesc = e.currentTarget.parentNode.nextSibling.nextSibling.childNodes[7].textContent

            // 데이터 전송
            let infoSet = {
                img: prodImg,
                name: prodName,
                desc: prodDesc,
                price: prodPrice
            }
            localStorage.setItem("prod-info", JSON.stringify(infoSet));

            // 주소 이동
            location.href = '../docs/products.html';
        })
    })
}
detailPage();