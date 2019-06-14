AFRAME.registerComponent('switch-mode', {
    schema: {
        info: { type: "string", default: "info-planet" },
        cursor: { type: "string", default: "cursor" },
        controls: { type: "string", default: "control-pos" }
    },
    init: function () {
        var infoMode = true;
        var posMode = true;
        this.el.addEventListener('triggerdown', (evt) => {
            infoMode = !infoMode;
            var info = document.getElementById(this.data.info);
            info.setAttribute("visible", infoMode);
            /*var cursor = document.getElementById(this.data.cursor)
            cursor.setAttribute("raycaster", "showLine", infoMode)*/


        })
        this.el.addEventListener('trackpaddown', (evt) => {
            posMode = !posMode;
            var controlPos = document.getElementById(this.data.controls)
            controlPos.setAttribute("visible", posMode);
            var choices = controlPos.children;
            if (!posMode) {
                for (let index = 0; index < choices.length; index++) {
                    choices[index].setAttribute("class", "")
                }
            } else {
                for (let index = 0; index < choices.length; index++) {
                    choices[index].setAttribute("class", "clickable")
                }
            }
        })
    }
})