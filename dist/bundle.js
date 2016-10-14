webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path='./typings/index.d.ts'/>
	"use strict";
	var React = __webpack_require__(2);
	var ReactDom = __webpack_require__(3);
	var ReactRouter = __webpack_require__(4);
	var redux_1 = __webpack_require__(5);
	var react_redux_1 = __webpack_require__(6);
	var app_reducers_1 = __webpack_require__(7);
	var comment_box_component_1 = __webpack_require__(11);
	var store = redux_1.createStore(app_reducers_1.default);
	ReactDom.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(ReactRouter.Router, {history: ReactRouter.broserHistory}, React.createElement(ReactRouter.Route, {path: "/", component: comment_box_component_1.CommentBox}, React.createElement(ReactRouter.Route, {path: "search", component: comment_box_component_1.CommentBox}), React.createElement(ReactRouter.Route, {path: "comments", component: comment_box_component_1.CommentBox})))), document.getElementById('content'));


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_1 = __webpack_require__(5);
	var comments_reducers_1 = __webpack_require__(8);
	var reducers = redux_1.combineReducers({
	    commentsReducers: comments_reducers_1.default
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = reducers;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var comment_action_types_1 = __webpack_require__(9);
	var objectAssign = __webpack_require__(10);
	var initialCommentState = {
	    comments: Array()
	};
	var commentsReducers = function (state, action) {
	    if (state === void 0) { state = initialCommentState; }
	    switch (action.type) {
	        case comment_action_types_1.CommentActionTypes.ADD_COMMENT:
	            return objectAssign({}, state, {
	                comments: state.comments.concat([
	                    action.data.comment
	                ])
	            });
	        default:
	            return state;
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = commentsReducers;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	(function (CommentActionTypes) {
	    CommentActionTypes[CommentActionTypes["GET_ALL_COMMENTS"] = 0] = "GET_ALL_COMMENTS";
	    CommentActionTypes[CommentActionTypes["ADD_COMMENT"] = 1] = "ADD_COMMENT";
	})(exports.CommentActionTypes || (exports.CommentActionTypes = {}));
	var CommentActionTypes = exports.CommentActionTypes;


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var react_redux_1 = __webpack_require__(6);
	var React = __webpack_require__(2);
	var comment_list_component_1 = __webpack_require__(12);
	var comment_form_component_1 = __webpack_require__(14);
	var actionsCreators = __webpack_require__(15);
	var mapStateToProps = function (state) { return ({ comments: state.comments }); };
	var mapDispatchToProps = function (dispatch) { return ({
	    onCommentSubmit: function (comment) {
	        dispatch(actionsCreators.addComment(comment));
	    }
	}); };
	var CommentBox = (function (_super) {
	    __extends(CommentBox, _super);
	    function CommentBox(props) {
	        _super.call(this, props);
	    }
	    CommentBox.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {className: "commentBox"}, React.createElement("h1", null, "Comments"), React.createElement(comment_list_component_1.CommentList, {comments: this.props.comments}), React.createElement("br", null), React.createElement("br", null), React.createElement(comment_form_component_1.CommentForm, {onCommentSubmit: function () { return _this.props.onCommentSubmit; }}), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement("div", null, React.createElement("a", {href: "/search"}, React.createElement("b", null, "Go to Search page")))));
	    };
	    CommentBox = __decorate([
	        react_redux_1.connect(mapStateToProps, mapDispatchToProps)
	    ], CommentBox);
	    return CommentBox;
	}(React.Component));
	exports.CommentBox = CommentBox;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _this = this;
	var React = __webpack_require__(2);
	var comment_component_1 = __webpack_require__(13);
	exports.CommentList = function (props) {
	    var commentNodes = _this.props.comments.map(function (comment) {
	        (React.createElement(comment_component_1.Comment, {author: comment.author, text: comment.text}, comment.text));
	    });
	    return (React.createElement("div", {className: "commentList"}, commentNodes));
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _this = this;
	var React = __webpack_require__(2);
	exports.Comment = function (props) { return (React.createElement("div", {className: "comment"}, React.createElement("h2", {className: "commentAuthor"}, _this.props.author), _this.props.children)); };


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	;
	var CommentForm = (function (_super) {
	    __extends(CommentForm, _super);
	    function CommentForm(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.handleAuthorChange = function (e) {
	            _this.setState({ author: e.target.value, text: _this.state.text });
	        };
	        this.handleTextChange = function (e) {
	            _this.setState({ text: e.target.value, author: _this.state.author });
	        };
	        this.handleSubmit = function (e) {
	            e.preventDefault();
	            var author = _this.state.author.trim();
	            var text = _this.state.text.trim();
	            _this.props.onCommentSubmit({ author: author, text: text });
	            _this.setState({ author: '', text: '' });
	        };
	        this.state = { author: "", text: "" };
	    }
	    CommentForm.prototype.render = function () {
	        return (React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, React.createElement("input", {type: "text", placeholder: "Your name", value: this.state.author, onChange: this.handleAuthorChange}), "  ", React.createElement("input", {type: "text", placeholder: "Say something...", value: this.state.text, onChange: this.handleTextChange}), "  ", React.createElement("input", {type: "submit", value: "Post"})));
	    };
	    return CommentForm;
	}(React.Component));
	exports.CommentForm = CommentForm;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var comment_action_types_1 = __webpack_require__(9);
	exports.addComment = function (comment) { return ({
	    type: comment_action_types_1.CommentActionTypes.ADD_COMMENT,
	    data: {
	        comment: comment
	    }
	}); };
	exports.getAllComments = function () { return ({
	    type: comment_action_types_1.CommentActionTypes.GET_ALL_COMMENTS
	}); };


/***/ }
]);