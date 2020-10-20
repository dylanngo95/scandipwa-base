webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Header/Header.component.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Header/Header.component.js ***!
  \********************************************************************************************/
/*! exports provided: CartOverlay, MyAccountOverlay, _Header, Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartOverlay", function() { return CartOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOverlay", function() { return MyAccountOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Header", function() { return _Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ClickOutside */ "../../../../../vendor/scandipwa/source/src/app/component/ClickOutside/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CmsBlock */ "../../../../../vendor/scandipwa/source/src/app/component/CmsBlock/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Link */ "../../../../../vendor/scandipwa/source/src/app/component/Link/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Logo */ "../../../../../vendor/scandipwa/source/src/app/component/Logo/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Menu */ "../../../../../vendor/scandipwa/source/src/app/component/Menu/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountOverlay/MyAccountOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationAbstract_NavigationAbstract_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NavigationAbstract/NavigationAbstract.component */ "../../../../../vendor/scandipwa/source/src/app/component/NavigationAbstract/NavigationAbstract.component.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationAbstract_NavigationAbstract_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NavigationAbstract/NavigationAbstract.config */ "../../../../../vendor/scandipwa/source/src/app/component/NavigationAbstract/NavigationAbstract.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_OfflineNotice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/OfflineNotice */ "../../../../../vendor/scandipwa/source/src/app/component/OfflineNotice/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_PopupSuspense__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/PopupSuspense */ "../../../../../vendor/scandipwa/source/src/app/component/PopupSuspense/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_SearchField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/SearchField */ "../../../../../vendor/scandipwa/source/src/app/component/SearchField/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_StoreSwitcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/StoreSwitcher */ "../../../../../vendor/scandipwa/source/src/app/component/StoreSwitcher/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Device */ "../../../../../vendor/scandipwa/source/src/app/type/Device.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/MiniCart */ "../../../../../vendor/scandipwa/source/src/app/type/MiniCart.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Auth */ "../../../../../vendor/scandipwa/source/src/app/util/Auth/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Media__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Media */ "../../../../../vendor/scandipwa/source/src/app/util/Media/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Media_Media__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Media/Media */ "../../../../../vendor/scandipwa/source/src/app/util/Media/Media.js");
/* harmony import */ var _Header_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Header.config */ "../../../../../vendor/scandipwa/source/src/app/component/Header/Header.config.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Header.style */ "../../../../../vendor/scandipwa/source/src/app/component/Header/Header.style.scss");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Header_style__WEBPACK_IMPORTED_MODULE_20__);
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

/* eslint-disable max-len */

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





















