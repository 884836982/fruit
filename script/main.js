//城市二级菜单选项卡；
//二级菜单选项卡效果

$(".citytab span").mouseenter(function(event) {
    var target = event.target;
    $(target).addClass("active")
        .siblings("span")
        .removeClass("active");
    $(".citylist").eq($(this).index())
        .addClass("active")
        .siblings(".citylist")
        .removeClass("active");

});
//一级菜单显示隐藏
$(".city_name").mouseover(function() {
    $(this).css({
        background: "#008842",
        color: "#fff"
    });
    $(".city-con").css({
        display: "block"
    });
    $(".city_name span").css({
        background: "url(../images/header-img.png) no-repeat -25px 0",
        transform: "rotate(180deg)"

    });
});
$(".city_name").mouseout(function() {
        $(this).css({
            background: "none",
            color: "#008842"
        });
        $(".city-con").css({
            display: "none"
        });
        $(".city_name span").css({
            background: "url(../images/header-img.png) no-repeat 0 0",
            transform: "rotate(0deg)"
        });
    })
    //二级菜单显示隐藏
$(".city-con").mouseenter(function() {
    $(this).css({
        display: "block"
    })
    $(".city_name").css({
        background: "#008842",
        color: "#fff"
    });
    $(".city_name span").css({
        background: "url(../images/header-img.png) no-repeat -25px 0",
        transform: "rotate(180deg)"

    });
});
$(".city-con").mouseleave(function() {
    $(this).css({
        display: "none"
    })
    $(".city_name").css({
        background: "none",
        color: "#008842"
    });
    $(".city_name span").css({
        background: "url(../images/header-img.png) no-repeat 0 0",
        transform: "rotate(0deg)"
    });
});