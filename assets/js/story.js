function introActive() {
    let item = document.querySelectorAll('#tabCont01 .intro ol li');
    let count = 0;
    console.log(item[0])

    setInterval(function () {
        count += 1;
        if (count == 1) {
            console.log('1');
            item.forEach(item => item.classList.remove('active'));
            item[0].classList.add('active');
        } else if (count == 2) {
            console.log('2');
            item.forEach(item => item.classList.remove('active'));
            item[1].classList.add('active');
        } else if (count == 3) {
            console.log('3')
            item.forEach(item => item.classList.remove('active'));
            item[2].classList.add('active');
        } else if (count == 4) {
            item.forEach(item => item.classList.remove('active'));
            item[3].classList.add('active');
        }
        else {
            count = 0;
        }
    }, 3000);
}
introActive();