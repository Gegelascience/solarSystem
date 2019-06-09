AFRAME.registerComponent('rotation-planet', {
    schema: {
        tRotation: { type: 'number', default: 5000 }
    },
    init: function () {

    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        var rot = this.el.getAttribute("rotation");
        rot.y = 360 * (time + timeDelta) / this.data.tRotation;
        this.el.setAttribute("rotation", rot);
    }

})