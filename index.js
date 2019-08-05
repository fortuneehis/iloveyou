'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qs = document.querySelector.bind(document);
var easingHeart = mojs.easing.path('M0,100C2.9,86.7,33.6-7.3,46-7.3s15.2,22.7,26,22.7S89,0,100,0');

var el = {
  container: qs('.mo-container'),

  i: qs('.lttr--I'),
  l: qs('.lttr--L'),
  o: qs('.lttr--O'),
  v: qs('.lttr--V'),
  e: qs('.lttr--E'),
  y: qs('.lttr--Y'),
  o2: qs('.lttr--O2'),
  u: qs('.lttr--U'),

  lineLeft: qs('.line--left'),
  lineRight: qs('.line--rght'),

  colTxt: "#763c8c",
  colHeart: "#fa4843",

  blup: qs('.blup'),
  blop: qs('.blop'),
  sound: qs('.sound')
};

var Heart = function (_mojs$CustomShape) {
  _inherits(Heart, _mojs$CustomShape);

  function Heart() {
    _classCallCheck(this, Heart);

    return _possibleConstructorReturn(this, _mojs$CustomShape.apply(this, arguments));
  }

  Heart.prototype.getShape = function getShape() {
    return '<path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z"/>';
  };

  Heart.prototype.getLength = function getLength() {
    return 200;
  };

  return Heart;
}(mojs.CustomShape);

mojs.addShape('heart', Heart);

var crtBoom = function crtBoom() {
  var delay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  var _radius, _radius2;

  var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var rd = arguments.length <= 2 || arguments[2] === undefined ? 46 : arguments[2];

  parent = el.container;
  var crcl = new mojs.Shape({
    shape: 'circle',
    fill: 'none',
    stroke: el.colTxt,
    strokeWidth: { 5: 0 },
    radius: (_radius = {}, _radius[rd] = [rd + 20], _radius),
    easing: 'quint.out',
    duration: 500 / 3,
    parent: parent,
    delay: delay,
    x: x
  });

  var brst = new mojs.Burst({
    radius: (_radius2 = {}, _radius2[rd + 15] = 110, _radius2),
    angle: 'rand(60, 180)',
    count: 3,
    timeline: { delay: delay },
    parent: parent,
    x: x,
    children: {
      radius: [5, 3, 7],
      fill: el.colTxt,
      scale: { 1: 0, easing: 'quad.in' },
      pathScale: [.8, null],
      degreeShift: ['rand(13, 60)', null],
      duration: 1000 / 3,
      easing: 'quint.out'
    }
  });

  return [crcl, brst];
};

