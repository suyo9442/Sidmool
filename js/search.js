let searchBtn = document.querySelector('#searchBox_bar .search_wrap .searchBtn');
let searchInput = document.querySelector('#searchBox_bar #searchBar');



// 검색 기능
let searchFunc = function () {
    let serachItem = document.querySelectorAll('#searchRes_list .result_wrap .result_item');
    let serachWrap = document.querySelector('#searchRes_list .result_wrap');
    let searchWord = document.querySelector('#searchRes_sort .search_desc .serchWord');
    let searchNum = document.querySelector('#searchRes_sort .search_desc .searchNum');
    const searchFilter = searchInput.value.trim();

    serachItem.forEach(item => {
        let key = item.textContent;

        if (key.includes(searchFilter)) {
            item.style.display = 'block';
            item.classList.add('count');
        } else {
            item.style.display = 'none';
            item.classList.remove('count');
            searchNum.innerHTML = 0;
        }
    });

    searchNum.innerHTML = document.querySelectorAll('.count').length;
    searchWord.innerHTML = searchInput.value;
}


// 버튼 클릭 시 검색
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    searchFunc();
})
// 엔터 시 검색
function enter() {
    searchFunc();
}


// let users = [1, 2, 3, 4, 1, 1]
// const result = users.filter(users => users == 1);
// console.log(result.length)