var CartOverlay =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cart */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("cart~checkout"), __webpack_require__.e("cart~product"), __webpack_require__.e("cart")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CartOverlay */ "../../../../../vendor/scandipwa/source/src/app/component/CartOverlay/index.js"));
});
var MyAccountOverlay =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | account */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("account~checkout~misc"), __webpack_require__.e("account~misc"), __webpack_require__.e("account~checkout"), __webpack_require__.e("account")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountOverlay */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountOverlay/index.js"));
});
/** @namespace Component/Header/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Header =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Header, _Extensible);

  function _Header() {
    var _getPrototypeOf2, _defineProperty2;

    var _this;

    _classCallCheck(this, _Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "stateMap", (_defineProperty2 = {}, _defineProperty(_defineProperty2, _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationAbstract_NavigationAbstract_config__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_STATE_NAME"], {
      title: true,
      logo: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["POPUP"], {
      title: true,
      close: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["PDP"], {
      back: true,
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CATEGORY"], {
      back: true,
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CUSTOMER_ACCOUNT"], {
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CUSTOMER_SUB_ACCOUNT"], {
      title: true,
      back: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CUSTOMER_ACCOUNT_PAGE"], {
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["MENU"], {
      search: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["MENU_SUBCATEGORY"], {
      back: true,
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["SEARCH"], {
      back: true,
      search: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CART"], {
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CART_OVERLAY"], {
      title: true,
      edit: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CART_EDITING"], {
      ok: true,
      title: true,
      cancel: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["FILTER"], {
      close: true,
      clear: true,
      title: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CHECKOUT"], {
      back: true,
      title: true,
      account: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CHECKOUT_ACCOUNT"], {
      title: true,
      close: true
    }), _defineProperty(_defineProperty2, _Header_config__WEBPACK_IMPORTED_MODULE_19__["CMS_PAGE"], {
      back: true,
      title: true
    }), _defineProperty2));

    _defineProperty(_assertThisInitialized(_this), "renderMap", {
      cancel: _this.renderCancelButton.bind(_assertThisInitialized(_this)),
      back: _this.renderBackButton.bind(_assertThisInitialized(_this)),
      close: _this.renderCloseButton.bind(_assertThisInitialized(_this)),
      title: _this.renderTitle.bind(_assertThisInitialized(_this)),
      logo: _this.renderLogo.bind(_assertThisInitialized(_this)),
      account: _this.renderAccount.bind(_assertThisInitialized(_this)),
      minicart: _this.renderMinicart.bind(_assertThisInitialized(_this)),
      search: _this.renderSearchField.bind(_assertThisInitialized(_this)),
      clear: _this.renderClearButton.bind(_assertThisInitialized(_this)),
      edit: _this.renderEditButton.bind(_assertThisInitialized(_this)),
      ok: _this.renderOkButton.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_Header, [{
    key: "renderBackButton",
    value: function renderBackButton() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onBackButtonClick = this.props.onBackButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          key: "back",
          block: "Header",
          elem: "Button",
          mods: {
            type: 'back',
            isVisible: isVisible
          },
          onClick: onBackButtonClick,
          "aria-label": "Go back",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1
        })
      );
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onCloseButtonClick = this.props.onCloseButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          key: "close",
          block: "Header",
          elem: "Button",
          mods: {
            type: 'close',
            isVisible: isVisible
          },
          onClick: onCloseButtonClick,
          "aria-label": "Close",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1
        })
      );
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props = this.props,
          isCheckout = _this$props.isCheckout,
          device = _this$props.device;

      if (device.isMobile || isCheckout) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], null)
      );
    }
  }, {
    key: "renderSearchField",
    value: function renderSearchField() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props2 = this.props,
          searchCriteria = _this$props2.searchCriteria,
          onSearchOutsideClick = _this$props2.onSearchOutsideClick,
          onSearchBarFocus = _this$props2.onSearchBarFocus,
          onSearchBarChange = _this$props2.onSearchBarChange,
          onClearSearchButtonClick = _this$props2.onClearSearchButtonClick,
          name = _this$props2.navigationState.name,
          isCheckout = _this$props2.isCheckout,
          hideActiveOverlay = _this$props2.hideActiveOverlay;

      if (isCheckout) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_SearchField__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: "search",
          searchCriteria: searchCriteria,
          onSearchOutsideClick: onSearchOutsideClick,
          onSearchBarFocus: onSearchBarFocus,
          onSearchBarChange: onSearchBarChange,
          onClearSearchButtonClick: onClearSearchButtonClick,
          isVisible: isVisible,
          isActive: name === _Header_config__WEBPACK_IMPORTED_MODULE_19__["SEARCH"],
          hideActiveOverlay: hideActiveOverlay
        })
      );
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var title = this.props.navigationState.title;
      return (
        /*#__PURE__*/
        _checkBEM(React, "h2", {
          key: "title",
          block: "Header",
          elem: "Title",
          mods: {
            isVisible: isVisible
          }
        }, title)
      );
    }
  }, {
    key: "renderLogoImage",
    value: function renderLogoImage() {
      var _this$props3 = this.props,
          header_logo_src = _this$props3.header_logo_src,
          logo_alt = _this$props3.logo_alt;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
          src: Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Media__WEBPACK_IMPORTED_MODULE_17__["default"])(header_logo_src, _app_design_frontend_Scandiweb_pwa_src_app_util_Media_Media__WEBPACK_IMPORTED_MODULE_18__["LOGO_MEDIA"]),
          alt: logo_alt
        })
      );
    }
  }, {
    key: "renderLogo",
    value: function renderLogo() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isLoading = this.props.isLoading;

      if (isLoading) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
          to: "/",
          "aria-label": "Go to homepage by clicking on ScandiPWA logo",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1,
          block: "Header",
          elem: "LogoWrapper",
          mods: {
            isVisible: isVisible
          },
          key: "logo"
        }, this.renderLogoImage())
      );
    }
  }, {
    key: "renderAccountOverlayFallback",
    value: function renderAccountOverlayFallback() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_PopupSuspense__WEBPACK_IMPORTED_MODULE_11__["default"], {
          actualOverlayKey: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_7__["CUSTOMER_ACCOUNT_OVERLAY_KEY"]
        })
      );
    }
  }, {
    key: "renderAccountOverlay",
    value: function renderAccountOverlay() {
      var _this$props4 = this.props,
          isCheckout = _this$props4.isCheckout,
          showMyAccountLogin = _this$props4.showMyAccountLogin,
          onSignIn = _this$props4.onSignIn; // This is here to prevent the popup-suspense from rendering

      if (!showMyAccountLogin) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
          fallback: this.renderAccountOverlayFallback()
        },
        /*#__PURE__*/
        _checkBEM(React, MyAccountOverlay, {
          onSignIn: onSignIn,
          isCheckout: isCheckout
        }))
      );
    }
  }, {
    key: "renderAccountButton",
    value: function renderAccountButton(isVisible) {
      var onMyAccountButtonClick = this.props.onMyAccountButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Header",
          elem: "MyAccountWrapper",
          tabIndex: "0",
          onClick: onMyAccountButtonClick,
          "aria-label": "Open my account",
          id: "myAccount"
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Header",
          elem: "MyAccountTitle"
        }, __('Account')),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Header",
          elem: "Button",
          mods: {
            isVisible: isVisible,
            type: 'account'
          }
        }))
      );
    }
  }, {
    key: "renderAccount",
    value: function renderAccount() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props5 = this.props,
          onMyAccountOutsideClick = _this$props5.onMyAccountOutsideClick,
          isCheckout = _this$props5.isCheckout,
          device = _this$props5.device; // on mobile hide button if not in checkout

      if (device.isMobile && !isCheckout) {
        return null;
      }

      if (isCheckout && Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_16__["isSignedIn"])()) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClick: onMyAccountOutsideClick,
          key: "account"
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          "aria-label": "My account",
          block: "Header",
          elem: "MyAccount"
        }, this.renderAccountButton(isVisible), this.renderAccountOverlay()))
      );
    }
  }, {
    key: "renderMinicartItemsQty",
    value: function renderMinicartItemsQty() {
      var items_qty = this.props.cartTotals.items_qty;

      if (!items_qty) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "span", {
          "aria-label": "Items in cart",
          block: "Header",
          elem: "MinicartItemCount"
        }, items_qty)
      );
    }
  }, {
    key: "renderMinicartOverlayFallback",
    value: function renderMinicartOverlayFallback() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_PopupSuspense__WEBPACK_IMPORTED_MODULE_11__["default"], {
          actualOverlayKey: _Header_config__WEBPACK_IMPORTED_MODULE_19__["CART_OVERLAY"]
        })
      );
    }
  }, {
    key: "renderMinicartOverlay",
    value: function renderMinicartOverlay() {
      var shouldRenderCartOverlay = this.props.shouldRenderCartOverlay;

      if (!shouldRenderCartOverlay) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
          fallback: this.renderMinicartOverlayFallback()
        },
        /*#__PURE__*/
        _checkBEM(React, CartOverlay, null))
      );
    }
  }, {
    key: "renderMinicartButton",
    value: function renderMinicartButton() {
      var onMinicartButtonClick = this.props.onMinicartButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Header",
          elem: "MinicartButtonWrapper",
          tabIndex: "0",
          onClick: onMinicartButtonClick
        },
        /*#__PURE__*/
        _checkBEM(React, "span", {
          block: "Header",
          elem: "MinicartTitle"
        }, __('Cart')),
        /*#__PURE__*/
        _checkBEM(React, "span", {
          "aria-label": "Minicart",
          block: "Header",
          elem: "MinicartIcon"
        }), this.renderMinicartItemsQty())
      );
    }
  }, {
    key: "renderMinicart",
    value: function renderMinicart() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props6 = this.props,
          onMinicartOutsideClick = _this$props6.onMinicartOutsideClick,
          isCheckout = _this$props6.isCheckout,
          device = _this$props6.device;

      if (device.isMobile || isCheckout) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClick: onMinicartOutsideClick,
          key: "minicart"
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Header",
          elem: "Button",
          mods: {
            isVisible: isVisible,
            type: 'minicart'
          }
        }, this.renderMinicartButton(), this.renderMinicartOverlay()))
      );
    }
  }, {
    key: "renderClearButton",
    value: function renderClearButton() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props7 = this.props,
          isClearEnabled = _this$props7.isClearEnabled,
          onClearButtonClick = _this$props7.onClearButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          key: "clear",
          block: "Header",
          elem: "Button",
          mods: {
            type: 'clear',
            isVisible: isVisible,
            isDisabled: !isClearEnabled
          },
          onClick: onClearButtonClick,
          "aria-label": "Clear",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1
        })
      );
    }
  }, {
    key: "renderEditButton",
    value: function renderEditButton() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onEditButtonClick = this.props.onEditButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          key: "edit",
          block: "Header",
          elem: "Button",
          mods: {
            type: 'edit',
            isVisible: isVisible
          },
          onClick: onEditButtonClick,
          "aria-label": "Clear",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1
        })
      );
    }
  }, {
    key: "renderOkButton",
    value: function renderOkButton() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onOkButtonClick = this.props.onOkButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          key: "ok",
          block: "Header",
          elem: "Button",
          mods: {
            type: 'ok',
            isVisible: isVisible
          },
          onClick: onOkButtonClick,
          "aria-label": "Save changes",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1
        }, __('OK'))
      );
    }
  }, {
    key: "renderCancelButton",
    value: function renderCancelButton() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var onCancelButtonClick = this.props.onCancelButtonClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          key: "cancel",
          block: "Header",
          elem: "Button",
          mods: {
            type: 'cancel',
            isVisible: isVisible
          },
          onClick: onCancelButtonClick,
          "aria-label": "Cancel changes",
          "aria-hidden": !isVisible,
          tabIndex: isVisible ? 0 : -1
        }, __('Cancel'))
      );
    }
  }, {
    key: "renderContacts",
    value: function renderContacts() {
      var _window$contentConfig = window.contentConfiguration.header_content;
      _window$contentConfig = _window$contentConfig === void 0 ? {} : _window$contentConfig;
      var contacts_cms = _window$contentConfig.contacts_cms;

      if (contacts_cms) {
        return (
          /*#__PURE__*/
          _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
            identifier: contacts_cms
          })
        );
      } // following strings are not translated, use CMS blocks to do it


      return (
        /*#__PURE__*/
        _checkBEM(React, "dl", {
          block: "contacts-wrapper"
        },
        /*#__PURE__*/
        _checkBEM(React, "dt", null, __('Telephone:')),
        /*#__PURE__*/
        _checkBEM(React, "dd", null,
        /*#__PURE__*/
        _checkBEM(React, "a", {
          href: "tel:983829842"
        }, "+0 (983) 829842")),
        /*#__PURE__*/
        _checkBEM(React, "dt", null, __('Mail:')),
        /*#__PURE__*/
        _checkBEM(React, "dd", null,
        /*#__PURE__*/
        _checkBEM(React, "a", {
          href: "mailto:info@scandipwa.com"
        }, "info@scandipwa.com")))
      );
    }
  }, {
    key: "renderTopMenu",
    value: function renderTopMenu() {
      var device = this.props.device;

      if (device.isMobile) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Header",
          elem: "TopMenu"
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Header",
          elem: "Contacts"
        }, this.renderContacts()),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Header",
          elem: "Switcher"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_StoreSwitcher__WEBPACK_IMPORTED_MODULE_13__["default"], null)))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          _this$props8$navigati = _this$props8.navigationState,
          name = _this$props8$navigati.name,
          _this$props8$navigati2 = _this$props8$navigati.isHiddenOnMobile,
          isHiddenOnMobile = _this$props8$navigati2 === void 0 ? false : _this$props8$navigati2,
          isCheckout = _this$props8.isCheckout;
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "header", {
          block: "Header",
          mods: {
            name: name,
            isHiddenOnMobile: isHiddenOnMobile,
            isCheckout: isCheckout
          }
        }, this.renderTopMenu(),
        /*#__PURE__*/
        _checkBEM(React, "nav", {
          block: "Header",
          elem: "Nav"
        }, this.renderNavigationState()), this.renderMenu()),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_OfflineNotice__WEBPACK_IMPORTED_MODULE_10__["default"], null))
      );
    }
  }]);

  return _Header;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_NavigationAbstract_NavigationAbstract_component__WEBPACK_IMPORTED_MODULE_8__["default"]));
