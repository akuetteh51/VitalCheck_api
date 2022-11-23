define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/extension.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../agave/src/Constants.ts":
/*!**********************************************************!*\
  !*** C:/shaozhu/git/ExcelJupyter/agave/src/Constants.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.localStorageKeyCode = 'ExcelJupyterCode';
        Constants.localStorageKeyConnectionUrl = "ExcelJupyterUrl";
        Constants.localStorageKeyConnectionToken = "ExcelJupyterToken";
        Constants.localStorageKeyConnectionNotebookName = "ExcelJupyterNotebookName";
        Constants.localStorageKeyEmbedNotebookUrl = "ExcelJupyterEmbedNotebookUrl";
        Constants.jupyterInputPromptPrefixForApi = "{635FE197-E26B-407E-9C3C-C3C34DC3AFE0}|";
        Constants.jupyterInputPromptPrefixForRichApiRequest = Constants.jupyterInputPromptPrefixForApi + "RICHAPI|";
        Constants.jupyterInputPromptPrefixForOperationMethodRequest = Constants.jupyterInputPromptPrefixForApi + "OPERATIONMETHOD|";
        return Constants;
    }());
    exports.Constants = Constants;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../../agave/src/JupyterKernelMessageContracts.ts":
/*!******************************************************************************!*\
  !*** C:/shaozhu/git/ExcelJupyter/agave/src/JupyterKernelMessageContracts.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
var msg =
    { "header":
        {
            "msg_id": "960fa11f-be831bb05301a5c2b95b379c",
            "msg_type": "execute_result",
            "username": "username",
            "session": "1ff9a80a-9e20eb2b4ff2d3ad35d10bc2",
            "date": "2019-03-25T04:59:30.661474Z",
            "version": "5.3"
        },
        "msg_id": "960fa11f-be831bb05301a5c2b95b379c",
        "msg_type": "execute_result",
        "parent_header":
            {
                "msg_id": "abe66fa0b98c4c07a8dce0ba5985a6ad",
                "username": "username",
                "session": "84db38e52f6140b087196b72276a456a",
                "msg_type": "execute_request",
                "version": "5.2",
                "date": "2019-03-25T04:59:30.657479Z"
            },
            "metadata": {},
            "content":
                { "data": { "text/plain": "142" }, "metadata": {}, "execution_count": 7 },
            "buffers": [],
            "channel": "iopub"
        };
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExecuteReplyContentStatus;
    (function (ExecuteReplyContentStatus) {
        ExecuteReplyContentStatus["ok"] = "ok";
        ExecuteReplyContentStatus["error"] = "error";
    })(ExecuteReplyContentStatus = exports.ExecuteReplyContentStatus || (exports.ExecuteReplyContentStatus = {}));
    var MessageType;
    (function (MessageType) {
        MessageType["execute_result"] = "execute_result";
        MessageType["stream"] = "stream";
        MessageType["execute_reply"] = "execute_reply";
        MessageType["input_request"] = "input_request";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/extension.ts":
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../../../../agave/src/JupyterKernelMessageContracts */ "../../../../agave/src/JupyterKernelMessageContracts.ts"), __webpack_require__(/*! ../../../../../agave/src/Constants */ "../../../../agave/src/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, JupyterKernelMessageContracts, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var g_inputResponseTimeoutSeconds = 30;
    var g_inputAckTimeoutSeconds = 1;
    var g_inputResponseTimeoutHandle = 0;
    var g_inputAckTimeoutHandle = 0;
    var g_jupyterReadyAckReceived = false;
    function getParentWindow() {
        if (window.opener) {
            return window.opener;
        }
        if (window.parent && window.parent !== window) {
            return window.parent;
        }
        return null;
    }
    function sendPostMessageToEventSource(msg, shouldLog, ev) {
        var textMessage = JSON.stringify(msg);
        if (shouldLog) {
            console.log("postMessage: " + textMessage);
        }
        ev.source.postMessage(textMessage, "*");
    }
    function handleWindowMessage(Jupyter, ev) {
        if (!ev || typeof (ev.data) !== "string" || ev.data.length === 0) {
            return;
        }
        var msg;
        try {
            msg = JSON.parse(ev.data);
        }
        catch (ex) {
        }
        if (!msg || !msg.officepy) {
            return;
        }
        // As there could be a lot of ping requests, handle the ping request without logging
        if (msg.officepy.type === "officepy_ping_request") {
            sendPostMessageToEventSource({
                officepy: {
                    type: "officepy_ping_response",
                    request_id: msg.officepy.request_id
                }
            }, false, ev);
            return;
        }
        if (msg.officepy.type === "officepy_jupyter_ready_ack") {
            g_jupyterReadyAckReceived = true;
        }
        else if (msg.officepy.type === "officepy_input_ack") {
            if (g_inputAckTimeoutHandle) {
                clearTimeout(g_inputAckTimeoutHandle);
                g_inputAckTimeoutHandle = 0;
            }
        }
        else if (msg.officepy.type === "officepy_input_response") {
            Jupyter.notebook.kernel.send_input_reply(msg.officepy.value);
            if (g_inputResponseTimeoutHandle) {
                clearTimeout(g_inputResponseTimeoutHandle);
                g_inputResponseTimeoutHandle = 0;
            }
            if (g_inputAckTimeoutHandle) {
                clearTimeout(g_inputAckTimeoutHandle);
                g_inputAckTimeoutHandle = 0;
            }
        }
        else if (msg.officepy.type === "officepy_execute_request") {
            var executionId_1 = msg.officepy.request_id;
            // immediately send ack
            sendPostMessageToEventSource({
                officepy: {
                    type: "officepy_execute_ack",
                    request_id: executionId_1
                }
            }, true, ev);
            var executionExpectResult_1 = msg.officepy.execution_expect_result;
            var jupyterExecuteMessageId_1 = Jupyter.notebook.kernel.execute(msg.officepy.value, {
                shell: {
                    reply: function (jupyterMsg) {
                        if (jupyterMsg.msg_type === JupyterKernelMessageContracts.MessageType.execute_reply) {
                            console.log("executionId:" + executionId_1 + ", status=" + jupyterMsg.content.status);
                            if (jupyterMsg.content.status === JupyterKernelMessageContracts.ExecuteReplyContentStatus.ok) {
                                var responseMsg = {
                                    officepy: {
                                        type: "officepy_execute_response",
                                        request_id: executionId_1,
                                        execute_response_has_value_or_error: false
                                    }
                                };
                                sendPostMessageToEventSource(responseMsg, true, ev);
                                if (!executionExpectResult_1) {
                                    // when executionExpectResult is true, the result will be returned in execute_result 
                                    // and the callback will be cleared there
                                    Jupyter.notebook.kernel.clear_callbacks_for_msg(jupyterExecuteMessageId_1);
                                }
                            }
                            else if (jupyterMsg.content.status === JupyterKernelMessageContracts.ExecuteReplyContentStatus.error) {
                                var errorName = jupyterMsg.content.ename || "GeneralError";
                                var errorMessage = jupyterMsg.content.evalue || "General Error";
                                var responseMsg = {
                                    officepy: {
                                        type: "officepy_execute_response",
                                        request_id: executionId_1,
                                        execute_response_has_value_or_error: true,
                                        error: errorName + ": " + errorMessage
                                    }
                                };
                                sendPostMessageToEventSource(responseMsg, true, ev);
                                Jupyter.notebook.kernel.clear_callbacks_for_msg(jupyterExecuteMessageId_1);
                            }
                        }
                    }
                },
                iopub: {
                    output: function (jupyterMsg) {
                        if (jupyterMsg.msg_type === JupyterKernelMessageContracts.MessageType.execute_result) {
                            var responseMsg = {
                                officepy: {
                                    type: "officepy_execute_response",
                                    request_id: executionId_1,
                                    execute_response_has_value_or_error: true,
                                    value: jupyterMsg.content.data["text/plain"]
                                }
                            };
                            console.log("executionId=" + executionId_1 + ", value=" + jupyterMsg.content.data["text/plain"]);
                            sendPostMessageToEventSource(responseMsg, true, ev);
                            Jupyter.notebook.kernel.clear_callbacks_for_msg(jupyterExecuteMessageId_1);
                        }
                        else if (jupyterMsg.msg_type === JupyterKernelMessageContracts.MessageType.stream &&
                            jupyterMsg.content.name === "stdout") {
                            var responseMsg = {
                                officepy: {
                                    type: "officepy_stdout",
                                    value: jupyterMsg.content.text
                                }
                            };
                            sendPostMessageToEventSource(responseMsg, true, ev);
                        }
                    }
                }
            }, {
                silent: false,
                allow_stdin: true
            });
        }
    }
    function updateKernelPrototype(Jupyter) {
        var proto = Object.getPrototypeOf(Jupyter.notebook.kernel);
        if (!proto._officepy_saved_handle_input_request) {
            proto._officepy_saved_handle_input_request = proto._handle_input_request;
            proto._handle_input_request = function (request) {
                var header = request.header;
                var content = request.content;
                var prefix = Constants_1.Constants.jupyterInputPromptPrefixForApi;
                if (header &&
                    header.msg_type === JupyterKernelMessageContracts.MessageType.input_request &&
                    content &&
                    typeof (content.prompt) === "string" &&
                    content.prompt.substr(0, prefix.length) === prefix) {
                    var msgToParent = {
                        officepy: {
                            type: "officepy_input_request",
                            value: content.prompt
                        }
                    };
                    var parent_1 = getParentWindow();
                    if (g_jupyterReadyAckReceived && parent_1) {
                        parent_1.postMessage(JSON.stringify(msgToParent), "*");
                        // to make sure the kernel is not waiting forever, we will send "Timeout" as reply
                        g_inputResponseTimeoutHandle = window.setTimeout(function () {
                            Jupyter.notebook.kernel.send_input_reply("Timeout");
                        }, g_inputResponseTimeoutSeconds * 1000);
                        g_inputAckTimeoutHandle = window.setTimeout(function () {
                            Jupyter.notebook.kernel.send_input_reply("NotConnected");
                        }, g_inputAckTimeoutSeconds * 1000);
                    }
                    else {
                        Jupyter.notebook.kernel.send_input_reply("NotConnected");
                    }
                }
                else {
                    this._officepy_saved_handle_input_request(request);
                }
            };
        }
    }
    function setup_extension(Jupyter) {
        console.log('officepy.setup_extension');
        window.addEventListener("message", function (ev) {
            handleWindowMessage(Jupyter, ev);
        });
        var readyMessage = {
            officepy: {
                type: "officepy_jupyter_ready"
            }
        };
        var parent = getParentWindow();
        if (parent) {
            parent.postMessage(JSON.stringify(readyMessage), "*");
        }
        updateKernelPrototype(Jupyter);
    }
    function load_ipython_extension() {
        requirejs(["base/js/namespace", "base/js/events"], function (Jupyter, events) {
            if (Jupyter.notebook.kernel) {
                setup_extension(Jupyter);
            }
            else {
                console.log("officepy extension waiting for kernel_ready");
                events.on('kernel_ready.Kernel', function () {
                    setup_extension(Jupyter);
                });
            }
        });
    }
    exports.load_ipython_extension = load_ipython_extension;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ })});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L3NoYW96aHUvZ2l0L0V4Y2VsSnVweXRlci9hZ2F2ZS9zcmMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy9DOi9zaGFvemh1L2dpdC9FeGNlbEp1cHl0ZXIvYWdhdmUvc3JjL0p1cHl0ZXJLZXJuZWxNZXNzYWdlQ29udHJhY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9leHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlHQUFPLENBQUMsbUJBQVMsRUFBRSxPQUFTLENBQUMsbUNBQUU7QUFDL0I7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHFDQUFxQztBQUMxRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQUEsb0dBQUM7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDBCQUEwQjtBQUMxQjtBQUNBLGlCQUFpQixVQUFVLHNCQUFzQixnQkFBZ0Isd0JBQXdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsQ0FBQyxtQ0FBRTtBQUMvQjtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywwR0FBMEc7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxnRUFBZ0U7QUFDckUsQ0FBQztBQUFBLG9HQUFDOzs7Ozs7Ozs7Ozs7QUM1Q0YsaUdBQU8sQ0FBQyxtQkFBUyxFQUFFLE9BQVMsRUFBRSwySUFBd0QsRUFBRSxtR0FBb0MsQ0FBQyxtQ0FBRTtBQUMvSDtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQUEsb0dBQUMiLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZXh0ZW5zaW9uLnRzXCIpO1xuIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgQ29uc3RhbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIENvbnN0YW50cygpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29uc3RhbnRzLmxvY2FsU3RvcmFnZUtleUNvZGUgPSAnRXhjZWxKdXB5dGVyQ29kZSc7XHJcbiAgICAgICAgQ29uc3RhbnRzLmxvY2FsU3RvcmFnZUtleUNvbm5lY3Rpb25VcmwgPSBcIkV4Y2VsSnVweXRlclVybFwiO1xyXG4gICAgICAgIENvbnN0YW50cy5sb2NhbFN0b3JhZ2VLZXlDb25uZWN0aW9uVG9rZW4gPSBcIkV4Y2VsSnVweXRlclRva2VuXCI7XHJcbiAgICAgICAgQ29uc3RhbnRzLmxvY2FsU3RvcmFnZUtleUNvbm5lY3Rpb25Ob3RlYm9va05hbWUgPSBcIkV4Y2VsSnVweXRlck5vdGVib29rTmFtZVwiO1xyXG4gICAgICAgIENvbnN0YW50cy5sb2NhbFN0b3JhZ2VLZXlFbWJlZE5vdGVib29rVXJsID0gXCJFeGNlbEp1cHl0ZXJFbWJlZE5vdGVib29rVXJsXCI7XHJcbiAgICAgICAgQ29uc3RhbnRzLmp1cHl0ZXJJbnB1dFByb21wdFByZWZpeEZvckFwaSA9IFwiezYzNUZFMTk3LUUyNkItNDA3RS05QzNDLUMzQzM0REMzQUZFMH18XCI7XHJcbiAgICAgICAgQ29uc3RhbnRzLmp1cHl0ZXJJbnB1dFByb21wdFByZWZpeEZvclJpY2hBcGlSZXF1ZXN0ID0gQ29uc3RhbnRzLmp1cHl0ZXJJbnB1dFByb21wdFByZWZpeEZvckFwaSArIFwiUklDSEFQSXxcIjtcclxuICAgICAgICBDb25zdGFudHMuanVweXRlcklucHV0UHJvbXB0UHJlZml4Rm9yT3BlcmF0aW9uTWV0aG9kUmVxdWVzdCA9IENvbnN0YW50cy5qdXB5dGVySW5wdXRQcm9tcHRQcmVmaXhGb3JBcGkgKyBcIk9QRVJBVElPTk1FVEhPRHxcIjtcclxuICAgICAgICByZXR1cm4gQ29uc3RhbnRzO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuQ29uc3RhbnRzID0gQ29uc3RhbnRzO1xyXG59KTtcclxuIiwiLypcclxudmFyIG1zZyA9XHJcbiAgICB7IFwiaGVhZGVyXCI6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIm1zZ19pZFwiOiBcIjk2MGZhMTFmLWJlODMxYmIwNTMwMWE1YzJiOTViMzc5Y1wiLFxyXG4gICAgICAgICAgICBcIm1zZ190eXBlXCI6IFwiZXhlY3V0ZV9yZXN1bHRcIixcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFwic2Vzc2lvblwiOiBcIjFmZjlhODBhLTllMjBlYjJiNGZmMmQzYWQzNWQxMGJjMlwiLFxyXG4gICAgICAgICAgICBcImRhdGVcIjogXCIyMDE5LTAzLTI1VDA0OjU5OjMwLjY2MTQ3NFpcIixcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNS4zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibXNnX2lkXCI6IFwiOTYwZmExMWYtYmU4MzFiYjA1MzAxYTVjMmI5NWIzNzljXCIsXHJcbiAgICAgICAgXCJtc2dfdHlwZVwiOiBcImV4ZWN1dGVfcmVzdWx0XCIsXHJcbiAgICAgICAgXCJwYXJlbnRfaGVhZGVyXCI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibXNnX2lkXCI6IFwiYWJlNjZmYTBiOThjNGMwN2E4ZGNlMGJhNTk4NWE2YWRcIixcclxuICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXNzaW9uXCI6IFwiODRkYjM4ZTUyZjYxNDBiMDg3MTk2YjcyMjc2YTQ1NmFcIixcclxuICAgICAgICAgICAgICAgIFwibXNnX3R5cGVcIjogXCJleGVjdXRlX3JlcXVlc3RcIixcclxuICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjUuMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjAxOS0wMy0yNVQwNDo1OTozMC42NTc0NzlaXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtZXRhZGF0YVwiOiB7fSxcclxuICAgICAgICAgICAgXCJjb250ZW50XCI6XHJcbiAgICAgICAgICAgICAgICB7IFwiZGF0YVwiOiB7IFwidGV4dC9wbGFpblwiOiBcIjE0MlwiIH0sIFwibWV0YWRhdGFcIjoge30sIFwiZXhlY3V0aW9uX2NvdW50XCI6IDcgfSxcclxuICAgICAgICAgICAgXCJidWZmZXJzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImNoYW5uZWxcIjogXCJpb3B1YlwiXHJcbiAgICAgICAgfTtcclxuKi9cclxuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgRXhlY3V0ZVJlcGx5Q29udGVudFN0YXR1cztcclxuICAgIChmdW5jdGlvbiAoRXhlY3V0ZVJlcGx5Q29udGVudFN0YXR1cykge1xyXG4gICAgICAgIEV4ZWN1dGVSZXBseUNvbnRlbnRTdGF0dXNbXCJva1wiXSA9IFwib2tcIjtcclxuICAgICAgICBFeGVjdXRlUmVwbHlDb250ZW50U3RhdHVzW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XHJcbiAgICB9KShFeGVjdXRlUmVwbHlDb250ZW50U3RhdHVzID0gZXhwb3J0cy5FeGVjdXRlUmVwbHlDb250ZW50U3RhdHVzIHx8IChleHBvcnRzLkV4ZWN1dGVSZXBseUNvbnRlbnRTdGF0dXMgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiZXhlY3V0ZV9yZXN1bHRcIl0gPSBcImV4ZWN1dGVfcmVzdWx0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVbXCJzdHJlYW1cIl0gPSBcInN0cmVhbVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiZXhlY3V0ZV9yZXBseVwiXSA9IFwiZXhlY3V0ZV9yZXBseVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlW1wiaW5wdXRfcmVxdWVzdFwiXSA9IFwiaW5wdXRfcmVxdWVzdFwiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGUgPSBleHBvcnRzLk1lc3NhZ2VUeXBlIHx8IChleHBvcnRzLk1lc3NhZ2VUeXBlID0ge30pKTtcclxufSk7XHJcbiIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4uLy4uLy4uLy4uLy4uL2FnYXZlL3NyYy9KdXB5dGVyS2VybmVsTWVzc2FnZUNvbnRyYWN0c1wiLCBcIi4uLy4uLy4uLy4uLy4uL2FnYXZlL3NyYy9Db25zdGFudHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBKdXB5dGVyS2VybmVsTWVzc2FnZUNvbnRyYWN0cywgQ29uc3RhbnRzXzEpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIGdfaW5wdXRSZXNwb25zZVRpbWVvdXRTZWNvbmRzID0gMzA7XHJcbiAgICB2YXIgZ19pbnB1dEFja1RpbWVvdXRTZWNvbmRzID0gMTtcclxuICAgIHZhciBnX2lucHV0UmVzcG9uc2VUaW1lb3V0SGFuZGxlID0gMDtcclxuICAgIHZhciBnX2lucHV0QWNrVGltZW91dEhhbmRsZSA9IDA7XHJcbiAgICB2YXIgZ19qdXB5dGVyUmVhZHlBY2tSZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50V2luZG93KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cub3BlbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2luZG93LnBhcmVudCAmJiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VuZFBvc3RNZXNzYWdlVG9FdmVudFNvdXJjZShtc2csIHNob3VsZExvZywgZXYpIHtcclxuICAgICAgICB2YXIgdGV4dE1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShtc2cpO1xyXG4gICAgICAgIGlmIChzaG91bGRMb2cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0TWVzc2FnZTogXCIgKyB0ZXh0TWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2LnNvdXJjZS5wb3N0TWVzc2FnZSh0ZXh0TWVzc2FnZSwgXCIqXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlV2luZG93TWVzc2FnZShKdXB5dGVyLCBldikge1xyXG4gICAgICAgIGlmICghZXYgfHwgdHlwZW9mIChldi5kYXRhKSAhPT0gXCJzdHJpbmdcIiB8fCBldi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtc2c7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbXNnID0gSlNPTi5wYXJzZShldi5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbXNnIHx8ICFtc2cub2ZmaWNlcHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBcyB0aGVyZSBjb3VsZCBiZSBhIGxvdCBvZiBwaW5nIHJlcXVlc3RzLCBoYW5kbGUgdGhlIHBpbmcgcmVxdWVzdCB3aXRob3V0IGxvZ2dpbmdcclxuICAgICAgICBpZiAobXNnLm9mZmljZXB5LnR5cGUgPT09IFwib2ZmaWNlcHlfcGluZ19yZXF1ZXN0XCIpIHtcclxuICAgICAgICAgICAgc2VuZFBvc3RNZXNzYWdlVG9FdmVudFNvdXJjZSh7XHJcbiAgICAgICAgICAgICAgICBvZmZpY2VweToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib2ZmaWNlcHlfcGluZ19yZXNwb25zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQ6IG1zZy5vZmZpY2VweS5yZXF1ZXN0X2lkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlLCBldik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1zZy5vZmZpY2VweS50eXBlID09PSBcIm9mZmljZXB5X2p1cHl0ZXJfcmVhZHlfYWNrXCIpIHtcclxuICAgICAgICAgICAgZ19qdXB5dGVyUmVhZHlBY2tSZWNlaXZlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1zZy5vZmZpY2VweS50eXBlID09PSBcIm9mZmljZXB5X2lucHV0X2Fja1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChnX2lucHV0QWNrVGltZW91dEhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGdfaW5wdXRBY2tUaW1lb3V0SGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGdfaW5wdXRBY2tUaW1lb3V0SGFuZGxlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtc2cub2ZmaWNlcHkudHlwZSA9PT0gXCJvZmZpY2VweV9pbnB1dF9yZXNwb25zZVwiKSB7XHJcbiAgICAgICAgICAgIEp1cHl0ZXIubm90ZWJvb2sua2VybmVsLnNlbmRfaW5wdXRfcmVwbHkobXNnLm9mZmljZXB5LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGdfaW5wdXRSZXNwb25zZVRpbWVvdXRIYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChnX2lucHV0UmVzcG9uc2VUaW1lb3V0SGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGdfaW5wdXRSZXNwb25zZVRpbWVvdXRIYW5kbGUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnX2lucHV0QWNrVGltZW91dEhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGdfaW5wdXRBY2tUaW1lb3V0SGFuZGxlKTtcclxuICAgICAgICAgICAgICAgIGdfaW5wdXRBY2tUaW1lb3V0SGFuZGxlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtc2cub2ZmaWNlcHkudHlwZSA9PT0gXCJvZmZpY2VweV9leGVjdXRlX3JlcXVlc3RcIikge1xyXG4gICAgICAgICAgICB2YXIgZXhlY3V0aW9uSWRfMSA9IG1zZy5vZmZpY2VweS5yZXF1ZXN0X2lkO1xyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzZW5kIGFja1xyXG4gICAgICAgICAgICBzZW5kUG9zdE1lc3NhZ2VUb0V2ZW50U291cmNlKHtcclxuICAgICAgICAgICAgICAgIG9mZmljZXB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvZmZpY2VweV9leGVjdXRlX2Fja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQ6IGV4ZWN1dGlvbklkXzFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdHJ1ZSwgZXYpO1xyXG4gICAgICAgICAgICB2YXIgZXhlY3V0aW9uRXhwZWN0UmVzdWx0XzEgPSBtc2cub2ZmaWNlcHkuZXhlY3V0aW9uX2V4cGVjdF9yZXN1bHQ7XHJcbiAgICAgICAgICAgIHZhciBqdXB5dGVyRXhlY3V0ZU1lc3NhZ2VJZF8xID0gSnVweXRlci5ub3RlYm9vay5rZXJuZWwuZXhlY3V0ZShtc2cub2ZmaWNlcHkudmFsdWUsIHtcclxuICAgICAgICAgICAgICAgIHNoZWxsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHk6IGZ1bmN0aW9uIChqdXB5dGVyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqdXB5dGVyTXNnLm1zZ190eXBlID09PSBKdXB5dGVyS2VybmVsTWVzc2FnZUNvbnRyYWN0cy5NZXNzYWdlVHlwZS5leGVjdXRlX3JlcGx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4ZWN1dGlvbklkOlwiICsgZXhlY3V0aW9uSWRfMSArIFwiLCBzdGF0dXM9XCIgKyBqdXB5dGVyTXNnLmNvbnRlbnQuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqdXB5dGVyTXNnLmNvbnRlbnQuc3RhdHVzID09PSBKdXB5dGVyS2VybmVsTWVzc2FnZUNvbnRyYWN0cy5FeGVjdXRlUmVwbHlDb250ZW50U3RhdHVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlTXNnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZpY2VweToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJvZmZpY2VweV9leGVjdXRlX3Jlc3BvbnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0X2lkOiBleGVjdXRpb25JZF8xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZV9yZXNwb25zZV9oYXNfdmFsdWVfb3JfZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRQb3N0TWVzc2FnZVRvRXZlbnRTb3VyY2UocmVzcG9uc2VNc2csIHRydWUsIGV2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4ZWN1dGlvbkV4cGVjdFJlc3VsdF8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gZXhlY3V0aW9uRXhwZWN0UmVzdWx0IGlzIHRydWUsIHRoZSByZXN1bHQgd2lsbCBiZSByZXR1cm5lZCBpbiBleGVjdXRlX3Jlc3VsdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNsZWFyZWQgdGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVweXRlci5ub3RlYm9vay5rZXJuZWwuY2xlYXJfY2FsbGJhY2tzX2Zvcl9tc2coanVweXRlckV4ZWN1dGVNZXNzYWdlSWRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoanVweXRlck1zZy5jb250ZW50LnN0YXR1cyA9PT0gSnVweXRlcktlcm5lbE1lc3NhZ2VDb250cmFjdHMuRXhlY3V0ZVJlcGx5Q29udGVudFN0YXR1cy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvck5hbWUgPSBqdXB5dGVyTXNnLmNvbnRlbnQuZW5hbWUgfHwgXCJHZW5lcmFsRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0ganVweXRlck1zZy5jb250ZW50LmV2YWx1ZSB8fCBcIkdlbmVyYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VNc2cgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmljZXB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9mZmljZXB5X2V4ZWN1dGVfcmVzcG9uc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RfaWQ6IGV4ZWN1dGlvbklkXzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlX3Jlc3BvbnNlX2hhc192YWx1ZV9vcl9lcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvck5hbWUgKyBcIjogXCIgKyBlcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFBvc3RNZXNzYWdlVG9FdmVudFNvdXJjZShyZXNwb25zZU1zZywgdHJ1ZSwgZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1cHl0ZXIubm90ZWJvb2sua2VybmVsLmNsZWFyX2NhbGxiYWNrc19mb3JfbXNnKGp1cHl0ZXJFeGVjdXRlTWVzc2FnZUlkXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlvcHViOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBmdW5jdGlvbiAoanVweXRlck1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanVweXRlck1zZy5tc2dfdHlwZSA9PT0gSnVweXRlcktlcm5lbE1lc3NhZ2VDb250cmFjdHMuTWVzc2FnZVR5cGUuZXhlY3V0ZV9yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZU1zZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZpY2VweToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9mZmljZXB5X2V4ZWN1dGVfcmVzcG9uc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9pZDogZXhlY3V0aW9uSWRfMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZV9yZXNwb25zZV9oYXNfdmFsdWVfb3JfZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBqdXB5dGVyTXNnLmNvbnRlbnQuZGF0YVtcInRleHQvcGxhaW5cIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGVjdXRpb25JZD1cIiArIGV4ZWN1dGlvbklkXzEgKyBcIiwgdmFsdWU9XCIgKyBqdXB5dGVyTXNnLmNvbnRlbnQuZGF0YVtcInRleHQvcGxhaW5cIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFBvc3RNZXNzYWdlVG9FdmVudFNvdXJjZShyZXNwb25zZU1zZywgdHJ1ZSwgZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVweXRlci5ub3RlYm9vay5rZXJuZWwuY2xlYXJfY2FsbGJhY2tzX2Zvcl9tc2coanVweXRlckV4ZWN1dGVNZXNzYWdlSWRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoanVweXRlck1zZy5tc2dfdHlwZSA9PT0gSnVweXRlcktlcm5lbE1lc3NhZ2VDb250cmFjdHMuTWVzc2FnZVR5cGUuc3RyZWFtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXB5dGVyTXNnLmNvbnRlbnQubmFtZSA9PT0gXCJzdGRvdXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlTXNnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmljZXB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib2ZmaWNlcHlfc3Rkb3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBqdXB5dGVyTXNnLmNvbnRlbnQudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kUG9zdE1lc3NhZ2VUb0V2ZW50U291cmNlKHJlc3BvbnNlTXNnLCB0cnVlLCBldik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpbGVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbGxvd19zdGRpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVLZXJuZWxQcm90b3R5cGUoSnVweXRlcikge1xyXG4gICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihKdXB5dGVyLm5vdGVib29rLmtlcm5lbCk7XHJcbiAgICAgICAgaWYgKCFwcm90by5fb2ZmaWNlcHlfc2F2ZWRfaGFuZGxlX2lucHV0X3JlcXVlc3QpIHtcclxuICAgICAgICAgICAgcHJvdG8uX29mZmljZXB5X3NhdmVkX2hhbmRsZV9pbnB1dF9yZXF1ZXN0ID0gcHJvdG8uX2hhbmRsZV9pbnB1dF9yZXF1ZXN0O1xyXG4gICAgICAgICAgICBwcm90by5faGFuZGxlX2lucHV0X3JlcXVlc3QgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IHJlcXVlc3QuaGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1ZXN0LmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gQ29uc3RhbnRzXzEuQ29uc3RhbnRzLmp1cHl0ZXJJbnB1dFByb21wdFByZWZpeEZvckFwaTtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIubXNnX3R5cGUgPT09IEp1cHl0ZXJLZXJuZWxNZXNzYWdlQ29udHJhY3RzLk1lc3NhZ2VUeXBlLmlucHV0X3JlcXVlc3QgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIChjb250ZW50LnByb21wdCkgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnByb21wdC5zdWJzdHIoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtc2dUb1BhcmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2ZmaWNlcHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib2ZmaWNlcHlfaW5wdXRfcmVxdWVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRlbnQucHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IGdldFBhcmVudFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnX2p1cHl0ZXJSZWFkeUFja1JlY2VpdmVkICYmIHBhcmVudF8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF8xLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1zZ1RvUGFyZW50KSwgXCIqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBtYWtlIHN1cmUgdGhlIGtlcm5lbCBpcyBub3Qgd2FpdGluZyBmb3JldmVyLCB3ZSB3aWxsIHNlbmQgXCJUaW1lb3V0XCIgYXMgcmVwbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ19pbnB1dFJlc3BvbnNlVGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1cHl0ZXIubm90ZWJvb2sua2VybmVsLnNlbmRfaW5wdXRfcmVwbHkoXCJUaW1lb3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnX2lucHV0UmVzcG9uc2VUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnX2lucHV0QWNrVGltZW91dEhhbmRsZSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1cHl0ZXIubm90ZWJvb2sua2VybmVsLnNlbmRfaW5wdXRfcmVwbHkoXCJOb3RDb25uZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdfaW5wdXRBY2tUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSnVweXRlci5ub3RlYm9vay5rZXJuZWwuc2VuZF9pbnB1dF9yZXBseShcIk5vdENvbm5lY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZpY2VweV9zYXZlZF9oYW5kbGVfaW5wdXRfcmVxdWVzdChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cF9leHRlbnNpb24oSnVweXRlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvZmZpY2VweS5zZXR1cF9leHRlbnNpb24nKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVdpbmRvd01lc3NhZ2UoSnVweXRlciwgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZWFkeU1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIG9mZmljZXB5OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm9mZmljZXB5X2p1cHl0ZXJfcmVhZHlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50V2luZG93KCk7XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkocmVhZHlNZXNzYWdlKSwgXCIqXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVLZXJuZWxQcm90b3R5cGUoSnVweXRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkX2lweXRob25fZXh0ZW5zaW9uKCkge1xyXG4gICAgICAgIHJlcXVpcmVqcyhbXCJiYXNlL2pzL25hbWVzcGFjZVwiLCBcImJhc2UvanMvZXZlbnRzXCJdLCBmdW5jdGlvbiAoSnVweXRlciwgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChKdXB5dGVyLm5vdGVib29rLmtlcm5lbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0dXBfZXh0ZW5zaW9uKEp1cHl0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvZmZpY2VweSBleHRlbnNpb24gd2FpdGluZyBmb3Iga2VybmVsX3JlYWR5XCIpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLm9uKCdrZXJuZWxfcmVhZHkuS2VybmVsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwX2V4dGVuc2lvbihKdXB5dGVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBleHBvcnRzLmxvYWRfaXB5dGhvbl9leHRlbnNpb24gPSBsb2FkX2lweXRob25fZXh0ZW5zaW9uO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==