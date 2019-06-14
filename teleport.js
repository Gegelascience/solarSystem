AFRAME.registerComponent("teleport", {
    schema: {
        position: { type: "string", default: "0 20 50" },
        elementId: { type: "string", default: "cam" },
        controls: { type: "string", default: "control-pos" }
    },

    init: function () {
        let cam = document.getElementById(this.data.elementId);
        let controls = document.getElementById(this.data.controls)
        this.el.addEventListener('mouseenter', (evt) => {
            if (controls.getAttribute("visible") == true) {
                cam.setAttribute("position", this.data.position)
            }
        })
    }
})