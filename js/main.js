window.onload = function () {

    /***** header *****/
    function rank() {
        let rankList = document.querySelector('.rank_list ol');
        let rankItem = document.querySelectorAll('.rank_list ol li');
        let rankOrder = 0;
        let rankAll = document.querySelector('.rank_all');

        setInterval(function () {
            if (rankOrder < rankItem.length - 1) {
                rankOrder += 1;
                rankList.style.transform = 'translateY(' + rankOrder * -43.5 + 'px)';
            } else {
                rankOrder = -1;
            }
        }, 3000)
    }
    rank();


    /***** lineProd *****/
    function lineFilter() {
        let lineTab = document.querySelectorAll('#line_tag .tag_box ol li');
        let listItem = document.querySelectorAll('#line_list .list_slider');

        $(lineTab).on('click', function (e) {
            e.preventDefault();

            let filter = $(this).data('name');

            $(listItem).slick('slickUnfilter');

            if (filter == 'doctor') {
                $(listItem).slick('slickFilter', '.doctor');
            }
            else if (filter == 'minJung') {
                $(listItem).slick('slickFilter', '.minJung');
            }
            else if (filter == 'mugija') {
                $(listItem).slick('slickFilter', '.mugija');
            }
            else if (filter == 'acbye') {
                $(listItem).slick('slickFilter', '.acbye');
            }
            else if (filter == 'saccharo') {
                $(listItem).slick('slickFilter', '.saccharo');
            }
            else if (filter == 'all') {
                $(".list_slider").slick('slickUnfilter');
            }
        })
    }
    lineFilter();
}

