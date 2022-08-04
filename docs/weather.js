"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function createEle(eleName, inhtml) {
  var eleCls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var idName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var custAtr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var data = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  // assign "inhtml" as null, if there is no innerHTML
  var eleObj = document.createElement(eleName);

  if (inhtml) {
    if (Array.isArray(inhtml)) {
      inhtml.forEach(function (noteEle) {
        eleObj.appendChild(noteEle);
      });
    } else if (_typeof(inhtml) === 'object') {
      eleObj.appendChild(inhtml);
    } else {
      eleObj.innerHTML = inhtml;
    }
  }

  if (eleCls) {
    if (Array.isArray(eleCls)) {
      eleCls.forEach(function (clsN) {
        eleObj.classList.add(clsN);
      });
    } else {
      eleObj.className = eleCls;
    }
  }

  if (idName) {
    eleObj.id = idName;
  }

  if (custAtr && _typeof(custAtr) === 'object') {
    Object.keys(custAtr).forEach(function (eleAtr) {
      return eleObj.setAttribute(eleAtr, custAtr[eleAtr]);
    });
  }

  if (data && _typeof(data) === 'object') {
    Object.keys(data).forEach(function (dataK) {
      eleObj.dataset[dataK] = data[dataK];
    });
  }

  return eleObj;
}

function removeData(noteData) {
  var noteInfos;

  if (!Array.isArray(noteData)) {
    noteInfos = [noteData];
  } else {
    noteInfos = noteData;
  }

  var _iterator = _createForOfIteratorHelper(noteInfos),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var noteInfo = _step.value;

      while (noteInfo.firstChild) {
        noteInfo.removeChild(noteInfo.firstChild);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

function storageAvailable(type) {
  var storage;

  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && ( // everything except Firefox
    e.code === 22 || // Firefox
    e.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' || // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}

var PrevGeo = /*#__PURE__*/function () {
  function PrevGeo() {
    _classCallCheck(this, PrevGeo);
  }

  _createClass(PrevGeo, null, [{
    key: "isSame",
    value: function isSame(lang, _long, curDate) {
      if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl) === null) {
        var isAvail = storageAvailable('localStorage'); // const isAvail = false;

        _classStaticPrivateFieldSpecSet(PrevGeo, PrevGeo, _isStorageAvl, isAvail);

        if (!isAvail) {
          _classStaticPrivateFieldSpecSet(PrevGeo, PrevGeo, _geoData, {
            lastReq: null,
            coords: {
              latitude: null,
              longitude: null
            }
          });
        }
      }

      if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl)) {
        var lastReqt = parseInt(localStorage.getItem('lastReq'), 10);
        var wData = localStorage.getItem('weatherJson');
        var parsedLang = Number.parseFloat(localStorage.getItem('latitude'));
        var parsedLong = Number.parseFloat(localStorage.getItem('longitude'));

        if (wData === null || isNaN(lastReqt) || lang !== parsedLang || _long !== parsedLong || curDate - lastReqt > 600000) {
          localStorage.setItem('lastReq', curDate);
          localStorage.setItem('latitude', lang);
          localStorage.setItem('longitude', _long);
          return false;
        }
      } else {
        var _lastReqt = _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).lastReq;

        var prevLat = _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.latitude;

        var prevLong = _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.longitude;

        if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _weatherData) === null || _lastReqt === null || lang !== prevLat || _long !== prevLong || curDate - _lastReqt > 600000) {
          _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).lastReq = curDate;
          _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.latitude = lang;
          _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.longitude = _long;
          return false;
        }
      }

      return true;
    }
  }, {
    key: "weather",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl) ? localStorage.getItem('weatherJson') : _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _weatherData);
    }
  }, {
    key: "weatherJson",
    set: function set(wData) {
      if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl)) {
        localStorage.setItem('weatherJson', wData);
      } else {
        _classStaticPrivateFieldSpecSet(PrevGeo, PrevGeo, _weatherData, wData);
      }
    }
  }, {
    key: "geoStorage",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData);
    }
  }]);

  return PrevGeo;
}();

var _isStorageAvl = {
  writable: true,
  value: null
};
var _geoData = {
  writable: true,
  value: null
};
var _weatherData = {
  writable: true,
  value: null
};
var cityNmEle = document.getElementById('w-cityname');
var weatherNmEle = document.getElementById('w-weathername');
var weatherIconEle = document.getElementById('w-weathericon');
var tempEle = document.getElementById('w-temp');
var tempTypeEle = document.getElementById('temp-type');
var tempToggleEle = document.getElementById('temp-toggle');

function captBeg(lttr) {
  return lttr.toUpperCase();
}

