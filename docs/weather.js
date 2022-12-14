"use strict";

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function createEle(eleName, inhtml) {
  let eleCls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let idName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  let custAtr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  let data = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  // assign "inhtml" as null, if there is no innerHTML
  const eleObj = document.createElement(eleName);

  if (inhtml) {
    if (Array.isArray(inhtml)) {
      inhtml.forEach(function (noteEle) {
        eleObj.appendChild(noteEle);
      });
    } else if (typeof inhtml === 'object') {
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

  if (custAtr && typeof custAtr === 'object') {
    Object.keys(custAtr).forEach(eleAtr => eleObj.setAttribute(eleAtr, custAtr[eleAtr]));
  }

  if (data && typeof data === 'object') {
    Object.keys(data).forEach(dataK => {
      eleObj.dataset[dataK] = data[dataK];
    });
  }

  return eleObj;
}

function removeData(noteData) {
  let noteInfos;

  if (!Array.isArray(noteData)) {
    noteInfos = [noteData];
  } else {
    noteInfos = noteData;
  }

  for (const noteInfo of noteInfos) {
    while (noteInfo.firstChild) {
      noteInfo.removeChild(noteInfo.firstChild);
    }
  }
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

function storageAvailable(type) {
  let storage;

  try {
    storage = window[type];
    const x = '__storage_test__';
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

class PrevGeo {
  static isSame(lang, long, curDate) {
    if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl) === null) {
      const isAvail = storageAvailable('localStorage'); // const isAvail = false;

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
      const lastReqt = parseInt(localStorage.getItem('lastReq'), 10);
      const wData = localStorage.getItem('weatherJson');
      const parsedLang = Number.parseFloat(localStorage.getItem('latitude'));
      const parsedLong = Number.parseFloat(localStorage.getItem('longitude'));

      if (wData === null || isNaN(lastReqt) || lang !== parsedLang || long !== parsedLong || curDate - lastReqt > 600000) {
        localStorage.setItem('lastReq', curDate);
        localStorage.setItem('latitude', lang);
        localStorage.setItem('longitude', long);
        return false;
      }
    } else {
      const lastReqt = _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).lastReq;

      const prevLat = _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.latitude;

      const prevLong = _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.longitude;

      if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _weatherData) === null || lastReqt === null || lang !== prevLat || long !== prevLong || curDate - lastReqt > 600000) {
        _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).lastReq = curDate;
        _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.latitude = lang;
        _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData).coords.longitude = long;
        return false;
      }
    }

    return true;
  }

  static get weather() {
    return _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl) ? localStorage.getItem('weatherJson') : _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _weatherData);
  }

  static set weatherJson(wData) {
    if (_classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _isStorageAvl)) {
      localStorage.setItem('weatherJson', wData);
    } else {
      _classStaticPrivateFieldSpecSet(PrevGeo, PrevGeo, _weatherData, wData);
    }
  }

  static get geoStorage() {
    return _classStaticPrivateFieldSpecGet(PrevGeo, PrevGeo, _geoData);
  }

}

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
const cityNmEle = document.getElementById('w-cityname');
const weatherNmEle = document.getElementById('w-weathername');
const weatherIconEle = document.getElementById('w-weathericon');
const tempEle = document.getElementById('w-temp');
const tempTypeEle = document.getElementById('temp-type');
const tempToggleEle = document.getElementById('temp-toggle');

function captBeg(lttr) {
  return lttr.toUpperCase();
}

function toggleTempUnit(evt) {
  const evtType = evt.type;
  const isNotEmpty = !!tempEle.firstChild;
  if (isNotEmpty && evtType === 'mousedown' && evt.button !== 0) return;

  if (evtType === 'touchstart') {
    if (isNotEmpty) tempToggleEle.classList.add('temp-toggle-touch');
  } else if (evtType === 'touchend') {
    tempToggleEle.classList.remove('temp-toggle-touch');
    return;
  }

  const tempData = tempEle.dataset;
  const tempScale = tempData.tempscale.toLowerCase();
  let temp = Number.parseFloat(tempData.temp);
  let nextType;
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

async function getLocalWeather(geoLoc) {
  const latt = geoLoc.coords.latitude;
  const longt = geoLoc.coords.longitude; // console.log(Number.parseFloat(localStorage.getItem('latitude')) === latt);
  // console.log(Number.parseFloat(localStorage.getItem('longitude')) === longt);

  const weatherAPI = 'a965fb1b7ab8c5d0fd32383ba6aa0c8f';
  let curWeather = PrevGeo.isSame(latt, longt, Date.now());

  if (curWeather) {
    curWeather = JSON.parse(PrevGeo.weather); // console.log('Same coordinates and not more than 10 minutes yet passed');
  } else {
    const fetchWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latt, "&lon=").concat(longt, "&appid=").concat(weatherAPI));

    if (fetchWeather.ok) {
      curWeather = await fetchWeather.json();
      PrevGeo.weatherJson = JSON.stringify(curWeather); // console.log('New coordinates or more than 10 minutes has passed');
    } else {
      let mesg;

      try {
        mesg = await fetchWeather.json().message;
      } catch (error) {
        mesg = fetchWeather.statusText;
      }

      throw new Error("Something went wrong, error message: ".concat(mesg));
    }
  }

  const cityName = curWeather.name;
  const weatherName = curWeather.weather[0].description.replace(/^\S|\s\S/g, captBeg);
  const locTemp = curWeather.main.temp;
  const wIconUrl = "https://openweathermap.org/img/wn/".concat(curWeather.weather[0].icon, "@2x.png");
  const loadingEle = document.getElementById('w-loading');
  const curtHr = new Date(Date.now()).getHours();
  const iconBackg = curtHr > 5 && curtHr < 17 ? 'icon-day' : 'icon-night';
  removeData([cityNmEle, weatherNmEle, weatherIconEle]);
  cityNmEle.appendChild(document.createTextNode(cityName));
  weatherNmEle.appendChild(document.createTextNode(weatherName));
  weatherIconEle.src = wIconUrl;
  weatherIconEle.alt = weatherName;
  weatherIconEle.classList.add(iconBackg);
  tempEle.dataset.tempscale = 'kel';
  tempEle.dataset.temp = locTemp;
  const isTouch = isTouchDevice();

  if (!isTouch) {
    tempToggleEle.addEventListener('mousedown', toggleTempUnit);
    tempToggleEle.classList.add('temp-toggle-mouse');
  } else {
    tempToggleEle.addEventListener('touchstart', toggleTempUnit);
    tempToggleEle.addEventListener('touchend', toggleTempUnit);
    tempToggleEle.classList.add('temp-bttn-touch');
  }

  const clickEvt = new Event(isTouch ? 'touchstart' : 'mousedown');
  tempToggleEle.dispatchEvent(clickEvt);
  loadingEle.classList.add('w-closed');
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
