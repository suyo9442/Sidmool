function searchRes() {
    let searchBtn = document.querySelector('#searchBox_bar .search_wrap .searchBtn');
    let searchInput = document.querySelector('#searchBox_bar #searchBar');

    // 검색 기능
    let searchFunc = function (searchKey) {
        let serachItem = document.querySelectorAll('#searchRes_list .result_wrap .result_item');
        let searchWord = document.querySelector('#searchRes_sort .search_desc .serchWord');
        let searchNum = document.querySelector('#searchRes_sort .search_desc .searchNum');

        serachItem.forEach(item => {
            let itemKey = item.textContent;
            // let searchFilter = searchInput.value.trim();

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
        searchWord.innerHTML = searchInput.value;
    }

    // 버튼 클릭 시 검색
    searchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        searchFunc(searchInput.value.trim());
    })
    // 엔터 시 검색
    function enter() {
        searchFunc(searchInput.value.trim());
    }
    // 키워드 클릭 시 검색
    let keyList = document.querySelectorAll('.keywordList > a');
    keyList.forEach((key, i) => {
        key.addEventListener('click', (e) => {
            e.preventDefault();
            searchFunc(keyList[i].textContent.slice(1, 3));
        })
    })
}
searchRes();
