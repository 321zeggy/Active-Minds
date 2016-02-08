jQuery(document).ready(function($) {

    var exec = {
        "justine": ["Justine McPartlan", "President", "Biology", "2017", "Maseeh Hall", "As I am writing this, I am also packing for my first-ever trip out of the United States!"],
        "kathy": ["Kathy Dieppa", "Vice President", "Civil & Environmental Engineering", "2017", "Off Campus", "I have a miniature Dachshund named Canela (spanish for &quot;Cinnamon&quot;) that I am obsessed with and take with me everywhere I can."],
        "ariella": ["Ariella Yosafat", "Ambassador", "Brain & Cognitive Sciences and Biology", "2016", "Simmons", "I love baseball!"],
        "lorraine": ["Lorraine Wong", "Special Projects", "Women's and Gender Studies & Brain and Cognitive Sciences", "2017", "East Campus", "I love snowboarding :]"],
        "zoe": ["Zo&euml; Redstone-Rothstein", "Webmaster", "Computer Science", "2017", "Burton Conner", "I love reading children's books!"]
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
            $(exec_course).html("<b>Major:</b> " + exec[member][2]);
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