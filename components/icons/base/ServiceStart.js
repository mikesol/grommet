'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ServicePlay = require('./ServicePlay');

var _ServicePlay2 = _interopRequireDefault(_ServicePlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  console.warn('ServiceStart has been renamed to ServicePlay.' + ' Plese update your import statement.');
  return _react2.default.createElement(_ServicePlay2.default, props);
};

module.exports = exports['default'];