Object.defineProperty(_Header, 'name', {
  value: 'Header'
});

var Header = middleware(_Header, "Component/Header/Component");

_defineProperty(Header, "propTypes", {
  navigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  cartTotals: _app_design_frontend_Scandiweb_pwa_src_app_type_MiniCart__WEBPACK_IMPORTED_MODULE_15__["TotalsType"].isRequired,
  onBackButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCloseButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onSearchBarFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClearSearchButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onMyAccountButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onSearchBarChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClearButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onEditButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onMinicartButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onOkButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCancelButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onSearchOutsideClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onMyAccountOutsideClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onMinicartOutsideClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isClearEnabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  searchCriteria: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  header_logo_src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  logo_alt: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showMyAccountLogin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isCheckout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  device: _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_14__["DeviceType"].isRequired
});

_defineProperty(Header, "defaultProps", {
  logo_alt: 'ScandiPWA logo',
  showMyAccountLogin: false,
  header_logo_src: '',
  isLoading: true
});

/* harmony default export */ __webpack_exports__["default"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Router/Router.component.js":
/*!********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Router/Router.component.js ***!
  \********************************************************************************************/
/*! exports provided: CartPage, Checkout, CmsPage, HomePage, MyAccount, PasswordChangePage, SearchPage, ConfirmAccountPage, MenuPage, WishlistShared, withStoreRegex, _Router, Router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsPage", function() { return CmsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccount", function() { return MyAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangePage", function() { return PasswordChangePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAccountPage", function() { return ConfirmAccountPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistShared", function() { return WishlistShared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStoreRegex", function() { return withStoreRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Router", function() { return _Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Breadcrumbs */ "../../../../../vendor/scandipwa/source/src/app/component/Breadcrumbs/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CookiePopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CookiePopup */ "../../../../../vendor/scandipwa/source/src/app/component/CookiePopup/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_DemoNotice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/DemoNotice */ "../../../../../vendor/scandipwa/source/src/app/component/DemoNotice/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Footer */ "../../../../../vendor/scandipwa/source/src/app/component/Footer/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Header */ "../../../../../vendor/scandipwa/source/src/app/component/Header/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Meta */ "../../../../../vendor/scandipwa/source/src/app/component/Meta/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NavigationTabs */ "../../../../../vendor/scandipwa/source/src/app/component/NavigationTabs/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NewVersionPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NewVersionPopup */ "../../../../../vendor/scandipwa/source/src/app/component/NewVersionPopup/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_NotificationList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/NotificationList */ "../../../../../vendor/scandipwa/source/src/app/component/NotificationList/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_OfflineNotice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/OfflineNotice */ "../../../../../vendor/scandipwa/source/src/app/component/OfflineNotice/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_SomethingWentWrong__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/SomethingWentWrong */ "../../../../../vendor/scandipwa/source/src/app/route/SomethingWentWrong/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_UrlRewrites__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/UrlRewrites */ "../../../../../vendor/scandipwa/source/src/app/route/UrlRewrites/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_History__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/History */ "../../../../../vendor/scandipwa/source/src/app/util/History/index.js");
/* harmony import */ var _Router_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Router.config */ "../../../../../vendor/scandipwa/source/src/app/component/Router/Router.config.js");
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

