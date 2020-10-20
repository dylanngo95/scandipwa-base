webpackHotUpdate("account~cart~category~misc~product",{

/***/ "./src/app/component/ProductCard/ProductCard.component.js":
/*!****************************************************************!*\
  !*** ./src/app/component/ProductCard/ProductCard.component.js ***!
  \****************************************************************/
/*! exports provided: _ProductCard, ProductCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ProductCard", function() { return _ProductCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image */ "../../../../../vendor/scandipwa/source/src/app/component/Image/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "../../../../../vendor/scandipwa/source/src/app/component/Link/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _ProductAttributeValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductAttributeValue */ "../../../../../vendor/scandipwa/source/src/app/component/ProductAttributeValue/index.js");
/* harmony import */ var _ProductPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProductPrice */ "../../../../../vendor/scandipwa/source/src/app/component/ProductPrice/index.js");
/* harmony import */ var _ProductReviewRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProductReviewRating */ "../../../../../vendor/scandipwa/source/src/app/component/ProductReviewRating/index.js");
/* harmony import */ var _TextPlaceholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TextPlaceholder */ "../../../../../vendor/scandipwa/source/src/app/component/TextPlaceholder/index.js");
/* harmony import */ var _TierPrices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TierPrices */ "../../../../../vendor/scandipwa/source/src/app/component/TierPrices/index.js");
/* harmony import */ var _type_ProductList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../type/ProductList */ "../../../../../vendor/scandipwa/source/src/app/type/ProductList.js");
/* harmony import */ var _util_Product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/Product */ "../../../../../vendor/scandipwa/source/src/app/util/Product/index.js");
/* harmony import */ var _ProductCard_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProductCard.style */ "./src/app/component/ProductCard/ProductCard.style.scss");
/* harmony import */ var _ProductCard_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_style__WEBPACK_IMPORTED_MODULE_12__);
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













