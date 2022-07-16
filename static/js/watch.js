/* 
CORS workaround Modified from a code snippet by Paul van den Dool
https://stackoverflow.com/questions/42518419/html-text-scraping#answer-42528035
*/

// url to scrape
var urlToScrape = "https://goload.pro/videos/" + vid_url;

var search_url = "https://goload.pro/search.html?keyword=";

// workaround for cross origin requests
//$.ajaxPrefilter(function(options) {
//    if (options.crossDomain && jQuery.support.cors) {
//        const http = window.location.protocol === "http:" ? "http:" : "https:";
//        options.url = http + "//anily-cors.herokuapp.com/" + options.url;
//    }
//});

// get request



$(document).ready(function() {
    var swi = "";
    var id = "";
    var iid = "";
    $.ajax({
        url: "https://anily-cors.herokuapp.com/" + urlToScrape,
        method: "GET"
    }).done(function(data) {
        const html = $(data);
        const liss = html.find("iframe").attr('src');
        const lizz = html.find("ul");
        iid = get_idi("https:" + liss);
        id = (window.btoa(iid + "LTXs3GrU8we9O" + window.btoa(iid)));
        $("#watch-video").append('<iframe id="frm"src="https://animixplay.to/api/live' + id + '" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
        $('#adw').hide();
        $("#grid").append(lizz);
        $('#grid ul').first().remove();
        $('#grid ul:last-child').remove();
        $('ul').removeClass();
        var middle = (($('iframe').height()) / 2);
        $('iframe').scrollTop(middle);
        $('#loadingi').hide();
    });
    $('#down-btn').click(function() {
        $('#loadingi').show();
        location.href = "https://goload.pro/download?id=" + iid;
        $('#loadingi').hide();
    });
    $('#s-ply').click(function() {
        $('#loadingi').show();
        if (swi == "") {
            $('#frm').attr('src', 'https://goload.pro/streaming.php?id=' + iid);
            $('#adw').show();
            swi = "1";
            if ($(window).width() < 440) {
                if (swi == "1") {
                    $('#watch-video').css('height', '290px');
                    $('.row-aw').css('height', '300px')
                } else {
                    $('#watch-video').css('height', 'calc(53.4vw + 40px)');
                    $('.row-aw').css('height', 'calc(53.4vw + 40px)')
                }
            } else if ($(window).width() > 1000) {
                $('#watch-video').css('height', '560px');
                $('.row-aw').css('height', '560px')

            } else {
                $('#watch-video').css('height', 'calc(53.4vw + 40px)');
                $('.row-aw').css('height', 'calc(53.4vw + 40px)')
            }
        } else {
            $('#frm').attr('src', 'https://animixplay.to/api/live' + id);
            $('#adw').hide();
            swi = "";
            if ($(window).width() < 440) {
                if (swi == "1") {
                    $('#watch-video').css('height', '290px');
                    $('.row-aw').css('height', '300px')
                } else {
                    $('#watch-video').css('height', 'calc(53.4vw + 40px)');
                    $('.row-aw').css('height', 'calc(53.4vw + 40px)')
                }
            } else if ($(window).width() > 1000) {
                $('#watch-video').css('height', '560px');
                $('.row-aw').css('height', '560px')

            } else {
                $('#watch-video').css('height', 'calc(53.4vw + 40px)');
                $('.row-aw').css('height', 'calc(53.4vw + 40px)')
            }
        }
        $('#loadingi').hide();
    });
    $('#cancel').click(function() {
        $('.search').hide();
        $('#search-bt').show();
    });
    $('#search-bt').click(function() {
        $('.search').show();
        $('#search-bt').hide();
    });

    $(window).on('resize', function() {
        if ($(window).width() < 440) {
            if (swi == "1") {
                $('#watch-video').css('height', '290px');
                $('.row-aw').css('height', '300px')
            } else {
                $('#watch-video').css('height', 'calc(53.4vw + 40px)');
                $('.row-aw').css('height', 'calc(53.4vw + 40px)')
            }
        } else if ($(window).width() > 1000) {
            $('#watch-video').css('height', '560px');
            $('.row-aw').css('height', '560px')

        } else {
            $('#watch-video').css('height', 'calc(53.4vw + 40px)');
            $('.row-aw').css('height', 'calc(53.4vw + 40px)')
        }
    });

    function get_idi(id) {

        var url_string = id;
        var url = new URL(url_string);
        var c = url.searchParams.get("id").toString();
        return c
    }
});

function con_search() {
    $('.row-a #search-result ul').remove();
    $('#loadingi').show();
    $.ajax({
        url: "https://anily-cors.herokuapp.com/" +
            search_url + document.getElementById('serchi').value.toString(),
        method: "GET"
    }).done(function(data) {
        const html = $(data);
        const liss = html.find("ul");
        $(".row-a #search-result .row-a div").append(liss);
        $('#menu-header-menu').remove();
        $('#loadingi').hide();
    });
}