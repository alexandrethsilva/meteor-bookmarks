App = {}; App.Math = {}; App.Helpers = {};

//http://goo.gl/5HLl8
App.Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

App.Math.outCubic = function(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
};


App.Helpers.requestAnimationFrame = function(callback){
  var computedStyles = window.getComputedStyle(document.documentElement, '');
  var prefix = (Array.prototype.slice.call(computedStyles).join('').match(/-(moz|webkit|ms)-/))[1];

  if(!window.RequestAnimationFrame) {
    window.requestAnimationFrame = window[prefix+"RequestAnimationFrame"] || function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
    window.cancelAnimationFrame = window[prefix+"CancelAnimationFrame"] || window[prefix+"CancelRequestAnimationFrame"];
  }

  return window.requestAnimationFrame(callback);
};

App.Helpers.animateScroll = function(element, to, duration, callback) {
  var startPosition = element.scrollTop,
      distance = to - startPosition,
      currentTime = 0,
      step = 20,
      duration = (typeof(duration) === "undefined") ? 500 : duration;

      var animate = function(){
        currentTime += step;
        var newPosition = App.Math.outCubic(currentTime, startPosition, distance, duration);
        element.scrollTop = newPosition;

        if(currentTime < duration) {
          App.Helpers.requestAnimationFrame(animate);
        }
        else {
          if (callback && typeof(callback) === 'function') {
            callback();
          }
        }
      };
      animate();
};