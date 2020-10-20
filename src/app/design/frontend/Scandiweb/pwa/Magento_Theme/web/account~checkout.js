(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["account~checkout"],{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/KeyValueTable.component.js":
/*!**********************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/KeyValueTable/KeyValueTable.component.js ***!
  \**********************************************************************************************************/
/*! exports provided: _KeyValueTable, KeyValueTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_KeyValueTable", function() { return _KeyValueTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValueTable", function() { return KeyValueTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _KeyValueTable_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyValueTable.style */ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/KeyValueTable.style.scss");
/* harmony import */ var _KeyValueTable_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_KeyValueTable_style__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */



/** @namespace Component/KeyValueTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _KeyValueTable =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_KeyValueTable, _Extensible);

  function _KeyValueTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _KeyValueTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_KeyValueTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderTableRow", function (data) {
      var key = data.key,
          label = data.label;

      var value = _this.getValueFromSource(data);

      if (!value) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "tr", {
          key: key
        },
        /*#__PURE__*/
        _checkBEM(React, "th", null, label),
        /*#__PURE__*/
        _checkBEM(React, "td", null, value))
      );
    });

    return _this;
  }

  _createClass(_KeyValueTable, [{
    key: "getValueFromSource",
    value: function getValueFromSource(_ref) {
      var key = _ref.key,
          source = _ref.source;
      var value = source[key];
      return Array.isArray(value) ? value.join(', ') : value;
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      var title = this.props.title;

      if (!title) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "tr", null,
        /*#__PURE__*/
        _checkBEM(React, "th", {
          block: "KeyValueTable",
          elem: "Heading",
          colSpan: 2
        }, title))
      );
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "KeyValueTable",
          elem: "Wrapper"
        },
        /*#__PURE__*/
        _checkBEM(React, "table", {
          block: "KeyValueTable"
        },
        /*#__PURE__*/
        _checkBEM(React, "thead", null, this.renderHeading()),
        /*#__PURE__*/
        _checkBEM(React, "tbody", null, this.dataPairArray.map(this.renderTableRow))))
      );
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTable();
    }
  }, {
    key: "dataPairArray",
    get: function get() {
      return [
        /**
         * {
         *     key: 'id',
         *     label': 'Identifier',
         *     source: customer
         * }
         */
      ];
    }
  }]);

  return _KeyValueTable;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_KeyValueTable, 'name', {
  value: 'KeyValueTable'
});

var KeyValueTable = middleware(_KeyValueTable, "Component/KeyValueTable/Component");

