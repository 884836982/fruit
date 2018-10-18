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
    });
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
    //加入购物车
$(".product_item").mouseenter(function() {
    $(this).addClass("current").css({

            // -webkit - transform:"translateX(5px)",
            // -moz - transform: "translateX(5px)",
            // -ms - transform: "translateX(5px)",
            // -o - transform: "translateX(5px)",
            transform: "translateX(5px)",
        })
        .siblings(".product_item").removeClass("current").css({
            transform: "translateX(0px)"
        })
});
//回到顶部
$(".goTop").click(function() {
    $("html,body").scrollTop(0);
});
//吸顶菜单
$(document).scroll(function() {
    var scrollTop = $("html,body").scrollTop();
    if (scrollTop >= 100) {
        $("#search").addClass("search_fixed")
    } else {
        $("#search").removeClass("search_fixed")
    }
    if (scrollTop >= 500) {
        $(".goTop").css({
            display: "block"
        })
    } else {
        $(".goTop").css({
            display: "none"
        })
    }
    if (scrollTop >= 700) {
        var curId = ""
        $(".floor-guide").css({
            display: "block"
        })
        $.each($(".floor"), function(index, items) {
            if (scrollTop > arguments[1].offsetTop) {
                $(".floor-guide a").eq(index).addClass("current").siblings("a").removeClass("current");
            }
        })
    } else {
        $(".floor-guide").css({
            display: "none"
        })
    }
})