/* eslint-disable react/jsx-no-bind */

/* eslint-disable max-len */

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



















var CartPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cart */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("cart~checkout"), __webpack_require__.e("cart~product"), __webpack_require__.e("cart")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/CartPage */ "../../../../../vendor/scandipwa/source/src/app/route/CartPage/index.js"));
});
var Checkout =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | checkout */[__webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("account~checkout~misc"), __webpack_require__.e("cart~checkout"), __webpack_require__.e("account~checkout"), __webpack_require__.e("checkout")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/Checkout */ "../../../../../vendor/scandipwa/source/src/app/route/Checkout/index.js"));
});
var CmsPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cms */[__webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("cms~product"), __webpack_require__.e("cms")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/CmsPage */ "../../../../../vendor/scandipwa/source/src/app/route/CmsPage/index.js"));
});
var HomePage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cms */[__webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("cms~product"), __webpack_require__.e("cms")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/HomePage */ "../../../../../vendor/scandipwa/source/src/app/route/HomePage/index.js"));
});
var MyAccount =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | account */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("account~checkout~misc"), __webpack_require__.e("account~misc"), __webpack_require__.e("account~checkout"), __webpack_require__.e("account")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/MyAccount */ "../../../../../vendor/scandipwa/source/src/app/route/MyAccount/index.js"));
});
var PasswordChangePage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | misc */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("account~checkout~misc"), __webpack_require__.e("account~misc"), __webpack_require__.e("misc~product"), __webpack_require__.e("misc")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/PasswordChangePage */ "../../../../../vendor/scandipwa/source/src/app/route/PasswordChangePage/index.js"));
});
var SearchPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | category */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("category~product"), __webpack_require__.e("category")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/SearchPage */ "../../../../../vendor/scandipwa/source/src/app/route/SearchPage/index.js"));
});
var ConfirmAccountPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cms */[__webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("cms~product"), __webpack_require__.e("cms")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/ConfirmAccountPage */ "../../../../../vendor/scandipwa/source/src/app/route/ConfirmAccountPage/index.js"));
});
var MenuPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cms */[__webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("cms~product"), __webpack_require__.e("cms")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/MenuPage */ "../../../../../vendor/scandipwa/source/src/app/route/MenuPage/index.js"));
});
var WishlistShared =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | misc */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("account~checkout~misc"), __webpack_require__.e("account~misc"), __webpack_require__.e("misc~product"), __webpack_require__.e("misc")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/WishlistSharedPage */ "../../../../../vendor/scandipwa/source/src/app/route/WishlistSharedPage/index.js"));
});
/** @namespace Component/Router/Component/withStoreRegex */

