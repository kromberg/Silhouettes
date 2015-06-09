(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/start_menu/start_menu.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            $("#new-game-btn").css("height", $("#new-game-btn").outerWidth().toString() + "px");
            $("#bundles-btn").css("height", $("#bundles-btn").outerWidth().toString() + "px");
            $("#shop-btn").css("height", $("#shop-btn").outerWidth().toString() + "px");
            
            document.getElementById("new-game-btn").addEventListener("click", function (eventInfo) {
                
            },
            false);

            $.each($(".menu-btn"), function () {
                $(this).css("padding-top", ($(this).height() - 5 - parseFloat($(this).css("font-size"))).toString() + "px");
                $(this).css("margin", (($("#menu-div").outerWidth() / 2 - $(this).outerWidth()) / 2).toString() + "px");
            });
        }
    });
})();
