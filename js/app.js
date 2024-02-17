(() => {
    var __webpack_modules__ = {
        812: module => {
            (function(factory) {
                if (true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
            })((function(undefined) {
                "use strict";
                return function() {
                    var allCountries = [ [ "Afghanistan", "af", "93" ], [ "Albania", "al", "355" ], [ "Algeria", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua & Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Ascension Island", "ac", "247" ], [ "Australia", "au", "61", 0 ], [ "Austria", "at", "43" ], [ "Azerbaijan", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain", "bh", "973" ], [ "Bangladesh", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus", "by", "375" ], [ "Belgium", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia & Herzegovina", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi", "bi", "257" ], [ "Cambodia", "kh", "855" ], [ "Cameroon", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic", "cf", "236" ], [ "Chad", "td", "235" ], [ "Chile", "cl", "56" ], [ "China", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros", "km", "269" ], [ "Congo - Brazzaville", "cg", "242" ], [ "Congo - Kinshasa", "cd", "243" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus", "cy", "357" ], [ "Czech Republic", "cz", "420" ], [ "Denmark", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia", "ee", "372" ], [ "Eswatini", "sz", "268" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands", "fk", "500" ], [ "Faroe Islands", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana", "gf", "594" ], [ "French Polynesia", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia", "ge", "995" ], [ "Germany", "de", "49" ], [ "Ghana", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece", "gr", "30" ], [ "Greenland", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea", "gn", "224" ], [ "Guinea-Bissau", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong", "hk", "852" ], [ "Hungary", "hu", "36" ], [ "Iceland", "is", "354" ], [ "India", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran", "ir", "98" ], [ "Iraq", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel", "il", "972" ], [ "Italy", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan", "jo", "962" ], [ "Kazakhstan", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait", "kw", "965" ], [ "Kyrgyzstan", "kg", "996" ], [ "Laos", "la", "856" ], [ "Latvia", "lv", "371" ], [ "Lebanon", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau", "mo", "853" ], [ "Madagascar", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania", "mr", "222" ], [ "Mauritius", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia", "mn", "976" ], [ "Montenegro", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco", "ma", "212", 0 ], [ "Mozambique", "mz", "258" ], [ "Myanmar (Burma)", "mm", "95" ], [ "Namibia", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal", "np", "977" ], [ "Netherlands", "nl", "31" ], [ "New Caledonia", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea", "kp", "850" ], [ "North Macedonia", "mk", "389" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway", "no", "47", 0 ], [ "Oman", "om", "968" ], [ "Pakistan", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine", "ps", "970" ], [ "Panama", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar", "qa", "974" ], [ "Réunion", "re", "262", 0 ], [ "Romania", "ro", "40" ], [ "Russia", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé & Príncipe", "st", "239" ], [ "Saudi Arabia", "sa", "966" ], [ "Senegal", "sn", "221" ], [ "Serbia", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia", "sk", "421" ], [ "Slovenia", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea", "kr", "82" ], [ "South Sudan", "ss", "211" ], [ "Spain", "es", "34" ], [ "Sri Lanka", "lk", "94" ], [ "St Barthélemy", "bl", "590", 1 ], [ "St Helena", "sh", "290" ], [ "St Kitts & Nevis", "kn", "1", 18, [ "869" ] ], [ "St Lucia", "lc", "1", 19, [ "758" ] ], [ "St Martin", "mf", "590", 2 ], [ "St Pierre & Miquelon", "pm", "508" ], [ "St Vincent & Grenadines", "vc", "1", 20, [ "784" ] ], [ "Sudan", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard & Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Sweden", "se", "46" ], [ "Switzerland", "ch", "41" ], [ "Syria", "sy", "963" ], [ "Taiwan", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad & Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia", "tn", "216" ], [ "Turkey", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks & Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "Uganda", "ug", "256" ], [ "Ukraine", "ua", "380" ], [ "United Arab Emirates", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "US Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uzbekistan", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam", "vn", "84" ], [ "Wallis & Futuna", "wf", "681" ], [ "Western Sahara", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
                    for (var i = 0; i < allCountries.length; i++) {
                        var c = allCountries[i];
                        allCountries[i] = {
                            name: c[0],
                            iso2: c[1],
                            dialCode: c[2],
                            priority: c[3] || 0,
                            areaCodes: c[4] || null,
                            nodeById: {}
                        };
                    }
                    "use strict";
                    function _objectSpread(target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i] != null ? Object(arguments[i]) : {};
                            var ownKeys = Object.keys(source);
                            if (typeof Object.getOwnPropertySymbols === "function") ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter((function(sym) {
                                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                            })));
                            ownKeys.forEach((function(key) {
                                _defineProperty(target, key, source[key]);
                            }));
                        }
                        return target;
                    }
                    function _defineProperty(obj, key, value) {
                        key = _toPropertyKey(key);
                        if (key in obj) Object.defineProperty(obj, key, {
                            value,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        }); else obj[key] = value;
                        return obj;
                    }
                    function _slicedToArray(arr, i) {
                        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
                    }
                    function _nonIterableRest() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        if (n === "Object" && o.constructor) n = o.constructor.name;
                        if (n === "Map" || n === "Set") return Array.from(o);
                        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
                    }
                    function _arrayLikeToArray(arr, len) {
                        if (len == null || len > arr.length) len = arr.length;
                        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                        return arr2;
                    }
                    function _iterableToArrayLimit(arr, i) {
                        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
                        if (null != _i) {
                            var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
                            try {
                                if (_x = (_i = _i.call(arr)).next, 0 === i) {
                                    if (Object(_i) !== _i) return;
                                    _n = !1;
                                } else for (;!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) ;
                            } catch (err) {
                                _d = !0, _e = err;
                            } finally {
                                try {
                                    if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    }
                    function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
                        }
                    }
                    function _createClass(Constructor, protoProps, staticProps) {
                        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) _defineProperties(Constructor, staticProps);
                        Object.defineProperty(Constructor, "prototype", {
                            writable: false
                        });
                        return Constructor;
                    }
                    function _toPropertyKey(arg) {
                        var key = _toPrimitive(arg, "string");
                        return typeof key === "symbol" ? key : String(key);
                    }
                    function _toPrimitive(input, hint) {
                        if (typeof input !== "object" || input === null) return input;
                        var prim = input[Symbol.toPrimitive];
                        if (prim !== undefined) {
                            var res = prim.call(input, hint || "default");
                            if (typeof res !== "object") return res;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return (hint === "string" ? String : Number)(input);
                    }
                    var intlTelInputGlobals = {
                        getInstance: function getInstance(input) {
                            var id = input.getAttribute("data-intl-tel-input-id");
                            return window.intlTelInputGlobals.instances[id];
                        },
                        instances: {},
                        documentReady: function documentReady() {
                            return document.readyState === "complete";
                        }
                    };
                    if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
                    var id = 0;
                    var defaults = {
                        allowDropdown: true,
                        autoInsertDialCode: false,
                        autoPlaceholder: "polite",
                        countrySearch: true,
                        containerClass: "",
                        customPlaceholder: null,
                        dropdownContainer: null,
                        excludeCountries: [],
                        fixDropdownWidth: true,
                        formatAsYouType: true,
                        formatOnDisplay: true,
                        geoIpLookup: null,
                        hiddenInput: null,
                        i18n: {},
                        initialCountry: "",
                        nationalMode: true,
                        onlyCountries: [],
                        placeholderNumberType: "MOBILE",
                        preferredCountries: [],
                        showFlags: true,
                        showSelectedDialCode: false,
                        useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500 : false,
                        utilsScript: ""
                    };
                    var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
                    var forEachInstance = function forEachInstance(method) {
                        var instances = window.intlTelInputGlobals.instances;
                        Object.values(instances).forEach((function(instance) {
                            return instance[method]();
                        }));
                    };
                    var Iti = function() {
                        function Iti(input) {
                            var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                            _classCallCheck(this, Iti);
                            this.id = id++;
                            this.telInput = input;
                            this.activeItem = null;
                            this.highlightedItem = null;
                            this.options = Object.assign({}, defaults, customOptions);
                            this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
                        }
                        _createClass(Iti, [ {
                            key: "_init",
                            value: function _init() {
                                var _this = this;
                                if (this.options.useFullscreenPopup) this.options.fixDropdownWidth = false;
                                if (this.options.countrySearch && !this.options.useFullscreenPopup) this.options.fixDropdownWidth = true;
                                if (this.options.nationalMode) this.options.autoInsertDialCode = false;
                                if (this.options.showSelectedDialCode) this.options.autoInsertDialCode = false;
                                var forceShowFlags = this.options.allowDropdown && !this.options.showSelectedDialCode;
                                if (!this.options.showFlags && forceShowFlags) this.options.showFlags = true;
                                if (this.options.useFullscreenPopup && !this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                                this.isRTL = !!this.telInput.closest("[dir=rtl]");
                                if (typeof Promise !== "undefined") {
                                    var autoCountryPromise = new Promise((function(resolve, reject) {
                                        _this.resolveAutoCountryPromise = resolve;
                                        _this.rejectAutoCountryPromise = reject;
                                    }));
                                    var utilsScriptPromise = new Promise((function(resolve, reject) {
                                        _this.resolveUtilsScriptPromise = resolve;
                                        _this.rejectUtilsScriptPromise = reject;
                                    }));
                                    this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                                } else {
                                    this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                                    this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                                }
                                this.selectedCountryData = {};
                                this._processCountryData();
                                this._generateMarkup();
                                this._setInitialState();
                                this._initListeners();
                                this._initRequests();
                            }
                        }, {
                            key: "_processCountryData",
                            value: function _processCountryData() {
                                this._processAllCountries();
                                this._processCountryCodes();
                                this._processPreferredCountries();
                                this._translateCountryNames();
                                if (this.options.onlyCountries.length || this.options.i18n) this.countries.sort(this._countryNameSort);
                            }
                        }, {
                            key: "_addCountryCode",
                            value: function _addCountryCode(iso2, countryCode, priority) {
                                if (countryCode.length > this.countryCodeMaxLen) this.countryCodeMaxLen = countryCode.length;
                                if (!this.countryCodes.hasOwnProperty(countryCode)) this.countryCodes[countryCode] = [];
                                for (var i = 0; i < this.countryCodes[countryCode].length; i++) if (this.countryCodes[countryCode][i] === iso2) return;
                                var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                                this.countryCodes[countryCode][index] = iso2;
                            }
                        }, {
                            key: "_processAllCountries",
                            value: function _processAllCountries() {
                                if (this.options.onlyCountries.length) {
                                    var lowerCaseOnlyCountries = this.options.onlyCountries.map((function(country) {
                                        return country.toLowerCase();
                                    }));
                                    this.countries = allCountries.filter((function(country) {
                                        return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                                    }));
                                } else if (this.options.excludeCountries.length) {
                                    var lowerCaseExcludeCountries = this.options.excludeCountries.map((function(country) {
                                        return country.toLowerCase();
                                    }));
                                    this.countries = allCountries.filter((function(country) {
                                        return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                                    }));
                                } else this.countries = allCountries;
                            }
                        }, {
                            key: "_translateCountryNames",
                            value: function _translateCountryNames() {
                                for (var i = 0; i < this.countries.length; i++) {
                                    var iso2 = this.countries[i].iso2.toLowerCase();
                                    if (this.options.i18n.hasOwnProperty(iso2)) this.countries[i].name = this.options.i18n[iso2];
                                }
                            }
                        }, {
                            key: "_countryNameSort",
                            value: function _countryNameSort(a, b) {
                                if (a.name < b.name) return -1;
                                if (a.name > b.name) return 1;
                                return 0;
                            }
                        }, {
                            key: "_processCountryCodes",
                            value: function _processCountryCodes() {
                                this.countryCodeMaxLen = 0;
                                this.dialCodes = {};
                                this.countryCodes = {};
                                for (var i = 0; i < this.countries.length; i++) {
                                    var c = this.countries[i];
                                    if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                                    this._addCountryCode(c.iso2, c.dialCode, c.priority);
                                }
                                for (var _i = 0; _i < this.countries.length; _i++) {
                                    var _c = this.countries[_i];
                                    if (_c.areaCodes) {
                                        var rootCountryCode = this.countryCodes[_c.dialCode][0];
                                        for (var j = 0; j < _c.areaCodes.length; j++) {
                                            var areaCode = _c.areaCodes[j];
                                            for (var k = 1; k < areaCode.length; k++) {
                                                var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                                this._addCountryCode(rootCountryCode, partialDialCode);
                                                this._addCountryCode(_c.iso2, partialDialCode);
                                            }
                                            this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "_processPreferredCountries",
                            value: function _processPreferredCountries() {
                                this.preferredCountries = [];
                                for (var i = 0; i < this.options.preferredCountries.length; i++) {
                                    var countryCode = this.options.preferredCountries[i].toLowerCase();
                                    var countryData = this._getCountryData(countryCode, true);
                                    if (countryData) this.preferredCountries.push(countryData);
                                }
                            }
                        }, {
                            key: "_createEl",
                            value: function _createEl(name, attrs, container) {
                                var el = document.createElement(name);
                                if (attrs) Object.entries(attrs).forEach((function(_ref) {
                                    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                                    return el.setAttribute(key, value);
                                }));
                                if (container) container.appendChild(el);
                                return el;
                            }
                        }, {
                            key: "_generateMarkup",
                            value: function _generateMarkup() {
                                this.telInput.classList.add("iti__tel-input");
                                if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) this.telInput.setAttribute("autocomplete", "off");
                                var _this$options = this.options, allowDropdown = _this$options.allowDropdown, showSelectedDialCode = _this$options.showSelectedDialCode, showFlags = _this$options.showFlags, containerClass = _this$options.containerClass, hiddenInput = _this$options.hiddenInput, dropdownContainer = _this$options.dropdownContainer, fixDropdownWidth = _this$options.fixDropdownWidth, useFullscreenPopup = _this$options.useFullscreenPopup, countrySearch = _this$options.countrySearch;
                                var parentClass = "iti";
                                if (allowDropdown) parentClass += " iti--allow-dropdown";
                                if (showSelectedDialCode) parentClass += " iti--show-selected-dial-code";
                                if (showFlags) parentClass += " iti--show-flags";
                                if (containerClass) parentClass += " ".concat(containerClass);
                                if (!useFullscreenPopup) parentClass += " iti--inline-dropdown";
                                var wrapper = this._createEl("div", {
                                    class: parentClass
                                });
                                this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                                var showFlagsContainer = allowDropdown || showFlags || showSelectedDialCode;
                                if (showFlagsContainer) this.flagsContainer = this._createEl("div", {
                                    class: "iti__flag-container"
                                }, wrapper);
                                wrapper.appendChild(this.telInput);
                                if (showFlagsContainer) this.selectedFlag = this._createEl("div", _objectSpread({
                                    class: "iti__selected-flag"
                                }, allowDropdown && {
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                                    "aria-expanded": "false",
                                    "aria-label": this.options.i18n.selectedCountryAriaLabel || "Selected country"
                                }), this.flagsContainer);
                                if (showFlags) this.selectedFlagInner = this._createEl("div", {
                                    class: "iti__flag"
                                }, this.selectedFlag);
                                if (this.selectedFlag && this.telInput.disabled) this.selectedFlag.setAttribute("aria-disabled", "true");
                                if (showSelectedDialCode) this.selectedDialCode = this._createEl("div", {
                                    class: "iti__selected-dial-code"
                                }, this.selectedFlag);
                                if (allowDropdown) {
                                    if (!this.telInput.disabled) this.selectedFlag.setAttribute("tabindex", "0");
                                    this.dropdownArrow = this._createEl("div", {
                                        class: "iti__arrow"
                                    }, this.selectedFlag);
                                    var extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
                                    this.dropdownContent = this._createEl("div", {
                                        class: "iti__dropdown-content iti__hide ".concat(extraClasses)
                                    });
                                    if (countrySearch) this.searchInput = this._createEl("input", {
                                        type: "text",
                                        class: "iti__search-input",
                                        placeholder: this.options.i18n.searchPlaceholder || "Search"
                                    }, this.dropdownContent);
                                    this.countryList = this._createEl("ul", {
                                        class: "iti__country-list",
                                        id: "iti-".concat(this.id, "__country-listbox"),
                                        role: "listbox",
                                        "aria-label": this.options.i18n.countryListAriaLabel || "List of countries"
                                    }, this.dropdownContent);
                                    if (this.preferredCountries.length && !countrySearch) {
                                        this._appendListItems(this.preferredCountries, "iti__preferred", true);
                                        this._createEl("li", {
                                            class: "iti__divider",
                                            "aria-hidden": "true"
                                        }, this.countryList);
                                    }
                                    this._appendListItems(this.countries, "iti__standard");
                                    if (dropdownContainer) {
                                        var dropdownClasses = "iti iti--container";
                                        if (useFullscreenPopup) dropdownClasses += " iti--fullscreen-popup"; else dropdownClasses += " iti--inline-dropdown";
                                        if (countrySearch) dropdownClasses += " iti--country-search";
                                        this.dropdown = this._createEl("div", {
                                            class: dropdownClasses
                                        });
                                        this.dropdown.appendChild(this.dropdownContent);
                                    } else this.flagsContainer.appendChild(this.dropdownContent);
                                }
                                if (hiddenInput) {
                                    var telInputName = this.telInput.getAttribute("name");
                                    var hiddenInputName = hiddenInput(telInputName);
                                    this.hiddenInput = this._createEl("input", {
                                        type: "hidden",
                                        name: hiddenInputName
                                    });
                                    wrapper.appendChild(this.hiddenInput);
                                    this.hiddenInputCountry = this._createEl("input", {
                                        type: "hidden",
                                        name: "".concat(hiddenInputName, "_country")
                                    });
                                    wrapper.appendChild(this.hiddenInputCountry);
                                }
                            }
                        }, {
                            key: "_appendListItems",
                            value: function _appendListItems(countries, className, preferred) {
                                for (var i = 0; i < countries.length; i++) {
                                    var c = countries[i];
                                    var idSuffix = preferred ? "-preferred" : "";
                                    var listItem = this._createEl("li", {
                                        id: "iti-".concat(this.id, "__item-").concat(c.iso2).concat(idSuffix),
                                        class: "iti__country ".concat(className),
                                        tabindex: "-1",
                                        role: "option",
                                        "data-dial-code": c.dialCode,
                                        "data-country-code": c.iso2,
                                        "aria-selected": "false"
                                    }, this.countryList);
                                    c.nodeById[this.id] = listItem;
                                    var content = "";
                                    if (this.options.showFlags) content += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                                    content += "<span class='iti__country-name'>".concat(c.name, "</span>");
                                    content += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                                    listItem.insertAdjacentHTML("beforeend", content);
                                }
                            }
                        }, {
                            key: "_setInitialState",
                            value: function _setInitialState() {
                                var overrideAutoCountry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                                var attributeValue = this.telInput.getAttribute("value");
                                var inputValue = this.telInput.value;
                                var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                                var val = useAttribute ? attributeValue : inputValue;
                                var dialCode = this._getDialCode(val);
                                var isRegionlessNanp = this._isRegionlessNanp(val);
                                var _this$options2 = this.options, initialCountry = _this$options2.initialCountry, autoInsertDialCode = _this$options2.autoInsertDialCode;
                                if (dialCode && !isRegionlessNanp) this._updateFlagFromNumber(val); else if (initialCountry !== "auto" || overrideAutoCountry) {
                                    var isValidInitialCountry = initialCountry && !!this._getCountryData(initialCountry, true);
                                    if (isValidInitialCountry) this._setFlag(initialCountry.toLowerCase()); else if (dialCode && isRegionlessNanp) this._setFlag("us"); else {
                                        this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                        if (!val) this._setFlag(this.defaultCountry);
                                    }
                                    if (!val && autoInsertDialCode) this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                                }
                                if (val) this._updateValFromNumber(val);
                            }
                        }, {
                            key: "_initListeners",
                            value: function _initListeners() {
                                this._initKeyListeners();
                                if (this.options.autoInsertDialCode) this._initBlurListeners();
                                if (this.options.allowDropdown) this._initDropdownListeners();
                                if (this.hiddenInput) this._initHiddenInputListener();
                            }
                        }, {
                            key: "_initHiddenInputListener",
                            value: function _initHiddenInputListener() {
                                var _this2 = this;
                                this._handleHiddenInputSubmit = function() {
                                    _this2.hiddenInput.value = _this2.getNumber();
                                    _this2.hiddenInputCountry.value = _this2.getSelectedCountryData().iso2;
                                };
                                if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                            }
                        }, {
                            key: "_initDropdownListeners",
                            value: function _initDropdownListeners() {
                                var _this3 = this;
                                this._handleLabelClick = function(e) {
                                    if (_this3.dropdownContent.classList.contains("iti__hide")) _this3.telInput.focus(); else e.preventDefault();
                                };
                                var label = this.telInput.closest("label");
                                if (label) label.addEventListener("click", this._handleLabelClick);
                                this._handleClickSelectedFlag = function() {
                                    if (_this3.dropdownContent.classList.contains("iti__hide") && !_this3.telInput.disabled && !_this3.telInput.readOnly) _this3._showDropdown();
                                };
                                this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                                this._handleFlagsContainerKeydown = function(e) {
                                    var isDropdownHidden = _this3.dropdownContent.classList.contains("iti__hide");
                                    if (isDropdownHidden && [ "ArrowUp", "ArrowDown", " ", "Enter" ].includes(e.key)) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        _this3._showDropdown();
                                    }
                                    if (e.key === "Tab") _this3._closeDropdown();
                                };
                                this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                            }
                        }, {
                            key: "_initRequests",
                            value: function _initRequests() {
                                var _this4 = this;
                                if (this.options.utilsScript && !window.intlTelInputUtils) if (window.intlTelInputGlobals.documentReady()) window.intlTelInputGlobals.loadUtils(this.options.utilsScript); else window.addEventListener("load", (function() {
                                    window.intlTelInputGlobals.loadUtils(_this4.options.utilsScript);
                                })); else this.resolveUtilsScriptPromise();
                                if (this.options.initialCountry === "auto" && !this.selectedCountryData.iso2) this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                            }
                        }, {
                            key: "_loadAutoCountry",
                            value: function _loadAutoCountry() {
                                var _this5 = this;
                                if (window.intlTelInputGlobals.autoCountry) this.handleAutoCountry(); else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                                    window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                                    if (typeof this.options.geoIpLookup === "function") this.options.geoIpLookup((function() {
                                        var countryCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                                        var lowerCountryCode = countryCode.toLowerCase();
                                        var isValid = !!_this5._getCountryData(lowerCountryCode, true);
                                        if (isValid) {
                                            window.intlTelInputGlobals.autoCountry = lowerCountryCode;
                                            setTimeout((function() {
                                                return forEachInstance("handleAutoCountry");
                                            }));
                                        } else {
                                            _this5._setInitialState(true);
                                            forEachInstance("rejectAutoCountryPromise");
                                        }
                                    }), (function() {
                                        return forEachInstance("rejectAutoCountryPromise");
                                    }));
                                }
                            }
                        }, {
                            key: "_initKeyListeners",
                            value: function _initKeyListeners() {
                                var _this6 = this;
                                var userOverrideFormatting = false;
                                this._handleKeyEvent = function(e) {
                                    if (_this6._updateFlagFromNumber(_this6.telInput.value)) _this6._triggerCountryChange();
                                    if (e && e.data && /[^+0-9]/.test(e.data)) userOverrideFormatting = true; else if (!/[^+0-9]/.test(_this6.telInput.value)) userOverrideFormatting = false;
                                    if (_this6.options.formatAsYouType && !userOverrideFormatting) {
                                        var currentCaretPos = _this6.telInput.selectionStart;
                                        var valueBeforeCaret = _this6.telInput.value.substring(0, currentCaretPos);
                                        var relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
                                        var isDeleteForwards = e && e.inputType === "deleteContentForward";
                                        var formattedValue = _this6._formatNumberAsYouType();
                                        var newCaretPos = _this6._translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
                                        _this6.telInput.value = formattedValue;
                                        _this6.telInput.setSelectionRange(newCaretPos, newCaretPos);
                                    }
                                };
                                this.telInput.addEventListener("input", this._handleKeyEvent);
                                this._handleClipboardEvent = function() {
                                    setTimeout(_this6._handleKeyEvent);
                                };
                                this.telInput.addEventListener("cut", this._handleClipboardEvent);
                                this.telInput.addEventListener("paste", this._handleClipboardEvent);
                            }
                        }, {
                            key: "_translateCursorPosition",
                            value: function _translateCursorPosition(relevantChars, formattedValue, prevCaretPos, isDeleteForwards) {
                                if (prevCaretPos === 0 && !isDeleteForwards) return 0;
                                var count = 0;
                                for (var i = 0; i < formattedValue.length; i++) {
                                    if (/[+0-9]/.test(formattedValue[i])) count++;
                                    if (count === relevantChars && !isDeleteForwards) return i + 1;
                                    if (isDeleteForwards && count === relevantChars + 1) return i;
                                }
                                return formattedValue.length;
                            }
                        }, {
                            key: "_cap",
                            value: function _cap(number) {
                                var max = this.telInput.getAttribute("maxlength");
                                return max && number.length > max ? number.substr(0, max) : number;
                            }
                        }, {
                            key: "_initBlurListeners",
                            value: function _initBlurListeners() {
                                var _this7 = this;
                                this._handleSubmitOrBlurEvent = function() {
                                    _this7._removeEmptyDialCode();
                                };
                                if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                                this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                            }
                        }, {
                            key: "_removeEmptyDialCode",
                            value: function _removeEmptyDialCode() {
                                if (this.telInput.value.charAt(0) === "+") {
                                    var numeric = this._getNumeric(this.telInput.value);
                                    if (!numeric || this.selectedCountryData.dialCode === numeric) this.telInput.value = "";
                                }
                            }
                        }, {
                            key: "_getNumeric",
                            value: function _getNumeric(s) {
                                return s.replace(/\D/g, "");
                            }
                        }, {
                            key: "_trigger",
                            value: function _trigger(name) {
                                var e = new Event(name, {
                                    bubbles: true,
                                    cancelable: true
                                });
                                this.telInput.dispatchEvent(e);
                            }
                        }, {
                            key: "_showDropdown",
                            value: function _showDropdown() {
                                if (this.options.fixDropdownWidth) this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px");
                                this.dropdownContent.classList.remove("iti__hide");
                                this.selectedFlag.setAttribute("aria-expanded", "true");
                                this._setDropdownPosition();
                                if (this.options.countrySearch) {
                                    var firstElementChild = this.countryList.firstElementChild;
                                    if (firstElementChild) this._highlightListItem(firstElementChild, false);
                                    this.searchInput.focus();
                                } else if (this.activeItem) {
                                    this._highlightListItem(this.activeItem, false);
                                    this._scrollTo(this.activeItem, true);
                                }
                                this._bindDropdownListeners();
                                this.dropdownArrow.classList.add("iti__arrow--up");
                                this._trigger("open:countrydropdown");
                            }
                        }, {
                            key: "_toggleClass",
                            value: function _toggleClass(el, className, shouldHaveClass) {
                                if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                            }
                        }, {
                            key: "_setDropdownPosition",
                            value: function _setDropdownPosition() {
                                var _this8 = this;
                                if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.dropdown);
                                if (!this.options.useFullscreenPopup) {
                                    var pos = this.telInput.getBoundingClientRect();
                                    var windowTop = document.documentElement.scrollTop;
                                    var inputTop = pos.top + windowTop;
                                    var dropdownHeight = this.dropdownContent.offsetHeight;
                                    var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                                    var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                                    var positionDropdownAboveInput = !this.options.countrySearch && !dropdownFitsBelow && dropdownFitsAbove;
                                    this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", positionDropdownAboveInput);
                                    if (this.options.dropdownContainer) {
                                        var extraTop = positionDropdownAboveInput ? 0 : this.telInput.offsetHeight;
                                        this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                                        this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                                        this._handleWindowScroll = function() {
                                            return _this8._closeDropdown();
                                        };
                                        window.addEventListener("scroll", this._handleWindowScroll);
                                    }
                                }
                            }
                        }, {
                            key: "_bindDropdownListeners",
                            value: function _bindDropdownListeners() {
                                var _this9 = this;
                                this._handleMouseoverCountryList = function(e) {
                                    var listItem = e.target.closest(".iti__country");
                                    if (listItem) _this9._highlightListItem(listItem, false);
                                };
                                this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                                this._handleClickCountryList = function(e) {
                                    var listItem = e.target.closest(".iti__country");
                                    if (listItem) _this9._selectListItem(listItem);
                                };
                                this.countryList.addEventListener("click", this._handleClickCountryList);
                                var isOpening = true;
                                this._handleClickOffToClose = function() {
                                    if (!isOpening) _this9._closeDropdown();
                                    isOpening = false;
                                };
                                document.documentElement.addEventListener("click", this._handleClickOffToClose);
                                var query = "";
                                var queryTimer = null;
                                this._handleKeydownOnDropdown = function(e) {
                                    if ([ "ArrowUp", "ArrowDown", "Enter", "Escape" ].includes(e.key)) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        if (e.key === "ArrowUp" || e.key === "ArrowDown") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown();
                                    }
                                    if (!_this9.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                                        e.stopPropagation();
                                        if (queryTimer) clearTimeout(queryTimer);
                                        query += e.key.toLowerCase();
                                        _this9._searchForCountry(query);
                                        queryTimer = setTimeout((function() {
                                            query = "";
                                        }), 1e3);
                                    }
                                };
                                document.addEventListener("keydown", this._handleKeydownOnDropdown);
                                if (this.options.countrySearch) {
                                    var doFilter = function doFilter() {
                                        var inputQuery = _this9.searchInput.value.trim();
                                        if (inputQuery) _this9._filterCountries(inputQuery); else _this9._filterCountries("", true);
                                    };
                                    var keyupTimer = null;
                                    this._handleSearchChange = function() {
                                        if (keyupTimer) clearTimeout(keyupTimer);
                                        keyupTimer = setTimeout((function() {
                                            doFilter();
                                            keyupTimer = null;
                                        }), 100);
                                    };
                                    this.searchInput.addEventListener("input", this._handleSearchChange);
                                    this.searchInput.addEventListener("click", (function(e) {
                                        return e.stopPropagation();
                                    }));
                                }
                            }
                        }, {
                            key: "_normaliseString",
                            value: function _normaliseString() {
                                var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                                return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                            }
                        }, {
                            key: "_filterCountries",
                            value: function _filterCountries(query) {
                                var isReset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                                var isFirst = true;
                                this.countryList.innerHTML = "";
                                var normalisedQuery = this._normaliseString(query);
                                for (var i = 0; i < this.countries.length; i++) {
                                    var c = this.countries[i];
                                    var normalisedCountryName = this._normaliseString(c.name);
                                    var fullDialCode = "+".concat(c.dialCode);
                                    if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c.iso2.includes(normalisedQuery)) {
                                        this.countryList.appendChild(c.nodeById[this.id]);
                                        if (isFirst) {
                                            this._highlightListItem(c.nodeById[this.id], false);
                                            isFirst = false;
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "_handleUpDownKey",
                            value: function _handleUpDownKey(key) {
                                var next = key === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                                if (next) {
                                    if (next.classList.contains("iti__divider")) next = key === "ArrowUp" ? next.previousElementSibling : next.nextElementSibling;
                                } else if (this.countryList.childElementCount > 1) next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
                                if (next) {
                                    var doFocus = !this.options.countrySearch;
                                    this._highlightListItem(next, doFocus);
                                    if (this.options.countrySearch) this._scrollTo(next, false);
                                }
                            }
                        }, {
                            key: "_handleEnterKey",
                            value: function _handleEnterKey() {
                                if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                            }
                        }, {
                            key: "_searchForCountry",
                            value: function _searchForCountry(query) {
                                for (var i = 0; i < this.countries.length; i++) if (this._startsWith(this.countries[i].name, query)) {
                                    var listItem = this.countries[i].nodeById[this.id];
                                    this._highlightListItem(listItem, false);
                                    this._scrollTo(listItem, true);
                                    break;
                                }
                            }
                        }, {
                            key: "_startsWith",
                            value: function _startsWith(a, b) {
                                return a.substr(0, b.length).toLowerCase() === b;
                            }
                        }, {
                            key: "_updateValFromNumber",
                            value: function _updateValFromNumber(fullNumber) {
                                var number = fullNumber;
                                if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                                    var useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.showSelectedDialCode;
                                    var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                                    var format = useNational ? NATIONAL : INTERNATIONAL;
                                    number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                                }
                                number = this._beforeSetNumber(number);
                                this.telInput.value = number;
                            }
                        }, {
                            key: "_updateFlagFromNumber",
                            value: function _updateFlagFromNumber(fullNumber) {
                                var plusIndex = fullNumber.indexOf("+");
                                var number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
                                var selectedDialCode = this.selectedCountryData.dialCode;
                                var isNanp = selectedDialCode === "1";
                                if (number && isNanp && number.charAt(0) !== "+") {
                                    if (number.charAt(0) !== "1") number = "1".concat(number);
                                    number = "+".concat(number);
                                }
                                if (this.options.showSelectedDialCode && selectedDialCode && number.charAt(0) !== "+") number = "+".concat(selectedDialCode).concat(number);
                                var dialCode = this._getDialCode(number, true);
                                var numeric = this._getNumeric(number);
                                var countryCode = null;
                                if (dialCode) {
                                    var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                                    var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                                    var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                                    if (!isRegionlessNanpNumber && !alreadySelected) for (var j = 0; j < countryCodes.length; j++) if (countryCodes[j]) {
                                        countryCode = countryCodes[j];
                                        break;
                                    }
                                } else if (number.charAt(0) === "+" && numeric.length) countryCode = ""; else if ((!number || number === "+") && !this.selectedCountryData.iso2) countryCode = this.defaultCountry;
                                if (countryCode !== null) return this._setFlag(countryCode);
                                return false;
                            }
                        }, {
                            key: "_isRegionlessNanp",
                            value: function _isRegionlessNanp(number) {
                                var numeric = this._getNumeric(number);
                                if (numeric.charAt(0) === "1") {
                                    var areaCode = numeric.substr(1, 3);
                                    return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                                }
                                return false;
                            }
                        }, {
                            key: "_highlightListItem",
                            value: function _highlightListItem(listItem, shouldFocus) {
                                var prevItem = this.highlightedItem;
                                if (prevItem) prevItem.classList.remove("iti__highlight");
                                this.highlightedItem = listItem;
                                this.highlightedItem.classList.add("iti__highlight");
                                this.selectedFlag.setAttribute("aria-activedescendant", listItem.getAttribute("id"));
                                if (shouldFocus) this.highlightedItem.focus();
                            }
                        }, {
                            key: "_getCountryData",
                            value: function _getCountryData(countryCode, allowFail) {
                                for (var i = 0; i < this.countries.length; i++) if (this.countries[i].iso2 === countryCode) return this.countries[i];
                                if (allowFail) return null;
                                throw new Error("No country data for '".concat(countryCode, "'"));
                            }
                        }, {
                            key: "_setFlag",
                            value: function _setFlag(countryCode) {
                                var _this$options3 = this.options, allowDropdown = _this$options3.allowDropdown, showSelectedDialCode = _this$options3.showSelectedDialCode, showFlags = _this$options3.showFlags, countrySearch = _this$options3.countrySearch;
                                var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                                this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false) : {};
                                if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                                if (showFlags) this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                                this._setSelectedCountryFlagTitleAttribute(countryCode, showSelectedDialCode);
                                if (showSelectedDialCode) {
                                    var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                                    this.selectedDialCode.innerHTML = dialCode;
                                    var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                                    if (this.isRTL) this.telInput.style.paddingRight = "".concat(selectedFlagWidth + 6, "px"); else this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                                }
                                this._updatePlaceholder();
                                if (allowDropdown && !countrySearch) {
                                    var prevItem = this.activeItem;
                                    if (prevItem) {
                                        prevItem.classList.remove("iti__active");
                                        prevItem.setAttribute("aria-selected", "false");
                                    }
                                    if (countryCode) {
                                        var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                                        nextItem.setAttribute("aria-selected", "true");
                                        nextItem.classList.add("iti__active");
                                        this.activeItem = nextItem;
                                    }
                                }
                                return prevCountry.iso2 !== countryCode;
                            }
                        }, {
                            key: "_setSelectedCountryFlagTitleAttribute",
                            value: function _setSelectedCountryFlagTitleAttribute(countryCode, showSelectedDialCode) {
                                if (!this.selectedFlag) return;
                                var title;
                                if (countryCode && !showSelectedDialCode) title = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode); else if (countryCode) title = this.selectedCountryData.name; else title = "Unknown";
                                this.selectedFlag.setAttribute("title", title);
                            }
                        }, {
                            key: "_getHiddenSelectedFlagWidth",
                            value: function _getHiddenSelectedFlagWidth() {
                                var containerClone = this.telInput.parentNode.cloneNode();
                                containerClone.style.visibility = "hidden";
                                document.body.appendChild(containerClone);
                                var flagsContainerClone = this.flagsContainer.cloneNode();
                                containerClone.appendChild(flagsContainerClone);
                                var selectedFlagClone = this.selectedFlag.cloneNode(true);
                                flagsContainerClone.appendChild(selectedFlagClone);
                                var width = selectedFlagClone.offsetWidth;
                                containerClone.parentNode.removeChild(containerClone);
                                return width;
                            }
                        }, {
                            key: "_updatePlaceholder",
                            value: function _updatePlaceholder() {
                                var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                                if (window.intlTelInputUtils && shouldSetPlaceholder) {
                                    var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                                    var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                                    placeholder = this._beforeSetNumber(placeholder);
                                    if (typeof this.options.customPlaceholder === "function") placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                                    this.telInput.setAttribute("placeholder", placeholder);
                                }
                            }
                        }, {
                            key: "_selectListItem",
                            value: function _selectListItem(listItem) {
                                var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                                this._closeDropdown();
                                this._updateDialCode(listItem.getAttribute("data-dial-code"));
                                this.telInput.focus();
                                if (flagChanged) this._triggerCountryChange();
                            }
                        }, {
                            key: "_closeDropdown",
                            value: function _closeDropdown() {
                                this.dropdownContent.classList.add("iti__hide");
                                this.selectedFlag.setAttribute("aria-expanded", "false");
                                this.selectedFlag.removeAttribute("aria-activedescendant");
                                this.dropdownArrow.classList.remove("iti__arrow--up");
                                document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                                if (this.options.countrySearch) this.searchInput.removeEventListener("input", this._handleSearchChange);
                                document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                                this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                                this.countryList.removeEventListener("click", this._handleClickCountryList);
                                if (this.options.dropdownContainer) {
                                    if (!this.options.useFullscreenPopup) window.removeEventListener("scroll", this._handleWindowScroll);
                                    if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                                }
                                this._trigger("close:countrydropdown");
                            }
                        }, {
                            key: "_scrollTo",
                            value: function _scrollTo(element, middle) {
                                var container = this.countryList;
                                var windowTop = document.documentElement.scrollTop;
                                var containerHeight = container.offsetHeight;
                                var containerTop = container.getBoundingClientRect().top + windowTop;
                                var containerBottom = containerTop + containerHeight;
                                var elementHeight = element.offsetHeight;
                                var elementTop = element.getBoundingClientRect().top + windowTop;
                                var elementBottom = elementTop + elementHeight;
                                var newScrollTop = elementTop - containerTop + container.scrollTop;
                                var middleOffset = containerHeight / 2 - elementHeight / 2;
                                if (elementTop < containerTop) {
                                    if (middle) newScrollTop -= middleOffset;
                                    container.scrollTop = newScrollTop;
                                } else if (elementBottom > containerBottom) {
                                    if (middle) newScrollTop += middleOffset;
                                    var heightDifference = containerHeight - elementHeight;
                                    container.scrollTop = newScrollTop - heightDifference;
                                }
                            }
                        }, {
                            key: "_updateDialCode",
                            value: function _updateDialCode(newDialCodeBare) {
                                var inputVal = this.telInput.value;
                                var newDialCode = "+".concat(newDialCodeBare);
                                var newNumber;
                                if (inputVal.charAt(0) === "+") {
                                    var prevDialCode = this._getDialCode(inputVal);
                                    if (prevDialCode) newNumber = inputVal.replace(prevDialCode, newDialCode); else newNumber = newDialCode;
                                    this.telInput.value = newNumber;
                                } else if (this.options.autoInsertDialCode) {
                                    if (inputVal) newNumber = newDialCode + inputVal; else newNumber = newDialCode;
                                    this.telInput.value = newNumber;
                                }
                            }
                        }, {
                            key: "_getDialCode",
                            value: function _getDialCode(number, includeAreaCode) {
                                var dialCode = "";
                                if (number.charAt(0) === "+") {
                                    var numericChars = "";
                                    for (var i = 0; i < number.length; i++) {
                                        var c = number.charAt(i);
                                        if (!isNaN(parseInt(c, 10))) {
                                            numericChars += c;
                                            if (includeAreaCode) {
                                                if (this.countryCodes[numericChars]) dialCode = number.substr(0, i + 1);
                                            } else if (this.dialCodes[numericChars]) {
                                                dialCode = number.substr(0, i + 1);
                                                break;
                                            }
                                            if (numericChars.length === this.countryCodeMaxLen) break;
                                        }
                                    }
                                }
                                return dialCode;
                            }
                        }, {
                            key: "_getFullNumber",
                            value: function _getFullNumber() {
                                var val = this.telInput.value.trim();
                                var dialCode = this.selectedCountryData.dialCode;
                                var prefix;
                                var numericVal = this._getNumeric(val);
                                if (this.options.showSelectedDialCode && !this.options.nationalMode && val.charAt(0) !== "+" && dialCode && numericVal) prefix = "+".concat(dialCode); else prefix = "";
                                return prefix + val;
                            }
                        }, {
                            key: "_beforeSetNumber",
                            value: function _beforeSetNumber(fullNumber) {
                                var number = fullNumber;
                                if (this.options.showSelectedDialCode) {
                                    var dialCode = this._getDialCode(number);
                                    if (dialCode) {
                                        dialCode = "+".concat(this.selectedCountryData.dialCode);
                                        var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                                        number = number.substr(start);
                                    }
                                }
                                return this._cap(number);
                            }
                        }, {
                            key: "_triggerCountryChange",
                            value: function _triggerCountryChange() {
                                this._trigger("countrychange");
                            }
                        }, {
                            key: "_formatNumberAsYouType",
                            value: function _formatNumberAsYouType() {
                                var val = this._getFullNumber();
                                var result = window.intlTelInputUtils ? intlTelInputUtils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
                                var dialCode = this.selectedCountryData.dialCode;
                                if (this.options.showSelectedDialCode && !this.options.nationalMode && this.telInput.value.charAt(0) !== "+" && result.includes("+".concat(dialCode))) {
                                    var afterDialCode = result.split("+".concat(dialCode))[1] || "";
                                    return afterDialCode.trim();
                                }
                                return result;
                            }
                        }, {
                            key: "handleAutoCountry",
                            value: function handleAutoCountry() {
                                if (this.options.initialCountry === "auto") {
                                    this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                                    if (!this.telInput.value) this.setCountry(this.defaultCountry);
                                    this.resolveAutoCountryPromise();
                                }
                            }
                        }, {
                            key: "handleUtils",
                            value: function handleUtils() {
                                if (window.intlTelInputUtils) {
                                    if (this.telInput.value) this._updateValFromNumber(this.telInput.value);
                                    this._updatePlaceholder();
                                }
                                this.resolveUtilsScriptPromise();
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                var form = this.telInput.form;
                                if (this.options.allowDropdown) {
                                    this._closeDropdown();
                                    this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                                    this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                                    var label = this.telInput.closest("label");
                                    if (label) label.removeEventListener("click", this._handleLabelClick);
                                }
                                if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                                if (this.options.autoInsertDialCode) {
                                    if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                                    this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                                }
                                this.telInput.removeEventListener("input", this._handleKeyEvent);
                                this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                                this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                                this.telInput.removeAttribute("data-intl-tel-input-id");
                                var wrapper = this.telInput.parentNode;
                                wrapper.parentNode.insertBefore(this.telInput, wrapper);
                                wrapper.parentNode.removeChild(wrapper);
                                delete window.intlTelInputGlobals.instances[this.id];
                            }
                        }, {
                            key: "getExtension",
                            value: function getExtension() {
                                if (window.intlTelInputUtils) return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                                return "";
                            }
                        }, {
                            key: "getNumber",
                            value: function getNumber(format) {
                                if (window.intlTelInputUtils) {
                                    var iso2 = this.selectedCountryData.iso2;
                                    return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                                }
                                return "";
                            }
                        }, {
                            key: "getNumberType",
                            value: function getNumberType() {
                                if (window.intlTelInputUtils) return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                                return -99;
                            }
                        }, {
                            key: "getSelectedCountryData",
                            value: function getSelectedCountryData() {
                                return this.selectedCountryData;
                            }
                        }, {
                            key: "getValidationError",
                            value: function getValidationError() {
                                if (window.intlTelInputUtils) {
                                    var iso2 = this.selectedCountryData.iso2;
                                    return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                                }
                                return -99;
                            }
                        }, {
                            key: "isValidNumber",
                            value: function isValidNumber() {
                                var val = this._getFullNumber();
                                return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(val, this.selectedCountryData.iso2) : null;
                            }
                        }, {
                            key: "isValidNumberPrecise",
                            value: function isValidNumberPrecise() {
                                var val = this._getFullNumber();
                                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2) : null;
                            }
                        }, {
                            key: "setCountry",
                            value: function setCountry(originalCountryCode) {
                                var countryCode = originalCountryCode.toLowerCase();
                                if (this.selectedCountryData.iso2 !== countryCode) {
                                    this._setFlag(countryCode);
                                    this._updateDialCode(this.selectedCountryData.dialCode);
                                    this._triggerCountryChange();
                                }
                            }
                        }, {
                            key: "setNumber",
                            value: function setNumber(number) {
                                var flagChanged = this._updateFlagFromNumber(number);
                                this._updateValFromNumber(number);
                                if (flagChanged) this._triggerCountryChange();
                            }
                        }, {
                            key: "setPlaceholderNumberType",
                            value: function setPlaceholderNumberType(type) {
                                this.options.placeholderNumberType = type;
                                this._updatePlaceholder();
                            }
                        } ]);
                        return Iti;
                    }();
                    intlTelInputGlobals.getCountryData = function() {
                        return allCountries;
                    };
                    var injectScript = function injectScript(path, handleSuccess, handleFailure) {
                        var script = document.createElement("script");
                        script.onload = function() {
                            forEachInstance("handleUtils");
                            if (handleSuccess) handleSuccess();
                        };
                        script.onerror = function() {
                            forEachInstance("rejectUtilsScriptPromise");
                            if (handleFailure) handleFailure();
                        };
                        script.className = "iti-load-utils";
                        script.async = true;
                        script.src = path;
                        document.body.appendChild(script);
                    };
                    intlTelInputGlobals.loadUtils = function(path) {
                        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                            window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                            if (typeof Promise !== "undefined") return new Promise((function(resolve, reject) {
                                return injectScript(path, resolve, reject);
                            }));
                            injectScript(path);
                        }
                        return null;
                    };
                    intlTelInputGlobals.defaults = defaults;
                    intlTelInputGlobals.version = "19.2.19";
                    return function(input, options) {
                        var iti = new Iti(input, options);
                        iti._init();
                        input.setAttribute("data-intl-tel-input-id", iti.id);
                        window.intlTelInputGlobals.instances[iti.id] = iti;
                        return iti;
                    };
                }();
            }));
        },
        148: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = __webpack_require__(812);
        },
        816: module => {
            /**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
            (function(window) {
                "use strict";
                var mixitup = null, h = null;
                (function() {
                    var VENDORS = [ "webkit", "moz", "o", "ms" ], canary = window.document.createElement("div"), i = -1;
                    for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[VENDORS[i] + "RequestAnimationFrame"];
                    if (typeof canary.nextElementSibling === "undefined") Object.defineProperty(window.Element.prototype, "nextElementSibling", {
                        get: function() {
                            var el = this.nextSibling;
                            while (el) {
                                if (el.nodeType === 1) return el;
                                el = el.nextSibling;
                            }
                            return null;
                        }
                    });
                    (function(ElementPrototype) {
                        ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || function(selector) {
                            return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                        };
                    })(window.Element.prototype);
                    if (!Object.keys) Object.keys = function() {
                        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = false, dontEnums = [], dontEnumsLength = -1;
                        hasDontEnumBug = !{
                            toString: null
                        }.propertyIsEnumerable("toString");
                        dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
                        dontEnumsLength = dontEnums.length;
                        return function(obj) {
                            var result = [], prop = "", i = -1;
                            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) throw new TypeError("Object.keys called on non-object");
                            for (prop in obj) if (hasOwnProperty.call(obj, prop)) result.push(prop);
                            if (hasDontEnumBug) for (i = 0; i < dontEnumsLength; i++) if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                            return result;
                        };
                    }();
                    if (!Array.isArray) Array.isArray = function(arg) {
                        return Object.prototype.toString.call(arg) === "[object Array]";
                    };
                    if (typeof Object.create !== "function") Object.create = function(undefined) {
                        var Temp = function() {};
                        return function(prototype, propertiesObject) {
                            if (prototype !== Object(prototype) && prototype !== null) throw TypeError("Argument must be an object, or null");
                            Temp.prototype = prototype || {};
                            var result = new Temp;
                            Temp.prototype = null;
                            if (propertiesObject !== undefined) Object.defineProperties(result, propertiesObject);
                            if (prototype === null) result.__proto__ = null;
                            return result;
                        };
                    }();
                    if (!String.prototype.trim) String.prototype.trim = function() {
                        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                    };
                    if (!Array.prototype.indexOf) Array.prototype.indexOf = function(searchElement) {
                        var n, k, t, len;
                        if (this === null) throw new TypeError;
                        t = Object(this);
                        len = t.length >>> 0;
                        if (len === 0) return -1;
                        n = 0;
                        if (arguments.length > 1) {
                            n = Number(arguments[1]);
                            if (n !== n) n = 0; else if (n !== 0 && n !== 1 / 0 && n !== -1 / 0) n = (n > 0 || -1) * Math.floor(Math.abs(n));
                        }
                        if (n >= len) return -1;
                        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) if (k in t && t[k] === searchElement) return k;
                        return -1;
                    };
                    if (!Function.prototype.bind) Function.prototype.bind = function(oThis) {
                        var aArgs, self, FNOP, fBound;
                        if (typeof this !== "function") throw new TypeError;
                        aArgs = Array.prototype.slice.call(arguments, 1);
                        self = this;
                        FNOP = function() {};
                        fBound = function() {
                            return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                        };
                        if (this.prototype) FNOP.prototype = this.prototype;
                        fBound.prototype = new FNOP;
                        return fBound;
                    };
                    if (!window.Element.prototype.dispatchEvent) window.Element.prototype.dispatchEvent = function(event) {
                        try {
                            return this.fireEvent("on" + event.type, event);
                        } catch (err) {}
                    };
                })();
                mixitup = function(container, config, foreignDoc) {
                    var el = null, returnCollection = false, instance = null, facade = null, doc = null, output = null, instances = [], id = "", elements = [], i = -1;
                    doc = foreignDoc || window.document;
                    if (returnCollection = arguments[3]) returnCollection = typeof returnCollection === "boolean";
                    if (typeof container === "string") elements = doc.querySelectorAll(container); else if (container && typeof container === "object" && h.isElement(container, doc)) elements = [ container ]; else if (container && typeof container === "object" && container.length) elements = container; else throw new Error(mixitup.messages.errorFactoryInvalidContainer());
                    if (elements.length < 1) throw new Error(mixitup.messages.errorFactoryContainerNotFound());
                    for (i = 0; el = elements[i]; i++) {
                        if (i > 0 && !returnCollection) break;
                        if (!el.id) {
                            id = "MixItUp" + h.randomHex();
                            el.id = id;
                        } else id = el.id;
                        if (mixitup.instances[id] instanceof mixitup.Mixer) {
                            instance = mixitup.instances[id];
                            if (!config || config && config.debug && config.debug.showWarnings !== false) console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                        } else {
                            instance = new mixitup.Mixer;
                            instance.attach(el, doc, id, config);
                            mixitup.instances[id] = instance;
                        }
                        facade = new mixitup.Facade(instance);
                        if (config && config.debug && config.debug.enable) instances.push(instance); else instances.push(facade);
                    }
                    if (returnCollection) output = new mixitup.Collection(instances); else output = instances[0];
                    return output;
                };
                mixitup.use = function(extension) {
                    mixitup.Base.prototype.callActions.call(mixitup, "beforeUse", arguments);
                    if (typeof extension === "function" && extension.TYPE === "mixitup-extension") {
                        if (typeof mixitup.extensions[extension.NAME] === "undefined") {
                            extension(mixitup);
                            mixitup.extensions[extension.NAME] = extension;
                        }
                    } else if (extension.fn && extension.fn.jquery) mixitup.libraries.$ = extension;
                    mixitup.Base.prototype.callActions.call(mixitup, "afterUse", arguments);
                };
                mixitup.instances = {};
                mixitup.extensions = {};
                mixitup.libraries = {};
                h = {
                    hasClass: function(el, cls) {
                        return !!el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
                    },
                    addClass: function(el, cls) {
                        if (!this.hasClass(el, cls)) el.className += el.className ? " " + cls : cls;
                    },
                    removeClass: function(el, cls) {
                        if (this.hasClass(el, cls)) {
                            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                            el.className = el.className.replace(reg, " ").trim();
                        }
                    },
                    extend: function(destination, source, deep, handleErrors) {
                        var sourceKeys = [], key = "", i = -1;
                        deep = deep || false;
                        handleErrors = handleErrors || false;
                        try {
                            if (Array.isArray(source)) for (i = 0; i < source.length; i++) sourceKeys.push(i); else if (source) sourceKeys = Object.keys(source);
                            for (i = 0; i < sourceKeys.length; i++) {
                                key = sourceKeys[i];
                                if (!deep || typeof source[key] !== "object" || this.isElement(source[key])) destination[key] = source[key]; else if (Array.isArray(source[key])) {
                                    if (!destination[key]) destination[key] = [];
                                    this.extend(destination[key], source[key], deep, handleErrors);
                                } else {
                                    if (!destination[key]) destination[key] = {};
                                    this.extend(destination[key], source[key], deep, handleErrors);
                                }
                            }
                        } catch (err) {
                            if (handleErrors) this.handleExtendError(err, destination); else throw err;
                        }
                        return destination;
                    },
                    handleExtendError: function(err, destination) {
                        var re = /property "?(\w*)"?[,:] object/i, matches = null, erroneous = "", message = "", suggestion = "", probableMatch = "", key = "", mostMatchingChars = -1, i = -1;
                        if (err instanceof TypeError && (matches = re.exec(err.message))) {
                            erroneous = matches[1];
                            for (key in destination) {
                                i = 0;
                                while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) i++;
                                if (i > mostMatchingChars) {
                                    mostMatchingChars = i;
                                    probableMatch = key;
                                }
                            }
                            if (mostMatchingChars > 1) suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                                probableMatch
                            });
                            message = mixitup.messages.errorConfigInvalidProperty({
                                erroneous,
                                suggestion
                            });
                            throw new TypeError(message);
                        }
                        throw err;
                    },
                    template: function(str) {
                        var re = /\${([\w]*)}/g, dynamics = {}, matches = null;
                        while (matches = re.exec(str)) dynamics[matches[1]] = new RegExp("\\${" + matches[1] + "}", "g");
                        return function(data) {
                            var key = "", output = str;
                            data = data || {};
                            for (key in dynamics) output = output.replace(dynamics[key], typeof data[key] !== "undefined" ? data[key] : "");
                            return output;
                        };
                    },
                    on: function(el, type, fn, useCapture) {
                        if (!el) return;
                        if (el.addEventListener) el.addEventListener(type, fn, useCapture); else if (el.attachEvent) {
                            el["e" + type + fn] = fn;
                            el[type + fn] = function() {
                                el["e" + type + fn](window.event);
                            };
                            el.attachEvent("on" + type, el[type + fn]);
                        }
                    },
                    off: function(el, type, fn) {
                        if (!el) return;
                        if (el.removeEventListener) el.removeEventListener(type, fn, false); else if (el.detachEvent) {
                            el.detachEvent("on" + type, el[type + fn]);
                            el[type + fn] = null;
                        }
                    },
                    getCustomEvent: function(eventType, detail, doc) {
                        var event = null;
                        doc = doc || window.document;
                        if (typeof window.CustomEvent === "function") event = new window.CustomEvent(eventType, {
                            detail,
                            bubbles: true,
                            cancelable: true
                        }); else if (typeof doc.createEvent === "function") {
                            event = doc.createEvent("CustomEvent");
                            event.initCustomEvent(eventType, true, true, detail);
                        } else {
                            event = doc.createEventObject(), event.type = eventType;
                            event.returnValue = false;
                            event.cancelBubble = false;
                            event.detail = detail;
                        }
                        return event;
                    },
                    getOriginalEvent: function(e) {
                        if (e.touches && e.touches.length) return e.touches[0]; else if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0]; else return e;
                    },
                    index: function(el, selector) {
                        var i = 0;
                        while ((el = el.previousElementSibling) !== null) if (!selector || el.matches(selector)) ++i;
                        return i;
                    },
                    camelCase: function(str) {
                        return str.toLowerCase().replace(/([_-][a-z])/g, (function($1) {
                            return $1.toUpperCase().replace(/[_-]/, "");
                        }));
                    },
                    pascalCase: function(str) {
                        return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
                    },
                    dashCase: function(str) {
                        return str.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
                    },
                    isElement: function(el, doc) {
                        doc = doc || window.document;
                        if (window.HTMLElement && el instanceof window.HTMLElement) return true; else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) return true; else return el !== null && el.nodeType === 1 && typeof el.nodeName === "string";
                    },
                    createElement: function(htmlString, doc) {
                        var frag = null, temp = null;
                        doc = doc || window.document;
                        frag = doc.createDocumentFragment();
                        temp = doc.createElement("div");
                        temp.innerHTML = htmlString.trim();
                        while (temp.firstChild) frag.appendChild(temp.firstChild);
                        return frag;
                    },
                    removeWhitespace: function(node) {
                        var deleting;
                        while (node && node.nodeName === "#text") {
                            deleting = node;
                            node = node.previousSibling;
                            deleting.parentElement && deleting.parentElement.removeChild(deleting);
                        }
                    },
                    isEqualArray: function(a, b) {
                        var i = a.length;
                        if (i !== b.length) return false;
                        while (i--) if (a[i] !== b[i]) return false;
                        return true;
                    },
                    deepEquals: function(a, b) {
                        var key;
                        if (typeof a === "object" && a && typeof b === "object" && b) {
                            if (Object.keys(a).length !== Object.keys(b).length) return false;
                            for (key in a) if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                        } else if (a !== b) return false;
                        return true;
                    },
                    arrayShuffle: function(oldArray) {
                        var newArray = oldArray.slice(), len = newArray.length, i = len, p = -1, t = [];
                        while (i--) {
                            p = ~~(Math.random() * len);
                            t = newArray[i];
                            newArray[i] = newArray[p];
                            newArray[p] = t;
                        }
                        return newArray;
                    },
                    arrayFromList: function(list) {
                        var output, i;
                        try {
                            return Array.prototype.slice.call(list);
                        } catch (err) {
                            output = [];
                            for (i = 0; i < list.length; i++) output.push(list[i]);
                            return output;
                        }
                    },
                    debounce: function(func, wait, immediate) {
                        var timeout;
                        return function() {
                            var self = this, args = arguments, callNow = immediate && !timeout, later = null;
                            later = function() {
                                timeout = null;
                                if (!immediate) func.apply(self, args);
                            };
                            clearTimeout(timeout);
                            timeout = setTimeout(later, wait);
                            if (callNow) func.apply(self, args);
                        };
                    },
                    position: function(element) {
                        var xPosition = 0, yPosition = 0, offsetParent = element;
                        while (element) {
                            xPosition -= element.scrollLeft;
                            yPosition -= element.scrollTop;
                            if (element === offsetParent) {
                                xPosition += element.offsetLeft;
                                yPosition += element.offsetTop;
                                offsetParent = element.offsetParent;
                            }
                            element = element.parentElement;
                        }
                        return {
                            x: xPosition,
                            y: yPosition
                        };
                    },
                    getHypotenuse: function(node1, node2) {
                        var distanceX = node1.x - node2.x, distanceY = node1.y - node2.y;
                        distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY;
                        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                    },
                    getIntersectionRatio: function(box1, box2) {
                        var controlArea = box1.width * box1.height, intersectionX = -1, intersectionY = -1, intersectionArea = -1, ratio = -1;
                        intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));
                        intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));
                        intersectionArea = intersectionY * intersectionX;
                        ratio = intersectionArea / controlArea;
                        return ratio;
                    },
                    closestParent: function(el, selector, includeSelf, doc) {
                        var parent = el.parentNode;
                        doc = doc || window.document;
                        if (includeSelf && el.matches(selector)) return el;
                        while (parent && parent != doc.body) if (parent.matches && parent.matches(selector)) return parent; else if (parent.parentNode) parent = parent.parentNode; else return null;
                        return null;
                    },
                    children: function(el, selector, doc) {
                        var children = [], tempId = "";
                        doc = doc || window.doc;
                        if (el) {
                            if (!el.id) {
                                tempId = "Temp" + this.randomHexKey();
                                el.id = tempId;
                            }
                            children = doc.querySelectorAll("#" + el.id + " > " + selector);
                            if (tempId) el.removeAttribute("id");
                        }
                        return children;
                    },
                    clean: function(originalArray) {
                        var cleanArray = [], i = -1;
                        for (i = 0; i < originalArray.length; i++) if (originalArray[i] !== "") cleanArray.push(originalArray[i]);
                        return cleanArray;
                    },
                    defer: function(libraries) {
                        var deferred = null, promiseWrapper = null, $ = null;
                        promiseWrapper = new this.Deferred;
                        if (mixitup.features.has.promises) promiseWrapper.promise = new Promise((function(resolve, reject) {
                            promiseWrapper.resolve = resolve;
                            promiseWrapper.reject = reject;
                        })); else if (($ = window.jQuery || libraries.$) && typeof $.Deferred === "function") {
                            deferred = $.Deferred();
                            promiseWrapper.promise = deferred.promise();
                            promiseWrapper.resolve = deferred.resolve;
                            promiseWrapper.reject = deferred.reject;
                        } else if (window.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
                        return promiseWrapper;
                    },
                    all: function(tasks, libraries) {
                        var $ = null;
                        if (mixitup.features.has.promises) return Promise.all(tasks); else if (($ = window.jQuery || libraries.$) && typeof $.when === "function") return $.when.apply($, tasks).done((function() {
                            return arguments;
                        }));
                        if (window.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
                        return [];
                    },
                    getPrefix: function(el, property, vendors) {
                        var i = -1, prefix = "";
                        if (h.dashCase(property) in el.style) return "";
                        for (i = 0; prefix = vendors[i]; i++) if (prefix + property in el.style) return prefix.toLowerCase();
                        return "unsupported";
                    },
                    randomHex: function() {
                        return ("00000" + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
                    },
                    getDocumentState: function(doc) {
                        doc = typeof doc.body === "object" ? doc : window.document;
                        return {
                            scrollTop: window.pageYOffset,
                            scrollLeft: window.pageXOffset,
                            docHeight: doc.documentElement.scrollHeight,
                            docWidth: doc.documentElement.scrollWidth,
                            viewportHeight: doc.documentElement.clientHeight,
                            viewportWidth: doc.documentElement.clientWidth
                        };
                    },
                    bind: function(obj, fn) {
                        return function() {
                            return fn.apply(obj, arguments);
                        };
                    },
                    isVisible: function(el) {
                        var styles = null;
                        if (el.offsetParent) return true;
                        styles = window.getComputedStyle(el);
                        if (styles.position === "fixed" && styles.visibility !== "hidden" && styles.opacity !== "0") return true;
                        return false;
                    },
                    seal: function(obj) {
                        if (typeof Object.seal === "function") Object.seal(obj);
                    },
                    freeze: function(obj) {
                        if (typeof Object.freeze === "function") Object.freeze(obj);
                    },
                    compareVersions: function(control, specimen) {
                        var controlParts = control.split("."), specimenParts = specimen.split("."), controlPart = -1, specimenPart = -1, i = -1;
                        for (i = 0; i < controlParts.length; i++) {
                            controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ""));
                            specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, "") || 0);
                            if (specimenPart < controlPart) return false; else if (specimenPart > controlPart) return true;
                        }
                        return true;
                    },
                    Deferred: function() {
                        this.promise = null;
                        this.resolve = null;
                        this.reject = null;
                        this.id = h.randomHex();
                    },
                    isEmptyObject: function(obj) {
                        var key = "";
                        if (typeof Object.keys === "function") return Object.keys(obj).length === 0;
                        for (key in obj) if (obj.hasOwnProperty(key)) return false;
                        return true;
                    },
                    getClassname: function(classNames, elementName, modifier) {
                        var classname = "";
                        classname += classNames.block;
                        if (classname.length) classname += classNames.delineatorElement;
                        classname += classNames["element" + this.pascalCase(elementName)];
                        if (!modifier) return classname;
                        if (classname.length) classname += classNames.delineatorModifier;
                        classname += modifier;
                        return classname;
                    },
                    getProperty: function(obj, stringKey) {
                        var parts = stringKey.split("."), returnCurrent = null, current = "", i = 0;
                        if (!stringKey) return obj;
                        returnCurrent = function(obj) {
                            if (!obj) return null; else return obj[current];
                        };
                        while (i < parts.length) {
                            current = parts[i];
                            obj = returnCurrent(obj);
                            i++;
                        }
                        if (typeof obj !== "undefined") return obj; else return null;
                    }
                };
                mixitup.h = h;
                mixitup.Base = function() {};
                mixitup.Base.prototype = {
                    constructor: mixitup.Base,
                    callActions: function(actionName, args) {
                        var self = this, hooks = self.constructor.actions[actionName], extensionName = "";
                        if (!hooks || h.isEmptyObject(hooks)) return;
                        for (extensionName in hooks) hooks[extensionName].apply(self, args);
                    },
                    callFilters: function(filterName, input, args) {
                        var self = this, hooks = self.constructor.filters[filterName], output = input, extensionName = "";
                        if (!hooks || h.isEmptyObject(hooks)) return output;
                        args = args || [];
                        for (extensionName in hooks) {
                            args = h.arrayFromList(args);
                            args.unshift(output);
                            output = hooks[extensionName].apply(self, args);
                        }
                        return output;
                    }
                };
                mixitup.BaseStatic = function() {
                    this.actions = {};
                    this.filters = {};
                    this.extend = function(extension) {
                        h.extend(this.prototype, extension);
                    };
                    this.registerAction = function(hookName, extensionName, func) {
                        (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
                    };
                    this.registerFilter = function(hookName, extensionName, func) {
                        (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
                    };
                };
                mixitup.Features = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.boxSizingPrefix = "";
                    this.transformPrefix = "";
                    this.transitionPrefix = "";
                    this.boxSizingPrefix = "";
                    this.transformProp = "";
                    this.transformRule = "";
                    this.transitionProp = "";
                    this.perspectiveProp = "";
                    this.perspectiveOriginProp = "";
                    this.has = new mixitup.Has;
                    this.canary = null;
                    this.BOX_SIZING_PROP = "boxSizing";
                    this.TRANSITION_PROP = "transition";
                    this.TRANSFORM_PROP = "transform";
                    this.PERSPECTIVE_PROP = "perspective";
                    this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin";
                    this.VENDORS = [ "Webkit", "moz", "O", "ms" ];
                    this.TWEENABLE = [ "opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ];
                    this.callActions("afterConstruct");
                };
                mixitup.BaseStatic.call(mixitup.Features);
                mixitup.Features.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Features.prototype, {
                    constructor: mixitup.Features,
                    init: function() {
                        var self = this;
                        self.callActions("beforeInit", arguments);
                        self.canary = document.createElement("div");
                        self.setPrefixes();
                        self.runTests();
                        self.callActions("beforeInit", arguments);
                    },
                    runTests: function() {
                        var self = this;
                        self.callActions("beforeRunTests", arguments);
                        self.has.promises = typeof window.Promise === "function";
                        self.has.transitions = self.transitionPrefix !== "unsupported";
                        self.callActions("afterRunTests", arguments);
                        h.freeze(self.has);
                    },
                    setPrefixes: function() {
                        var self = this;
                        self.callActions("beforeSetPrefixes", arguments);
                        self.transitionPrefix = h.getPrefix(self.canary, "Transition", self.VENDORS);
                        self.transformPrefix = h.getPrefix(self.canary, "Transform", self.VENDORS);
                        self.boxSizingPrefix = h.getPrefix(self.canary, "BoxSizing", self.VENDORS);
                        self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;
                        self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;
                        self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;
                        self.transformRule = self.transformPrefix ? "-" + self.transformPrefix + "-" + self.TRANSFORM_PROP : self.TRANSFORM_PROP;
                        self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;
                        self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;
                        self.callActions("afterSetPrefixes", arguments);
                    }
                });
                mixitup.Has = function() {
                    this.transitions = false;
                    this.promises = false;
                    h.seal(this);
                };
                mixitup.features = new mixitup.Features;
                mixitup.features.init();
                mixitup.ConfigAnimation = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = true;
                    this.effects = "fade scale";
                    this.effectsIn = "";
                    this.effectsOut = "";
                    this.duration = 600;
                    this.easing = "ease";
                    this.applyPerspective = true;
                    this.perspectiveDistance = "3000px";
                    this.perspectiveOrigin = "50% 50%";
                    this.queue = true;
                    this.queueLimit = 3;
                    this.animateResizeContainer = true;
                    this.animateResizeTargets = false;
                    this.staggerSequence = null;
                    this.reverseOut = false;
                    this.nudge = true;
                    this.clampHeight = true;
                    this.clampWidth = true;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigAnimation);
                mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;
                mixitup.ConfigBehavior = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.liveSort = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigBehavior);
                mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;
                mixitup.ConfigCallbacks = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.onMixStart = null;
                    this.onMixBusy = null;
                    this.onMixEnd = null;
                    this.onMixFail = null;
                    this.onMixClick = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigCallbacks);
                mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;
                mixitup.ConfigControls = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = true;
                    this.live = false;
                    this.scope = "global";
                    this.toggleLogic = "or";
                    this.toggleDefault = "all";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigControls);
                mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;
                mixitup.ConfigClassNames = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.block = "mixitup";
                    this.elementContainer = "container";
                    this.elementFilter = "control";
                    this.elementSort = "control";
                    this.elementMultimix = "control";
                    this.elementToggle = "control";
                    this.modifierActive = "active";
                    this.modifierDisabled = "disabled";
                    this.modifierFailed = "failed";
                    this.delineatorElement = "-";
                    this.delineatorModifier = "-";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigClassNames);
                mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;
                mixitup.ConfigData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.uidKey = "";
                    this.dirtyCheck = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigData);
                mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;
                mixitup.ConfigDebug = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = false;
                    this.showWarnings = true;
                    this.fauxAsync = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigDebug);
                mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;
                mixitup.ConfigLayout = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.allowNestedTargets = true;
                    this.containerClassName = "";
                    this.siblingBefore = null;
                    this.siblingAfter = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigLayout);
                mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;
                mixitup.ConfigLoad = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.filter = "all";
                    this.sort = "default:asc";
                    this.dataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigLoad);
                mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;
                mixitup.ConfigSelectors = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.target = ".mix";
                    this.control = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigSelectors);
                mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;
                mixitup.ConfigRender = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.target = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigRender);
                mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;
                mixitup.ConfigTemplates = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigTemplates);
                mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;
                mixitup.Config = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.animation = new mixitup.ConfigAnimation;
                    this.behavior = new mixitup.ConfigBehavior;
                    this.callbacks = new mixitup.ConfigCallbacks;
                    this.controls = new mixitup.ConfigControls;
                    this.classNames = new mixitup.ConfigClassNames;
                    this.data = new mixitup.ConfigData;
                    this.debug = new mixitup.ConfigDebug;
                    this.layout = new mixitup.ConfigLayout;
                    this.load = new mixitup.ConfigLoad;
                    this.selectors = new mixitup.ConfigSelectors;
                    this.render = new mixitup.ConfigRender;
                    this.templates = new mixitup.ConfigTemplates;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Config);
                mixitup.Config.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Config.prototype.constructor = mixitup.Config;
                mixitup.MixerDom = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.document = null;
                    this.body = null;
                    this.container = null;
                    this.parent = null;
                    this.targets = [];
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.MixerDom);
                mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);
                mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;
                mixitup.UiClassNames = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.base = "";
                    this.active = "";
                    this.disabled = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.UiClassNames);
                mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);
                mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;
                mixitup.CommandDataset = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.dataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandDataset);
                mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;
                mixitup.CommandMultimix = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.filter = null;
                    this.sort = null;
                    this.insert = null;
                    this.remove = null;
                    this.changeLayout = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandMultimix);
                mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;
                mixitup.CommandFilter = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.selector = "";
                    this.collection = null;
                    this.action = "show";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandFilter);
                mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;
                mixitup.CommandSort = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.sortString = "";
                    this.attribute = "";
                    this.order = "asc";
                    this.collection = null;
                    this.next = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandSort);
                mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;
                mixitup.CommandInsert = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.index = 0;
                    this.collection = [];
                    this.position = "before";
                    this.sibling = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandInsert);
                mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;
                mixitup.CommandRemove = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.targets = [];
                    this.collection = [];
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandRemove);
                mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;
                mixitup.CommandChangeLayout = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.containerClassName = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandChangeLayout);
                mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;
                mixitup.ControlDefinition = function(type, selector, live, parent) {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.type = type;
                    this.selector = selector;
                    this.live = live || false;
                    this.parent = parent || "";
                    this.callActions("afterConstruct");
                    h.freeze(this);
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ControlDefinition);
                mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;
                mixitup.controlDefinitions = [];
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("multimix", "[data-filter][data-sort]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("filter", "[data-filter]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("sort", "[data-sort]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("toggle", "[data-toggle]"));
                mixitup.Control = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.el = null;
                    this.selector = "";
                    this.bound = [];
                    this.pending = -1;
                    this.type = "";
                    this.status = "inactive";
                    this.filter = "";
                    this.sort = "";
                    this.canDisable = false;
                    this.handler = null;
                    this.classNames = new mixitup.UiClassNames;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Control);
                mixitup.Control.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Control.prototype, {
                    constructor: mixitup.Control,
                    init: function(el, type, selector) {
                        var self = this;
                        this.callActions("beforeInit", arguments);
                        self.el = el;
                        self.type = type;
                        self.selector = selector;
                        if (self.selector) self.status = "live"; else {
                            self.canDisable = typeof self.el.disable === "boolean";
                            switch (self.type) {
                              case "filter":
                                self.filter = self.el.getAttribute("data-filter");
                                break;

                              case "toggle":
                                self.filter = self.el.getAttribute("data-toggle");
                                break;

                              case "sort":
                                self.sort = self.el.getAttribute("data-sort");
                                break;

                              case "multimix":
                                self.filter = self.el.getAttribute("data-filter");
                                self.sort = self.el.getAttribute("data-sort");
                                break;
                            }
                        }
                        self.bindClick();
                        mixitup.controls.push(self);
                        this.callActions("afterInit", arguments);
                    },
                    isBound: function(mixer) {
                        var self = this, isBound = false;
                        this.callActions("beforeIsBound", arguments);
                        isBound = self.bound.indexOf(mixer) > -1;
                        return self.callFilters("afterIsBound", isBound, arguments);
                    },
                    addBinding: function(mixer) {
                        var self = this;
                        this.callActions("beforeAddBinding", arguments);
                        if (!self.isBound()) self.bound.push(mixer);
                        this.callActions("afterAddBinding", arguments);
                    },
                    removeBinding: function(mixer) {
                        var self = this, removeIndex = -1;
                        this.callActions("beforeRemoveBinding", arguments);
                        if ((removeIndex = self.bound.indexOf(mixer)) > -1) self.bound.splice(removeIndex, 1);
                        if (self.bound.length < 1) {
                            self.unbindClick();
                            removeIndex = mixitup.controls.indexOf(self);
                            mixitup.controls.splice(removeIndex, 1);
                            if (self.status === "active") self.renderStatus(self.el, "inactive");
                        }
                        this.callActions("afterRemoveBinding", arguments);
                    },
                    bindClick: function() {
                        var self = this;
                        this.callActions("beforeBindClick", arguments);
                        self.handler = function(e) {
                            self.handleClick(e);
                        };
                        h.on(self.el, "click", self.handler);
                        this.callActions("afterBindClick", arguments);
                    },
                    unbindClick: function() {
                        var self = this;
                        this.callActions("beforeUnbindClick", arguments);
                        h.off(self.el, "click", self.handler);
                        self.handler = null;
                        this.callActions("afterUnbindClick", arguments);
                    },
                    handleClick: function(e) {
                        var self = this, button = null, mixer = null, isActive = false, returnValue = void 0, command = {}, clone = null, commands = [], i = -1;
                        this.callActions("beforeHandleClick", arguments);
                        this.pending = 0;
                        mixer = self.bound[0];
                        if (!self.selector) button = self.el; else button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
                        if (!button) {
                            self.callActions("afterHandleClick", arguments);
                            return;
                        }
                        switch (self.type) {
                          case "filter":
                            command.filter = self.filter || button.getAttribute("data-filter");
                            break;

                          case "sort":
                            command.sort = self.sort || button.getAttribute("data-sort");
                            break;

                          case "multimix":
                            command.filter = self.filter || button.getAttribute("data-filter");
                            command.sort = self.sort || button.getAttribute("data-sort");
                            break;

                          case "toggle":
                            command.filter = self.filter || button.getAttribute("data-toggle");
                            if (self.status === "live") isActive = h.hasClass(button, self.classNames.active); else isActive = self.status === "active";
                            break;
                        }
                        for (i = 0; i < self.bound.length; i++) {
                            clone = new mixitup.CommandMultimix;
                            h.extend(clone, command);
                            commands.push(clone);
                        }
                        commands = self.callFilters("commandsHandleClick", commands, arguments);
                        self.pending = self.bound.length;
                        for (i = 0; mixer = self.bound[i]; i++) {
                            command = commands[i];
                            if (!command) continue;
                            if (!mixer.lastClicked) mixer.lastClicked = button;
                            mixitup.events.fire("mixClick", mixer.dom.container, {
                                state: mixer.state,
                                instance: mixer,
                                originalEvent: e,
                                control: mixer.lastClicked
                            }, mixer.dom.document);
                            if (typeof mixer.config.callbacks.onMixClick === "function") {
                                returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);
                                if (returnValue === false) continue;
                            }
                            if (self.type === "toggle") isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter); else mixer.multimix(command);
                        }
                        this.callActions("afterHandleClick", arguments);
                    },
                    update: function(command, toggleArray) {
                        var self = this, actions = new mixitup.CommandMultimix;
                        self.callActions("beforeUpdate", arguments);
                        self.pending--;
                        self.pending = Math.max(0, self.pending);
                        if (self.pending > 0) return;
                        if (self.status === "live") self.updateLive(command, toggleArray); else {
                            actions.sort = self.sort;
                            actions.filter = self.filter;
                            self.callFilters("actionsUpdate", actions, arguments);
                            self.parseStatusChange(self.el, command, actions, toggleArray);
                        }
                        self.callActions("afterUpdate", arguments);
                    },
                    updateLive: function(command, toggleArray) {
                        var self = this, controlButtons = null, actions = null, button = null, i = -1;
                        self.callActions("beforeUpdateLive", arguments);
                        if (!self.el) return;
                        controlButtons = self.el.querySelectorAll(self.selector);
                        for (i = 0; button = controlButtons[i]; i++) {
                            actions = new mixitup.CommandMultimix;
                            switch (self.type) {
                              case "filter":
                                actions.filter = button.getAttribute("data-filter");
                                break;

                              case "sort":
                                actions.sort = button.getAttribute("data-sort");
                                break;

                              case "multimix":
                                actions.filter = button.getAttribute("data-filter");
                                actions.sort = button.getAttribute("data-sort");
                                break;

                              case "toggle":
                                actions.filter = button.getAttribute("data-toggle");
                                break;
                            }
                            actions = self.callFilters("actionsUpdateLive", actions, arguments);
                            self.parseStatusChange(button, command, actions, toggleArray);
                        }
                        self.callActions("afterUpdateLive", arguments);
                    },
                    parseStatusChange: function(button, command, actions, toggleArray) {
                        var self = this, alias = "", toggle = "", i = -1;
                        self.callActions("beforeParseStatusChange", arguments);
                        switch (self.type) {
                          case "filter":
                            if (command.filter === actions.filter) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "multimix":
                            if (command.sort === actions.sort && command.filter === actions.filter) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "sort":
                            if (command.sort.match(/:asc/g)) alias = command.sort.replace(/:asc/g, "");
                            if (command.sort === actions.sort || alias === actions.sort) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "toggle":
                            if (toggleArray.length < 1) self.renderStatus(button, "inactive");
                            if (command.filter === actions.filter) self.renderStatus(button, "active");
                            for (i = 0; i < toggleArray.length; i++) {
                                toggle = toggleArray[i];
                                if (toggle === actions.filter) {
                                    self.renderStatus(button, "active");
                                    break;
                                }
                                self.renderStatus(button, "inactive");
                            }
                            break;
                        }
                        self.callActions("afterParseStatusChange", arguments);
                    },
                    renderStatus: function(button, status) {
                        var self = this;
                        self.callActions("beforeRenderStatus", arguments);
                        switch (status) {
                          case "active":
                            h.addClass(button, self.classNames.active);
                            h.removeClass(button, self.classNames.disabled);
                            if (self.canDisable) self.el.disabled = false;
                            break;

                          case "inactive":
                            h.removeClass(button, self.classNames.active);
                            h.removeClass(button, self.classNames.disabled);
                            if (self.canDisable) self.el.disabled = false;
                            break;

                          case "disabled":
                            if (self.canDisable) self.el.disabled = true;
                            h.addClass(button, self.classNames.disabled);
                            h.removeClass(button, self.classNames.active);
                            break;
                        }
                        if (self.status !== "live") self.status = status;
                        self.callActions("afterRenderStatus", arguments);
                    }
                });
                mixitup.controls = [];
                mixitup.StyleData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.x = 0;
                    this.y = 0;
                    this.top = 0;
                    this.right = 0;
                    this.bottom = 0;
                    this.left = 0;
                    this.width = 0;
                    this.height = 0;
                    this.marginRight = 0;
                    this.marginBottom = 0;
                    this.opacity = 0;
                    this.scale = new mixitup.TransformData;
                    this.translateX = new mixitup.TransformData;
                    this.translateY = new mixitup.TransformData;
                    this.translateZ = new mixitup.TransformData;
                    this.rotateX = new mixitup.TransformData;
                    this.rotateY = new mixitup.TransformData;
                    this.rotateZ = new mixitup.TransformData;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.StyleData);
                mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.StyleData.prototype.constructor = mixitup.StyleData;
                mixitup.TransformData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.value = 0;
                    this.unit = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TransformData);
                mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.TransformData.prototype.constructor = mixitup.TransformData;
                mixitup.TransformDefaults = function() {
                    mixitup.StyleData.apply(this);
                    this.callActions("beforeConstruct");
                    this.scale.value = .01;
                    this.scale.unit = "";
                    this.translateX.value = 20;
                    this.translateX.unit = "px";
                    this.translateY.value = 20;
                    this.translateY.unit = "px";
                    this.translateZ.value = 20;
                    this.translateZ.unit = "px";
                    this.rotateX.value = 90;
                    this.rotateX.unit = "deg";
                    this.rotateY.value = 90;
                    this.rotateY.unit = "deg";
                    this.rotateX.value = 90;
                    this.rotateX.unit = "deg";
                    this.rotateZ.value = 180;
                    this.rotateZ.unit = "deg";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TransformDefaults);
                mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);
                mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;
                mixitup.transformDefaults = new mixitup.TransformDefaults;
                mixitup.EventDetail = function() {
                    this.state = null;
                    this.futureState = null;
                    this.instance = null;
                    this.originalEvent = null;
                };
                mixitup.Events = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.mixStart = null;
                    this.mixBusy = null;
                    this.mixEnd = null;
                    this.mixFail = null;
                    this.mixClick = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Events);
                mixitup.Events.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Events.prototype.constructor = mixitup.Events;
                mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
                    var self = this, event = null, eventDetail = new mixitup.EventDetail;
                    self.callActions("beforeFire", arguments);
                    if (typeof self[eventType] === "undefined") throw new Error('Event type "' + eventType + '" not found.');
                    eventDetail.state = new mixitup.State;
                    h.extend(eventDetail.state, detail.state);
                    if (detail.futureState) {
                        eventDetail.futureState = new mixitup.State;
                        h.extend(eventDetail.futureState, detail.futureState);
                    }
                    eventDetail.instance = detail.instance;
                    if (detail.originalEvent) eventDetail.originalEvent = detail.originalEvent;
                    event = h.getCustomEvent(eventType, eventDetail, doc);
                    self.callFilters("eventFire", event, arguments);
                    el.dispatchEvent(event);
                };
                mixitup.events = new mixitup.Events;
                mixitup.QueueItem = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.args = [];
                    this.instruction = null;
                    this.triggerElement = null;
                    this.deferred = null;
                    this.isToggling = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.QueueItem);
                mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);
                mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;
                mixitup.Mixer = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.config = new mixitup.Config;
                    this.id = "";
                    this.isBusy = false;
                    this.isToggling = false;
                    this.incPadding = true;
                    this.controls = [];
                    this.targets = [];
                    this.origOrder = [];
                    this.cache = {};
                    this.toggleArray = [];
                    this.targetsMoved = 0;
                    this.targetsImmovable = 0;
                    this.targetsBound = 0;
                    this.targetsDone = 0;
                    this.staggerDuration = 0;
                    this.effectsIn = null;
                    this.effectsOut = null;
                    this.transformIn = [];
                    this.transformOut = [];
                    this.queue = [];
                    this.state = null;
                    this.lastOperation = null;
                    this.lastClicked = null;
                    this.userCallback = null;
                    this.userDeferred = null;
                    this.dom = new mixitup.MixerDom;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Mixer);
                mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Mixer.prototype, {
                    constructor: mixitup.Mixer,
                    attach: function(container, document, id, config) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeAttach", arguments);
                        self.id = id;
                        if (config) h.extend(self.config, config, true, true);
                        self.sanitizeConfig();
                        self.cacheDom(container, document);
                        if (self.config.layout.containerClassName) h.addClass(self.dom.container, self.config.layout.containerClassName);
                        if (!mixitup.features.has.transitions) self.config.animation.enable = false;
                        if (typeof window.console === "undefined") self.config.debug.showWarnings = false;
                        if (self.config.data.uidKey) self.config.controls.enable = false;
                        self.indexTargets();
                        self.state = self.getInitialState();
                        for (i = 0; target = self.lastOperation.toHide[i]; i++) target.hide();
                        if (self.config.controls.enable) {
                            self.initControls();
                            self.buildToggleArray(null, self.state);
                            self.updateControls({
                                filter: self.state.activeFilter,
                                sort: self.state.activeSort
                            });
                        }
                        self.parseEffects();
                        self.callActions("afterAttach", arguments);
                    },
                    sanitizeConfig: function() {
                        var self = this;
                        self.callActions("beforeSanitizeConfig", arguments);
                        self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
                        self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
                        self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();
                        self.config.animation.effects = self.config.animation.effects.trim();
                        self.callActions("afterSanitizeConfig", arguments);
                    },
                    getInitialState: function() {
                        var self = this, state = new mixitup.State, operation = new mixitup.Operation;
                        self.callActions("beforeGetInitialState", arguments);
                        state.activeContainerClassName = self.config.layout.containerClassName;
                        if (self.config.load.dataset) {
                            if (!self.config.data.uidKey || typeof self.config.data.uidKey !== "string") throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                            operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                            operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                            operation.show = self.targets.slice();
                            state = self.callFilters("stateGetInitialState", state, arguments);
                        } else {
                            state.activeFilter = self.parseFilterArgs([ self.config.load.filter ]).command;
                            state.activeSort = self.parseSortArgs([ self.config.load.sort ]).command;
                            state.totalTargets = self.targets.length;
                            state = self.callFilters("stateGetInitialState", state, arguments);
                            if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === "random" || state.activeSort.order === "desc") {
                                operation.newSort = state.activeSort;
                                self.sortOperation(operation);
                                self.printSort(false, operation);
                                self.targets = operation.newOrder;
                            } else operation.startOrder = operation.newOrder = self.targets;
                            operation.startFilter = operation.newFilter = state.activeFilter;
                            operation.startSort = operation.newSort = state.activeSort;
                            operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                            if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target; else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
                        }
                        operation = self.callFilters("operationGetInitialState", operation, [ state ]);
                        self.lastOperation = operation;
                        if (operation.newFilter) self.filterOperation(operation);
                        state = self.buildState(operation);
                        return state;
                    },
                    cacheDom: function(el, document) {
                        var self = this;
                        self.callActions("beforeCacheDom", arguments);
                        self.dom.document = document;
                        self.dom.body = self.dom.document.querySelector("body");
                        self.dom.container = el;
                        self.dom.parent = el;
                        self.callActions("afterCacheDom", arguments);
                    },
                    indexTargets: function() {
                        var self = this, target = null, el = null, dataset = null, i = -1;
                        self.callActions("beforeIndexTargets", arguments);
                        self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);
                        self.dom.targets = h.arrayFromList(self.dom.targets);
                        self.targets = [];
                        if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
                        if (self.dom.targets.length) {
                            for (i = 0; el = self.dom.targets[i]; i++) {
                                target = new mixitup.Target;
                                target.init(el, self, dataset ? dataset[i] : void 0);
                                target.isInDom = true;
                                self.targets.push(target);
                            }
                            self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement;
                        }
                        self.origOrder = self.targets;
                        self.callActions("afterIndexTargets", arguments);
                    },
                    initControls: function() {
                        var self = this, definition = "", controlElements = null, el = null, parent = null, delagators = null, control = null, i = -1, j = -1;
                        self.callActions("beforeInitControls", arguments);
                        switch (self.config.controls.scope) {
                          case "local":
                            parent = self.dom.container;
                            break;

                          case "global":
                            parent = self.dom.document;
                            break;

                          default:
                            throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
                        }
                        for (i = 0; definition = mixitup.controlDefinitions[i]; i++) if (self.config.controls.live || definition.live) {
                            if (definition.parent) {
                                delagators = self.dom[definition.parent];
                                if (!delagators || delagators.length < 0) continue;
                                if (typeof delagators.length !== "number") delagators = [ delagators ];
                            } else delagators = [ parent ];
                            for (j = 0; el = delagators[j]; j++) {
                                control = self.getControl(el, definition.type, definition.selector);
                                self.controls.push(control);
                            }
                        } else {
                            controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);
                            for (j = 0; el = controlElements[j]; j++) {
                                control = self.getControl(el, definition.type, "");
                                if (!control) continue;
                                self.controls.push(control);
                            }
                        }
                        self.callActions("afterInitControls", arguments);
                    },
                    getControl: function(el, type, selector) {
                        var self = this, control = null, i = -1;
                        self.callActions("beforeGetControl", arguments);
                        if (!selector) for (i = 0; control = mixitup.controls[i]; i++) if (control.el === el && control.isBound(self)) return self.callFilters("controlGetControl", null, arguments); else if (control.el === el && control.type === type && control.selector === selector) {
                            control.addBinding(self);
                            return self.callFilters("controlGetControl", control, arguments);
                        }
                        control = new mixitup.Control;
                        control.init(el, type, selector);
                        control.classNames.base = h.getClassname(self.config.classNames, type);
                        control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
                        control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);
                        control.addBinding(self);
                        return self.callFilters("controlGetControl", control, arguments);
                    },
                    getToggleSelector: function() {
                        var self = this, delineator = self.config.controls.toggleLogic === "or" ? ", " : "", toggleSelector = "";
                        self.callActions("beforeGetToggleSelector", arguments);
                        self.toggleArray = h.clean(self.toggleArray);
                        toggleSelector = self.toggleArray.join(delineator);
                        if (toggleSelector === "") toggleSelector = self.config.controls.toggleDefault;
                        return self.callFilters("selectorGetToggleSelector", toggleSelector, arguments);
                    },
                    buildToggleArray: function(command, state) {
                        var self = this, activeFilterSelector = "";
                        self.callActions("beforeBuildToggleArray", arguments);
                        if (command && command.filter) activeFilterSelector = command.filter.selector.replace(/\s/g, ""); else if (state) activeFilterSelector = state.activeFilter.selector.replace(/\s/g, ""); else return;
                        if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === "all") activeFilterSelector = "";
                        if (self.config.controls.toggleLogic === "or") self.toggleArray = activeFilterSelector.split(","); else self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
                        self.toggleArray = h.clean(self.toggleArray);
                        self.callActions("afterBuildToggleArray", arguments);
                    },
                    splitCompoundSelector: function(compoundSelector) {
                        var partials = compoundSelector.split(/([\.\[])/g), toggleArray = [], selector = "", i = -1;
                        if (partials[0] === "") partials.shift();
                        for (i = 0; i < partials.length; i++) {
                            if (i % 2 === 0) selector = "";
                            selector += partials[i];
                            if (i % 2 !== 0) toggleArray.push(selector);
                        }
                        return toggleArray;
                    },
                    updateControls: function(command) {
                        var self = this, control = null, output = new mixitup.CommandMultimix, i = -1;
                        self.callActions("beforeUpdateControls", arguments);
                        if (command.filter) output.filter = command.filter.selector; else output.filter = self.state.activeFilter.selector;
                        if (command.sort) output.sort = self.buildSortString(command.sort); else output.sort = self.buildSortString(self.state.activeSort);
                        if (output.filter === self.config.selectors.target) output.filter = "all";
                        if (output.filter === "") output.filter = "none";
                        h.freeze(output);
                        for (i = 0; control = self.controls[i]; i++) control.update(output, self.toggleArray);
                        self.callActions("afterUpdateControls", arguments);
                    },
                    buildSortString: function(command) {
                        var self = this;
                        var output = "";
                        output += command.sortString;
                        if (command.next) output += " " + self.buildSortString(command.next);
                        return output;
                    },
                    insertTargets: function(command, operation) {
                        var self = this, nextSibling = null, insertionIndex = -1, frag = null, target = null, el = null, i = -1;
                        self.callActions("beforeInsertTargets", arguments);
                        if (typeof command.index === "undefined") command.index = 0;
                        nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
                        frag = self.dom.document.createDocumentFragment();
                        if (nextSibling) insertionIndex = h.index(nextSibling, self.config.selectors.target); else insertionIndex = self.targets.length;
                        if (command.collection) {
                            for (i = 0; el = command.collection[i]; i++) {
                                if (self.dom.targets.indexOf(el) > -1) throw new Error(mixitup.messages.errorInsertPreexistingElement());
                                el.style.display = "none";
                                frag.appendChild(el);
                                frag.appendChild(self.dom.document.createTextNode(" "));
                                if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;
                                target = new mixitup.Target;
                                target.init(el, self);
                                target.isInDom = true;
                                self.targets.splice(insertionIndex, 0, target);
                                insertionIndex++;
                            }
                            self.dom.parent.insertBefore(frag, nextSibling);
                        }
                        operation.startOrder = self.origOrder = self.targets;
                        self.callActions("afterInsertTargets", arguments);
                    },
                    getNextSibling: function(index, sibling, position) {
                        var self = this, element = null;
                        index = Math.max(index, 0);
                        if (sibling && position === "before") element = sibling; else if (sibling && position === "after") element = sibling.nextElementSibling || null; else if (self.targets.length > 0 && typeof index !== "undefined") element = index < self.targets.length || !self.targets.length ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling; else if (self.targets.length === 0 && self.dom.parent.children.length > 0) if (self.config.layout.siblingAfter) element = self.config.layout.siblingAfter; else if (self.config.layout.siblingBefore) element = self.config.layout.siblingBefore.nextElementSibling; else self.dom.parent.children[0]; else element === null;
                        return self.callFilters("elementGetNextSibling", element, arguments);
                    },
                    filterOperation: function(operation) {
                        var self = this, testResult = false, index = -1, action = "", target = null, i = -1;
                        self.callActions("beforeFilterOperation", arguments);
                        action = operation.newFilter.action;
                        for (i = 0; target = operation.newOrder[i]; i++) {
                            if (operation.newFilter.collection) testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1; else if (operation.newFilter.selector === "") testResult = false; else testResult = target.dom.el.matches(operation.newFilter.selector);
                            self.evaluateHideShow(testResult, target, action, operation);
                        }
                        if (operation.toRemove.length) for (i = 0; target = operation.show[i]; i++) if (operation.toRemove.indexOf(target) > -1) {
                            operation.show.splice(i, 1);
                            if ((index = operation.toShow.indexOf(target)) > -1) operation.toShow.splice(index, 1);
                            operation.toHide.push(target);
                            operation.hide.push(target);
                            i--;
                        }
                        operation.matching = operation.show.slice();
                        if (operation.show.length === 0 && operation.newFilter.selector !== "" && self.targets.length !== 0) operation.hasFailed = true;
                        self.callActions("afterFilterOperation", arguments);
                    },
                    evaluateHideShow: function(testResult, target, action, operation) {
                        var self = this, filteredTestResult = false, args = Array.prototype.slice.call(arguments, 1);
                        filteredTestResult = self.callFilters("testResultEvaluateHideShow", testResult, args);
                        self.callActions("beforeEvaluateHideShow", arguments);
                        if (filteredTestResult === true && action === "show" || filteredTestResult === false && action === "hide") {
                            operation.show.push(target);
                            !target.isShown && operation.toShow.push(target);
                        } else {
                            operation.hide.push(target);
                            target.isShown && operation.toHide.push(target);
                        }
                        self.callActions("afterEvaluateHideShow", arguments);
                    },
                    sortOperation: function(operation) {
                        var self = this, newOrder = [], target = null, el = null, i = -1;
                        self.callActions("beforeSortOperation", arguments);
                        operation.startOrder = self.targets;
                        if (operation.newSort.collection) {
                            newOrder = [];
                            for (i = 0; el = operation.newSort.collection[i]; i++) {
                                if (self.dom.targets.indexOf(el) < 0) throw new Error(mixitup.messages.errorSortNonExistentElement());
                                target = new mixitup.Target;
                                target.init(el, self);
                                target.isInDom = true;
                                newOrder.push(target);
                            }
                            operation.newOrder = newOrder;
                        } else if (operation.newSort.order === "random") operation.newOrder = h.arrayShuffle(operation.startOrder); else if (operation.newSort.attribute === "") {
                            operation.newOrder = self.origOrder.slice();
                            if (operation.newSort.order === "desc") operation.newOrder.reverse();
                        } else {
                            operation.newOrder = operation.startOrder.slice();
                            operation.newOrder.sort((function(a, b) {
                                return self.compare(a, b, operation.newSort);
                            }));
                        }
                        if (h.isEqualArray(operation.newOrder, operation.startOrder)) operation.willSort = false;
                        self.callActions("afterSortOperation", arguments);
                    },
                    compare: function(a, b, command) {
                        var self = this, order = command.order, attrA = self.getAttributeValue(a, command.attribute), attrB = self.getAttributeValue(b, command.attribute);
                        if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                            attrA = attrA.toLowerCase();
                            attrB = attrB.toLowerCase();
                        } else {
                            attrA *= 1;
                            attrB *= 1;
                        }
                        if (attrA < attrB) return order === "asc" ? -1 : 1;
                        if (attrA > attrB) return order === "asc" ? 1 : -1;
                        if (attrA === attrB && command.next) return self.compare(a, b, command.next);
                        return 0;
                    },
                    getAttributeValue: function(target, attribute) {
                        var self = this, value = "";
                        value = target.dom.el.getAttribute("data-" + attribute);
                        if (value === null) if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                            attribute: "data-" + attribute
                        }));
                        return self.callFilters("valueGetAttributeValue", value || 0, arguments);
                    },
                    printSort: function(isResetting, operation) {
                        var self = this, startOrder = isResetting ? operation.newOrder : operation.startOrder, newOrder = isResetting ? operation.startOrder : operation.newOrder, nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null, frag = window.document.createDocumentFragment(), whitespace = null, target = null, el = null, i = -1;
                        self.callActions("beforePrintSort", arguments);
                        for (i = 0; target = startOrder[i]; i++) {
                            el = target.dom.el;
                            if (el.style.position === "absolute") continue;
                            h.removeWhitespace(el.previousSibling);
                            el.parentElement.removeChild(el);
                        }
                        whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;
                        if (whitespace && whitespace.nodeName === "#text") h.removeWhitespace(whitespace);
                        for (i = 0; target = newOrder[i]; i++) {
                            el = target.dom.el;
                            if (h.isElement(frag.lastChild)) frag.appendChild(window.document.createTextNode(" "));
                            frag.appendChild(el);
                        }
                        if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) frag.insertBefore(window.document.createTextNode(" "), frag.childNodes[0]);
                        if (nextSibling) {
                            frag.appendChild(window.document.createTextNode(" "));
                            self.dom.parent.insertBefore(frag, nextSibling);
                        } else self.dom.parent.appendChild(frag);
                        self.callActions("afterPrintSort", arguments);
                    },
                    parseSortString: function(sortString, command) {
                        var self = this, rules = sortString.split(" "), current = command, rule = [], i = -1;
                        for (i = 0; i < rules.length; i++) {
                            rule = rules[i].split(":");
                            current.sortString = rules[i];
                            current.attribute = h.dashCase(rule[0]);
                            current.order = rule[1] || "asc";
                            switch (current.attribute) {
                              case "default":
                                current.attribute = "";
                                break;

                              case "random":
                                current.attribute = "";
                                current.order = "random";
                                break;
                            }
                            if (!current.attribute || current.order === "random") break;
                            if (i < rules.length - 1) {
                                current.next = new mixitup.CommandSort;
                                h.freeze(current);
                                current = current.next;
                            }
                        }
                        return self.callFilters("commandsParseSort", command, arguments);
                    },
                    parseEffects: function() {
                        var self = this, transformName = "", effectsIn = self.config.animation.effectsIn || self.config.animation.effects, effectsOut = self.config.animation.effectsOut || self.config.animation.effects;
                        self.callActions("beforeParseEffects", arguments);
                        self.effectsIn = new mixitup.StyleData;
                        self.effectsOut = new mixitup.StyleData;
                        self.transformIn = [];
                        self.transformOut = [];
                        self.effectsIn.opacity = self.effectsOut.opacity = 1;
                        self.parseEffect("fade", effectsIn, self.effectsIn, self.transformIn);
                        self.parseEffect("fade", effectsOut, self.effectsOut, self.transformOut, true);
                        for (transformName in mixitup.transformDefaults) {
                            if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) continue;
                            self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                            self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
                        }
                        self.parseEffect("stagger", effectsIn, self.effectsIn, self.transformIn);
                        self.parseEffect("stagger", effectsOut, self.effectsOut, self.transformOut, true);
                        self.callActions("afterParseEffects", arguments);
                    },
                    parseEffect: function(effectName, effectString, effects, transform, isOut) {
                        var self = this, re = /\(([^)]+)\)/, propIndex = -1, str = "", match = [], val = "", units = [ "%", "px", "em", "rem", "vh", "vw", "deg" ], unit = "", i = -1;
                        self.callActions("beforeParseEffect", arguments);
                        if (typeof effectString !== "string") throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
                        if (effectString.indexOf(effectName) < 0) {
                            if (effectName === "stagger") self.staggerDuration = 0;
                            return;
                        }
                        propIndex = effectString.indexOf(effectName + "(");
                        if (propIndex > -1) {
                            str = effectString.substring(propIndex);
                            match = re.exec(str);
                            val = match[1];
                        }
                        switch (effectName) {
                          case "fade":
                            effects.opacity = val ? parseFloat(val) : 0;
                            break;

                          case "stagger":
                            self.staggerDuration = val ? parseFloat(val) : 100;
                            break;

                          default:
                            if (isOut && self.config.animation.reverseOut && effectName !== "scale") effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1; else effects[effectName].value = val ? parseFloat(val) : mixitup.transformDefaults[effectName].value;
                            if (val) {
                                for (i = 0; unit = units[i]; i++) if (val.indexOf(unit) > -1) {
                                    effects[effectName].unit = unit;
                                    break;
                                }
                            } else effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                            transform.push(effectName + "(" + effects[effectName].value + effects[effectName].unit + ")");
                        }
                        self.callActions("afterParseEffect", arguments);
                    },
                    buildState: function(operation) {
                        var self = this, state = new mixitup.State, target = null, i = -1;
                        self.callActions("beforeBuildState", arguments);
                        for (i = 0; target = self.targets[i]; i++) if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.targets.push(target.dom.el);
                        for (i = 0; target = operation.matching[i]; i++) state.matching.push(target.dom.el);
                        for (i = 0; target = operation.show[i]; i++) state.show.push(target.dom.el);
                        for (i = 0; target = operation.hide[i]; i++) if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.hide.push(target.dom.el);
                        state.id = self.id;
                        state.container = self.dom.container;
                        state.activeFilter = operation.newFilter;
                        state.activeSort = operation.newSort;
                        state.activeDataset = operation.newDataset;
                        state.activeContainerClassName = operation.newContainerClassName;
                        state.hasFailed = operation.hasFailed;
                        state.totalTargets = self.targets.length;
                        state.totalShow = operation.show.length;
                        state.totalHide = operation.hide.length;
                        state.totalMatching = operation.matching.length;
                        state.triggerElement = operation.triggerElement;
                        return self.callFilters("stateBuildState", state, arguments);
                    },
                    goMix: function(shouldAnimate, operation) {
                        var self = this, deferred = null;
                        self.callActions("beforeGoMix", arguments);
                        if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) shouldAnimate = false;
                        if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) shouldAnimate = false;
                        if (!operation.startState.show.length && !operation.show.length) shouldAnimate = false;
                        mixitup.events.fire("mixStart", self.dom.container, {
                            state: operation.startState,
                            futureState: operation.newState,
                            instance: self
                        }, self.dom.document);
                        if (typeof self.config.callbacks.onMixStart === "function") self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self);
                        h.removeClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
                        if (!self.userDeferred) deferred = self.userDeferred = h.defer(mixitup.libraries); else deferred = self.userDeferred;
                        self.isBusy = true;
                        if (!shouldAnimate || !mixitup.features.has.transitions) {
                            if (self.config.debug.fauxAsync) setTimeout((function() {
                                self.cleanUp(operation);
                            }), self.config.animation.duration); else self.cleanUp(operation);
                            return self.callFilters("promiseGoMix", deferred.promise, arguments);
                        }
                        if (window.pageYOffset !== operation.docState.scrollTop) window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
                        if (self.config.animation.applyPerspective) {
                            self.dom.parent.style[mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;
                            self.dom.parent.style[mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin;
                        }
                        if (self.config.animation.animateResizeContainer && operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
                        if (self.config.animation.animateResizeContainer && operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
                        if (operation.startHeight === operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
                        if (operation.startWidth === operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
                        if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) self.dom.parent.style.overflow = "hidden";
                        requestAnimationFrame((function() {
                            self.moveTargets(operation);
                        }));
                        return self.callFilters("promiseGoMix", deferred.promise, arguments);
                    },
                    getStartMixData: function(operation) {
                        var self = this, parentStyle = window.getComputedStyle(self.dom.parent), parentRect = self.dom.parent.getBoundingClientRect(), target = null, data = {}, i = -1, boxSizing = parentStyle[mixitup.features.boxSizingProp];
                        self.incPadding = boxSizing === "border-box";
                        self.callActions("beforeGetStartMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            data = target.getPosData();
                            operation.showPosData[i] = {
                                startPosData: data
                            };
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            data = target.getPosData();
                            operation.toHidePosData[i] = {
                                startPosData: data
                            };
                        }
                        operation.startX = parentRect.left;
                        operation.startY = parentRect.top;
                        operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
                        operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
                        self.callActions("afterGetStartMixData", arguments);
                    },
                    setInter: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeSetInter", arguments);
                        if (self.config.animation.clampHeight) {
                            self.dom.parent.style.height = operation.startHeight + "px";
                            self.dom.parent.style.overflow = "hidden";
                        }
                        if (self.config.animation.clampWidth) {
                            self.dom.parent.style.width = operation.startWidth + "px";
                            self.dom.parent.style.overflow = "hidden";
                        }
                        for (i = 0; target = operation.toShow[i]; i++) target.show();
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.startContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        self.callActions("afterSetInter", arguments);
                    },
                    getInterMixData: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeGetInterMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) operation.showPosData[i].interPosData = target.getPosData();
                        for (i = 0; target = operation.toHide[i]; i++) operation.toHidePosData[i].interPosData = target.getPosData();
                        self.callActions("afterGetInterMixData", arguments);
                    },
                    setFinal: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeSetFinal", arguments);
                        operation.willSort && self.printSort(false, operation);
                        for (i = 0; target = operation.toHide[i]; i++) target.hide();
                        self.callActions("afterSetFinal", arguments);
                    },
                    getFinalMixData: function(operation) {
                        var self = this, parentStyle = null, parentRect = null, target = null, i = -1;
                        self.callActions("beforeGetFinalMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) operation.showPosData[i].finalPosData = target.getPosData();
                        for (i = 0; target = operation.toHide[i]; i++) operation.toHidePosData[i].finalPosData = target.getPosData();
                        if (self.config.animation.clampHeight || self.config.animation.clampWidth) self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = "";
                        if (!self.incPadding) parentStyle = window.getComputedStyle(self.dom.parent);
                        parentRect = self.dom.parent.getBoundingClientRect();
                        operation.newX = parentRect.left;
                        operation.newY = parentRect.top;
                        operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
                        operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
                        operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
                        operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;
                        if (operation.willSort) self.printSort(true, operation);
                        for (i = 0; target = operation.toShow[i]; i++) target.hide();
                        for (i = 0; target = operation.toHide[i]; i++) target.show();
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.newContainerClassName);
                            h.addClass(self.dom.container, self.config.layout.containerClassName);
                        }
                        self.callActions("afterGetFinalMixData", arguments);
                    },
                    getTweenData: function(operation) {
                        var self = this, target = null, posData = null, effectNames = Object.getOwnPropertyNames(self.effectsIn), effectName = "", effect = null, widthChange = -1, heightChange = -1, i = -1, j = -1;
                        self.callActions("beforeGetTweenData", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            posData = operation.showPosData[i];
                            posData.posIn = new mixitup.StyleData;
                            posData.posOut = new mixitup.StyleData;
                            posData.tweenData = new mixitup.StyleData;
                            if (target.isShown) {
                                posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                                posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                            } else posData.posIn.x = posData.posIn.y = 0;
                            posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                            posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;
                            posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
                            posData.posOut.opacity = 1;
                            posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                            if (!target.isShown && !self.config.animation.nudge) {
                                posData.posIn.x = posData.posOut.x;
                                posData.posIn.y = posData.posOut.y;
                            }
                            posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                            posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                            if (self.config.animation.animateResizeTargets) {
                                posData.posIn.width = posData.startPosData.width;
                                posData.posIn.height = posData.startPosData.height;
                                widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;
                                posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                                heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;
                                posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                                posData.posOut.width = posData.finalPosData.width;
                                posData.posOut.height = posData.finalPosData.height;
                                widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;
                                posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;
                                heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;
                                posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;
                                posData.tweenData.width = posData.posOut.width - posData.posIn.width;
                                posData.tweenData.height = posData.posOut.height - posData.posIn.height;
                                posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
                                posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom;
                            }
                            for (j = 0; effectName = effectNames[j]; j++) {
                                effect = self.effectsIn[effectName];
                                if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                                posData.posIn[effectName].value = effect.value;
                                posData.posOut[effectName].value = 0;
                                posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                                posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                            }
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            posData = operation.toHidePosData[i];
                            posData.posIn = new mixitup.StyleData;
                            posData.posOut = new mixitup.StyleData;
                            posData.tweenData = new mixitup.StyleData;
                            posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                            posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                            posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
                            posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
                            posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                            posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                            if (self.config.animation.animateResizeTargets) {
                                posData.posIn.width = posData.startPosData.width;
                                posData.posIn.height = posData.startPosData.height;
                                widthChange = posData.startPosData.width - posData.interPosData.width;
                                posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                                heightChange = posData.startPosData.height - posData.interPosData.height;
                                posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                            }
                            posData.posIn.opacity = 1;
                            posData.posOut.opacity = self.effectsOut.opacity;
                            posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                            for (j = 0; effectName = effectNames[j]; j++) {
                                effect = self.effectsOut[effectName];
                                if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                                posData.posIn[effectName].value = 0;
                                posData.posOut[effectName].value = effect.value;
                                posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                                posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                            }
                        }
                        self.callActions("afterGetTweenData", arguments);
                    },
                    moveTargets: function(operation) {
                        var self = this, target = null, moveData = null, posData = null, statusChange = "", willTransition = false, staggerIndex = -1, i = -1, checkProgress = self.checkProgress.bind(self);
                        self.callActions("beforeMoveTargets", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            moveData = new mixitup.IMoveData;
                            posData = operation.showPosData[i];
                            statusChange = target.isShown ? "none" : "show";
                            willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);
                            if (willTransition) staggerIndex++;
                            target.show();
                            moveData.posIn = posData.posIn;
                            moveData.posOut = posData.posOut;
                            moveData.statusChange = statusChange;
                            moveData.staggerIndex = staggerIndex;
                            moveData.operation = operation;
                            moveData.callback = willTransition ? checkProgress : null;
                            target.move(moveData);
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            posData = operation.toHidePosData[i];
                            moveData = new mixitup.IMoveData;
                            statusChange = "hide";
                            willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);
                            moveData.posIn = posData.posIn;
                            moveData.posOut = posData.posOut;
                            moveData.statusChange = statusChange;
                            moveData.staggerIndex = i;
                            moveData.operation = operation;
                            moveData.callback = willTransition ? checkProgress : null;
                            target.move(moveData);
                        }
                        if (self.config.animation.animateResizeContainer) {
                            self.dom.parent.style[mixitup.features.transitionProp] = "height " + self.config.animation.duration + "ms ease, " + "width " + self.config.animation.duration + "ms ease ";
                            requestAnimationFrame((function() {
                                if (operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.newHeight + "px";
                                if (operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.newWidth + "px";
                            }));
                        }
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        self.callActions("afterMoveTargets", arguments);
                    },
                    hasEffect: function() {
                        var self = this, EFFECTABLES = [ "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ], effectName = "", effect = null, result = false, value = -1, i = -1;
                        if (self.effectsIn.opacity !== 1) return self.callFilters("resultHasEffect", true, arguments);
                        for (i = 0; effectName = EFFECTABLES[i]; i++) {
                            effect = self.effectsIn[effectName];
                            value = typeof effect && effect.value !== "undefined" ? effect.value : effect;
                            if (value !== 0) {
                                result = true;
                                break;
                            }
                        }
                        return self.callFilters("resultHasEffect", result, arguments);
                    },
                    willTransition: function(statusChange, hasEffect, posIn, posOut) {
                        var self = this, result = false;
                        if (!h.isVisible(self.dom.container)) result = false; else if (statusChange !== "none" && hasEffect || posIn.x !== posOut.x || posIn.y !== posOut.y) result = true; else if (self.config.animation.animateResizeTargets) result = posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop; else result = false;
                        return self.callFilters("resultWillTransition", result, arguments);
                    },
                    checkProgress: function(operation) {
                        var self = this;
                        self.targetsDone++;
                        if (self.targetsBound === self.targetsDone) self.cleanUp(operation);
                    },
                    cleanUp: function(operation) {
                        var self = this, target = null, whitespaceBefore = null, whitespaceAfter = null, nextInQueue = null, i = -1;
                        self.callActions("beforeCleanUp", arguments);
                        self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;
                        for (i = 0; target = operation.show[i]; i++) {
                            target.cleanUp();
                            target.show();
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            target.cleanUp();
                            target.hide();
                        }
                        if (operation.willSort) self.printSort(false, operation);
                        self.dom.parent.style[mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = self.dom.parent.style[mixitup.features.perspectiveProp] = self.dom.parent.style[mixitup.features.perspectiveOriginProp] = "";
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.startContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        if (operation.toRemove.length) {
                            for (i = 0; target = self.targets[i]; i++) if (operation.toRemove.indexOf(target) > -1) {
                                if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === "#text" && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === "#text") h.removeWhitespace(whitespaceBefore);
                                if (!operation.willSort) self.dom.parent.removeChild(target.dom.el);
                                self.targets.splice(i, 1);
                                target.isInDom = false;
                                i--;
                            }
                            self.origOrder = self.targets;
                        }
                        if (operation.willSort) self.targets = operation.newOrder;
                        self.state = operation.newState;
                        self.lastOperation = operation;
                        self.dom.targets = self.state.targets;
                        mixitup.events.fire("mixEnd", self.dom.container, {
                            state: self.state,
                            instance: self
                        }, self.dom.document);
                        if (typeof self.config.callbacks.onMixEnd === "function") self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
                        if (operation.hasFailed) {
                            mixitup.events.fire("mixFail", self.dom.container, {
                                state: self.state,
                                instance: self
                            }, self.dom.document);
                            if (typeof self.config.callbacks.onMixFail === "function") self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                            h.addClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
                        }
                        if (typeof self.userCallback === "function") self.userCallback.call(self.dom.container, self.state, self);
                        if (typeof self.userDeferred.resolve === "function") self.userDeferred.resolve(self.state);
                        self.userCallback = null;
                        self.userDeferred = null;
                        self.lastClicked = null;
                        self.isToggling = false;
                        self.isBusy = false;
                        if (self.queue.length) {
                            self.callActions("beforeReadQueueCleanUp", arguments);
                            nextInQueue = self.queue.shift();
                            self.userDeferred = nextInQueue.deferred;
                            self.isToggling = nextInQueue.isToggling;
                            self.lastClicked = nextInQueue.triggerElement;
                            if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) self.multimix.apply(self, nextInQueue.args); else self.dataset.apply(self, nextInQueue.args);
                        }
                        self.callActions("afterCleanUp", arguments);
                    },
                    parseMultimixArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandMultimix;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) instruction.command.insert = self.parseInsertArgs([ instruction.command.insert ]).command;
                        if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) instruction.command.remove = self.parseRemoveArgs([ instruction.command.remove ]).command;
                        if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) instruction.command.filter = self.parseFilterArgs([ instruction.command.filter ]).command;
                        if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) instruction.command.sort = self.parseSortArgs([ instruction.command.sort ]).command;
                        if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) instruction.command.changeLayout = self.parseChangeLayoutArgs([ instruction.command.changeLayout ]).command;
                        instruction = self.callFilters("instructionParseMultimixArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseFilterArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandFilter;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (typeof arg === "string") instruction.command.selector = arg; else if (arg === null) instruction.command.collection = []; else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) instruction.command.collection = [ arg ]; else if (typeof arg === "object" && typeof arg.length !== "undefined") instruction.command.collection = h.arrayFromList(arg); else if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.selector && instruction.command.collection) throw new Error(mixitup.messages.errorFilterInvalidArguments());
                        instruction = self.callFilters("instructionParseFilterArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseSortArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, sortString = "", i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandSort;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "string":
                                sortString = arg;
                                break;

                              case "object":
                                if (arg.length) instruction.command.collection = h.arrayFromList(arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        if (sortString) instruction.command = self.parseSortString(sortString, instruction.command);
                        instruction = self.callFilters("instructionParseSortArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseInsertArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandInsert;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            if (typeof arg === "number") instruction.command.index = arg; else if (typeof arg === "string" && [ "before", "after" ].indexOf(arg) > -1) instruction.command.position = arg; else if (typeof arg === "string") instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes); else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) !instruction.command.collection.length ? instruction.command.collection = [ arg ] : instruction.command.sibling = arg; else if (typeof arg === "object" && arg.length) !instruction.command.collection.length ? instruction.command.collection = arg : instruction.command.sibling = arg[0]; else if (typeof arg === "object" && arg.childNodes && arg.childNodes.length) !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0]; else if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.index && instruction.command.sibling) throw new Error(mixitup.messages.errorInsertInvalidArguments());
                        if (!instruction.command.collection.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningInsertNoElements());
                        instruction = self.callFilters("instructionParseInsertArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseRemoveArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, target = null, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandRemove;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "number":
                                if (self.targets[arg]) instruction.command.targets[0] = self.targets[arg];
                                break;

                              case "string":
                                instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));
                                break;

                              case "object":
                                if (arg && arg.length) instruction.command.collection = arg; else if (h.isElement(arg, self.dom.document)) instruction.command.collection = [ arg ]; else h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        if (instruction.command.collection.length) for (i = 0; target = self.targets[i]; i++) if (instruction.command.collection.indexOf(target.dom.el) > -1) instruction.command.targets.push(target);
                        if (!instruction.command.targets.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningRemoveNoElements());
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseDatasetArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandDataset;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "object":
                                if (Array.isArray(arg) || typeof arg.length === "number") instruction.command.dataset = arg; else h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseChangeLayoutArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandChangeLayout;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "string":
                                instruction.command.containerClassName = arg;
                                break;

                              case "object":
                                h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        h.freeze(instruction);
                        return instruction;
                    },
                    queueMix: function(queueItem) {
                        var self = this, deferred = null, toggleSelector = "";
                        self.callActions("beforeQueueMix", arguments);
                        deferred = h.defer(mixitup.libraries);
                        if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                            queueItem.deferred = deferred;
                            self.queue.push(queueItem);
                            if (self.config.controls.enable) if (self.isToggling) {
                                self.buildToggleArray(queueItem.instruction.command);
                                toggleSelector = self.getToggleSelector();
                                self.updateControls({
                                    filter: {
                                        selector: toggleSelector
                                    }
                                });
                            } else self.updateControls(queueItem.instruction.command);
                        } else {
                            if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                            deferred.resolve(self.state);
                            mixitup.events.fire("mixBusy", self.dom.container, {
                                state: self.state,
                                instance: self
                            }, self.dom.document);
                            if (typeof self.config.callbacks.onMixBusy === "function") self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                        }
                        return self.callFilters("promiseQueueMix", deferred.promise, arguments);
                    },
                    getDataOperation: function(newDataset) {
                        var self = this, operation = new mixitup.Operation, startDataset = [];
                        operation = self.callFilters("operationUnmappedGetDataOperation", operation, arguments);
                        if (self.dom.targets.length && !(startDataset = self.state.activeDataset || []).length) throw new Error(mixitup.messages.errorDatasetNotSet());
                        operation.id = h.randomHex();
                        operation.startState = self.state;
                        operation.startDataset = startDataset;
                        operation.newDataset = newDataset.slice();
                        self.diffDatasets(operation);
                        operation.startOrder = self.targets;
                        operation.newOrder = operation.show;
                        if (self.config.animation.enable) {
                            self.getStartMixData(operation);
                            self.setInter(operation);
                            operation.docState = h.getDocumentState(self.dom.document);
                            self.getInterMixData(operation);
                            self.setFinal(operation);
                            self.getFinalMixData(operation);
                            self.parseEffects();
                            operation.hasEffect = self.hasEffect();
                            self.getTweenData(operation);
                        }
                        self.targets = operation.show.slice();
                        operation.newState = self.buildState(operation);
                        Array.prototype.push.apply(self.targets, operation.toRemove);
                        operation = self.callFilters("operationMappedGetDataOperation", operation, arguments);
                        return operation;
                    },
                    diffDatasets: function(operation) {
                        var self = this, persistantStartIds = [], persistantNewIds = [], insertedTargets = [], data = null, target = null, el = null, frag = null, nextEl = null, uids = {}, id = "", i = -1;
                        self.callActions("beforeDiffDatasets", arguments);
                        for (i = 0; data = operation.newDataset[i]; i++) {
                            if (typeof (id = data[self.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                                uidKey: self.config.data.uidKey
                            }));
                            if (!uids[id]) uids[id] = true; else throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                                uid: id
                            }));
                            if ((target = self.cache[id]) instanceof mixitup.Target) {
                                if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                                    el = target.render(data);
                                    target.data = data;
                                    if (el !== target.dom.el) {
                                        if (target.isInDom) {
                                            target.unbindEvents();
                                            self.dom.parent.replaceChild(el, target.dom.el);
                                        }
                                        if (!target.isShown) el.style.display = "none";
                                        target.dom.el = el;
                                        if (target.isInDom) target.bindEvents();
                                    }
                                }
                                el = target.dom.el;
                            } else {
                                target = new mixitup.Target;
                                target.init(null, self, data);
                                target.hide();
                            }
                            if (!target.isInDom) {
                                if (!frag) frag = self.dom.document.createDocumentFragment();
                                if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                                frag.appendChild(target.dom.el);
                                target.isInDom = true;
                                target.unbindEvents();
                                target.bindEvents();
                                target.hide();
                                operation.toShow.push(target);
                                insertedTargets.push(target);
                            } else {
                                nextEl = target.dom.el.nextElementSibling;
                                persistantNewIds.push(id);
                                if (frag) {
                                    if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                                    self.insertDatasetFrag(frag, target.dom.el, insertedTargets);
                                    frag = null;
                                }
                            }
                            operation.show.push(target);
                        }
                        if (frag) {
                            nextEl = nextEl || self.config.layout.siblingAfter;
                            if (nextEl) frag.appendChild(self.dom.document.createTextNode(" "));
                            self.insertDatasetFrag(frag, nextEl, insertedTargets);
                        }
                        for (i = 0; data = operation.startDataset[i]; i++) {
                            id = data[self.config.data.uidKey];
                            target = self.cache[id];
                            if (operation.show.indexOf(target) < 0) {
                                operation.hide.push(target);
                                operation.toHide.push(target);
                                operation.toRemove.push(target);
                            } else persistantStartIds.push(id);
                        }
                        if (!h.isEqualArray(persistantStartIds, persistantNewIds)) operation.willSort = true;
                        self.callActions("afterDiffDatasets", arguments);
                    },
                    insertDatasetFrag: function(frag, nextEl, targets) {
                        var self = this;
                        var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;
                        self.dom.parent.insertBefore(frag, nextEl);
                        while (targets.length) {
                            self.targets.splice(insertAt, 0, targets.shift());
                            insertAt++;
                        }
                    },
                    willSort: function(sortCommandA, sortCommandB) {
                        var self = this, result = false;
                        if (self.config.behavior.liveSort || sortCommandA.order === "random" || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || sortCommandA.next === null && sortCommandB.next || sortCommandA.next && sortCommandB.next === null) result = true; else if (sortCommandA.next && sortCommandB.next) result = self.willSort(sortCommandA.next, sortCommandB.next); else result = false;
                        return self.callFilters("resultWillSort", result, arguments);
                    },
                    show: function() {
                        var self = this;
                        return self.filter("all");
                    },
                    hide: function() {
                        var self = this;
                        return self.filter("none");
                    },
                    isMixing: function() {
                        var self = this;
                        return self.isBusy;
                    },
                    filter: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments);
                        return self.multimix({
                            filter: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    toggleOn: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, toggleSelector = "";
                        self.isToggling = true;
                        if (self.toggleArray.indexOf(selector) < 0) self.toggleArray.push(selector);
                        toggleSelector = self.getToggleSelector();
                        return self.multimix({
                            filter: toggleSelector
                        }, instruction.animate, instruction.callback);
                    },
                    toggleOff: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, selectorIndex = self.toggleArray.indexOf(selector), toggleSelector = "";
                        self.isToggling = true;
                        if (selectorIndex > -1) self.toggleArray.splice(selectorIndex, 1);
                        toggleSelector = self.getToggleSelector();
                        return self.multimix({
                            filter: toggleSelector
                        }, instruction.animate, instruction.callback);
                    },
                    sort: function() {
                        var self = this, instruction = self.parseSortArgs(arguments);
                        return self.multimix({
                            sort: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    changeLayout: function() {
                        var self = this, instruction = self.parseChangeLayoutArgs(arguments);
                        return self.multimix({
                            changeLayout: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    dataset: function() {
                        var self = this, instruction = self.parseDatasetArgs(arguments), operation = null, queueItem = null, animate = false;
                        self.callActions("beforeDataset", arguments);
                        if (!self.isBusy) {
                            if (instruction.callback) self.userCallback = instruction.callback;
                            animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                            operation = self.getDataOperation(instruction.command.dataset);
                            return self.goMix(animate, operation);
                        } else {
                            queueItem = new mixitup.QueueItem;
                            queueItem.args = arguments;
                            queueItem.instruction = instruction;
                            return self.queueMix(queueItem);
                        }
                    },
                    multimix: function() {
                        var self = this, operation = null, animate = false, queueItem = null, instruction = self.parseMultimixArgs(arguments);
                        self.callActions("beforeMultimix", arguments);
                        if (!self.isBusy) {
                            operation = self.getOperation(instruction.command);
                            if (self.config.controls.enable) {
                                if (instruction.command.filter && !self.isToggling) {
                                    self.toggleArray.length = 0;
                                    self.buildToggleArray(operation.command);
                                }
                                if (self.queue.length < 1) self.updateControls(operation.command);
                            }
                            if (instruction.callback) self.userCallback = instruction.callback;
                            animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                            self.callFilters("operationMultimix", operation, arguments);
                            return self.goMix(animate, operation);
                        } else {
                            queueItem = new mixitup.QueueItem;
                            queueItem.args = arguments;
                            queueItem.instruction = instruction;
                            queueItem.triggerElement = self.lastClicked;
                            queueItem.isToggling = self.isToggling;
                            return self.queueMix(queueItem);
                        }
                    },
                    getOperation: function(multimixCommand) {
                        var self = this, sortCommand = multimixCommand.sort, filterCommand = multimixCommand.filter, changeLayoutCommand = multimixCommand.changeLayout, removeCommand = multimixCommand.remove, insertCommand = multimixCommand.insert, operation = new mixitup.Operation;
                        operation = self.callFilters("operationUnmappedGetOperation", operation, arguments);
                        operation.id = h.randomHex();
                        operation.command = multimixCommand;
                        operation.startState = self.state;
                        operation.triggerElement = self.lastClicked;
                        if (self.isBusy) {
                            if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                            return null;
                        }
                        if (insertCommand) self.insertTargets(insertCommand, operation);
                        if (removeCommand) operation.toRemove = removeCommand.targets;
                        operation.startSort = operation.newSort = operation.startState.activeSort;
                        operation.startOrder = operation.newOrder = self.targets;
                        if (sortCommand) {
                            operation.startSort = operation.startState.activeSort;
                            operation.newSort = sortCommand;
                            operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);
                            if (operation.willSort) self.sortOperation(operation);
                        }
                        operation.startFilter = operation.startState.activeFilter;
                        if (filterCommand) operation.newFilter = filterCommand; else operation.newFilter = h.extend(new mixitup.CommandFilter, operation.startFilter);
                        if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target; else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
                        self.filterOperation(operation);
                        operation.startContainerClassName = operation.startState.activeContainerClassName;
                        if (changeLayoutCommand) {
                            operation.newContainerClassName = changeLayoutCommand.containerClassName;
                            if (operation.newContainerClassName !== operation.startContainerClassName) operation.willChangeLayout = true;
                        } else operation.newContainerClassName = operation.startContainerClassName;
                        if (self.config.animation.enable) {
                            self.getStartMixData(operation);
                            self.setInter(operation);
                            operation.docState = h.getDocumentState(self.dom.document);
                            self.getInterMixData(operation);
                            self.setFinal(operation);
                            self.getFinalMixData(operation);
                            self.parseEffects();
                            operation.hasEffect = self.hasEffect();
                            self.getTweenData(operation);
                        }
                        if (operation.willSort) self.targets = operation.newOrder;
                        operation.newState = self.buildState(operation);
                        return self.callFilters("operationMappedGetOperation", operation, arguments);
                    },
                    tween: function(operation, multiplier) {
                        var target = null, posData = null, toHideIndex = -1, i = -1;
                        multiplier = Math.min(multiplier, 1);
                        multiplier = Math.max(multiplier, 0);
                        for (i = 0; target = operation.show[i]; i++) {
                            posData = operation.showPosData[i];
                            target.applyTween(posData, multiplier);
                        }
                        for (i = 0; target = operation.hide[i]; i++) {
                            if (target.isShown) target.hide();
                            if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                                posData = operation.toHidePosData[toHideIndex];
                                if (!target.isShown) target.show();
                                target.applyTween(posData, multiplier);
                            }
                        }
                    },
                    insert: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.multimix({
                            insert: args.command
                        }, args.animate, args.callback);
                    },
                    insertBefore: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(args.command.collection, "before", args.command.sibling, args.animate, args.callback);
                    },
                    insertAfter: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(args.command.collection, "after", args.command.sibling, args.animate, args.callback);
                    },
                    prepend: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(0, args.command.collection, args.animate, args.callback);
                    },
                    append: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
                    },
                    remove: function() {
                        var self = this, args = self.parseRemoveArgs(arguments);
                        return self.multimix({
                            remove: args.command
                        }, args.animate, args.callback);
                    },
                    getConfig: function(stringKey) {
                        var self = this, value = null;
                        if (!stringKey) value = self.config; else value = h.getProperty(self.config, stringKey);
                        return self.callFilters("valueGetConfig", value, arguments);
                    },
                    configure: function(config) {
                        var self = this;
                        self.callActions("beforeConfigure", arguments);
                        h.extend(self.config, config, true, true);
                        self.callActions("afterConfigure", arguments);
                    },
                    getState: function() {
                        var self = this, state = null;
                        state = new mixitup.State;
                        h.extend(state, self.state);
                        h.freeze(state);
                        return self.callFilters("stateGetState", state, arguments);
                    },
                    forceRefresh: function() {
                        var self = this;
                        self.indexTargets();
                    },
                    forceRender: function() {
                        var self = this, target = null, el = null, id = "";
                        for (id in self.cache) {
                            target = self.cache[id];
                            el = target.render(target.data);
                            if (el !== target.dom.el) {
                                if (target.isInDom) {
                                    target.unbindEvents();
                                    self.dom.parent.replaceChild(el, target.dom.el);
                                }
                                if (!target.isShown) el.style.display = "none";
                                target.dom.el = el;
                                if (target.isInDom) target.bindEvents();
                            }
                        }
                        self.state = self.buildState(self.lastOperation);
                    },
                    destroy: function(cleanUp) {
                        var self = this, control = null, target = null, i = 0;
                        self.callActions("beforeDestroy", arguments);
                        for (i = 0; control = self.controls[i]; i++) control.removeBinding(self);
                        for (i = 0; target = self.targets[i]; i++) {
                            if (cleanUp) target.show();
                            target.unbindEvents();
                        }
                        if (self.dom.container.id.match(/^MixItUp/)) self.dom.container.removeAttribute("id");
                        delete mixitup.instances[self.id];
                        self.callActions("afterDestroy", arguments);
                    }
                });
                mixitup.IMoveData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.posIn = null;
                    this.posOut = null;
                    this.operation = null;
                    this.callback = null;
                    this.statusChange = "";
                    this.duration = -1;
                    this.staggerIndex = -1;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.IMoveData);
                mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;
                mixitup.TargetDom = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.el = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TargetDom);
                mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);
                mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;
                mixitup.Target = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.sortString = "";
                    this.mixer = null;
                    this.callback = null;
                    this.isShown = false;
                    this.isBound = false;
                    this.isExcluded = false;
                    this.isInDom = false;
                    this.handler = null;
                    this.operation = null;
                    this.data = null;
                    this.dom = new mixitup.TargetDom;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Target);
                mixitup.Target.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Target.prototype, {
                    constructor: mixitup.Target,
                    init: function(el, mixer, data) {
                        var self = this, id = "";
                        self.callActions("beforeInit", arguments);
                        self.mixer = mixer;
                        if (!el) el = self.render(data);
                        self.cacheDom(el);
                        self.bindEvents();
                        if (self.dom.el.style.display !== "none") self.isShown = true;
                        if (data && mixer.config.data.uidKey) {
                            if (typeof (id = data[mixer.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                                uidKey: mixer.config.data.uidKey
                            }));
                            self.id = id;
                            self.data = data;
                            mixer.cache[id] = self;
                        }
                        self.callActions("afterInit", arguments);
                    },
                    render: function(data) {
                        var self = this, render = null, el = null, temp = null, output = "";
                        self.callActions("beforeRender", arguments);
                        render = self.callFilters("renderRender", self.mixer.config.render.target, arguments);
                        if (typeof render !== "function") throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
                        output = render(data);
                        if (output && typeof output === "object" && h.isElement(output)) el = output; else if (typeof output === "string") {
                            temp = document.createElement("div");
                            temp.innerHTML = output;
                            el = temp.firstElementChild;
                        }
                        return self.callFilters("elRender", el, arguments);
                    },
                    cacheDom: function(el) {
                        var self = this;
                        self.callActions("beforeCacheDom", arguments);
                        self.dom.el = el;
                        self.callActions("afterCacheDom", arguments);
                    },
                    getSortString: function(attributeName) {
                        var self = this, value = self.dom.el.getAttribute("data-" + attributeName) || "";
                        self.callActions("beforeGetSortString", arguments);
                        value = isNaN(value * 1) ? value.toLowerCase() : value * 1;
                        self.sortString = value;
                        self.callActions("afterGetSortString", arguments);
                    },
                    show: function() {
                        var self = this;
                        self.callActions("beforeShow", arguments);
                        if (!self.isShown) {
                            self.dom.el.style.display = "";
                            self.isShown = true;
                        }
                        self.callActions("afterShow", arguments);
                    },
                    hide: function() {
                        var self = this;
                        self.callActions("beforeHide", arguments);
                        if (self.isShown) {
                            self.dom.el.style.display = "none";
                            self.isShown = false;
                        }
                        self.callActions("afterHide", arguments);
                    },
                    move: function(moveData) {
                        var self = this;
                        self.callActions("beforeMove", arguments);
                        if (!self.isExcluded) self.mixer.targetsMoved++;
                        self.applyStylesIn(moveData);
                        requestAnimationFrame((function() {
                            self.applyStylesOut(moveData);
                        }));
                        self.callActions("afterMove", arguments);
                    },
                    applyTween: function(posData, multiplier) {
                        var self = this, propertyName = "", tweenData = null, posIn = posData.posIn, currentTransformValues = [], currentValues = new mixitup.StyleData, i = -1;
                        self.callActions("beforeApplyTween", arguments);
                        currentValues.x = posIn.x;
                        currentValues.y = posIn.y;
                        if (multiplier === 0) self.hide(); else if (!self.isShown) self.show();
                        for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                            tweenData = posData.tweenData[propertyName];
                            if (propertyName === "x") {
                                if (!tweenData) continue;
                                currentValues.x = posIn.x + tweenData * multiplier;
                            } else if (propertyName === "y") {
                                if (!tweenData) continue;
                                currentValues.y = posIn.y + tweenData * multiplier;
                            } else if (tweenData instanceof mixitup.TransformData) {
                                if (!tweenData.value) continue;
                                currentValues[propertyName].value = posIn[propertyName].value + tweenData.value * multiplier;
                                currentValues[propertyName].unit = tweenData.unit;
                                currentTransformValues.push(propertyName + "(" + currentValues[propertyName].value + tweenData.unit + ")");
                            } else {
                                if (!tweenData) continue;
                                currentValues[propertyName] = posIn[propertyName] + tweenData * multiplier;
                                self.dom.el.style[propertyName] = currentValues[propertyName];
                            }
                        }
                        if (currentValues.x || currentValues.y) currentTransformValues.unshift("translate(" + currentValues.x + "px, " + currentValues.y + "px)");
                        if (currentTransformValues.length) self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(" ");
                        self.callActions("afterApplyTween", arguments);
                    },
                    applyStylesIn: function(moveData) {
                        var self = this, posIn = moveData.posIn, isFading = self.mixer.effectsIn.opacity !== 1, transformValues = [];
                        self.callActions("beforeApplyStylesIn", arguments);
                        transformValues.push("translate(" + posIn.x + "px, " + posIn.y + "px)");
                        if (self.mixer.config.animation.animateResizeTargets) {
                            if (moveData.statusChange !== "show") {
                                self.dom.el.style.width = posIn.width + "px";
                                self.dom.el.style.height = posIn.height + "px";
                            }
                            self.dom.el.style.marginRight = posIn.marginRight + "px";
                            self.dom.el.style.marginBottom = posIn.marginBottom + "px";
                        }
                        isFading && (self.dom.el.style.opacity = posIn.opacity);
                        if (moveData.statusChange === "show") transformValues = transformValues.concat(self.mixer.transformIn);
                        self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
                        self.callActions("afterApplyStylesIn", arguments);
                    },
                    applyStylesOut: function(moveData) {
                        var self = this, transitionRules = [], transformValues = [], isResizing = self.mixer.config.animation.animateResizeTargets, isFading = typeof self.mixer.effectsIn.opacity !== "undefined";
                        self.callActions("beforeApplyStylesOut", arguments);
                        transitionRules.push(self.writeTransitionRule(mixitup.features.transformRule, moveData.staggerIndex));
                        if (moveData.statusChange !== "none") transitionRules.push(self.writeTransitionRule("opacity", moveData.staggerIndex, moveData.duration));
                        if (isResizing) {
                            transitionRules.push(self.writeTransitionRule("width", moveData.staggerIndex, moveData.duration));
                            transitionRules.push(self.writeTransitionRule("height", moveData.staggerIndex, moveData.duration));
                            transitionRules.push(self.writeTransitionRule("margin", moveData.staggerIndex, moveData.duration));
                        }
                        if (!moveData.callback) {
                            self.mixer.targetsImmovable++;
                            if (self.mixer.targetsMoved === self.mixer.targetsImmovable) self.mixer.cleanUp(moveData.operation);
                            return;
                        }
                        self.operation = moveData.operation;
                        self.callback = moveData.callback;
                        !self.isExcluded && self.mixer.targetsBound++;
                        self.isBound = true;
                        self.applyTransition(transitionRules);
                        if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                            self.dom.el.style.width = moveData.posOut.width + "px";
                            self.dom.el.style.height = moveData.posOut.height + "px";
                            self.dom.el.style.marginRight = moveData.posOut.marginRight + "px";
                            self.dom.el.style.marginBottom = moveData.posOut.marginBottom + "px";
                        }
                        if (!self.mixer.config.animation.nudge && moveData.statusChange === "hide") transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
                        switch (moveData.statusChange) {
                          case "hide":
                            isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);
                            transformValues = transformValues.concat(self.mixer.transformOut);
                            break;

                          case "show":
                            isFading && (self.dom.el.style.opacity = 1);
                        }
                        if (self.mixer.config.animation.nudge || !self.mixer.config.animation.nudge && moveData.statusChange !== "hide") transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
                        self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
                        self.callActions("afterApplyStylesOut", arguments);
                    },
                    writeTransitionRule: function(property, staggerIndex, duration) {
                        var self = this, delay = self.getDelay(staggerIndex), rule = "";
                        rule = property + " " + (duration > 0 ? duration : self.mixer.config.animation.duration) + "ms " + delay + "ms " + (property === "opacity" ? "linear" : self.mixer.config.animation.easing);
                        return self.callFilters("ruleWriteTransitionRule", rule, arguments);
                    },
                    getDelay: function(index) {
                        var self = this, delay = -1;
                        if (typeof self.mixer.config.animation.staggerSequence === "function") index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
                        delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;
                        return self.callFilters("delayGetDelay", delay, arguments);
                    },
                    applyTransition: function(rules) {
                        var self = this, transitionString = rules.join(", ");
                        self.callActions("beforeApplyTransition", arguments);
                        self.dom.el.style[mixitup.features.transitionProp] = transitionString;
                        self.callActions("afterApplyTransition", arguments);
                    },
                    handleTransitionEnd: function(e) {
                        var self = this, propName = e.propertyName, canResize = self.mixer.config.animation.animateResizeTargets;
                        self.callActions("beforeHandleTransitionEnd", arguments);
                        if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf("transform") > -1 || propName.indexOf("opacity") > -1 || canResize && propName.indexOf("height") > -1 || canResize && propName.indexOf("width") > -1 || canResize && propName.indexOf("margin") > -1)) {
                            self.callback.call(self, self.operation);
                            self.isBound = false;
                            self.callback = null;
                            self.operation = null;
                        }
                        self.callActions("afterHandleTransitionEnd", arguments);
                    },
                    eventBus: function(e) {
                        var self = this;
                        self.callActions("beforeEventBus", arguments);
                        switch (e.type) {
                          case "webkitTransitionEnd":
                          case "transitionend":
                            self.handleTransitionEnd(e);
                        }
                        self.callActions("afterEventBus", arguments);
                    },
                    unbindEvents: function() {
                        var self = this;
                        self.callActions("beforeUnbindEvents", arguments);
                        h.off(self.dom.el, "webkitTransitionEnd", self.handler);
                        h.off(self.dom.el, "transitionend", self.handler);
                        self.callActions("afterUnbindEvents", arguments);
                    },
                    bindEvents: function() {
                        var self = this, transitionEndEvent = "";
                        self.callActions("beforeBindEvents", arguments);
                        transitionEndEvent = mixitup.features.transitionPrefix === "webkit" ? "webkitTransitionEnd" : "transitionend";
                        self.handler = function(e) {
                            return self.eventBus(e);
                        };
                        h.on(self.dom.el, transitionEndEvent, self.handler);
                        self.callActions("afterBindEvents", arguments);
                    },
                    getPosData: function(getBox) {
                        var self = this, styles = {}, rect = null, posData = new mixitup.StyleData;
                        self.callActions("beforeGetPosData", arguments);
                        posData.x = self.dom.el.offsetLeft;
                        posData.y = self.dom.el.offsetTop;
                        if (self.mixer.config.animation.animateResizeTargets || getBox) {
                            rect = self.dom.el.getBoundingClientRect();
                            posData.top = rect.top;
                            posData.right = rect.right;
                            posData.bottom = rect.bottom;
                            posData.left = rect.left;
                            posData.width = rect.width;
                            posData.height = rect.height;
                        }
                        if (self.mixer.config.animation.animateResizeTargets) {
                            styles = window.getComputedStyle(self.dom.el);
                            posData.marginBottom = parseFloat(styles.marginBottom);
                            posData.marginRight = parseFloat(styles.marginRight);
                        }
                        return self.callFilters("posDataGetPosData", posData, arguments);
                    },
                    cleanUp: function() {
                        var self = this;
                        self.callActions("beforeCleanUp", arguments);
                        self.dom.el.style[mixitup.features.transformProp] = "";
                        self.dom.el.style[mixitup.features.transitionProp] = "";
                        self.dom.el.style.opacity = "";
                        if (self.mixer.config.animation.animateResizeTargets) {
                            self.dom.el.style.width = "";
                            self.dom.el.style.height = "";
                            self.dom.el.style.marginRight = "";
                            self.dom.el.style.marginBottom = "";
                        }
                        self.callActions("afterCleanUp", arguments);
                    }
                });
                mixitup.Collection = function(instances) {
                    var instance = null, i = -1;
                    this.callActions("beforeConstruct");
                    for (i = 0; instance = instances[i]; i++) this[i] = instance;
                    this.length = instances.length;
                    this.callActions("afterConstruct");
                    h.freeze(this);
                };
                mixitup.BaseStatic.call(mixitup.Collection);
                mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Collection.prototype, {
                    constructor: mixitup.Collection,
                    mixitup: function(methodName) {
                        var self = this, instance = null, args = Array.prototype.slice.call(arguments), tasks = [], i = -1;
                        this.callActions("beforeMixitup");
                        args.shift();
                        for (i = 0; instance = self[i]; i++) tasks.push(instance[methodName].apply(instance, args));
                        return self.callFilters("promiseMixitup", h.all(tasks, mixitup.libraries), arguments);
                    }
                });
                mixitup.Operation = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.args = [];
                    this.command = null;
                    this.showPosData = [];
                    this.toHidePosData = [];
                    this.startState = null;
                    this.newState = null;
                    this.docState = null;
                    this.willSort = false;
                    this.willChangeLayout = false;
                    this.hasEffect = false;
                    this.hasFailed = false;
                    this.triggerElement = null;
                    this.show = [];
                    this.hide = [];
                    this.matching = [];
                    this.toShow = [];
                    this.toHide = [];
                    this.toMove = [];
                    this.toRemove = [];
                    this.startOrder = [];
                    this.newOrder = [];
                    this.startSort = null;
                    this.newSort = null;
                    this.startFilter = null;
                    this.newFilter = null;
                    this.startDataset = null;
                    this.newDataset = null;
                    this.viewportDeltaX = 0;
                    this.viewportDeltaY = 0;
                    this.startX = 0;
                    this.startY = 0;
                    this.startHeight = 0;
                    this.startWidth = 0;
                    this.newX = 0;
                    this.newY = 0;
                    this.newHeight = 0;
                    this.newWidth = 0;
                    this.startContainerClassName = "";
                    this.startDisplay = "";
                    this.newContainerClassName = "";
                    this.newDisplay = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Operation);
                mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Operation.prototype.constructor = mixitup.Operation;
                mixitup.State = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.activeFilter = null;
                    this.activeSort = null;
                    this.activeContainerClassName = "";
                    this.container = null;
                    this.targets = [];
                    this.hide = [];
                    this.show = [];
                    this.matching = [];
                    this.totalTargets = -1;
                    this.totalShow = -1;
                    this.totalHide = -1;
                    this.totalMatching = -1;
                    this.hasFailed = false;
                    this.triggerElement = null;
                    this.activeDataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.State);
                mixitup.State.prototype = Object.create(mixitup.Base.prototype);
                mixitup.State.prototype.constructor = mixitup.State;
                mixitup.UserInstruction = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.command = {};
                    this.animate = false;
                    this.callback = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.UserInstruction);
                mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);
                mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;
                mixitup.Messages = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function";
                    this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element";
                    this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`";
                    this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`";
                    this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
                    this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';
                    this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`";
                    this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
                    this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
                    this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both";
                    this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container";
                    this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both";
                    this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`";
                    this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets";
                    this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`";
                    this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container";
                    this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored." + " If you wish to perform additional methods on this instance, please create a reference.";
                    this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`";
                    this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`";
                    this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the " + "queue is full or queuing is disabled.";
                    this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.";
                    this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install" + " an ES6 Promise polyfill.";
                    this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' + " which may product unexpected sort output";
                    this.callActions("afterConstruct");
                    this.compileTemplates();
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Messages);
                mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Messages.prototype.constructor = mixitup.Messages;
                mixitup.Messages.prototype.compileTemplates = function() {
                    var errorKey = "";
                    var errorMessage = "";
                    for (errorKey in this) {
                        if (typeof (errorMessage = this[errorKey]) !== "string") continue;
                        this[h.camelCase(errorKey)] = h.template(errorMessage);
                    }
                };
                mixitup.messages = new mixitup.Messages;
                mixitup.Facade = function Mixer(mixer) {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct", arguments);
                    this.configure = mixer.configure.bind(mixer);
                    this.show = mixer.show.bind(mixer);
                    this.hide = mixer.hide.bind(mixer);
                    this.filter = mixer.filter.bind(mixer);
                    this.toggleOn = mixer.toggleOn.bind(mixer);
                    this.toggleOff = mixer.toggleOff.bind(mixer);
                    this.sort = mixer.sort.bind(mixer);
                    this.changeLayout = mixer.changeLayout.bind(mixer);
                    this.multimix = mixer.multimix.bind(mixer);
                    this.dataset = mixer.dataset.bind(mixer);
                    this.tween = mixer.tween.bind(mixer);
                    this.insert = mixer.insert.bind(mixer);
                    this.insertBefore = mixer.insertBefore.bind(mixer);
                    this.insertAfter = mixer.insertAfter.bind(mixer);
                    this.prepend = mixer.prepend.bind(mixer);
                    this.append = mixer.append.bind(mixer);
                    this.remove = mixer.remove.bind(mixer);
                    this.destroy = mixer.destroy.bind(mixer);
                    this.forceRefresh = mixer.forceRefresh.bind(mixer);
                    this.forceRender = mixer.forceRender.bind(mixer);
                    this.isMixing = mixer.isMixing.bind(mixer);
                    this.getOperation = mixer.getOperation.bind(mixer);
                    this.getConfig = mixer.getConfig.bind(mixer);
                    this.getState = mixer.getState.bind(mixer);
                    this.callActions("afterConstruct", arguments);
                    h.freeze(this);
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Facade);
                mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Facade.prototype.constructor = mixitup.Facade;
                if (true) module.exports = mixitup;
                mixitup.BaseStatic.call(mixitup.constructor);
                mixitup.NAME = "mixitup";
                mixitup.CORE_VERSION = "3.3.1";
            })(window);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Помилка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форму відправлено!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                    speed: 150
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, немає жодного select");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
                this.config.speed = +originalSelect.dataset.speed;
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
                this.setOptionsPosition(selectItem);
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                setTimeout((() => {
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                        _slideToggle(selectOptions, originalSelect.dataset.speed);
                        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), originalSelect.dataset.speed);
                    }
                }), 0);
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += `</div>`;
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            setOptionsPosition(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
                const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
                const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
                if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                    selectOptions.hidden = false;
                    const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                    const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                    const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                    selectOptions.hidden = true;
                    const selectItemHeight = selectItem.offsetHeight;
                    const selectItemPos = selectItem.getBoundingClientRect().top;
                    const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                    const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                    if (selectItemResult < 0) {
                        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                        if (newMaxHeightValue < 100) {
                            selectItem.classList.add("select--show-top");
                            selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                        } else {
                            selectItem.classList.remove("select--show-top");
                            selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                        }
                    }
                } else setTimeout((() => {
                    selectItem.classList.remove("select--show-top");
                    selectItemScroll.style.maxHeight = customMaxHeightValue;
                }), +originalSelect.dataset.speed);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
                if (!selectOptions.classList.contains("_slide")) {
                    if (originalSelect.multiple) {
                        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                        originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                            originalSelectSelectedItem.removeAttribute("selected");
                        }));
                        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                        selectSelectedItems.forEach((selectSelectedItems => {
                            originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                        }));
                    } else {
                        if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                            optionItem.hidden = true;
                        }), this.config.speed);
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message} `) : null;
            }
        }
        flsModules.select = new SelectConstructor({});
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        flsModules.watcher = new ScrollWatcher({});
        class Parallax {
            constructor(elements) {
                if (elements.length) this.elements = Array.from(elements).map((el => new Parallax.Each(el, this.options)));
            }
            destroyEvents() {
                this.elements.forEach((el => {
                    el.destroyEvents();
                }));
            }
            setEvents() {
                this.elements.forEach((el => {
                    el.setEvents();
                }));
            }
        }
        Parallax.Each = class {
            constructor(parent) {
                this.parent = parent;
                this.elements = this.parent.querySelectorAll("[data-prlx]");
                this.animation = this.animationFrame.bind(this);
                this.offset = 0;
                this.value = 0;
                this.smooth = parent.dataset.prlxSmooth ? Number(parent.dataset.prlxSmooth) : 15;
                this.setEvents();
            }
            setEvents() {
                this.animationID = window.requestAnimationFrame(this.animation);
            }
            destroyEvents() {
                window.cancelAnimationFrame(this.animationID);
            }
            animationFrame() {
                const topToWindow = this.parent.getBoundingClientRect().top;
                const heightParent = this.parent.offsetHeight;
                const heightWindow = window.innerHeight;
                const positionParent = {
                    top: topToWindow - heightWindow,
                    bottom: topToWindow + heightParent
                };
                const centerPoint = this.parent.dataset.prlxCenter ? this.parent.dataset.prlxCenter : "center";
                if (positionParent.top < 30 && positionParent.bottom > -30) switch (centerPoint) {
                  case "top":
                    this.offset = -1 * topToWindow;
                    break;

                  case "center":
                    this.offset = heightWindow / 2 - (topToWindow + heightParent / 2);
                    break;

                  case "bottom":
                    this.offset = heightWindow - (topToWindow + heightParent);
                    break;
                }
                this.value += (this.offset - this.value) / this.smooth;
                this.animationID = window.requestAnimationFrame(this.animation);
                this.elements.forEach((el => {
                    const parameters = {
                        axis: el.dataset.axis ? el.dataset.axis : "v",
                        direction: el.dataset.direction ? el.dataset.direction + "1" : "-1",
                        coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
                        additionalProperties: el.dataset.properties ? el.dataset.properties : ""
                    };
                    this.parameters(el, parameters);
                }));
            }
            parameters(el, parameters) {
                if (parameters.axis == "v") el.style.transform = `translate3D(0, ${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px,0) ${parameters.additionalProperties}`; else if (parameters.axis == "h") el.style.transform = `translate3D(${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px,0,0) ${parameters.additionalProperties}`;
            }
        };
        if (document.querySelectorAll("[data-prlx-parent]")) flsModules.parallax = new Parallax(document.querySelectorAll("[data-prlx-parent]"));
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (flsModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (fullpageSectionId !== null) {
                                flsModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        var intl_tel_input = __webpack_require__(148);
        var mixitup = __webpack_require__(816);
        if (window.location.pathname.includes("home")) window.addEventListener("scroll", (function() {
            let scrolled = window.scrollY;
            let hero = document.querySelector(".hero");
            let heroOverlay = hero.querySelector(".hero__overlay");
            if (scrolled > 100) heroOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; else heroOverlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }));
        const input = document.querySelector("#phone");
        intl_tel_input(input, {
            initialCountry: "ua",
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js"
        });
        phone.addEventListener("input", (function(event) {
            let inputValue = event.target.value;
            let numericValue = inputValue.replace(/\D/g, "");
            if (inputValue !== numericValue) event.target.value = numericValue;
        }));
        if (document.querySelector(".tabs-projects__targets")) {
            mixitup(".tabs-projects__targets");
        }
        window["FLS"] = false;
        isWebp();
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        pageNavigation();
        headerScroll();
    })();
})();