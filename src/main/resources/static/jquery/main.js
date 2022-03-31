window.addEventListener("load", function () {
    let imagelength = $('.slides').children('li').length

    let totalSize = 450*imagelength + 100*imagelength + 100;

    $('.slides').css('width',totalSize+'px');

    const slides = document.querySelector('.slides');
    //전체 슬라이드 컨테이너
    const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
    let currentIdx = 0;
    // 현재 슬라이드 index
    const slideCount = slideImg.length; // 슬라이드 개수
    const prev = document.querySelector('.prev'); //이전 버튼
    const next = document.querySelector('.next'); //다음 버튼
    const slideWidth = 450; //한개의 슬라이드 넓이
    const slideMargin = 100; //슬라이드간의 margin 값

    // 전체 슬라이드 컨테이너 넓이 설정
    slides.style.width = (slideWidth + slideMargin) * slideCount+ 100 + 'px';
    function moveSlide(num) {
        slides.style.left = -num * 550 + 'px'; currentIdx = num;
    } prev.addEventListener('click', function () {
        /*첫 번째 슬라이드로 표시 됐을때는 이전 버튼 눌러도 아무런 반응 없게 하기 위해
        currentIdx !==0일때만 moveSlide 함수 불러옴 */
        if (currentIdx !== 0) moveSlide(currentIdx - 1);
    });
    next.addEventListener('click', function () {
        /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */

        if (currentIdx !== slideCount - 1) {
            moveSlide(currentIdx + 1);
        }
    });



/* 슬라이드 2 */
 let imagelength2 = $('.slides2').children('li').length

    let totalSize2 = 450*imagelength2 + 100*imagelength2 + 100;

    $('.slides2').css('width',totalSize2+'px');

    const slides2 = document.querySelector('.slides2');
    //전체 슬라이드 컨테이너
    const slideImg2 = document.querySelectorAll('.slides2 li'); //모든 슬라이드들
    let currentIdx2 = 0;
    // 현재 슬라이드 index
    const slideCount2 = slideImg2.length; // 슬라이드 개수
    const prev2 = document.querySelector('.prev2'); //이전 버튼
    const next2 = document.querySelector('.next2'); //다음 버튼
    const slideWidth2 = 450; //한개의 슬라이드 넓이
    const slideMargin2 = 100; //슬라이드간의 margin 값

    // 전체 슬라이드 컨테이너 넓이 설정
    slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2+ 100 + 'px';
    function moveSlide2(num) {
        slides2.style.left = -num * 550 + 'px'; currentIdx2 = num;
    } prev2.addEventListener('click', function () {
        /*첫 번째 슬라이드로 표시 됐을때는 이전 버튼 눌러도 아무런 반응 없게 하기 위해
        currentIdx !==0일때만 moveSlide 함수 불러옴 */
        if (currentIdx2 !== 0) moveSlide2(currentIdx2 - 1);
    });
    next2.addEventListener('click', function () {
        /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */

        if (currentIdx2 !== slideCount2 - 1) {
            moveSlide2(currentIdx2 + 1);
        }
    });





/* 슬라이드 3 */
 let imagelength3 = $('.slides3').children('li').length

    let totalSize3 = 450*imagelength3 + 100*imagelength3 + 100;

    $('.slides3').css('width',totalSize3+'px');

    const slides3 = document.querySelector('.slides3');
    //전체 슬라이드 컨테이너
    const slideImg3 = document.querySelectorAll('.slides3 li'); //모든 슬라이드들
    let currentIdx3 = 0;
    // 현재 슬라이드 index
    const slideCount3 = slideImg3.length; // 슬라이드 개수
    const prev3 = document.querySelector('.prev3'); //이전 버튼
    const next3 = document.querySelector('.next3'); //다음 버튼
    const slideWidth3 = 450; //한개의 슬라이드 넓이
    const slideMargin3 = 100; //슬라이드간의 margin 값

    // 전체 슬라이드 컨테이너 넓이 설정
    slides3.style.width = (slideWidth3 + slideMargin3) * slideCount3+ 100 + 'px';
    function moveSlide3(num) {
        slides3.style.left = -num * 550 + 'px'; currentIdx3 = num;
    } prev3.addEventListener('click', function () {
        /*첫 번째 슬라이드로 표시 됐을때는 이전 버튼 눌러도 아무런 반응 없게 하기 위해
        currentIdx !==0일때만 moveSlide 함수 불러옴 */
        if (currentIdx3 !== 0) moveSlide3(currentIdx3 - 1);
    });
    next3.addEventListener('click', function () {
        /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */

        if (currentIdx3 !== slideCount3 - 1) {
            moveSlide3(currentIdx3 + 1);
        }
    });



/* 슬라이드 4 */
 let imagelength4 = $('.slides4').children('li').length

    let totalSize4 = 450*imagelength4 + 100*imagelength4 + 100;

    $('.slides4').css('width',totalSize4+'px');

    const slides4 = document.querySelector('.slides4');
    //전체 슬라이드 컨테이너
    const slideImg4 = document.querySelectorAll('.slides4 li'); //모든 슬라이드들
    let currentIdx4 = 0;
    // 현재 슬라이드 index
    const slideCount4 = slideImg4.length; // 슬라이드 개수
    const prev4 = document.querySelector('.prev4'); //이전 버튼
    const next4 = document.querySelector('.next4'); //다음 버튼
    const slideWidth4 = 450; //한개의 슬라이드 넓이
    const slideMargin4 = 100; //슬라이드간의 margin 값

    // 전체 슬라이드 컨테이너 넓이 설정
    slides4.style.width = (slideWidth4 + slideMargin4) * slideCount4+ 100 + 'px';
    function moveSlide4(num) {
        slides4.style.left = -num * 550 + 'px'; currentIdx4 = num;
    } prev4.addEventListener('click', function () {
        /*첫 번째 슬라이드로 표시 됐을때는 이전 버튼 눌러도 아무런 반응 없게 하기 위해
        currentIdx !==0일때만 moveSlide 함수 불러옴 */
        if (currentIdx4 !== 0) moveSlide4(currentIdx4 - 1);
    });
    next4.addEventListener('click', function () {
        /* 마지막 슬라이드로 표시 됐을때는 다음 버튼 눌러도 아무런 반응 없게 하기 위해 currentIdx !==slideCount - 1 일때만 moveSlide 함수 불러옴 */

        if (currentIdx4 !== slideCount4 - 1) {
            moveSlide4(currentIdx4 + 1);
        }
    });
});