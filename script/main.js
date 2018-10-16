//城市二级菜单选项卡；
//二级菜单选项卡效果
$(function() {
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
    //手机易购二级菜单
    $(".mobile").mouseenter(function() {
        $(this).addClass("current")
            .children(".con").css({
                display: "block"
            })
    })
    $(".mobile").mouseleave(function() {
        $(this).removeClass("current")
            .children(".con").css({
                display: "none"
            })
    });
    //我的易购二级菜单
    $(".myyiguo").mouseenter(function() {
        $(this).addClass("current")
            .children(".con").css({
                display: "block"
            })
    })
    $(".myyiguo").mouseleave(function() {
        $(this).removeClass("current")
            .children(".con").css({
                display: "none"
            })
    })
    $(".con").mouseenter(function() {
        $(this).css({
                display: "block"
            })
            .parent().addClass("current")
    })
    $(".con").mouseleave(function() {
        $(this).css({
                display: "none"
            })
            .parent().removeClass("current")
    });
    //商品分类：
    $(".catalogs .item").mouseenter(function() {
        $(this).addClass("current")
            .children(".sub-item").css({
                display: "block",
            })
    })
    $(".catalogs .item").mouseleave(function() {
        $(this).removeClass("current")
            .children(".sub-item").css({
                display: "none",
            })
    })
    $(".sub-item").mouseenter(function() {
        $(this).css({
            display: "block",
        }).parent().addClass("current")
    })
    $(".sub-item").mouseleave(function() {
        $(this).css({
            display: "none",
        }).parent().removeClass("current")
    });
    //分类列表关闭

    $(".catalogs-title").click(function() {
        $(".catalogs-list").toggle()
    });

    /**轮播图：*/

    //点击左按钮
    var nowIndex = 0;
    var timer = null;
    autoplay();
    $(".b-btn .prev").click(function() {
        if (nowIndex == -1) {
            nowIndex = $(".b-img li").length - 1;
        }
        $.each($(".b-img li"), function(i, e) {
            $(e).removeClass("current")
        });
        $(".b-img li").eq(nowIndex).addClass("current")
        $(".b-dot li").eq(nowIndex)
            .addClass("on")
            .siblings("li")
            .removeClass("on")
        nowIndex--;
    });
    //点击右按钮
    $(".b-btn .next").click(function() {
        if (nowIndex == $(".b-img li").length) {
            nowIndex = 0;
        }
        console.log(nowIndex);
        $(".b-img li").each(function(i, e) {
            $(e).removeClass("current")
        });
        $(".b-img li").eq(nowIndex).addClass("current")
        $(".b-dot li").eq(nowIndex)
            .addClass("on")
            .siblings("li")
            .removeClass("on");
        nowIndex++;
    });
    //自动轮播
    function autoplay() {
        console.log(1);
        clearInterval(timer);
        timer = setInterval(function() {
            console.log($(".b-btn .next"));
            $(".b-btn .next").triggerHandler("click");
        }, 4500)
    }
    $("#banner").mouseenter(function() {
        clearInterval(timer);
    });
    $("#banner").mouseleave(function() {
        clearInterval(timer);
        autoplay();
    });
    //小圆圈获取焦点；
    $(".b-dot li").mouseenter(function() {
        $(this).addClass("on")
            .siblings("li").removeClass("on");
        $(".b-img li").each(function(i, e) {
            $(e).removeClass("current")
        });
        $(".b-img li").eq($(this).index()).addClass("current")
            // $(".b-img li").css({
            //         display: "none"
            //     }).removeClass("current")
            //     .eq($(this).index()).css({
            //         display: "block",
            //     }).addClass("current")

    })
})
$(".b-bot li").mouseleave(function() {
    $(this).removeClass("on")
        .siblings("li").removeClass("on");
    $(".b-img li").eq($(this).index()).css({
        display: "block"
    }).siblings("li").css({
        display: "none"
    })
})