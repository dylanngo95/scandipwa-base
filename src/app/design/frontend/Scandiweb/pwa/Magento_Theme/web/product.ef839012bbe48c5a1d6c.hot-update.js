webpackHotUpdate("product",{

/***/ "./src/app/component/ProductReviews/ProductReviews.component.js":
/*!**********************************************************************!*\
  !*** ./src/app/component/ProductReviews/ProductReviews.component.js ***!
  \**********************************************************************/
/*! exports provided: _ProductReviews, ProductReviews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ProductReviews", function() { return _ProductReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviews", function() { return ProductReviews; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentWrapper */ "../../../../../vendor/scandipwa/source/src/app/component/ContentWrapper/index.js");
/* harmony import */ var _ExpandableContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExpandableContent */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContent/index.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Popup */ "../../../../../vendor/scandipwa/source/src/app/component/Popup/index.js");
/* harmony import */ var _ProductReviewForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductReviewForm */ "../../../../../vendor/scandipwa/source/src/app/component/ProductReviewForm/index.js");
/* harmony import */ var _ProductReviewList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProductReviewList */ "../../../../../vendor/scandipwa/source/src/app/component/ProductReviewList/index.js");
/* harmony import */ var _ProductReviewRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProductReviewRating */ "../../../../../vendor/scandipwa/source/src/app/component/ProductReviewRating/index.js");
/* harmony import */ var _type_ProductList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../type/ProductList */ "../../../../../vendor/scandipwa/source/src/app/type/ProductList.js");
/* harmony import */ var _ProductReviews_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductReviews.config */ "./src/app/component/ProductReviews/ProductReviews.config.js");
/* harmony import */ var _ProductReviews_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductReviews.style */ "./src/app/component/ProductReviews/ProductReviews.style.scss");
/* harmony import */ var _ProductReviews_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ProductReviews_style__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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