_defineProperty(KeyValueTable, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(KeyValueTable, "defaultProps", {
  title: ''
});

/* harmony default export */ __webpack_exports__["default"] = (KeyValueTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/KeyValueTable.style.scss":
/*!********************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/KeyValueTable/KeyValueTable.style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1603192110609
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/index.js":
/*!****************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/KeyValueTable/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeyValueTable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyValueTable.component */ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/KeyValueTable.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _KeyValueTable_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressForm/MyAccountAddressForm.component.js":
/*!************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountAddressForm/MyAccountAddressForm.component.js ***!
  \************************************************************************************************************************/
/*! exports provided: _MyAccountAddressForm, MyAccountAddressForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountAddressForm", function() { return _MyAccountAddressForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressForm", function() { return MyAccountAddressForm; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_FieldForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/FieldForm */ "../../../../../vendor/scandipwa/source/src/app/component/FieldForm/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Config */ "../../../../../vendor/scandipwa/source/src/app/type/Config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Address */ "../../../../../vendor/scandipwa/source/src/app/util/Address/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */





/** @namespace Component/MyAccountAddressForm/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountAddressForm =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountAddressForm, _Extensible);

  function _MyAccountAddressForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _MyAccountAddressForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_MyAccountAddressForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFormSuccess", function (fields) {
      var _this$props = _this.props,
          onSave = _this$props.onSave,
          addressLinesQty = _this$props.addressLinesQty;

      var _ref = addressLinesQty > 1 ? Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Address__WEBPACK_IMPORTED_MODULE_4__["setAddressesInFormObject"])(fields, addressLinesQty) : fields,
          region_id = _ref.region_id,
          region = _ref.region_string,
          newAddress = _objectWithoutProperties(_ref, ["region_id", "region_string"]);

      newAddress.region = {
        region_id: region_id,
        region: region
      };
      onSave(newAddress);
    });

    _defineProperty(_assertThisInitialized(_this), "onCountryChange", function (countryId) {
      var countries = _this.props.countries;
      var country = countries.find(function (_ref2) {
        var id = _ref2.id;
        return id === countryId;
      });
      var available_regions = country.available_regions;

      _this.setState({
        countryId: countryId,
        availableRegions: available_regions || []
      });
    });

    return _this;
  }

  _createClass(_MyAccountAddressForm, [{
    key: "__construct",
    value: function __construct(props) {
      _get(_getPrototypeOf(_MyAccountAddressForm.prototype), "__construct", this).call(this, props);

      var countries = props.countries,
          default_country = props.default_country,
          _props$address = props.address,
          country_id = _props$address.country_id,
          _props$address$region = _props$address.region;
      _props$address$region = _props$address$region === void 0 ? {} : _props$address$region;
      var region_id = _props$address$region.region_id;
      var countryId = country_id || default_country;
      var country = countries.find(function (_ref3) {
        var id = _ref3.id;
        return id === countryId;
      });

      var _ref4 = country || {},
          availableRegions = _ref4.available_regions;

      var regions = availableRegions || [{}];
      var regionId = region_id || regions[0].id;
      this.state = {
        countryId: countryId,
        availableRegions: availableRegions,
        regionId: regionId
      };
    }
  }, {
    key: "getRegionFields",
    value: function getRegionFields() {
      var _this2 = this;

      var _this$props$address$r = this.props.address.region;
      _this$props$address$r = _this$props$address$r === void 0 ? {} : _this$props$address$r;
      var region = _this$props$address$r.region;
      var _this$state = this.state,
          availableRegions = _this$state.availableRegions,
          regionId = _this$state.regionId;

      if (!availableRegions || !availableRegions.length) {
        return {
          region_string: {
            label: __('State/Province'),
            value: region
          }
        };
      }

      return {
        region_id: {
          label: __('State/Province'),
          type: 'select',
          selectOptions: availableRegions.map(function (_ref5) {
            var id = _ref5.id,
                name = _ref5.name;
            return {
              id: id,
              label: name,
              value: id
            };
          }),
          onChange: function onChange(regionId) {
            return _this2.setState({
              regionId: regionId
            });
          },
          value: regionId
        }
      };
    }
  }, {
    key: "getStreetFields",
    value: function getStreetFields(label, index) {
      var _this$props$address$s = this.props.address.street,
          street = _this$props$address$s === void 0 ? [] : _this$props$address$s;
      return {
        label: label,
        value: street[index],
        validation: index === 0 ? ['notEmpty'] : []
      };
    } // returns the address fields in quantity equal to BE

  }, {
    key: "getAddressFields",
    value: function getAddressFields() {
      var addressLinesQty = this.props.addressLinesQty;

      if (addressLinesQty === 1) {
        return {
          street: this.getStreetFields(__('Street address'), 0)
        };
      }

      var streets = {}; // eslint-disable-next-line fp/no-loops, fp/no-let

      for (var i = 0; i < addressLinesQty; i++) {
        streets["street".concat(i)] = this.getStreetFields(__('Street address line %s', i + 1), i);
      }

      return streets;
    }
  }, {
    key: "getDefaultValues",
    value: function getDefaultValues(fieldEntry) {
      var _fieldEntry = _slicedToArray(fieldEntry, 2),
          key = _fieldEntry[0],
          value = _fieldEntry[1].value;

      var addressValue = this.props.address[key];
      return _objectSpread2(_objectSpread2({}, _get(_getPrototypeOf(_MyAccountAddressForm.prototype), "getDefaultValues", this).call(this, fieldEntry)), {}, {
        value: value !== undefined ? value : addressValue
      });
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          type: "submit",
          block: "Button",
          mix: {
            block: 'MyAccount',
            elem: 'Button'
          }
        }, __('Save address'))
      );
    }
  }, {
    key: "fieldMap",
    get: function get() {
      var countryId = this.state.countryId;
      var _this$props2 = this.props,
          countries = _this$props2.countries,
          address = _this$props2.address;
      var default_billing = address.default_billing,
          default_shipping = address.default_shipping;
      return _objectSpread2(_objectSpread2({
        default_billing: {
          type: 'checkbox',
          label: __('This is default Billing Address'),
          value: 'default_billing',
          checked: default_billing
        },
        default_shipping: {
          type: 'checkbox',
          label: __('This is default Shipping Address'),
          value: 'default_shipping',
          checked: default_shipping
        },
        firstname: {
          label: __('First name'),
          validation: ['notEmpty']
        },
        lastname: {
          label: __('Last name'),
          validation: ['notEmpty']
        },
        telephone: {
          label: __('Phone number'),
          validation: ['notEmpty']
        },
        city: {
          label: __('City'),
          validation: ['notEmpty']
        },
        country_id: {
          type: 'select',
          label: __('Country'),
          validation: ['notEmpty'],
          value: countryId,
          selectOptions: countries.map(function (_ref6) {
            var id = _ref6.id,
                label = _ref6.label;
            return {
              id: id,
              label: label,
              value: id
            };
          }),
          onChange: this.onCountryChange
        }
      }, this.getRegionFields()), {}, {
        postcode: {
          label: __('Zip/Postal code'),
          validation: ['notEmpty']
        }
      }, this.getAddressFields());
    }
  }]);

  return _MyAccountAddressForm;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_FieldForm__WEBPACK_IMPORTED_MODULE_1__["default"]));
Object.defineProperty(_MyAccountAddressForm, 'name', {
  value: 'MyAccountAddressForm'
});

var MyAccountAddressForm = middleware(_MyAccountAddressForm, "Component/MyAccountAddressForm/Component");

_defineProperty(MyAccountAddressForm, "propTypes", {
  address: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_2__["addressType"].isRequired,
  countries: _app_design_frontend_Scandiweb_pwa_src_app_type_Config__WEBPACK_IMPORTED_MODULE_3__["countriesType"].isRequired,
  default_country: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  addressLinesQty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
});

_defineProperty(MyAccountAddressForm, "defaultProps", {
  default_country: 'US',
  onSave: function onSave() {}
});

/* harmony default export */ __webpack_exports__["default"] = (MyAccountAddressForm);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressPopup/MyAccountAddressPopup.config.js":
/*!***********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountAddressPopup/MyAccountAddressPopup.config.js ***!
  \***********************************************************************************************************************/
/*! exports provided: ADDRESS_POPUP_ID, EDIT_ADDRESS, DELETE_ADDRESS, ADD_ADDRESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_POPUP_ID", function() { return ADDRESS_POPUP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_ADDRESS", function() { return EDIT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ADDRESS", function() { return DELETE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ADDRESS", function() { return ADD_ADDRESS; });
/* eslint-disable import/prefer-default-export */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
var ADDRESS_POPUP_ID = 'MyAccountAddressPopup';
var EDIT_ADDRESS = 'EDIT_ADDRESS';
var DELETE_ADDRESS = 'DELETE_ADDRESS';
var ADD_ADDRESS = 'ADD_ADDRESS';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.component.js":
/*!**************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.component.js ***!
  \**************************************************************************************************************************/
/*! exports provided: _MyAccountAddressTable, MyAccountAddressTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountAddressTable", function() { return _MyAccountAddressTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressTable", function() { return MyAccountAddressTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/KeyValueTable */ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _MyAccountAddressTable_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyAccountAddressTable.style */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.style.scss");
/* harmony import */ var _MyAccountAddressTable_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MyAccountAddressTable_style__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */






/** @namespace Component/MyAccountAddressTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountAddressTable =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountAddressTable, _Extensible);

  function _MyAccountAddressTable() {
    _classCallCheck(this, _MyAccountAddressTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(_MyAccountAddressTable).apply(this, arguments));
  }

  _createClass(_MyAccountAddressTable, [{
    key: "renderActions",
    value: function renderActions() {
      var _this$props = this.props,
          onEditClick = _this$props.onEditClick,
          onDeleteClick = _this$props.onDeleteClick,
          showActions = _this$props.showActions,
          _this$props$address = _this$props.address,
          default_billing = _this$props$address.default_billing,
          default_shipping = _this$props$address.default_shipping;
      var isDeleteAllowed = default_shipping || default_billing;

      if (!showActions) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          onClick: onEditClick
        }, __('Edit address')),
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          mods: {
            isHollow: true
          },
          onClick: onDeleteClick,
          disabled: isDeleteAllowed,
          title: isDeleteAllowed ? __('Can not delete - address is set as default.') : 'Delete this address'
        }, __('Delete')))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          countries = _this$props2.countries,
          mix = _this$props2.mix;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "MyAccountAddressTable",
          mix: mix
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isLoading: !countries.length
        }), this.renderTable(), this.renderActions())
      );
    }
  }, {
    key: "dataPairArray",
    get: function get() {
      var _this$props3 = this.props,
          address = _this$props3.address,
          getFormatedRegion = _this$props3.getFormatedRegion,
          showAdditionalFields = _this$props3.showAdditionalFields;
      var regionData = getFormatedRegion(address);
      var additionalFields = [{
        key: 'country',
        label: __('County'),
        source: regionData
      }, {
        key: 'region',
        label: __('State/Province'),
        source: regionData
      }, {
        key: 'city',
        label: __('City'),
        source: address // Will be back with B2B update
        // {
        //     key: 'company',
        //     label: __('Company'),
        //     source: address
        // }

      }];
      return [{
        key: 'firstname',
        label: __('First name'),
        source: address
      }, {
        key: 'lastname',
        label: __('Last name'),
        source: address
      }, {
        key: 'street',
        label: __('Street'),
        source: address
      }, {
        key: 'postcode',
        label: __('Postal code'),
        source: address
      }, {
        key: 'telephone',
        label: __('Phone number'),
        source: address
      }].concat(_toConsumableArray(showAdditionalFields ? additionalFields : []));
    }
  }]);

  return _MyAccountAddressTable;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__["default"]));
Object.defineProperty(_MyAccountAddressTable, 'name', {
  value: 'MyAccountAddressTable'
});

var MyAccountAddressTable = middleware(_MyAccountAddressTable, "Component/MyAccountAddressTable/Component");

_defineProperty(MyAccountAddressTable, "propTypes", {
  mix: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_4__["MixType"],
  getFormatedRegion: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  address: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_3__["addressType"].isRequired,
  showActions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showAdditionalFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onEditClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onDeleteClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  countries: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    available_regions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
    }))
  })).isRequired
});

_defineProperty(MyAccountAddressTable, "defaultProps", {
  showAdditionalFields: false,
  showActions: false,
  mix: {}
});

/* harmony default export */ __webpack_exports__["default"] = (MyAccountAddressTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.container.js":
/*!**************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.container.js ***!
  \**************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, _MyAccountAddressTableContainer, MyAccountAddressTableContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountAddressTableContainer", function() { return _MyAccountAddressTableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountAddressTableContainer", function() { return MyAccountAddressTableContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountAddressPopup/MyAccountAddressPopup.config */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressPopup/MyAccountAddressPopup.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Popup/Popup.action */ "../../../../../vendor/scandipwa/source/src/app/store/Popup/Popup.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Config */ "../../../../../vendor/scandipwa/source/src/app/type/Config.js");
/* harmony import */ var _MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyAccountAddressTable.component */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */








/** @namespace Component/MyAccountAddressTable/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    countries: state.ConfigReducer.countries
  };
}, "Component/MyAccountAddressTable/Container/mapStateToProps");
/** @namespace Component/MyAccountAddressTable/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    showEditPopup: function showEditPopup(payload) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_4__["showPopup"])(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__["ADDRESS_POPUP_ID"], payload));
    }
  };
}, "Component/MyAccountAddressTable/Container/mapDispatchToProps");
/** @namespace Component/MyAccountAddressTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountAddressTableContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountAddressTableContainer, _Extensible);

  function _MyAccountAddressTableContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _MyAccountAddressTableContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_MyAccountAddressTableContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      getFormatedRegion: _this.getFormatedRegion.bind(_assertThisInitialized(_this)),
      onEditClick: _this.onEditClick.bind(_assertThisInitialized(_this)),
      onDeleteClick: _this.onDeleteClick.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_MyAccountAddressTableContainer, [{
    key: "onEditClick",
    value: function onEditClick() {
      var _this$props = this.props,
          showEditPopup = _this$props.showEditPopup,
          address = _this$props.address;
      showEditPopup({
        action: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__["EDIT_ADDRESS"],
        title: __('Edit address'),
        address: address
      });
    }
  }, {
    key: "onDeleteClick",
    value: function onDeleteClick() {
      var _this$props2 = this.props,
          showEditPopup = _this$props2.showEditPopup,
          address = _this$props2.address;
      showEditPopup({
        action: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountAddressPopup_MyAccountAddressPopup_config__WEBPACK_IMPORTED_MODULE_3__["DELETE_ADDRESS"],
        title: __('Confirm delete'),
        address: address
      });
    }
  }, {
    key: "getFormatedRegion",
    value: function getFormatedRegion(address) {
      var countries = this.props.countries;
      var country_id = address.country_id,
          _address$region = address.region,
          region_id = _address$region.region_id,
          region = _address$region.region;
      var country = countries.find(function (_ref) {
        var id = _ref.id;
        return id === country_id;
      });

      if (!country) {
        return {};
      }

      var label = country.label,
          available_regions = country.available_regions;
      var regions = available_regions || [];

      var _ref2 = regions.find(function (_ref3) {
        var id = _ref3.id;
        return id === region_id;
      }) || {
        name: region
      },
          name = _ref2.name;

      return {
        country: label,
        region: name
      };
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _MyAccountAddressTable_component__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _MyAccountAddressTableContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_MyAccountAddressTableContainer, 'name', {
  value: 'MyAccountAddressTableContainer'
});

var MyAccountAddressTableContainer = middleware(_MyAccountAddressTableContainer, "Component/MyAccountAddressTable/Container");

_defineProperty(MyAccountAddressTableContainer, "propTypes", {
  address: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_5__["addressType"].isRequired,
  showEditPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  countries: _app_design_frontend_Scandiweb_pwa_src_app_type_Config__WEBPACK_IMPORTED_MODULE_6__["countriesType"].isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountAddressTableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.style.scss":
/*!************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountAddressTable/MyAccountAddressTable.style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1603192110275
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/MyAccount/MyAccount.config.js":
/*!*******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/MyAccount/MyAccount.config.js ***!
  \*******************************************************************************************/
/*! exports provided: MY_ACCOUNT_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_ACCOUNT_URL", function() { return MY_ACCOUNT_URL; });
/* eslint-disable import/prefer-default-export */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
var MY_ACCOUNT_URL = '/my-account';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/type/Account.js":
/*!***********************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/type/Account.js ***!
  \***********************************************************************/
/*! exports provided: regionType, addressType, addressesType, customerType, baseOrderInfoType, orderType, ordersType, DASHBOARD, MY_ORDERS, MY_WISHLIST, ADDRESS_BOOK, NEWSLETTER_SUBSCRIPTION, activeTabType, tabType, tabMapType, signInStateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionType", function() { return regionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressType", function() { return addressType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressesType", function() { return addressesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerType", function() { return customerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseOrderInfoType", function() { return baseOrderInfoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderType", function() { return orderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersType", function() { return ordersType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD", function() { return DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_ORDERS", function() { return MY_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_WISHLIST", function() { return MY_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_BOOK", function() { return ADDRESS_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWSLETTER_SUBSCRIPTION", function() { return NEWSLETTER_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeTabType", function() { return activeTabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabType", function() { return tabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabMapType", function() { return tabMapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInStateType", function() { return signInStateType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

var regionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  region_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  region: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  region_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
})]);
var addressType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  city: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  country_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  customer_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  default_billing: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  default_shipping: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  middlename: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  postcode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  regionType: regionType,
  street: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)]),
  suffix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  telephone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var addressesType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(addressType);
var customerType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  addressesType: addressesType,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  default_billing: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  default_shipping: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  dob: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.date,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  group_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  is_subscribed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  middlename: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  suffix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  taxvat: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var baseOrderInfoType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  increment_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  status_label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  grand_total: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  subtotal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}); // TODO: remove objects

var orderType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  base_order_info: baseOrderInfoType,
  order_products: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  payment_info: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  shipping_info: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});
var ordersType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(orderType);
var DASHBOARD = 'dashboard';
var MY_ORDERS = 'my-orders';
var MY_WISHLIST = 'my-wishlist';
var ADDRESS_BOOK = 'address-book';
var NEWSLETTER_SUBSCRIPTION = 'newsletter-subscription';
var activeTabType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string;
var tabType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var tabMapType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(tabType);
var signInStateType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string;

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/type/Config.js":
/*!**********************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/type/Config.js ***!
  \**********************************************************************/
/*! exports provided: regionType, countriesType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionType", function() { return regionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesType", function() { return countriesType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

var regionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var countriesType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  available_regions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(regionType)
}));

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Address/index.js":
/*!*****************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Address/index.js ***!
  \*****************************************************************************/
/*! exports provided: trimCustomerAddress, trimAddressFields, setAddressesInFormObject, getFormFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimCustomerAddress", function() { return trimCustomerAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimAddressFields", function() { return trimAddressFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddressesInFormObject", function() { return setAddressesInFormObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormFields", function() { return getFormFields; });
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

/** @namespace Util/Address/trimCustomerAddress */
var trimCustomerAddress = middleware(function (customerAddress) {
  var city = customerAddress.city,
      company = customerAddress.company,
      country_id = customerAddress.country_id,
      email = customerAddress.email,
      firstname = customerAddress.firstname,
      lastname = customerAddress.lastname,
      method = customerAddress.method,
      postcode = customerAddress.postcode,
      street = customerAddress.street,
      telephone = customerAddress.telephone,
      region = customerAddress.region;
  return _objectSpread2({
    city: city,
    company: company,
    country_id: country_id,
    email: email,
    firstname: firstname,
    lastname: lastname,
    method: method,
    postcode: postcode,
    street: street,
    telephone: telephone
  }, region);
}, "Util/Address/trimCustomerAddress");
/** @namespace Util/Address/trimAddressFields */

var trimAddressFields = middleware(function (fields) {
  var region = fields.region_string,
      fieldsData = _objectWithoutProperties(fields, ["region_string"]);

  return _objectSpread2(_objectSpread2({}, fieldsData), {}, {
    region: region
  });
}, "Util/Address/trimAddressFields");
/** transforming "street[index]" entries into a single "street" object
    for checkout/billing/myAccoutAddress form fields object */

/** @namespace Util/Address/setAddressesInFormObject */

var setAddressesInFormObject = middleware(function (fields, numberOfLines) {
  var addressKeys = new Array(numberOfLines).fill('').map(function (_, index) {
    return "street".concat(index);
  });
  var addressValues = addressKeys.map(function (key) {
    return fields[key];
  }); // removing street related fields from the form object

  var newFields = Object.keys(fields).filter(function (key) {
    return !addressKeys.includes(key);
  }).reduce(function (acc, key) {
    acc[key] = fields[key];
    return acc;
  }, {}); // setting single street entry to the form object

  newFields.street = addressValues;
  return newFields;
}, "Util/Address/setAddressesInFormObject"); // get Form Fields object depending on addressLinesQty

/** @namespace Util/Address/getFormFields */

var getFormFields = middleware(function (fields, addressLinesQty) {
  if (addressLinesQty === 1) {
    return fields;
  }

  return setAddressesInFormObject(fields, addressLinesQty);
}, "Util/Address/getFormFields");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

}]);
//# sourceMappingURL=account~checkout.js.map