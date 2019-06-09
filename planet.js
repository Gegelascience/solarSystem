AFRAME.registerComponent('planet', {
  schema: {
    tRevol: { type: 'number', default: 500000 },
    semiAxe: { type: 'number', default: 20 },
    angularStart: { type: 'number', default: 0 },
    tRotation: { type: 'number', default: 5000 }
  },
  init: function () {

  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
    var pos = this.el.getAttribute("position");
    pos.x = 2 * this.data.semiAxe * Math.cos(this.data.angularStart + 360 * (time + timeDelta) / this.data.tRevol);
    pos.z = 2 * this.data.semiAxe * Math.sin(this.data.angularStart + 360 * (time + timeDelta) / this.data.tRevol);
    this.el.setAttribute("position", pos);
    var rot = this.el.getAttribute("rotation");
    rot.y = 360 * (time + timeDelta) / this.data.tRotation;
    this.el.setAttribute("rotation", rot);
  }

})