$(document).ready(function () {
  // 메뉴 아이템에 마우스 이벤트를 바인딩합니다.
  $("#menu_bar > ul > li")
    .on("mouseenter", function () {
      // 하위 메뉴를 부드럽게 보여줍니다.
      $(this).children("ul").slideDown(500);
      // 메뉴 아이템의 i 태그를 90도 회전하고 트랜지션 효과를 적용합니다.
      $(this).find("i").css({
        transform: "rotate(90deg)",
        transition: "transform 0.5s",
      });
    })
    .on("mouseleave", function () {
      // 하위 메뉴를 부드럽게 숨깁니다.
      $(this).children("ul").slideUp(500);
      // 메뉴 아이템의 i 태그를 초기 상태로 회전하고 트랜지션 효과를 적용합니다.
      $(this).find("i").css({
        transform: "rotate(0deg)",
        transition: "transform 0.5s",
      });
    })
    .on("click", function (event) {
      // 클릭 이벤트가 발생할 때 하위 메뉴의 기본 동작을 중지합니다.
      event.preventDefault();
    });
});