var withStoreRegex = middleware(function (path) {
  return window.storeRegexText.concat(path);
}, "Component/Router/Component/withStoreRegex");
/** @namespace Component/Router/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Router =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Router, _Extensible);

  function _Router() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _Router);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Router)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), _Router_config__WEBPACK_IMPORTED_MODULE_18__["BEFORE_ITEMS_TYPE"], [{
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_NotificationList__WEBPACK_IMPORTED_MODULE_13__["default"], null),
      position: 10
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_DemoNotice__WEBPACK_IMPORTED_MODULE_6__["default"], null),
      position: 15
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null),
      position: 20
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_NavigationTabs__WEBPACK_IMPORTED_MODULE_11__["default"], null),
      position: 25
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["default"], null),
      position: 30
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_NewVersionPopup__WEBPACK_IMPORTED_MODULE_12__["default"], null),
      position: 35
    }]);

    _defineProperty(_assertThisInitialized(_this), _Router_config__WEBPACK_IMPORTED_MODULE_18__["SWITCH_ITEMS_TYPE"], [{
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/'),
        exact: true,
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, HomePage, props)
          );
        }
      }),
      position: 10
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/search/:query/'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, SearchPage, props)
          );
        }
      }),
      position: 25
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/page'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, CmsPage, props)
          );
        }
      }),
      position: 40
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/cart'),
        exact: true,
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, CartPage, props)
          );
        }
      }),
      position: 50
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/checkout/:step?'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, Checkout, props)
          );
        }
      }),
      position: 55
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/:account*/createPassword/'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, PasswordChangePage, props)
          );
        }
      }),
      position: 60
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/:account*/confirm'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, ConfirmAccountPage, props)
          );
        }
      }),
      position: 65
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/my-account/:tab?'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, MyAccount, props)
          );
        }
      }),
      position: 70
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/forgot-password'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, MyAccount, props)
          );
        }
      }),
      position: 71
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/menu'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, MenuPage, props)
          );
        }
      }),
      position: 80
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: withStoreRegex('/wishlist/shared/:code'),
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, WishlistShared, props)
          );
        }
      }),
      position: 81
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        render: function render(props) {
          return (
            /*#__PURE__*/
            _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_route_UrlRewrites__WEBPACK_IMPORTED_MODULE_16__["default"], props)
          );
        }
      }),
      position: 1000
    }]);

    _defineProperty(_assertThisInitialized(_this), _Router_config__WEBPACK_IMPORTED_MODULE_18__["AFTER_ITEMS_TYPE"], [{
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null),
      position: 10
    }, {
      component:
      /*#__PURE__*/
      _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CookiePopup__WEBPACK_IMPORTED_MODULE_5__["default"], null),
      position: 20
    }]);

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false,
      errorDetails: {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleErrorReset", function () {
      _this.setState({
        hasError: false
      });
    });

    return _this;
  }

  _createClass(_Router, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.setState({
        hasError: true,
        errorDetails: {
          err: err,
          info: info
        }
      });
    }
  }, {
    key: "getSortedItems",
    value: function getSortedItems(type) {
      return this[type].sort(function (a, b) {
        return a.position - b.position;
      }).filter(function (entry) {
        if (!entry.component) {
          // eslint-disable-next-line no-console
          console.warn('There is an item without a component property declared in main router.');
          return false;
        }

        return true;
      });
    }
  }, {
    key: "renderItemsOfType",
    value: function renderItemsOfType(type) {
      return this.getSortedItems(type).map(function (_ref) {
        var position = _ref.position,
            component = _ref.component;
        return (
          /*#__PURE__*/
          Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(component, {
            key: position
          })
        );
      });
    }
  }, {
    key: "renderMainItems",
    value: function renderMainItems() {
      var isBigOffline = this.props.isBigOffline;

      if (!navigator.onLine && isBigOffline) {
        return (
          /*#__PURE__*/
          _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_OfflineNotice__WEBPACK_IMPORTED_MODULE_14__["default"], {
            isPage: true
          })
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
          fallback: this.renderFallbackPage()
        },
        /*#__PURE__*/
        _checkBEM(React, react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, this.renderItemsOfType(_Router_config__WEBPACK_IMPORTED_MODULE_18__["SWITCH_ITEMS_TYPE"])))
      );
    }
  }, {
    key: "renderErrorRouterContent",
    value: function renderErrorRouterContent() {
      var errorDetails = this.state.errorDetails;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_route_SomethingWentWrong__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onClick: this.handleErrorReset,
          errorDetails: errorDetails
        })
      );
    }
  }, {
    key: "renderFallbackPage",
    value: function renderFallbackPage() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "main", {
          style: {
            height: '100vh'
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isLoading: true
        }))
      );
    }
  }, {
    key: "renderDefaultRouterContent",
    value: function renderDefaultRouterContent() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderItemsOfType(_Router_config__WEBPACK_IMPORTED_MODULE_18__["BEFORE_ITEMS_TYPE"]), this.renderMainItems(), this.renderItemsOfType(_Router_config__WEBPACK_IMPORTED_MODULE_18__["AFTER_ITEMS_TYPE"]))
      );
    }
  }, {
    key: "renderRouterContent",
    value: function renderRouterContent() {
      var hasError = this.state.hasError;

      if (hasError) {
        return this.renderErrorRouterContent();
      }

      return this.renderDefaultRouterContent();
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Meta__WEBPACK_IMPORTED_MODULE_10__["default"], null),
        /*#__PURE__*/
        _checkBEM(React, react_router__WEBPACK_IMPORTED_MODULE_2__["Router"], {
          history: _app_design_frontend_Scandiweb_pwa_src_app_util_History__WEBPACK_IMPORTED_MODULE_17__["default"]
        }, this.renderRouterContent()))
      );
    }
  }]);

  return _Router;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_Router, 'name', {
  value: 'Router'
});

