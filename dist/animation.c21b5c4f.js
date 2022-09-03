// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"PpqJ":[function(require,module,exports) {
var str = "\n.skin {\n    position: relative;\n    height: 100vh;\n}\n\n.skin>* {\n    position: absolute;\n    top: 15%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.nose {\n    transform: translate(0);\n    margin-left: -12px;\n    width: 0px;\n    height: 0px;\n    border: 12px solid blue;\n    border-color: black transparent transparent;\n    border-radius: 12px;\n}\n\n.eye {\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    border: 2px solid #000;\n    background: #2e2e2e;\n}\n\n.eye::before {\n    content: '';\n    display: block;\n    width: 30px;\n    height: 30px;\n    border: 2px solid #000;\n    border-radius: 50%;\n    background: #fff;\n    margin-left: 8px;\n}\n\n.eye.left {\n    margin-left: -115px;\n}\n\n.eye.right {\n    margin-left: 115px;\n}\n\n.mouth {\n    margin-top: 120px;\n    width: 180px;\n    height: 200px;\n    border-radius: 50px;\n    overflow: hidden;\n}\n\n.mouth .up {\n    position: absolute;\n    top: -10px;\n    left: 40px;\n    width: 100px;\n    height: 50px;\n    border: 3px solid black;\n    border-radius: 50%;\n    border-color: transparent transparent black black;\n    background: #ffe600;\n}\n\n.mouth .up.left {\n    margin-left: -41px;\n    transform: rotateZ(-15deg);\n}\n\n.mouth .up.right {\n    margin-left: 41px;\n    transform: rotateY(180deg)rotateZ(-15deg);\n}\n\n.mouth .down {\n    position: absolute;\n    top: 4px;\n    left: 0;\n    width: 180px;\n    height: 200px;\n    border-radius: 60px;\n    overflow: hidden;\n}\n\n.mouth .yuan {\n    position: absolute;\n    bottom: 10px;\n    left: 10px;\n    width: 160px;\n    height: 650px;\n    border: 3px solid #000;\n    border-radius: 50%;\n    background: #9b000a;\n    z-index: -1;\n    overflow: hidden;\n}\n\n.mouth .yuan::before {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -10px;\n    left: 0;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    background: #ff485f;\n}\n\n.face {\n    margin-top: 135px;\n    width: 84px;\n    height: 84px;\n    border: 3px solid black;\n    border-radius: 50%;\n    background: #ff0000;\n}\n\n.face.left {\n    margin-left: -165px;\n}\n\n.face.right {\n    margin-left: 165px;\n}\n\n.face img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n.face.left img {\n    transform: rotateY(180deg);\n    transform-origin: left top;\n}\n\n@keyframes shake {\n    0% {}\n\n    33% {\n        transform: rotate(10deg);\n    }\n\n    66% {\n        transform: rotate(-10deg);\n    }\n\n    100% {}\n}\n\n.nose:hover {\n    animation: shake 0.2s infinite;\n}\n";
var code = document.querySelector(".code");
var style = document.querySelector(".style");
var imgs = document.querySelectorAll("img");
var id;
var n = 1;
var time = 30;

function play() {
  id = setInterval(function () {
    if (n >= str.length) {
      imgs.forEach(function (v) {
        v.hidden = "";
      });
      clearInterval(id);
    }

    code.textContent = str.substring(0, n + 1);
    style.innerHTML = str.substring(0, n + 1);
    code.scrollTo(0, 99999);
    n++;
    console.log(n); //查看循环是否停止
  }, time);
}

play(); // 按钮

btnPause.onclick = function () {
  clearInterval(id);
};

btnPlay.onclick = function () {
  clearInterval(id);
  play();
};

btnSlow.onclick = function () {
  clearInterval(id);
  time = 100;
  play();
};

btnNormal.onclick = function () {
  clearInterval(id);
  time = 30;
  play();
};

btnFast.onclick = function () {
  clearInterval(id);
  time = 0;
  play();
};
},{}]},{},["PpqJ"], null)
//# sourceMappingURL=animation.c21b5c4f.js.map