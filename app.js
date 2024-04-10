/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//npm run dev\n\nconst config = {\n  type: (phaser__WEBPACK_IMPORTED_MODULE_0___default().AUTO),\n  width: 800,\n  height: 600,\n  physics: {\n    default: 'arcade',\n    arcade: {\n      debug: true\n    }\n  },\n  scene: {\n    preload,\n    create,\n    update\n  }\n};\nconst VELOCITY = 200;\nconst PIPES_TO_RENDER = 40;\nlet bird = null;\nlet pipes = null;\nlet pipeHorizontalDistance = 0;\nconst pipeVerticalDistanceRange = [150, 250];\nconst pipeHorizontalDistanceRange = [-500, -400];\nconst flapVelocity = 300;\nconst initBirdPos = {\n  x: config.width * .90,\n  y: config.height / 2\n};\nfunction preload() {\n  this.load.image('sky', 'assets/mysky.png');\n  this.load.image('bird', 'assets/bird.png');\n  this.load.image('pipe', 'assets/pipe.png');\n}\nfunction create() {\n  this.add.image(0, 0, 'sky').setOrigin(0, 0);\n  bird = this.physics.add.sprite(initBirdPos.x, initBirdPos.y, 'bird').setOrigin(0);\n  bird.body.gravity.y = -800;\n  pipes = this.physics.add.group();\n  for (let i = 0; i < PIPES_TO_RENDER; i++) {\n    const upperPipe = pipes.create(0, 0, 'pipe').setOrigin(0, 1);\n    const lowerPipe = pipes.create(0, 0, 'pipe').setOrigin(0, 0);\n    placePipe(upperPipe, lowerPipe);\n  }\n  pipes.setVelocityX(200);\n  this.input.keyboard.on('keydown_SPACE', flap);\n}\nfunction update(time, delta) {\n  if (bird.y < 0 - bird.height || bird.y > config.height) {\n    restartBirdPosition();\n  }\n  recyclePipes();\n}\nfunction placePipe(uPipe, lPipe) {\n  const rightMostX = getRightMostPipe();\n  const pipeVerticalDistance = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(...pipeVerticalDistanceRange);\n  const pipeVerticalPosition = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(0 + 20, config.height - 20 - pipeVerticalDistance);\n  const pipeHorizontalDistance = phaser__WEBPACK_IMPORTED_MODULE_0___default().Math.Between(...pipeHorizontalDistanceRange);\n  uPipe.x = rightMostX + pipeHorizontalDistance;\n  uPipe.y = pipeVerticalPosition;\n  lPipe.x = uPipe.x;\n  lPipe.y = uPipe.y + pipeVerticalDistance;\n}\nfunction recyclePipes() {\n  const tempPipes = [];\n  pipes.getChildren().forEach(pipe => {\n    if (pipe.getBounds().right <= 0) {\n      //couldnt figure out how to make them recyle from the left\n      tempPipes.push(pipe);\n      if (tempPipes.length === 2) {\n        placePipe(...tempPipes);\n      }\n    }\n  });\n}\nfunction getRightMostPipe() {\n  let rightMostX = 0;\n  pipes.getChildren().forEach(function (pipe) {\n    rightMostX = Math.min(pipe.x, rightMostX);\n  });\n  return rightMostX;\n}\nfunction restartBirdPosition() {\n  bird.x = initBirdPos.x;\n  bird.y = initBirdPos.y;\n  bird.body.velocity.x = 0;\n  bird.body.velocity.y = 0;\n}\nfunction flap() {\n  bird.body.velocity.y = flapVelocity;\n}\nnew (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtRQUMxQnpCLFNBQVMsQ0FBQyxHQUFHa0IsU0FBUyxDQUFDO01BQ3pCO0lBQ0Y7RUFDRixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNMLGdCQUFnQixHQUFHO0VBQzFCLElBQUlELFVBQVUsR0FBRyxDQUFDO0VBRWxCL0IsS0FBSyxDQUFDc0MsV0FBVyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxVQUFTQyxJQUFJLEVBQUM7SUFDeENULFVBQVUsR0FBR0csSUFBSSxDQUFDVyxHQUFHLENBQUNMLElBQUksQ0FBQ2xDLENBQUMsRUFBRXlCLFVBQVUsQ0FBQztFQUMzQyxDQUFDLENBQUM7RUFFRixPQUFPQSxVQUFVO0FBQ25CO0FBRUEsU0FBU0osbUJBQW1CLEdBQUc7RUFDN0I1QixJQUFJLENBQUNPLENBQUMsR0FBR0QsV0FBVyxDQUFDQyxDQUFDO0VBQ3RCUCxJQUFJLENBQUNRLENBQUMsR0FBR0YsV0FBVyxDQUFDRSxDQUFDO0VBQ3RCUixJQUFJLENBQUNjLElBQUksQ0FBQ2lDLFFBQVEsQ0FBQ3hDLENBQUMsR0FBRyxDQUFDO0VBQ3hCUCxJQUFJLENBQUNjLElBQUksQ0FBQ2lDLFFBQVEsQ0FBQ3ZDLENBQUMsR0FBRyxDQUFDO0FBQzFCO0FBRUEsU0FBU2lCLElBQUksR0FBRztFQUNkekIsSUFBSSxDQUFDYyxJQUFJLENBQUNpQyxRQUFRLENBQUN2QyxDQUFDLEdBQUdILFlBQVk7QUFDckM7QUFHQSxJQUFJckIsb0RBQVcsQ0FBQ0MsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx0dWRlbXlwYWNrYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG4vL25wbSBydW4gZGV2XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHdpZHRoOiA4MDAsXG4gIGhlaWdodDogNjAwLFxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogdHJ1ZSxcblxuICAgIH1cbiAgfSxcbiAgc2NlbmU6IHtcbiAgICBwcmVsb2FkLFxuICAgIGNyZWF0ZSxcbiAgICB1cGRhdGUsXG4gIH1cbn1cblxuY29uc3QgVkVMT0NJVFkgPSAyMDA7XG5jb25zdCBQSVBFU19UT19SRU5ERVIgPSA0MDtcblxubGV0IGJpcmQgPSBudWxsO1xubGV0IHBpcGVzID0gbnVsbDtcblxuXG5sZXQgcGlwZUhvcml6b250YWxEaXN0YW5jZSA9IDA7XG5cbmNvbnN0IHBpcGVWZXJ0aWNhbERpc3RhbmNlUmFuZ2UgPSBbMTUwLCAyNTBdO1xuY29uc3QgcGlwZUhvcml6b250YWxEaXN0YW5jZVJhbmdlID0gWy01MDAsIC00MDBdO1xuXG5jb25zdCBmbGFwVmVsb2NpdHkgPSAzMDA7XG5jb25zdCBpbml0QmlyZFBvcyA9IHt4OiBjb25maWcud2lkdGggKiAuOTAsIHk6IGNvbmZpZy5oZWlnaHQgLyAyfVxuXG5cbmZ1bmN0aW9uIHByZWxvYWQoKSB7XG5cbiAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL215c2t5LnBuZycpO1xuICB0aGlzLmxvYWQuaW1hZ2UoJ2JpcmQnLCAnYXNzZXRzL2JpcmQucG5nJyk7XG4gIHRoaXMubG9hZC5pbWFnZSgncGlwZScsICdhc3NldHMvcGlwZS5wbmcnKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHRoaXMuYWRkLmltYWdlKDAsIDAsICdza3knKS5zZXRPcmlnaW4oMCwgMCk7XG4gIGJpcmQgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZShpbml0QmlyZFBvcy54LCBpbml0QmlyZFBvcy55LCAnYmlyZCcpLnNldE9yaWdpbigwKTtcbiAgYmlyZC5ib2R5LmdyYXZpdHkueSA9IC04MDA7XG4gIFxuICBwaXBlcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFBJUEVTX1RPX1JFTkRFUjsgaSsrKSB7XG4gICAgY29uc3QgdXBwZXJQaXBlID0gcGlwZXMuY3JlYXRlKDAsIDAsICdwaXBlJykuc2V0T3JpZ2luKDAsIDEpO1xuICAgIGNvbnN0IGxvd2VyUGlwZSA9IHBpcGVzLmNyZWF0ZSgwLCAwLCAncGlwZScpLnNldE9yaWdpbigwLCAwKTtcbiAgICBcbiAgICBwbGFjZVBpcGUodXBwZXJQaXBlLCBsb3dlclBpcGUpO1xuICB9XG4gIHBpcGVzLnNldFZlbG9jaXR5WCgyMDApO1xuXG4gIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd25fU1BBQ0UnLCBmbGFwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gXG4gIGlmIChiaXJkLnkgPCAwIC0gYmlyZC5oZWlnaHQgfHwgYmlyZC55ID4gY29uZmlnLmhlaWdodCkge1xuICAgIHJlc3RhcnRCaXJkUG9zaXRpb24oKTtcbiAgfVxuXG4gIHJlY3ljbGVQaXBlcygpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVBpcGUodVBpcGUsIGxQaXBlKSB7XG4gIGNvbnN0IHJpZ2h0TW9zdFggPSBnZXRSaWdodE1vc3RQaXBlKCk7XG4gIFxuICBjb25zdCBwaXBlVmVydGljYWxEaXN0YW5jZSA9IFBoYXNlci5NYXRoLkJldHdlZW4oLi4ucGlwZVZlcnRpY2FsRGlzdGFuY2VSYW5nZSk7XG4gIGNvbnN0IHBpcGVWZXJ0aWNhbFBvc2l0aW9uID0gUGhhc2VyLk1hdGguQmV0d2VlbigwICsgMjAsIGNvbmZpZy5oZWlnaHQgLSAyMCAtIHBpcGVWZXJ0aWNhbERpc3RhbmNlKTtcbiAgY29uc3QgcGlwZUhvcml6b250YWxEaXN0YW5jZSA9IFBoYXNlci5NYXRoLkJldHdlZW4oLi4ucGlwZUhvcml6b250YWxEaXN0YW5jZVJhbmdlKTtcblxuXG4gIHVQaXBlLnggPSByaWdodE1vc3RYICsgcGlwZUhvcml6b250YWxEaXN0YW5jZTtcbiAgdVBpcGUueSA9IHBpcGVWZXJ0aWNhbFBvc2l0aW9uO1xuXG4gIGxQaXBlLnggPSB1UGlwZS54O1xuICBsUGlwZS55ID0gdVBpcGUueSArIHBpcGVWZXJ0aWNhbERpc3RhbmNlO1xufVxuXG5mdW5jdGlvbiByZWN5Y2xlUGlwZXMoKSB7XG4gIGNvbnN0IHRlbXBQaXBlcyA9IFtdO1xuICBwaXBlcy5nZXRDaGlsZHJlbigpLmZvckVhY2gocGlwZSA9PiB7XG4gICAgaWYgKHBpcGUuZ2V0Qm91bmRzKCkucmlnaHQgPD0gMCkgeyAvL2NvdWxkbnQgZmlndXJlIG91dCBob3cgdG8gbWFrZSB0aGVtIHJlY3lsZSBmcm9tIHRoZSBsZWZ0XG4gICAgICB0ZW1wUGlwZXMucHVzaChwaXBlKTtcbiAgICAgIGlmICh0ZW1wUGlwZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHBsYWNlUGlwZSguLi50ZW1wUGlwZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0UmlnaHRNb3N0UGlwZSgpIHtcbiAgbGV0IHJpZ2h0TW9zdFggPSAwO1xuXG4gIHBpcGVzLmdldENoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbihwaXBlKXtcbiAgICByaWdodE1vc3RYID0gTWF0aC5taW4ocGlwZS54LCByaWdodE1vc3RYKTtcbiAgfSlcblxuICByZXR1cm4gcmlnaHRNb3N0WDtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEJpcmRQb3NpdGlvbigpIHtcbiAgYmlyZC54ID0gaW5pdEJpcmRQb3MueDtcbiAgYmlyZC55ID0gaW5pdEJpcmRQb3MueTtcbiAgYmlyZC5ib2R5LnZlbG9jaXR5LnggPSAwO1xuICBiaXJkLmJvZHkudmVsb2NpdHkueSA9IDA7XG59XG5cbmZ1bmN0aW9uIGZsYXAoKSB7XG4gIGJpcmQuYm9keS52ZWxvY2l0eS55ID0gZmxhcFZlbG9jaXR5O1xufVxuXG5cbm5ldyBQaGFzZXIuR2FtZShjb25maWcpOyJdLCJuYW1lcyI6WyJQaGFzZXIiLCJjb25maWciLCJ0eXBlIiwiQVVUTyIsIndpZHRoIiwiaGVpZ2h0IiwicGh5c2ljcyIsImRlZmF1bHQiLCJhcmNhZGUiLCJkZWJ1ZyIsInNjZW5lIiwicHJlbG9hZCIsImNyZWF0ZSIsInVwZGF0ZSIsIlZFTE9DSVRZIiwiUElQRVNfVE9fUkVOREVSIiwiYmlyZCIsInBpcGVzIiwicGlwZUhvcml6b250YWxEaXN0YW5jZSIsInBpcGVWZXJ0aWNhbERpc3RhbmNlUmFuZ2UiLCJwaXBlSG9yaXpvbnRhbERpc3RhbmNlUmFuZ2UiLCJmbGFwVmVsb2NpdHkiLCJpbml0QmlyZFBvcyIsIngiLCJ5IiwibG9hZCIsImltYWdlIiwiYWRkIiwic2V0T3JpZ2luIiwic3ByaXRlIiwiYm9keSIsImdyYXZpdHkiLCJncm91cCIsImkiLCJ1cHBlclBpcGUiLCJsb3dlclBpcGUiLCJwbGFjZVBpcGUiLCJzZXRWZWxvY2l0eVgiLCJpbnB1dCIsImtleWJvYXJkIiwib24iLCJmbGFwIiwidGltZSIsImRlbHRhIiwicmVzdGFydEJpcmRQb3NpdGlvbiIsInJlY3ljbGVQaXBlcyIsInVQaXBlIiwibFBpcGUiLCJyaWdodE1vc3RYIiwiZ2V0UmlnaHRNb3N0UGlwZSIsInBpcGVWZXJ0aWNhbERpc3RhbmNlIiwiTWF0aCIsIkJldHdlZW4iLCJwaXBlVmVydGljYWxQb3NpdGlvbiIsInRlbXBQaXBlcyIsImdldENoaWxkcmVuIiwiZm9yRWFjaCIsInBpcGUiLCJnZXRCb3VuZHMiLCJyaWdodCIsInB1c2giLCJsZW5ndGgiLCJtaW4iLCJ2ZWxvY2l0eSIsIkdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaltudemypackage"] = self["webpackChunkaltudemypackage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;