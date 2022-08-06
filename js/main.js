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
                console.log(rankOrder)
                rankList.style.transform = 'translateY(' + rankOrder * -43.5 + 'px)';
            } else {
                rankOrder = -1;
            }
        }, 3000)
    }
    // rank();



    let lineTab = document.querySelectorAll('#line_tag .tag_box ol li');
    let listItem = document.querySelectorAll('#line_list .list_slider');


    $(lineTab).on('click', function (e) {
        e.preventDefault();

        let filter = $(this).data('name');

        $(listItem).slick('slickUnfilter');

        if (filter == 'tab01') {
            $(listItem).slick('slickFilter', '.tab01');
        }
        else if (filter == 'tab02') {
            $(listItem).slick('slickFilter', '.tab02');
        }
        else if (filter == 'tab03') {
            $(listItem).slick('slickFilter', '.tab03');
        }
        else if (filter == 'tab04') {
            $(listItem).slick('slickFilter', '.tab04');
        }
        else if (filter == 'tab05') {
            $(listItem).slick('slickFilter', '.tab05');
        }
        // else if (filter == 'all') {
        //     $(".list_slider").slick('slickUnfilter');
        // }
    })

}

