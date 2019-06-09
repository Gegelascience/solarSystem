AFRAME.registerComponent('switch-mode', {
    schema: {
        info: { type: "string", default: "info-planet" },
        cursor: { type: "string", default: "cursor" }
    },
    init: function () {
        var infoMode = true;
        this.el.addEventListener('triggerdown', (evt) => {
            infoMode = !infoMode;
            var info = document.getElementById(this.data.info);
            info.setAttribute("visible", infoMode);
            var cursor = document.getElementById(this.data.cursor)
            cursor.setAttribute("raycaster", "showLine", infoMode)

        })
    }
})