var crtLoveTl = function crtLoveTl() {
  var move = 1000;
  var boom = 200;
  var easing = 'sin.inOut';
  var easingBoom = 'sin.in';
  var easingOut = 'sin.out';
  var opts = { duration: move, easing: easing, opacity: 1 };
  var delta = 150;

  return new mojs.Timeline().add([new mojs.Tween({
    duration: move,
    onStart: function onStart() {
      [el.i, el.l, el.o, el.v, el.e, el.y, el.o2, el.u].forEach(function (el) {
        el.style.opacity = 1;
        el.style = 'transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1); opacity: 1;';
      });
    },
    onComplete: function onComplete() {
      [el.l, el.o, el.v, el.e].forEach(function (el) {
        return el.style.opacity = 0;
      });
      el.blop.play();
    }
  }), new mojs.Tween({
    duration: move * 2 + boom,
    onComplete: function onComplete() {
      [el.y, el.o2].forEach(function (el) {
        return el.style.opacity = 0;
      });
      el.blop.play();
    }
  }), new mojs.Tween({
    duration: move * 3 + boom * 2 - delta,
    onComplete: function onComplete() {
      el.i.style.opacity = 0;
      el.blop.play();
    }
  }), new mojs.Tween({
    duration: move * 3 + boom * 2,
    onComplete: function onComplete() {
      el.u.style.opacity = 0;
      el.blup.play();
    }
  }), new mojs.Tween({
    duration: 50,
    delay: 4050,
    onUpdate: function onUpdate(progress) {
      [el.i, el.l, el.o, el.v, el.e, el.y, el.o2, el.u].forEach(function (el) {
        el.style = 'transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1); opacity: ' + 1 * progress + ';';
      });
    },
    onComplete: function onComplete() {
      [el.i, el.l, el.o, el.v, el.e, el.y, el.o2, el.u].forEach(function (el) {
        el.style.opacity = 1;
        el.style = 'transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1); opacity: 1;';
      });
    }
  }), new mojs.Html(_extends({}, opts, {
    el: el.lineLeft,
    x: { 0: 52 }
  })).then({
    duration: boom + move,
    easing: easing,
    x: { to: 52 + 54 }
  }).then({
    duration: boom + move,
    easing: easing,
    x: { to: 52 + 54 + 60 }
  }).then({
    duration: 150, // 3550
    easing: easing,
    x: { to: 52 + 54 + 60 + 10 }
  }).then({
    duration: 300
  }).then({
    duration: 350,
    x: { to: 0 },
    easing: easingOut
  }), new mojs.Html(_extends({}, opts, {
    el: el.lineRight,
    x: { 0: -52 }
  })).then({
    duration: boom + move,
    easing: easing,
    x: { to: -52 - 54 }
  }).then({
    duration: boom + move,
    easing: easing,
    x: { to: -52 - 54 - 60 }
  }).then({
    duration: 150,
    easing: easing,
    x: { to: -52 - 54 - 60 - 10 }
  }).then({
    duration: 300
  }).then({
    duration: 350,
    x: { to: 0 },
    easing: easingOut
  }), new mojs.Html(_extends({}, opts, {
    el: el.i,
    x: { 0: 34 }
  })).then({
    duration: boom,
    easing: easingBoom,
    x: { to: 34 + 19 }
  }).then({
    duration: move,
    easing: easing,
    x: { to: 34 + 19 + 40 }
  }).then({
    duration: boom,
    easing: easingBoom,
    x: { to: 34 + 19 + 40 + 30 }
  }).then({
    duration: move,
    easing: easing,
    x: { to: 34 + 19 + 40 + 30 + 30 }
  }), new mojs.Html(_extends({}, opts, {
    el: el.l,
    x: { 0: 15 }
  })), new mojs.Html(_extends({}, opts, {
    el: el.o,
    x: { 0: 11 }
  })), new mojs.Html(_extends({}, opts, {
    el: el.v,
    x: { 0: 3 }
  })), new mojs.Html(_extends({}, opts, {
    el: el.e,
    x: { 0: -3 }
  })), new mojs.Html(_extends({}, opts, {
    el: el.y,
    x: { 0: -20 }
  })).then({
    duration: boom,
    easing: easingBoom,
    x: { to: -20 - 33 }
  }).then({
    duration: move,
    easing: easing,
    x: { to: -20 - 33 - 24 }
  }), new mojs.Html(_extends({}, opts, {
    el: el.o2,
    x: { 0: -27 }
  })).then({
    duration: boom,
    easing: easingBoom,
    x: { to: -27 - 27 }
  }).then({
    duration: move,
    easing: easing,
    x: { to: -27 - 27 - 30 }
  }), new mojs.Html(_extends({}, opts, {
    el: el.u,
    x: { 0: -32 }
  })).then({
    duration: boom,
    easing: easingBoom,
    x: { to: -32 - 21 }
  }).then({
    duration: move,
    easing: easing,
    x: { to: -32 - 21 - 36 }
  }).then({
    duration: boom,
    easing: easingBoom,
    x: { to: -32 - 21 - 36 - 31 }
  }).then({
    duration: move,
    easing: easing,
    x: { to: -32 - 21 - 36 - 31 - 27 }
  }), new mojs.Shape({
    parent: el.container,
    shape: 'heart',
    delay: move,
    fill: el.colHeart,
    x: -64,
    scale: { 0: 0.95, easing: easingHeart },
    duration: 500
  }).then({
    x: { to: -62, easing: easing },
    scale: { to: 0.65, easing: easing },
    duration: boom + move - 500
  }).then({
    duration: boom - 50,
    x: { to: -62 + 48 },
    scale: { to: 0.90 },
    easing: easingBoom
  }).then({
    duration: 125,
    scale: { to: 0.8 },
    easing: easingOut
  }).then({
    duration: 125,
    scale: { to: 0.85 },
    easing: easingOut
  }).then({
    duration: move - 200,
    scale: { to: 0.45 },
    easing: easing
  }).then({
    delay: -75,
    duration: 150,
    x: { to: 0 },
    scale: { to: 0.90 },
    easing: easingBoom
  }).then({
    duration: 125,
    scale: { to: 0.8 },
    easing: easingOut
  }).then({
    duration: 125, // 3725
    scale: { to: 0.85 },
    easing: easingOut
  }).then({
    duration: 125 }). // 3850
  then({
    duration: 350,
    scale: { to: 0 },
    easing: easingOut
  })].concat(crtBoom(move, -64, 46), crtBoom(move * 2 + boom, 18, 34), crtBoom(move * 3 + boom * 2 - delta, -64, 34), crtBoom(move * 3 + boom * 2, 45, 34)));
};

var loveTl = crtLoveTl().play();
setInterval(function () {
  loveTl.replay();
}, 4300);

var volume = 0.2;
el.blup.volume = volume;
el.blop.volume = volume;

var toggleSound = function toggleSound() {
  var on = true;
  return function () {
    if (on) {
      el.blup.volume = 0.0;
      el.blop.volume = 0.0;
      el.sound.classList.add('sound--off');
    } else {
      el.blup.volume = volume;
      el.blop.volume = volume;
      el.sound.classList.remove('sound--off');
    }
    on = !on;
  };
};
el.sound.addEventListener('click', toggleSound());