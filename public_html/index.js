 $(document).ready(function()
            {
                //on click sign up label changes as well as background
                $("#signup").click(function() {

                    $(this).css("text-decoration", "underline");
                    $(this).css("text-decoration-color", "#0000ff");
                    $("#signup a").css("color", "#ffffff");
                    $("#signin a").css("color", "#999999");
                    $("#signin a").css("text-decoration","none");
                    $("body").css("background", "linear-gradient(rgba(0, 0, 87, 0.8),rgba(0, 0, 87, 0.8) ),url(img/bg1.jpg)50% repeat fixed");
                    $("body").css("background-size", "cover");

                });
                //toggles and changes when sign in is clicked again
                $("#signin").click(function() {

                    $(this).css("text-decoration", "underline");
                    $(this).css("text-decoration-color", "#0000ff");
                    $("#signin a").css("color", "#fff");
                    $("#signup a").css("color", "#999999");
                    $("#signup").css("text-decoration", "none");
                    $("body").css("background", "linear-gradient(rgba(0, 0, 87, 0.7),rgba(0, 0, 87, 0.7) ),url(img/bg.jpg)50% repeat fixed");
                    $("body").css("background-size", "cover");

                });
            }
            );

