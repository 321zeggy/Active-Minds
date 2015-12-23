jQuery(document).ready(function($) {

    var exec = {
        "ariella": ["Ariella Yosafat", "President", "9", "2016", "Simmons", "I am a hardcore Cincinnati Reds fan! (Let's go Redlegs!!!)"],
        "caitlin": ["Caitlin Tan", "Advisory Committee", "9", "2016", "MacGregor", "I love being outdoors and going on long walks, especially when I don't have a destination in mind."],
        //               "elise": ["Elise Ruan", "Historian", "9", "2014", "Simmons", "I studied abroad in London for a year."],
        //               "emad": ["Emad Taliep", "Advisory Committee Chair ", "9", "2014", "Off Campus", " I am a blogger and I love slam poetry!"],
        "kathy": ["Katherine Dieppa", "Treasurer", "3", "2016", "Senior House", "A friend and I won second place as a finalist on America's Funniest Home Videos."],
        "lorraine": ["Lorraine Wong", "External Correspondence", "6/9", "2017", "East Campus", "I love snowboarding :]"],
        //               "matt": ["Matthew Hodel", "Documentarian", "8", "2016", "MacGregor", "I play disc golf; it's like golf, but with frisbees instead!"],
        //               "rex": ["Rex Lam", "Webmaster", "14,18", "2014", "Pi Lambda Phi", "I am a twin."],
        //               "shannen": ["Shannen Kizl", "Publicity Chair", "2", "2015", "Simmons", "I went to Bolivia this summer!"],
        //               "snaggs": ["Sharon Snaggs Gendron", "Faculty Advisor", "", "", "", "I grew up in the Caribbean."],
        //               "victoria": ["Victoria Park", "Advisory Committee", "7", "2017", "Simmons", "I love Pooh Bear."],
        "zoe": ["Zo&euml; Redstone-Rothstein", "Webmaster", "6", "2017", "Burton Conner", "I love reading children's books."]
    };

    function fill_exec(member) {
        console.log(member);
        $(exec_name).html(exec[member][0]);
        $(exec_position).html("<b>Position:</b> " + exec[member][1]);

        if (member == "snaggs") {
            $(exec_course).html("");
            $(exec_year).html("");
            $(exec_residence).html("");
        } else {
            $(exec_course).html("<b>Course:</b> " + exec[member][2]);
            $(exec_year).html("<b>Year:</b> " + exec[member][3]);
            $(exec_residence).html("<b>Residence:</b> " + exec[member][4]);
        }
        $(exec_fact).html("<b>Fun Fact:</b> " + exec[member][5]);
    }

    $("#gallery_img_1").hover(
        function() {
            $(this).attr("src", "images/therapy_text.jpg");
        },
        function() {
            $(this).attr("src", "images/therapy_gallery.jpg");
        });

    $("#gallery_img_2").hover(
        function() {
            $(this).attr("src", "images/wellness_text.jpg");
        },
        function() {
            $(this).attr("src", "images/wellness_gallery.jpg");
        });

    $("#gallery_img_3").hover(
        function() {
            $(this).attr("src", "images/family_text.jpg");
        },
        function() {
            $(this).attr("src", "images/family_gallery.jpg");
        });

    $("#gallery_img_4").hover(
        function() {
            $(this).attr("src", "images/more_text.jpg");
        },
        function() {
            $(this).attr("src", "images/more_gallery.jpg");
        });

    $(".exec_small").hover(
        function() {
            console.log("images/exec/" + this.id + ".jpg");
            $(exec_large).attr("src", "images/exec/" + this.id + ".jpg");
            fill_exec(this.id);
        });

    $(window).stellar();
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function(event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        } else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    mywindow.scroll(function() {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        var currentPosition = -1 * ($('html').offset().top);
        var clickedPosition = $('.slide[data-slide="' + dataslide + '"]').offset().top;
        if (clickedPosition > currentPosition) {
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top + 1
            }, 1000, 'easeInOutQuint');
        } else {
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 1
            }, 1000, 'easeInOutQuint');
        }
    }


    links.click(function(e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function(e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});