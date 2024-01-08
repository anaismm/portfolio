window.addEventListener("DOMContentLoaded", function () {

    HTMLElement.prototype.addResizeListener = function (cssVariable, axis, applyGlobally = false, elementValue = this) {
        let element = this;
        let targetElement = applyGlobally ? document.documentElement : elementValue;
        let sizeProperty = (axis.toLowerCase() === 'x') ? 'offsetWidth' : 'offsetHeight';

        function updateSize() {
            var size = element[sizeProperty];
            targetElement.style.setProperty(cssVariable, size + 'px');
        }

        updateSize();

        window.addEventListener('resize', updateSize);
    };

});