function toggleTempUnit(evt) {
  var evtType = evt.type;
  var isNotEmpty = !!tempEle.firstChild;
  if (isNotEmpty && evtType === 'mousedown' && evt.button !== 0) return;

  if (evtType === 'touchstart') {
    if (isNotEmpty) tempToggleEle.classList.add('temp-toggle-touch');
  } else if (evtType === 'touchend') {
    tempToggleEle.classList.remove('temp-toggle-touch');
    return;
  }

  var tempData = tempEle.dataset;
  var tempScale = tempData.tempscale.toLowerCase();
  var temp = Number.parseFloat(tempData.temp);
  var nextType;
  removeData([tempEle, tempTypeEle]);

  if (tempScale === 'kel') {
    // kelvin to celsius
    temp = (temp - 273.15).toFixed(2);
    tempData.tempscale = 'cel';
    nextType = 'Fahrenheit';
    tempEle.classList.add('w-cel');
  } else if (tempScale === 'cel') {
    // celsius to fahrenheit
    temp = (temp * (9 / 5) + 32).toFixed(2);
    tempData.tempscale = 'fah';
    nextType = 'Celsius';
    tempEle.classList.remove('w-cel');
    tempEle.classList.add('w-fah');
  } else if (tempScale === 'fah') {
    // fahrenheit to celsius
    temp = ((temp - 32) * (5 / 9)).toFixed(2);
    tempData.tempscale = 'cel';
    nextType = 'Fahrenheit';
    tempEle.classList.remove('w-fah');
    tempEle.classList.add('w-cel');
  }

  tempData.temp = temp;
  tempEle.appendChild(document.createTextNode(temp));
  tempTypeEle.appendChild(document.createTextNode(nextType));
}

function getLocalWeather(_x) {
  return _getLocalWeather.apply(this, arguments);
}

function _getLocalWeather() {
  _getLocalWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(geoLoc) {
    var latt, longt, weatherAPI, curWeather, fetchWeather, mesg, cityName, weatherName, locTemp, wIconUrl, loadingEle, curtHr, iconBackg, isTouch, clickEvt;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            latt = geoLoc.coords.latitude;
            longt = geoLoc.coords.longitude; // console.log(Number.parseFloat(localStorage.getItem('latitude')) === latt);
            // console.log(Number.parseFloat(localStorage.getItem('longitude')) === longt);

            weatherAPI = 'a965fb1b7ab8c5d0fd32383ba6aa0c8f';
            curWeather = PrevGeo.isSame(latt, longt, Date.now());

            if (!curWeather) {
              _context.next = 9;
              break;
            }

            curWeather = JSON.parse(PrevGeo.weather);
            console.log('Same coordinates and not more than 10 minutes yet passed');
            _context.next = 30;
            break;

          case 9:
            _context.next = 11;
            return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latt, "&lon=").concat(longt, "&appid=").concat(weatherAPI));

          case 11:
            fetchWeather = _context.sent;

            if (!fetchWeather.ok) {
              _context.next = 20;
              break;
            }

            _context.next = 15;
            return fetchWeather.json();

          case 15:
            curWeather = _context.sent;
            PrevGeo.weatherJson = JSON.stringify(curWeather);
            console.log('New coordinates or more than 10 minutes has passed');
            _context.next = 30;
            break;

          case 20:
            _context.prev = 20;
            _context.next = 23;
            return fetchWeather.json().message;

          case 23:
            mesg = _context.sent;
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](20);
            mesg = fetchWeather.statusText;

          case 29:
            throw new Error("Something went wrong, error message: ".concat(mesg));

          case 30:
            cityName = curWeather.name;
            weatherName = curWeather.weather[0].description.replace(/^\S|\s\S/g, captBeg);
            locTemp = curWeather.main.temp;
            wIconUrl = "https://openweathermap.org/img/wn/".concat(curWeather.weather[0].icon, "@2x.png");
            loadingEle = document.getElementById('w-loading');
            curtHr = new Date(Date.now()).getHours();
            iconBackg = curtHr > 5 && curtHr < 17 ? 'icon-day' : 'icon-night';
            removeData([cityNmEle, weatherNmEle, weatherIconEle]);
            cityNmEle.appendChild(document.createTextNode(cityName));
            weatherNmEle.appendChild(document.createTextNode(weatherName));
            weatherIconEle.src = wIconUrl;
            weatherIconEle.alt = weatherName;
            weatherIconEle.classList.add(iconBackg);
            tempEle.dataset.tempscale = 'kel';
            tempEle.dataset.temp = locTemp;
            isTouch = isTouchDevice();

            if (!isTouch) {
              tempToggleEle.addEventListener('mousedown', toggleTempUnit);
              tempToggleEle.classList.add('temp-toggle-mouse');
            } else {
              tempToggleEle.addEventListener('touchstart', toggleTempUnit);
              tempToggleEle.addEventListener('touchend', toggleTempUnit);
              tempToggleEle.classList.add('temp-bttn-touch');
            }

            clickEvt = new Event(isTouch ? 'touchstart' : 'mousedown');
            tempToggleEle.dispatchEvent(clickEvt);
            loadingEle.classList.add('w-closed');

          case 50:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[20, 26]]);
  }));
  return _getLocalWeather.apply(this, arguments);
}

function getLocalWError(geoErr) {
  document.getElementById('w-error').classList.remove('w-closed');
  document.getElementById('w-loading').classList.add('w-closed');
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(getLocalWeather, getLocalWError);
} else {
  document.getElementById('w-error').classList.remove('w-closed');
}