/**
 * Product card
 * @class ProductCard
 * @namespace Component/ProductCard/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _ProductCard =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_ProductCard, _Extensible);

  function _ProductCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _ProductCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_ProductCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "imageRef",
    /*#__PURE__*/
    Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _defineProperty(_assertThisInitialized(_this), "registerSharedElement", function () {
      var registerSharedElement = _this.props.registerSharedElement;
      registerSharedElement(_this.imageRef);
    });

    return _this;
  }

  _createClass(_ProductCard, [{
    key: "renderConfigurablePriceBadge",
    value: function renderConfigurablePriceBadge() {
      var type_id = this.props.product.type_id;

      if (type_id !== _util_Product__WEBPACK_IMPORTED_MODULE_11__["CONFIGURABLE"]) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          mix: {
            block: 'ProductCard',
            elem: 'PriceBadge'
          }
        }, __('As Low as'))
      );
    }
  }, {
    key: "renderProductPrice",
    value: function renderProductPrice() {
      var price_range = this.props.product.price_range;

      if (!price_range) {
        return (
          /*#__PURE__*/
          _checkBEM(React, _TextPlaceholder__WEBPACK_IMPORTED_MODULE_8__["default"], null)
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderConfigurablePriceBadge(),
        /*#__PURE__*/
        _checkBEM(React, _ProductPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
          price: price_range,
          mix: {
            block: 'ProductCard',
            elem: 'Price'
          }
        }))
      );
    }
  }, {
    key: "renderTierPrice",
    value: function renderTierPrice() {
      var productOrVariant = this.props.productOrVariant;
      return (
        /*#__PURE__*/
        _checkBEM(React, _TierPrices__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: productOrVariant,
          isLowestPrice: true
        })
      );
    }
  }, {
    key: "renderVisualConfigurableOptions",
    value: function renderVisualConfigurableOptions() {
      var availableVisualOptions = this.props.availableVisualOptions;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ProductCard",
          elem: "ConfigurableOptions"
        }, availableVisualOptions.map(function (_ref) {
          var value = _ref.value,
              label = _ref.label;
          return (
            /*#__PURE__*/
            _checkBEM(React, "span", {
              block: "ProductCard",
              elem: "Color",
              key: value,
              style: {
                backgroundColor: value
              },
              "aria-label": label
            })
          );
        }))
      );
    }
  }, {
    key: "renderPicture",
    value: function renderPicture() {
      var _this$props = this.props,
          _this$props$product = _this$props.product,
          id = _this$props$product.id,
          name = _this$props$product.name,
          thumbnail = _this$props.thumbnail;
      this.sharedComponent =
      /*#__PURE__*/
      _checkBEM(React, _Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        imageRef: this.imageRef,
        src: thumbnail,
        alt: name,
        ratio: "custom",
        mix: {
          block: 'ProductCard',
          elem: 'Picture'
        },
        isPlaceholder: !id
      });
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.sharedComponent,
        /*#__PURE__*/
        _checkBEM(React, "img", {
          style: {
            display: 'none'
          },
          alt: name,
          src: thumbnail
        }))
      );
    }
  }, {
    key: "renderReviews",
    value: function renderReviews() {
      var _this$props$product2, _this$props$product2$;

      // console.log(this.props);
      // const {
      //     product: {
      //         review_summary: {
      //             rating_summary
      //         } = {}
      //     }
      // } = this.props;
      var rating_summary = (_this$props$product2 = this.props.product) === null || _this$props$product2 === void 0 ? void 0 : (_this$props$product2$ = _this$props$product2.review_summary) === null || _this$props$product2$ === void 0 ? void 0 : _this$props$product2$.rating_summary;

      if (!rating_summary) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ProductCard",
          elem: "Reviews"
        },
        /*#__PURE__*/
        _checkBEM(React, _ProductReviewRating__WEBPACK_IMPORTED_MODULE_7__["default"], {
          summary: rating_summary || 0
        }))
      );
    }
  }, {
    key: "renderAdditionalProductDetails",
    value: function renderAdditionalProductDetails() {
      var _this$props2 = this.props,
          sku = _this$props2.product.sku,
          getAttribute = _this$props2.getAttribute;
      var _window$contentConfig = window.contentConfiguration.product_list_content;
      _window$contentConfig = _window$contentConfig === void 0 ? {} : _window$contentConfig;
      var attribute_to_display = _window$contentConfig.attribute_to_display;
      var brand = getAttribute(attribute_to_display || 'brand') || {};

      if (sku && !brand) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ProductCard",
          elem: "Brand",
          mods: {
            isLoaded: !!brand
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _ProductAttributeValue__WEBPACK_IMPORTED_MODULE_5__["default"], {
          attribute: brand,
          isFormattedAsText: true
        }))
      );
    }
  }, {
    key: "renderMainDetails",
    value: function renderMainDetails() {
      var name = this.props.product.name;
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "ProductCard",
          elem: "Name",
          mods: {
            isLoaded: !!name
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _TextPlaceholder__WEBPACK_IMPORTED_MODULE_8__["default"], {
          content: name,
          length: "medium"
        }))
      );
    }
  }, {
    key: "renderCardWrapper",
    value: function renderCardWrapper(children) {
      var _this$props3 = this.props,
          linkTo = _this$props3.linkTo,
          url = _this$props3.product.url;

      if (!url) {
        return (
          /*#__PURE__*/
          _checkBEM(React, "div", null, children)
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          block: "ProductCard",
          elem: "Link",
          to: linkTo,
          onClick: this.registerSharedElement
        }, children)
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          mix = _this$props4.mix,
          isLoading = _this$props4.isLoading;
      return (
        /*#__PURE__*/
        _checkBEM(React, "li", {
          block: "ProductCard",
          mix: mix
        },
        /*#__PURE__*/
        _checkBEM(React, _Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isLoading: isLoading
        }), this.renderCardWrapper(
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "figure", {
          block: "ProductCard",
          elem: "Figure"
        }, this.renderPicture()),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ProductCard",
          elem: "Content"
        }, this.renderReviews(), this.renderProductPrice(), this.renderVisualConfigurableOptions(), this.renderTierPrice(), this.renderMainDetails(), this.renderAdditionalProductDetails()))),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ProductCard",
          elem: "AdditionalContent"
        }, children))
      );
    }
  }]);

  return _ProductCard;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_ProductCard, 'name', {
  value: 'ProductCard'
});

var ProductCard = middleware(_ProductCard, "Component/ProductCard/Component");

_defineProperty(ProductCard, "propTypes", {
  linkTo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({}),
  product: _type_ProductList__WEBPACK_IMPORTED_MODULE_10__["ProductType"].isRequired,
  productOrVariant: _type_ProductList__WEBPACK_IMPORTED_MODULE_10__["ProductType"].isRequired,
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  availableVisualOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired,
  getAttribute: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  registerSharedElement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  mix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({})
});

_defineProperty(ProductCard, "defaultProps", {
  thumbnail: '',
  linkTo: {},
  children: null,
  isLoading: false,
  mix: {}
});

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "./src/app/component/ProductCard/ProductCard.style.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/ProductCard/ProductCard.style.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1603189014209
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

})
//# sourceMappingURL=account~cart~category~misc~product.1969ab87baf72f2219f9.hot-update.js.map