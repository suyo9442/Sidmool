window.onload = function () {
    /***** header *****/
    // rank
    let rankList = document.querySelector('.rank_list ol');
    let rankItem = document.querySelectorAll('.rank_list ol li');
    let rankOrder = 0;
    let rankAll = document.querySelector('.rank_all');

    setInterval(function () {
        if (rankOrder < rankItem.length - 1) {
            rankOrder += 1;
            console.log(rankOrder)
            rankList.style.transform = 'translateY(' + rankOrder * -43.5 + 'px)';
        } else {
            rankOrder = -1;
        }
    }, 3000)
    // rankList.addEventListener('mouseover', function () {
    //     rankAll.style.opacity = 1;
    // })
    // rankList.addEventListener('mouseout', function () {
    //     rankAll.style.opacity = 0;
    // })

}

