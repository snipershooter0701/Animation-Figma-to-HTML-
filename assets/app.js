
$(document).ready(function() {
    // width: 2160, height: 4096
    var contentWidth = $(window).width();
    var contentHeight = $(window).height();

    if(contentWidth / 2160 > contentHeight / 4096) {
        $("#content").width(contentHeight/4096 * 2160);
        $("#content").height(contentHeight);
    }else {
        $("#content").width(contentWidth);
        $("#content").height(contentWidth / 2160 * 4096);
    }

    setTimeout(() => {
        $(".border0").css("border-color", "#1D3E8C");
        $(".border1").css("border", "none");
    }, 1000);

    var text = document.getElementById('small-content');
    if(text) {

        var newDom = '';
        var animationDelay = 10;
    
        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }
    
        text.innerHTML = newDom;
        var length = text.children.length;
    
        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 3600 + 'ms';
        }
    }
    $("#content").fadeIn();

    $("#start_button").click(function() {
        location.assign("./page-1.html");
    })
    $("#start_saving_button").click(function() {
        location.assign("./page-2.html");
    })
    $("#calculate_button").click(function() {
        location.assign("./page-3.html");
    })
    $("#result_button").click(function() {
        location.assign("./last.html");
    })
});

$(window).resize(function() {
    var contentWidth = $(window).width();
    var contentHeight = $(window).height();
    if(contentWidth / 2160 > contentHeight / 4096) {
        $("#content").width(contentHeight/4096 * 2160);
        $("#content").height(contentHeight);
    }else {
        $("#content").width(contentWidth);
        $("#content").height(contentWidth / 2160 * 4096);
    }
});