var Router = middleware(_Router, "Component/Router/Component");

_defineProperty(Router, "propTypes", {
  isBigOffline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

_defineProperty(Router, "defaultProps", {
  isBigOffline: false
});

/* harmony default export */ __webpack_exports__["default"] = (Router);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/UrlRewrites/UrlRewrites.component.js":
/*!**************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/UrlRewrites/UrlRewrites.component.js ***!
  \**************************************************************************************************/
/*! exports provided: ProductPage, CategoryPage, CmsPage, _UrlRewrites, UrlRewrites, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsPage", function() { return CmsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_UrlRewrites", function() { return _UrlRewrites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRewrites", function() { return UrlRewrites; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_route_NoMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/NoMatch */ "../../../../../vendor/scandipwa/source/src/app/route/NoMatch/index.js");
/* harmony import */ var _UrlRewrites_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UrlRewrites.config */ "../../../../../vendor/scandipwa/source/src/app/route/UrlRewrites/UrlRewrites.config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-len */

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




var ProductPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | product */[__webpack_require__.e("vendors~product"), __webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("category~product"), __webpack_require__.e("cms~product"), __webpack_require__.e("misc~product"), __webpack_require__.e("cart~product"), __webpack_require__.e("product")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/ProductPage */ "../../../../../vendor/scandipwa/source/src/app/route/ProductPage/index.js"));
});
var CategoryPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | category */[__webpack_require__.e("account~cart~category~misc~product"), __webpack_require__.e("account~cart~category~product"), __webpack_require__.e("category~product"), __webpack_require__.e("category")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/CategoryPage */ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/index.js"));
});
var CmsPage =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | cms */[__webpack_require__.e("account~checkout~cms~misc~product"), __webpack_require__.e("cms~product"), __webpack_require__.e("cms")]).then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/route/CmsPage */ "../../../../../vendor/scandipwa/source/src/app/route/CmsPage/index.js"));
});
/**
 * Additional types possible:
 * const TYPE_PWA = 'PWA_ROUTER';
 * const TYPE_CUSTOM = 'CUSTOM';
 * @namespace Route/UrlRewrites/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _UrlRewrites =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_UrlRewrites, _Extensible);

  function _UrlRewrites() {
    _classCallCheck(this, _UrlRewrites);

    return _possibleConstructorReturn(this, _getPrototypeOf(_UrlRewrites).apply(this, arguments));
  }

  _createClass(_UrlRewrites, [{
    key: "renderDefaultPage",
    value: function renderDefaultPage() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "main", null)
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          props = _this$props.props,
          type = _this$props.type,
          updateNoMatch = _this$props.updateNoMatch;

      switch (type) {
        case _UrlRewrites_config__WEBPACK_IMPORTED_MODULE_3__["TYPE_PRODUCT"]:
          return (
            /*#__PURE__*/
            _checkBEM(React, ProductPage, props)
          );

        case _UrlRewrites_config__WEBPACK_IMPORTED_MODULE_3__["TYPE_CMS_PAGE"]:
          return (
            /*#__PURE__*/
            _checkBEM(React, CmsPage, props)
          );

        case _UrlRewrites_config__WEBPACK_IMPORTED_MODULE_3__["TYPE_CATEGORY"]:
          return (
            /*#__PURE__*/
            _checkBEM(React, CategoryPage, props)
          );

        case _UrlRewrites_config__WEBPACK_IMPORTED_MODULE_3__["TYPE_NOTFOUND"]:
          updateNoMatch({
            noMatch: true
          });
          return (
            /*#__PURE__*/
            _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_route_NoMatch__WEBPACK_IMPORTED_MODULE_2__["default"], props)
          );

        default:
          return this.renderDefaultPage();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
          fallback: this.renderDefaultPage()
        }, this.renderContent())
      );
    }
  }]);

  return _UrlRewrites;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_UrlRewrites, 'name', {
  value: 'UrlRewrites'
});

var UrlRewrites = middleware(_UrlRewrites, "Route/UrlRewrites/Component");

_defineProperty(UrlRewrites, "propTypes", {
  isNotFound: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  props: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  updateNoMatch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

_defineProperty(UrlRewrites, "defaultProps", {
  isNotFound: false,
  props: {},
  type: ''
});

/* harmony default export */ __webpack_exports__["default"] = (UrlRewrites);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=bundle.1969ab87baf72f2219f9.hot-update.js.map