AFRAME.registerComponent('info-entity', {
    schema: {
        name: { type: "string", default: "toto" },
        textId: { type: "string", default: "info-planet" }
    },
    init: function () {
        let textInfo = document.getElementById(this.data.textId);
        this.el.addEventListener('mouseenter', (evt) => {
            if (textInfo.getAttribute("visible") == true) {
                textInfo.setAttribute("text", "value", this.data.name)
            }

        })
    }
})