(function(DOM) {
    DOM.element = null;
    DOM.isReady = false;
    document.addEventListener("DOMContentLoaded", function(event) {
        DOM.isReady = true;
        var element = document.querySelector("div[app]");
				DOM.element = (DOM.element) ? element : DOM.element;
    });
}(GoodPractices.App.DOM));