//购物车
function ShopCar() {}
$.extend(ShopCar.prototype, {
    init: function() {
        this.main = $("#goods ul");
        this.timer = null;
        this.totlePrice = 0
        this.json = 0;
        this.loadJson()
            .then(function(res) {
                this.json = res.goodsList;
                console.log(res);
                console.log(this.json);
                this.renderPage()
                this.bindEvent();
                this.listSum();
            })

    },
    loadJson: function() {
        var opt = {
            url: "http://localhost:8888/proxy/script/data.json",
            type: "GET",
            context: this
        }
        return $.ajax(opt);
    },
    renderPage: function() {
        console.log(this.json);
        var html = "";
        for (var i = 0; i < this.json.length; i++) {
            html += ` <li class="product_item j_product current" data-id=${this.json[i].id}>
            <div class="p_img clearfix">
                <a href="javascript:;" target="_blank">
                    <img src="${this.json[i].img}" width="290" height="290" class="j_product_img">
                </a>
            </div>
            <div class="p_info clearfix">
                <div class="p_name">
                    <a href="javascript:;" target="_blank">
                    ${this.json[i].title}
                        <font color="red">榴莲</font>蜜语
                        <font color="red">榴莲</font>班戟150g(6个)</a>
                </div>
                <div class="p_price">
                    <span class="price"><strong>¥${this.json[i].price}</strong></span>

                </div>
            </div>

            <div class="p-buy">
                <span></span>
                <a class="btn-buy" href="javascript:;" data-id=${this.json[i].id}>加入购物车</a>
            </div>
        </li> `
        }
        this.main.html(html);
    },
    bindEvent: function() {
        console.log($("#goods li"));
        $("#goods ul").on("click", "li", function(event) {
            console.log(event);
            var evt = event || window.event;
            if (evt.stopPropagation) {
                evt.stopPropagation();
            } else {
                evt.cancelBubble = true;
            }
            console.log(this);
            this.addCar(this);
            window.history.back();
        }.bind(this));
        $(".shopping-cart").on("mouseenter", this.showList.bind(this));
        $(".shopping-btn").on("mouseenter", function() {
            clearTimeout(this.timer)
            $(".shopping-list").css({
                display: "block"
            })
        })

        // $(".shopping-btn").on("mouseleave", function() {
        //     clearTimeout(this.timer)
        //     this.timer = setTimeout(function(){
        //         $(".shopping-list").css({
        //             display: "none"
        //         })
        //     },500)
        // });
        $(".shopping-list").on("mouseenter", function() {
            clearTimeout(this.timer)
            $(this).css({
                display: "block"
            })
        })
        $(".shopping-list").on("mouseleave", function() {
            clearTimeout(this.timer)
            $(this).css({
                display: "none"
            })
        })
        $(".shopping-cart").on("click", function(event) {
            var target = event.target;
            if (target != $(".shopping-cart")[0]) return 0;
            $.removeCookie("shopCar");
            $(".shopping-list").triggerHandler("mouseleave");
            this.listSum();
        }.bind(this))
    },
    addCar: function(event) {
        var target = event.target;
        var goodsId = $(target).attr("data-id");
        var cookie;
        if ((cookie = $.cookie("shopCar"))) {
            var cookieArray = JSON.parse(cookie);
            var hasGoods = false;
            for (var i = 0; i < cookieArray.length; i++) {
                if (cookieArray[i].id == goodsId) {
                    hasGoods = true;
                    cookieArray[i].num++;
                    break;
                }
            }
            if (hasGoods == false) {
                var goods = {
                    id: goodsId,
                    num: "1"
                }
                cookieArray.push(goods);
            }
            $.cookie("shopCar", JSON.stringify(cookieArray));
        } else {
            $.cookie("shopCar", `[{"id":"${goodsId}","num":"1"}]`);
        }
        this.listSum();
        this.showList();
    },

    showList: function() {
        // var target = event.target;
        // if (target != $(".shopping-cart dl")[0]) return 0;
        this.totlePrice = 0;
        var cooke;
        if (!(cookie = $.cookie("shopCar"))) {
            return 0;
        };
        var cookieArray = JSON.parse(cookie);
        var html = "";
        console.log(cookieArray, this.json);
        for (var i = 0; i < cookieArray.length; i++) {
            for (var j = 0; j < this.json.length; j++) {
                if (cookieArray[i].id == this.json[j].id) {
                    console.log(Number(cookieArray[i].num), Number(this.json[j].price))
                    this.totlePrice += Number(cookieArray[i].num) * Number(this.json[j].price);
                    console.log(cookieArray[i].num);
                    html += `<li data-id = ${cookieArray[i].id}><div class="l"><a href="http://www.yiguo.com/product/1356627.html" target="_blank">
                    <img src="${this.json[j].img}" width="42" height="42"></a></div><div class="c">
                <a href="http://www.yiguo.com/product/1356627.html">${this.json[j].title}</a></div><div class="r"><b>¥${this.json[j].price}</b> *${cookieArray[i].num}<a href="javascript:;" onclick="remove(${cookieArray[i].id})">删除</a></div></li>`;

                }
            }
        }
        $(".shopping-list .nogoods").css({
            display: "none"
        })
        $(".shopping-list .goods ul").html(html);
        console.log(this.totlePrice);
        $(".shopping-cart .totlePrice").html(this.totlePrice);
    },
    listSum: function() {
        var cookie;
        if (!(cookie = $.cookie("shopCar"))) {
            $(".shopping-cart .totleNum").find("b").html(0);
            return 0;
        }
        var cookieArray = JSON.parse(cookie);
        var sum = 0;

        for (var i = 0; i < cookieArray.length; i++) {
            console.log(cookieArray)
            if (cookieArray[i].id) {
                sum += Number(cookieArray[i].num);
            }

        }
        console.log(sum);
        if (sum != 0) {
            this.showList();
        }
        $(".shopping-cart .totleNum").find("b").html(sum);
    },
})
var shopcar = new ShopCar();
shopcar.init();

function remove(id) {
    $.removeCookie("id", { path: "/" });
    shopcar.showList();
}
//商品详情页
console.log($("#goods ul"));
$("#goods ul").on("click", "li", function(event) {
        var target = event.target;
        var li = $(target).parents("li")[0];
        var aLi = Array.from($("#goods ul li"));
        if (aLi.indexOf(li) != -1) {
            $.cookie("goodsId", li.getAttribute("data-id"));
            location.href = "details.html";
        }
    })
    //选项卡；
function jSon(num) {
    var options = {
        url: "http://localhost:8888/proxy/www.yiguo.com/Home/Floor?floorId=0" + num + "_channelhome&_=1539791297392",
        type: "GET",
        context: this

    }
    return $.ajax(options);
}
for (let i = 1; i <= 9; i++) {
    jSon(i)
        .then(function(res) {
            $("#floor .floor").eq(i - 1).html(res);
        })
}