/* 
CORS workaround Modified from a code snippet by Paul van den Dool
https://stackoverflow.com/questions/42518419/html-text-scraping#answer-42528035
*/

// url to scrape
var url_0 = 2;
var url_1 = 0;
var url_2 = 0;
const urlToScrape = "https://goload.pro/";
const urlToScrape_2 = "https://goload.pro/recently-added-raw";
const urlToScrape_3 = "https://goload.pro/recently-added-dub";
const urlToScrape_4 = "https://goload.pro/";
var search_url = "https://goload.pro/search.html?keyword=";

// workaround for cross origin requests
$.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        const http = window.location.protocol === "http:" ? "http:" : "https:";
        options.url = http + "//anily-cors.herokuapp.com/" + options.url;
    }
});

// get request
$.ajax({
    url: urlToScrape,
    method: "GET"
}).done(function(data) {
    const html = $(data);
    const liss = html.find("li");
    $('#loadingi').hide();
    $(".sub .row-a #grid").append(liss);
    $("#sub").addClass("acti");
    $('.sub .row-a #grid li').not('.video-block').remove();
    $('#loadmore-sub').show();
});

$(document).ready(function() {
    $(".raw").hide();
    $(".dub").hide();
    $("#sub").click(function() {
        $("#dub").removeClass("acti");
        $("#raw").removeClass("acti");
        $("#sub").addClass("acti");
        $(".raw").hide();
        $(".dub").hide();
        $(".sub").show();
    });
    $("#raw").click(function() {
        if (url_1 == 0) {
            $('#loadingi').show();
            $.ajax({
                url: urlToScrape_2,
                method: "GET"
            }).done(function(data) {
                const html = $(data);
                const liss = html.find("li");
                $(".raw .row-a #grid").append(liss);
                $('.raw .row-a #grid li').not('.video-block').remove();
                url_1 = 2;
                $('#loadingi').hide();
                $('#loadmore-raw').show();
            });
        }
        $("#sub").removeClass("acti");
        $("#dub").removeClass("acti");
        $("#raw").addClass("acti");
        $(".sub").hide();
        $(".dub").hide();
        $(".raw").show();
    });
    $("#dub").click(function() {
        if (url_2 == 0) {
            $('#loadingi').show();
            $.ajax({
                url: urlToScrape_3,
                method: "GET"
            }).done(function(data) {
                const html = $(data);
                const liss = html.find("li");
                $(".dub .row-a #grid").append(liss);
                $('.dub .row-a #grid li').not('.video-block').remove();
                $('#loadingi').hide();
                url_2 = 2;
                $('#loadingi').hide();
                $('#loadmore-dub').show();
            });
        }
        $("#sub").removeClass("acti");
        $("#raw").removeClass("acti");
        $("#dub").addClass("acti");
        $(".raw").hide();
        $(".sub").hide();
        $(".dub").show();
    });
    $("#loadmore-sub").click(function() {
        $('#loadingi').show();
        $.ajax({
            url: urlToScrape + "?page=" + url_0.toString(),
            method: "GET"
        }).done(function(data) {
            const html = $(data);
            const liss = html.find("li");
            $(".sub .row-a #grid").append(liss);
            $("#sub").addClass("acti");
            $('.sub .row-a #grid li').not('.video-block').remove();
            url_0 = url_0 + 1
            $('#loadingi').hide();
        });
    });
    $("#loadmore-raw").click(function() {
        $('#loadingi').show();
        $.ajax({
            url: urlToScrape + "?page=" + url_0.toString(),
            method: "GET"
        }).done(function(data) {
            const html = $(data);
            const liss = html.find("li");
            $(".raw .row-a #grid").append(liss);
            $('.raw .row-a #grid li').not('.video-block').remove();
            url_1 = url_1 + 1;
            $('#loadingi').hide();
        });
    });
    $("#loadmore-dub").click(function() {
        $('#loadingi').show();
        $.ajax({
            url: urlToScrape_3 + "?page=" + url_0.toString(),
            method: "GET"
        }).done(function(data) {
            const html = $(data);
            const liss = html.find("li");
            $(".dub .row-a #grid").append(liss);
            $('.dub .row-a #grid li').not('.video-block').remove();
            url_2 = url_2 + 1;
            $('#loadingi').hide();
        });
    });
    $('#cancel').click(function() {
        $('.search').hide();
        $('#search-bt').show();
    });
    $('#search-bt').click(function() {
        $('.search').show();
        $('#search-bt').hide();
    });
    $("#go").click(function() {
        $('.row-a #search-result ul').remove();
        $.ajax({
            url: search_url + document.getElementById('serchi').value.toString(),
            method: "GET"
        }).done(function(data) {
            const html = $(data);
            const liss = html.find("ul");
            $(".row-a #search-result .row-a").append(liss);
            $('#menu-header-menu').remove();
        });
    });
});