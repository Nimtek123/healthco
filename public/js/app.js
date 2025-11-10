/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  "use strict";

  $(document).on('change', '.datatable-filter [data-filter="select"]', function () {
    window.renderedDataTable.ajax.reload(null, false);
  });
  $(document).on('input', '.dt-search', function () {
    window.renderedDataTable.ajax.reload(null, false);
  });
  var confirmSwal = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(message) {
      var _window$localMessages, _window$localMessages2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            console.log(message);
            _context.n = 1;
            return Swal.fire({
              title: message,
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#858482',
              confirmButtonText: ((_window$localMessages = window.localMessagesUpdate) === null || _window$localMessages === void 0 || (_window$localMessages = _window$localMessages.messages) === null || _window$localMessages === void 0 ? void 0 : _window$localMessages.yes) || 'Yes',
              cancelButtonText: ((_window$localMessages2 = window.localMessagesUpdate) === null || _window$localMessages2 === void 0 || (_window$localMessages2 = _window$localMessages2.messages) === null || _window$localMessages2 === void 0 ? void 0 : _window$localMessages2.cancel) || 'Cancel',
              showClass: {
                popup: 'animate__animated animate__zoomIn'
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              }
            }).then(function (result) {
              return result;
            });
          case 1:
            return _context.a(2, _context.v);
        }
      }, _callee);
    }));
    return function confirmSwal(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  window.confirmSwal = confirmSwal;
  var confirmDeleteSwal = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(message) {
      var _window$localMessages3, _window$localMessages4;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return Swal.fire({
              title: message.message,
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#858482',
              confirmButtonText: ((_window$localMessages3 = window.localMessagesUpdate) === null || _window$localMessages3 === void 0 || (_window$localMessages3 = _window$localMessages3.messages) === null || _window$localMessages3 === void 0 ? void 0 : _window$localMessages3.yes) || 'Yes',
              cancelButtonText: ((_window$localMessages4 = window.localMessagesUpdate) === null || _window$localMessages4 === void 0 || (_window$localMessages4 = _window$localMessages4.messages) === null || _window$localMessages4 === void 0 ? void 0 : _window$localMessages4.cancel) || 'Cancel',
              showClass: {
                popup: 'animate__animated animate__zoomIn'
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              }
            }).then(function (result) {
              return result;
            });
          case 1:
            return _context2.a(2, _context2.v);
        }
      }, _callee2);
    }));
    return function confirmDeleteSwal(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  window.confirmDeleteSwal = confirmDeleteSwal;
  $('#quick-action-form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var url = form.attr('action');
    var message = $('[name="message_' + $('[name="action_type"]').val() + '"]').val();
    var rowdIds = $("#datatable_wrapper .select-table-row:checked").map(function () {
      return $(this).val();
    }).get();
    confirmSwal(message).then(function (result) {
      if (!result.isConfirmed) return;
      callActionAjax({
        url: "".concat(url, "?rowIds=").concat(rowdIds),
        body: form.serialize()
      });
    });
  });

  // Update status on switch
  $(document).on('change', '#datatable_wrapper .switch-status-featured', function (e) {
    if (!e.originalEvent) return;
    var url = $(this).attr('data-url');
    var body = {
      featured: $(this).prop('checked') ? 1 : 0,
      _token: $(this).attr('data-token')
    };
    callActionAjax({
      url: url,
      body: body
    });
  });

  // Update status on switch
  $(document).on('change', '#datatable_wrapper .switch-status-change', function (e) {
    if (!e.originalEvent) return;
    var url = $(this).attr('data-url');
    var body = {
      status: $(this).prop('checked') ? 1 : 0,
      _token: $(this).attr('data-token')
    };
    callActionAjax({
      url: url,
      body: body
    });
  });
  $(document).on('change', '#datatable_wrapper .change-select', function (e) {
    if (!e.originalEvent) return;
    var url = $(this).attr('data-url');
    var body = {
      value: $(this).val(),
      _token: $(this).attr('data-token')
    };
    callActionAjax({
      url: url,
      body: body
    });
  });
  function callActionAjax(_ref3) {
    var url = _ref3.url,
      body = _ref3.body;
    $.ajax({
      type: 'POST',
      url: url,
      data: body,
      success: function success(res) {
        if (res.status) {
          window.successSnackbar(res.message);
          window.renderedDataTable.ajax.reload(resetActionButtons, false);
          var event = new CustomEvent('update_quick_action', {
            detail: {
              value: true
            }
          });
          document.dispatchEvent(event);
        } else {
          Swal.fire({
            title: 'Error',
            text: res.message,
            icon: "error",
            showClass: {
              popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
              popup: 'animate__animated animate__zoomOut'
            }
          });
          // window.errorSnackbar(res.message)
        }
      }
    });
  }

  // Update status on button click
  $(document).on('click', '#datatable_wrapper .button-status-change', function () {
    var url = $(this).attr('data-url');
    var body = {
      status: 1,
      _token: $(this).attr('data-token')
    };
    callActionAjax({
      url: url,
      body: body
    });
  });
  function callActionAjax(_ref4) {
    var url = _ref4.url,
      body = _ref4.body;
    $.ajax({
      type: 'POST',
      url: url,
      data: body,
      success: function success(res) {
        if (res.status) {
          window.successSnackbar(res.message);
          window.renderedDataTable.ajax.reload(resetActionButtons, false);
          var event = new CustomEvent('update_quick_action', {
            detail: {
              value: true
            }
          });
          document.dispatchEvent(event);
        } else {
          window.errorSnackbar(res.message);
        }
      }
    });
  }

  //select row in datatable
  var dataTableRowCheck = function dataTableRowCheck(id) {
    checkRow();
    if ($(".select-table-row:checked").length > 0) {
      $("#quick-action-form").removeClass('form-disabled');
      //if at-least one row is selected
      document.getElementById("select-all-table").indeterminate = true;
      $("#quick-actions").find("input, textarea, button, select").removeAttr("disabled");
    } else {
      //if no row is selected
      document.getElementById("select-all-table").indeterminate = false;
      $("#select-all-table").attr("checked", false);
      resetActionButtons();
    }
    if ($("#datatable-row-" + id).is(":checked")) {
      $("#row-" + id).addClass("table-active");
    } else {
      $("#row-" + id).removeClass("table-active");
    }
  };
  window.dataTableRowCheck = dataTableRowCheck;
  var selectAllTable = function selectAllTable(source) {
    var checkboxes = document.getElementsByName("datatable_ids[]");
    for (var i = 0, n = checkboxes.length; i < n; i++) {
      // if disabled property is given to checkbox, it won't select particular checkbox.
      if (!$("#" + checkboxes[i].id).prop('disabled')) {
        checkboxes[i].checked = source.checked;
      }
      if ($("#" + checkboxes[i].id).is(":checked")) {
        $("#" + checkboxes[i].id).closest("tr").addClass("table-active");
        $("#quick-actions").find("input, textarea, button, select").removeAttr("disabled");
        if ($("#quick-action-type").val() == "") {
          $("#quick-action-apply").attr("disabled", true);
        }
      } else {
        $("#" + checkboxes[i].id).closest("tr").removeClass("table-active");
        resetActionButtons();
      }
    }
    checkRow();
  };
  window.selectAllTable = selectAllTable;
  var checkRow = function checkRow() {
    if ($(".select-table-row:checked").length > 0) {
      $("#quick-action-form").removeClass('form-disabled');
      $("#quick-action-apply").removeClass("btn-gray").addClass("btn-secondary");
    } else {
      $("#quick-action-form").addClass('form-disabled');
      $("#quick-action-apply").removeClass("btn-secondary").addClass("btn-gray");
    }
  };
  window.checkRow = checkRow;

  //reset table action form elements
  var resetActionButtons = function resetActionButtons() {
    checkRow();
    if (document.getElementById("select-all-table") !== undefined && document.getElementById("select-all-table") !== null) {
      document.getElementById("select-all-table").checked = false;
      $("#quick-action-form")[0].reset();
      $("#quick-actions").find("input, textarea, button, select").attr("disabled", "disabled");
      $("#quick-action-form").find("select").val(null).trigger("change");
    }
  };
  window.resetActionButtons = resetActionButtons;
  var initDatatable = function initDatatable(_ref5) {
    var url = _ref5.url,
      finalColumns = _ref5.finalColumns,
      advanceFilter = _ref5.advanceFilter,
      _ref5$drawCallback = _ref5.drawCallback,
      _drawCallback = _ref5$drawCallback === void 0 ? undefined : _ref5$drawCallback,
      orderColumn = _ref5.orderColumn;
    var data_table_limit = $('meta[name="data_table_limit"]').attr('content');

    // console.log("test",advanceFilter);
    window.renderedDataTable = $('#datatable').DataTable({
      processing: true,
      serverSide: true,
      autoWidth: false,
      responsive: true,
      fixedHeader: true,
      lengthMenu: [[5, 10, 15, 20, 25, 50, 100, -1], [5, 10, 15, 20, 25, 50, 100, 'All']],
      order: orderColumn,
      pageLength: data_table_limit,
      dom: '<"row align-items-center"><"table-responsive my-3 mt-3 mb-2 pb-1" rt><"row align-items-center data_table_widgets" <"col-md-6" <"d-flex align-items-center flex-wrap gap-3" l i>><"col-md-6" p>><"clear">',
      ajax: {
        "type": "GET",
        "url": url,
        "data": function data(d) {
          d.search = {
            value: $('.dt-search').val()
          };
          d.filter = {
            column_status: $('#column_status').val()
          };
          if (typeof advanceFilter == 'function' && advanceFilter() !== undefined) {
            d.filter = _objectSpread(_objectSpread({}, d.filter), advanceFilter());
          }
        }
      },
      drawCallback: function drawCallback() {
        if (laravel !== undefined) {
          window.laravel.initialize();
        }
        if (_drawCallback !== undefined && typeof _drawCallback == 'function') {
          _drawCallback();
        }
      },
      columns: finalColumns
    });
  };

  // Dynamic footer positioning based on datatable size
  var adjustFooterPosition = function adjustFooterPosition() {
    var footer = document.querySelector('.footer');
    var datatableWrapper = document.querySelector('#datatable_wrapper');
    var mainContent = document.querySelector('.main-content');
    if (footer && datatableWrapper && mainContent) {
      var datatableHeight = datatableWrapper.offsetHeight;
      var viewportHeight = window.innerHeight;
      var headerHeight = 120; // Approximate header height
      var footerHeight = footer.offsetHeight;

      // Calculate available space for content
      var availableSpace = viewportHeight - headerHeight - footerHeight;
      if (datatableHeight < availableSpace) {
        // If datatable is small, position footer at bottom of viewport
        footer.style.position = 'sticky';
        footer.style.bottom = '0';
        footer.style.marginTop = 'auto';
        mainContent.style.minHeight = 'calc(100vh - 120px)';
      } else {
        // If datatable is large, let footer follow content
        footer.style.position = 'relative';
        footer.style.marginTop = '20px';
        mainContent.style.minHeight = 'auto';
      }
    }
  };

  // Enhanced initDatatable function with footer positioning
  var enhancedInitDatatable = function enhancedInitDatatable(_ref6) {
    var url = _ref6.url,
      finalColumns = _ref6.finalColumns,
      advanceFilter = _ref6.advanceFilter,
      _ref6$drawCallback = _ref6.drawCallback,
      _drawCallback2 = _ref6$drawCallback === void 0 ? undefined : _ref6$drawCallback,
      orderColumn = _ref6.orderColumn;
    var data_table_limit = $('meta[name="data_table_limit"]').attr('content');
    window.renderedDataTable = $('#datatable').DataTable({
      processing: true,
      serverSide: true,
      autoWidth: false,
      responsive: true,
      fixedHeader: true,
      lengthMenu: [[5, 10, 15, 20, 25, 50, 100, -1], [5, 10, 15, 20, 25, 50, 100, 'All']],
      order: orderColumn,
      pageLength: data_table_limit,
      dom: '<"row align-items-center"><"table-responsive my-3 mt-3 mb-2 pb-1" rt><"row align-items-center data_table_widgets" <"col-md-6" <"d-flex align-items-center flex-wrap gap-3" l i>><"col-md-6" p>><"clear">',
      ajax: {
        "type": "GET",
        "url": url,
        "data": function data(d) {
          d.search = {
            value: $('.dt-search').val()
          };
          d.filter = {
            column_status: $('#column_status').val()
          };
          if (typeof advanceFilter == 'function' && advanceFilter() !== undefined) {
            d.filter = _objectSpread(_objectSpread({}, d.filter), advanceFilter());
          }
        }
      },
      drawCallback: function drawCallback() {
        if (laravel !== undefined) {
          window.laravel.initialize();
        }
        if (_drawCallback2 !== undefined && typeof _drawCallback2 == 'function') {
          _drawCallback2();
        }
        // Adjust footer position after datatable draw
        setTimeout(adjustFooterPosition, 100);
      },
      columns: finalColumns
    });
  };
  window.initDatatable = enhancedInitDatatable;
  window.adjustFooterPosition = adjustFooterPosition;

  // Call adjustFooterPosition on window resize
  $(window).on('resize', adjustFooterPosition);

  // Call adjustFooterPosition on page load
  $(document).ready(function () {
    setTimeout(adjustFooterPosition, 500);
  });
  function formatCurrency(number, noOfDecimal, decimalSeparator, thousandSeparator, currencyPosition, currencySymbol) {
    // Convert the number to a string with the desired decimal places
    var formattedNumber = parseFloat(number).toFixed(noOfDecimal);

    // Split the number into integer and decimal parts
    var _formattedNumber$spli = formattedNumber.split('.'),
      _formattedNumber$spli2 = _slicedToArray(_formattedNumber$spli, 2),
      integerPart = _formattedNumber$spli2[0],
      decimalPart = _formattedNumber$spli2[1];

    // Add thousand separators to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

    // Set decimalPart to an empty string if it is undefined
    decimalPart = decimalPart || '';

    // Construct the final formatted currency string
    var currencyString = '';
    if (currencyPosition === 'left' || currencyPosition === 'left_with_space') {
      currencyString += currencySymbol;
      if (currencyPosition === 'left_with_space') {
        currencyString += ' ';
      }
      currencyString += integerPart;
      // Add decimal part and decimal separator if applicable
      if (noOfDecimal > 0) {
        currencyString += decimalSeparator + decimalPart;
      }
    }
    if (currencyPosition === 'right' || currencyPosition === 'right_with_space') {
      // Add decimal part and decimal separator if applicable
      if (noOfDecimal > 0) {
        currencyString += integerPart + decimalSeparator + decimalPart;
      }
      if (currencyPosition === 'right_with_space') {
        currencyString += ' ';
      }
      currencyString += currencySymbol;
    }
    return currencyString;
  }
  window.formatCurrency = formatCurrency;

  // Ensure formatCurrency is available globally with fallback
  if (typeof window.formatCurrency === 'undefined') {
    window.formatCurrency = formatCurrency;
  }

  // Also make it available as a global function for compatibility
  window.currencyFormat = formatCurrency;
})();
/******/ })()
;