/** @namespace Component/ProductReviews/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _ProductReviews =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_ProductReviews, _Extensible);

  function _ProductReviews() {
    _classCallCheck(this, _ProductReviews);

    return _possibleConstructorReturn(this, _getPrototypeOf(_ProductReviews).apply(this, arguments));
  }

  _createClass(_ProductReviews, [{
    key: "renderPopup",
    value: function renderPopup() {
      var product = this.props.product;
      return (
        /*#__PURE__*/
        _checkBEM(React, _Popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
          id: _ProductReviews_config__WEBPACK_IMPORTED_MODULE_9__["REVIEW_POPUP_ID"],
          mix: {
            block: 'ProductReviews',
            elem: 'Popup'
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _ProductReviewForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
          product: product
        }))
      );
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      var showPopup = this.props.showPopup;
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "ProductReviews",
          elem: "Button",
          mix: {
            block: 'Button'
          },
          onClick: showPopup
        }, __('Write a new review'))
      );
    }
  }, {
    key: "renderNoRating",
    value: function renderNoRating() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", null, __('There are no reviews yet! Click button on the right to submit one!'))
      );
    }
  }, {
    key: "renderRatingSchema",
    value: function renderRatingSchema(percent, reviewCount) {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "meta", {
          itemProp: "ratingValue",
          content: percent
        }),
        /*#__PURE__*/
        _checkBEM(React, "meta", {
          itemProp: "worstRating",
          content: 0
        }),
        /*#__PURE__*/
        _checkBEM(React, "meta", {
          itemProp: "bestRating",
          content: 100
        }),
        /*#__PURE__*/
        _checkBEM(React, "meta", {
          itemProp: "reviewCount",
          content: reviewCount
        }))
      );
    }
  }, {
    key: "renderRatingData",
    value: function renderRatingData() {
      var _this$props$product, _this$props$product$r, _this$props$product2, _this$props$product2$;

      // const {
      //     product: {
      //         review_summary: {
      //             rating_summary,
      //             review_count
      //         } = {}
      //     }
      // } = this.props;
      var rating_summary = (_this$props$product = this.props.product) === null || _this$props$product === void 0 ? void 0 : (_this$props$product$r = _this$props$product.review_summary) === null || _this$props$product$r === void 0 ? void 0 : _this$props$product$r.rating_summary;
      var review_count = (_this$props$product2 = this.props.product) === null || _this$props$product2 === void 0 ? void 0 : (_this$props$product2$ = _this$props$product2.review_summary) === null || _this$props$product2$ === void 0 ? void 0 : _this$props$product2$.review_count;
      var STARS_COUNT = 5;
      var PERCENT = 100; // eslint-disable-next-line no-mixed-operators

      var percent = parseFloat(STARS_COUNT * (rating_summary || 0) / PERCENT).toFixed(2);

      if (!review_count) {
        return this.renderNoRating();
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderRatingSchema(rating_summary, review_count),
        /*#__PURE__*/
        _checkBEM(React, _ProductReviewRating__WEBPACK_IMPORTED_MODULE_7__["default"], {
          mix: {
            block: 'ProductReviews',
            elem: 'SummaryRating'
          },
          summary: rating_summary
        }),
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "ProductReviews",
          elem: "SummaryDetails"
        }, percent,
        /*#__PURE__*/
        _checkBEM(React, "span", null, __('%s reviews', review_count || 0))))
      );
    }
  }, {
    key: "renderSummary",
    value: function renderSummary() {
      var _this$props$product3, _this$props$product3$;

      // const {
      //     product: {
      //         review_summary: {
      //             review_count
      //         } = {}
      //     }
      // } = this.props;
      var review_count = (_this$props$product3 = this.props.product) === null || _this$props$product3 === void 0 ? void 0 : (_this$props$product3$ = _this$props$product3.review_summary) === null || _this$props$product3$ === void 0 ? void 0 : _this$props$product3$.review_count;
      var reviewSchemaObject = review_count ? {
        itemType: 'http://schema.org/AggregateRating',
        itemProp: 'aggregateRating',
        itemScope: true
      } : {};
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", _extends({
          block: "ProductReviews",
          elem: "Summary"
        }, reviewSchemaObject),
        /*#__PURE__*/
        _checkBEM(React, "h3", {
          block: "ProductReviews",
          elem: "Title"
        }, __('Customer reviews')), this.renderRatingData(), this.renderButton())
      );
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var product = this.props.product;
      return (
        /*#__PURE__*/
        _checkBEM(React, _ProductReviewList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          product: product
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$product4, _this$props$product4$;

      var _this$props = this.props,
          product = _this$props.product,
          areDetailsLoaded = _this$props.areDetailsLoaded; // const {
      //     review_summary: { review_count } = {}
      // } = product;

      var review_count = (_this$props$product4 = this.props.product) === null || _this$props$product4 === void 0 ? void 0 : (_this$props$product4$ = _this$props$product4.review_summary) === null || _this$props$product4$ === void 0 ? void 0 : _this$props$product4$.review_count;
      var heading = areDetailsLoaded ? __('Product reviews (%s)', review_count || '0') : '';
      return (
        /*#__PURE__*/
        _checkBEM(React, _ContentWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Product reviews",
          mix: {
            block: 'ProductReviews'
          },
          wrapperMix: {
            block: 'ProductReviews',
            elem: 'Wrapper'
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _ExpandableContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
          mix: {
            block: 'ProductReviews',
            elem: 'Content'
          },
          heading: heading
        }, this.renderSummary(), this.renderList(), this.renderPopup()))
      );
    }
  }]);

  return _ProductReviews;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_ProductReviews, 'name', {
  value: 'ProductReviews'
});

var ProductReviews = middleware(_ProductReviews, "Component/ProductReviews/Component");

_defineProperty(ProductReviews, "propTypes", {
  product: _type_ProductList__WEBPACK_IMPORTED_MODULE_8__["ProductType"].isRequired,
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  areDetailsLoaded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

_defineProperty(ProductReviews, "defaultProps", {
  areDetailsLoaded: false
});

/* harmony default export */ __webpack_exports__["default"] = (ProductReviews);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=product.ef839012bbe48c5a1d6c.hot-update.js.map