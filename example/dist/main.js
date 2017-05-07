/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var Lite =\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// identity function for calling harmony imports with the correct context\n/******/ \t__webpack_require__.i = function(value) { return value; };\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 7);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geom_mat4__ = __webpack_require__(1);\\n\\r\\n\\r\\nclass Group {\\r\\n  constructor() {\\r\\n    this.x = 0;\\r\\n    this.y = 0;\\r\\n    this.width = 0;\\r\\n    this.height = 0;\\r\\n    \\r\\n    this.children = [];\\r\\n    this.transform = new __WEBPACK_IMPORTED_MODULE_0__geom_mat4__[\\\"a\\\" /* default */]();\\r\\n  }\\r\\n  \\r\\n  add(child) {\\r\\n    this.children.indexOf(child) === -1 ? this.children.push(child) : ``;\\r\\n    \\r\\n    this.refreshDimensions();\\r\\n  }\\r\\n  \\r\\n  refreshDimensions() {\\r\\n    const children = this.children;\\r\\n    let minX = Number.MAX_SAFE_INTEGER;\\r\\n    let maxX = Number.MIN_SAFE_INTEGER;\\r\\n    let minY = Number.MAX_SAFE_INTEGER;\\r\\n    let maxY = Number.MIN_SAFE_INTEGER;\\r\\n    \\r\\n    for (let i = 0, l = children.length, child; i < l; i++) {\\r\\n      child = children[i];\\r\\n      \\r\\n      minX = child.x < minX ? child.x : minX;\\r\\n      maxX = child.x > maxX ? child.x : maxX;\\r\\n      minY = child.y < minY ? child.y : minY;\\r\\n      maxY = child.y > maxY ? child.y : maxY;\\r\\n    }\\r\\n    \\r\\n    this.width = maxX - minX;\\r\\n    this.height = maxY - minY;\\r\\n  }\\r\\n  \\r\\n  update() {\\r\\n    const children = this.children;\\r\\n    \\r\\n    for (let i = 0, l = children.length; i < l; i++) {\\r\\n      children[i].update();\\r\\n    }\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Group;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./display/group.js\\n// module id = 0\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./display/group.js?\");\n\n/***/ }),\n/* 1 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/*\\r\\n* 0,  1,  2,  3,\\r\\n* 4,  5,  6,  7,\\r\\n* 8,  9,  10, 11,\\r\\n* 12, 13, 14, 15\\r\\n* */\\r\\n\\r\\nclass Mat4 extends Float32Array {\\r\\n  constructor() {\\r\\n    super(16);\\r\\n    this.identity();\\r\\n  }\\r\\n\\r\\n  identity() {\\r\\n    const t = this;\\r\\n    t[0] = t[5] = t[10] = t[15] = 1;\\r\\n    t[1] = t[2] = t[3] = t[4] = t[6] = t[7] = t[8] = t[9] = t[11] = t[12] = t[13] = t[14] = 0;\\r\\n  }\\r\\n\\r\\n  setCanvasProjection(w, h) {\\r\\n    const t = this;\\r\\n    \\r\\n    t[0] = 2 / w;\\r\\n    t[5] = -2 / h;\\r\\n    t[12] = -w / 2;\\r\\n    t[13] = h / 2;\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Mat4;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./geom/mat4.js\\n// module id = 1\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./geom/mat4.js?\");\n\n/***/ }),\n/* 2 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group__ = __webpack_require__(0);\\n\\r\\n\\r\\nclass Sprite extends __WEBPACK_IMPORTED_MODULE_0__group__[\\\"a\\\" /* default */] {\\r\\n  constructor(texture, frameName) {\\r\\n    super();\\r\\n    \\r\\n    this.texture = texture;\\r\\n    this.frameName = frameName;\\r\\n    \\r\\n    this.x = this.left = 0;\\r\\n    this.y = this.top = 0;\\r\\n    this.width = this.right = texture.width;\\r\\n    this.height = this.bottom = texture.height;\\r\\n\\r\\n    // [x, y, tex]\\r\\n    // worldTransform zIndex\\r\\n\\r\\n    const frame = this.frame = texture.atlas.frames.filter(f => f.filename === frameName)[0].frame; // todo awesome\\r\\n    const texW = texture.image.width;\\r\\n    const texH = texture.image.height;\\r\\n    \\r\\n    this.texCoord = {\\r\\n      l: frame.x / texW, \\r\\n      r: (frame.x + frame.w) / texW, \\r\\n      t: frame.y / texH, \\r\\n      b: (frame.y + frame.h) / texH\\r\\n    };\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Sprite;\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./display/sprite.js\\n// module id = 2\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./display/sprite.js?\");\n\n/***/ }),\n/* 3 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"class Texture {\\r\\n  constructor(image, atlas) {\\r\\n    this.image = image;\\r\\n    this.atlas = atlas;\\r\\n  }  \\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Texture;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./graphic/texture.js\\n// module id = 3\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./graphic/texture.js?\");\n\n/***/ }),\n/* 4 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__programManager_chuncks_standard_vert__ = __webpack_require__(6);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__programManager_chuncks_standard_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__programManager_chuncks_standard_vert__);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__programManager_chuncks_standard_frag__ = __webpack_require__(5);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__programManager_chuncks_standard_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__programManager_chuncks_standard_frag__);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programManager_program__ = __webpack_require__(9);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programManager_tex__ = __webpack_require__(10);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geom_mat4__ = __webpack_require__(1);\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nclass Renderer {\\r\\n  constructor(el) {\\r\\n    const gl = this.gl = el.getContext(`webgl`);\\r\\n    gl.viewport(0, 0, el.width, el.height);\\r\\n    gl.clearColor(0, 0, 0, 1);\\r\\n    \\r\\n    const program = this.program = new __WEBPACK_IMPORTED_MODULE_2__programManager_program__[\\\"a\\\" /* default */](gl, __WEBPACK_IMPORTED_MODULE_0__programManager_chuncks_standard_vert___default.a, __WEBPACK_IMPORTED_MODULE_1__programManager_chuncks_standard_frag___default.a);\\r\\n    this.tex = new __WEBPACK_IMPORTED_MODULE_3__programManager_tex__[\\\"a\\\" /* default */](gl);\\r\\n    \\r\\n    gl.uniformMatrix4fv(gl.getUniformLocation(program.native, `uProjectionMatrix`), \\r\\n      false, new __WEBPACK_IMPORTED_MODULE_4__geom_mat4__[\\\"a\\\" /* default */]().setCanvasProjection(el.width, el.height));\\r\\n  }\\r\\n\\r\\n  render(world) {\\r\\n    const gl = this.gl;\\r\\n    const tex = this.tex;\\r\\n    const program = this.program;\\r\\n    const buffer = program.buffer;\\r\\n    const objects = world.children;\\r\\n    \\r\\n    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\\r\\n    buffer.clear();\\r\\n\\r\\n    for (let i = 0, l = objects.length, texSlot; i < l; i++) {\\r\\n      // assign program to objects then sort for batches\\r\\n      // if no mask or filter use standard shaders\\r\\n      // invoke setProgram of program manager to use or create and then use program \\r\\n            \\r\\n      texSlot = tex.bind(objects[i].texture);\\r\\n      buffer.concat(objects[i], i, texSlot);\\r\\n    }\\r\\n    \\r\\n    program.prepare();\\r\\n    \\r\\n    gl.drawArrays(gl.TRIANGLES, 0, buffer.vertices);\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Renderer;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./renderer/index.js\\n// module id = 4\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./renderer/index.js?\");\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports) {\n\neval(\"module.exports = \\\"precision highp float;\\\\r\\\\n\\\\r\\\\nvarying vec2 vTexCoord;\\\\r\\\\nvarying int vTexSlot;\\\\r\\\\n\\\\r\\\\nuniform sampler2D uSamplers[8];\\\\r\\\\n\\\\r\\\\nvoid main(){\\\\r\\\\n    gl_FragColor = texture2D(uSamplers[vTexSlot], vTexCoord);\\\\r\\\\n}\\\\r\\\\n\\\"\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./renderer/programManager/chuncks/standard.frag\\n// module id = 5\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./renderer/programManager/chuncks/standard.frag?\");\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports) {\n\neval(\"module.exports = \\\"attribute vec3 aPosition;\\\\r\\\\nattribute vec2 aTexCoord;\\\\r\\\\nattribute int aTexSlot;\\\\r\\\\n\\\\r\\\\nuniform mat4 uProjectionMatrix;\\\\r\\\\n\\\\r\\\\nvarying vec2 vTexCoord;\\\\r\\\\nvarying int vTexSlot;\\\\r\\\\n\\\\r\\\\nvoid main(){\\\\r\\\\n    gl_Position = uProjectionMatrix * vec4(aPosition, 1.0);\\\\r\\\\n    vTexCoord = aTexCoord;\\\\r\\\\n    vTexSlot = aTexSlot;\\\\r\\\\n}\\\\r\\\\n\\\"\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./renderer/programManager/chuncks/standard.vert\\n// module id = 6\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./renderer/programManager/chuncks/standard.vert?\");\n\n/***/ }),\n/* 7 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"Object.defineProperty(__webpack_exports__, \\\"__esModule\\\", { value: true });\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(4);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_group__ = __webpack_require__(0);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_sprite__ = __webpack_require__(2);\\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphic_texture__ = __webpack_require__(3);\\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Sprite\\\", function() { return __WEBPACK_IMPORTED_MODULE_2__display_sprite__[\\\"a\\\"]; });\\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Group\\\", function() { return __WEBPACK_IMPORTED_MODULE_1__display_group__[\\\"a\\\"]; });\\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Renderer\\\", function() { return __WEBPACK_IMPORTED_MODULE_0__renderer__[\\\"a\\\"]; });\\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Texture\\\", function() { return __WEBPACK_IMPORTED_MODULE_3__graphic_texture__[\\\"a\\\"]; });\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./main.js\\n// module id = 7\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./main.js?\");\n\n/***/ }),\n/* 8 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"class Buffer extends Float32Array {\\r\\n  constructor() {\\r\\n    super(512);\\r\\n    this.size = 0;\\r\\n    this.vertices = 0;\\r\\n  }\\r\\n  \\r\\n  concat(object, z, s) {\\r\\n    const t = this;\\r\\n    const texCoord = object.texCoord;\\r\\n    let size = this.size;\\r\\n\\r\\n    // left top\\r\\n    t[size++] = object.x;\\r\\n    t[size++] = object.y;\\r\\n    t[size++] = z;\\r\\n    t[size++] = texCoord.l;\\r\\n    t[size++] = texCoord.t;\\r\\n    t[size++] = s;\\r\\n\\r\\n    // right bottom\\r\\n    t[size++] = object.right;\\r\\n    t[size++] = object.bottom;\\r\\n    t[size++] = z;\\r\\n    t[size++] = texCoord.r;\\r\\n    t[size++] = texCoord.b;\\r\\n    t[size++] = s;\\r\\n\\r\\n    // left bottom\\r\\n    t[size++] = object.left;\\r\\n    t[size++] = object.bottom;\\r\\n    t[size++] = z;\\r\\n    t[size++] = texCoord.l;\\r\\n    t[size++] = texCoord.b;\\r\\n    t[size++] = s;\\r\\n\\r\\n\\r\\n    // left top\\r\\n    t[size++] = object.x;\\r\\n    t[size++] = object.y;\\r\\n    t[size++] = z;\\r\\n    t[size++] = texCoord.l;\\r\\n    t[size++] = texCoord.t;\\r\\n    t[size++] = s;\\r\\n\\r\\n    // right bottom\\r\\n    t[size++] = object.right;\\r\\n    t[size++] = object.bottom;\\r\\n    t[size++] = z;\\r\\n    t[size++] = texCoord.r;\\r\\n    t[size++] = texCoord.b;\\r\\n    t[size++] = s;\\r\\n    \\r\\n    // right top\\r\\n    t[size++] = object.right;\\r\\n    t[size++] = object.top;\\r\\n    t[size++] = z;\\r\\n    t[size++] = texCoord.r;\\r\\n    t[size++] = texCoord.t;\\r\\n    t[size++] = s;\\r\\n\\r\\n    this.size = size;\\r\\n    this.vertices += 6;\\r\\n  }\\r\\n  \\r\\n  clear() {\\r\\n    this.size = 0;\\r\\n    this.vertices = 0;\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Buffer;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./renderer/programManager/buffer.js\\n// module id = 8\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./renderer/programManager/buffer.js?\");\n\n/***/ }),\n/* 9 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(8);\\n\\r\\n\\r\\nclass Program {\\r\\n  constructor(gl, vertexSource, fragmentSource) {\\r\\n    const vertexShader = gl.createShader(gl.VERTEX_SHADER);\\r\\n    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\\r\\n    gl.shaderSource(vertexShader, vertexSource);\\r\\n    gl.shaderSource(fragmentShader, fragmentSource);\\r\\n    gl.compileShader(vertexShader);\\r\\n    gl.compileShader(fragmentShader);\\r\\n    const program = this.native = gl.createProgram();\\r\\n    gl.attachShader(program, vertexShader);\\r\\n    gl.attachShader(program, fragmentShader);\\r\\n    gl.linkProgram(program);\\r\\n    gl.deleteShader(vertexShader);\\r\\n    gl.deleteShader(fragmentShader);\\r\\n\\r\\n    this.buffer = new __WEBPACK_IMPORTED_MODULE_0__buffer__[\\\"a\\\" /* default */]();\\r\\n  }\\r\\n\\r\\n  prepare() {\\r\\n    const gl = this.gl;\\r\\n    const buffer = gl.createBuffer(); // maybe it doesn't need to create it every time\\r\\n    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // don't bind if bound?\\r\\n    gl.bufferData(gl.ARRAY_BUFFER, this.buffer, gl.STATIC_DRAW); // maybe dynamic and sub data is quicker\\r\\n    gl.useProgram(this.native); // todo program manager should check current program is used already\\r\\n    // wtf\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Program;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./renderer/programManager/program.js\\n// module id = 9\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./renderer/programManager/program.js?\");\n\n/***/ }),\n/* 10 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"class Tex {\\r\\n  constructor(gl) {\\r\\n    this.gl = gl;\\r\\n    this.slots = [null, null, null, null, null, null, null, null];\\r\\n  }\\r\\n\\r\\n  bind(texture) {\\r\\n    const slots = this.slots;\\r\\n    let index = slots.indexOf(texture);\\r\\n\\r\\n    if (index === -1) {\\r\\n      index = slots.indexOf(null);\\r\\n      slots[index] = texture;\\r\\n      \\r\\n      const gl = this.gl;\\r\\n      const tex = gl.createTexture();\\r\\n      gl.activeTexture(gl[`TEXTURE${index}`]);\\r\\n      gl.bindTexture(gl.TEXTURE_2D, tex);\\r\\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\\r\\n      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);\\r\\n    }\\r\\n\\r\\n    return index;\\r\\n  }\\r\\n}\\n/* harmony export (immutable) */ __webpack_exports__[\\\"a\\\"] = Tex;\\n\\r\\n\\n\\n//////////////////\\n// WEBPACK FOOTER\\n// ./renderer/programManager/tex.js\\n// module id = 10\\n// module chunks = 0\\n\\n//# sourceURL=webpack:///./renderer/programManager/tex.js?\");\n\n/***/ })\n/******/ ]);\n\n//////////////////\n// WEBPACK FOOTER\n// E:/projects/games/LiteSmith/dist/lite.min.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///E:/projects/games/LiteSmith/dist/lite.min.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"frames\": [\n\t\t{\n\t\t\t\"filename\": \"nerve-b5.png\",\n\t\t\t\"frame\": {\n\t\t\t\t\"x\": 0,\n\t\t\t\t\"y\": 0,\n\t\t\t\t\"w\": 1280,\n\t\t\t\t\"h\": 536\n\t\t\t},\n\t\t\t\"rotated\": false,\n\t\t\t\"trimmed\": false,\n\t\t\t\"spriteSourceSize\": {\n\t\t\t\t\"x\": 0,\n\t\t\t\t\"y\": 0,\n\t\t\t\t\"w\": 1280,\n\t\t\t\t\"h\": 536\n\t\t\t},\n\t\t\t\"sourceSize\": {\n\t\t\t\t\"w\": 1280,\n\t\t\t\t\"h\": 536\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"filename\": \"nerve.png\",\n\t\t\t\"frame\": {\n\t\t\t\t\"x\": 1280,\n\t\t\t\t\"y\": 0,\n\t\t\t\t\"w\": 523,\n\t\t\t\t\"h\": 132\n\t\t\t},\n\t\t\t\"rotated\": false,\n\t\t\t\"trimmed\": false,\n\t\t\t\"spriteSourceSize\": {\n\t\t\t\t\"x\": 0,\n\t\t\t\t\"y\": 0,\n\t\t\t\t\"w\": 523,\n\t\t\t\t\"h\": 132\n\t\t\t},\n\t\t\t\"sourceSize\": {\n\t\t\t\t\"w\": 523,\n\t\t\t\t\"h\": 132\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"filename\": \"verik.jpg\",\n\t\t\t\"frame\": {\n\t\t\t\t\"x\": 0,\n\t\t\t\t\"y\": 536,\n\t\t\t\t\"w\": 1280,\n\t\t\t\t\"h\": 853\n\t\t\t},\n\t\t\t\"rotated\": false,\n\t\t\t\"trimmed\": false,\n\t\t\t\"spriteSourceSize\": {\n\t\t\t\t\"x\": 0,\n\t\t\t\t\"y\": 0,\n\t\t\t\t\"w\": 1280,\n\t\t\t\t\"h\": 853\n\t\t\t},\n\t\t\t\"sourceSize\": {\n\t\t\t\t\"w\": 1280,\n\t\t\t\t\"h\": 853\n\t\t\t}\n\t\t}\n\t],\n\t\"meta\": {\n\t\t\"app\": \"http://www.codeandweb.com/texturepacker\",\n\t\t\"version\": \"1.0\",\n\t\t\"image\": \"assets.png\",\n\t\t\"format\": \"RGBA8888\",\n\t\t\"size\": {\n\t\t\t\"w\": 1803,\n\t\t\t\"h\": 1389\n\t\t},\n\t\t\"scale\": \"1\",\n\t\t\"smartupdate\": \"$TexturePacker:SmartUpdate:589013285840922b651b0114dffb4a9f:6ce9a7280b80dfe5f525c12d35e3ddd8:a759b6bbc8381ac9c472b28f589ad0d6$\"\n\t}\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./atlas.json\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./atlas.json?");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_lite_min__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_lite_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_lite_min__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atlas_json__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atlas_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__atlas_json__);\n//noinspection JSUnresolvedVariable\r\n\r\n\r\n\r\nconst image = new Image();\r\nimage.src = `assets/atlas.png`;\r\n\r\nimage.onload = () => {\r\n  const texture = new __WEBPACK_IMPORTED_MODULE_0__dist_lite_min__[\"Texture\"](image, __WEBPACK_IMPORTED_MODULE_1__atlas_json___default.a);\r\n  const renderer = new __WEBPACK_IMPORTED_MODULE_0__dist_lite_min__[\"Renderer\"](document.getElementById('holder'));\r\n  const world = new __WEBPACK_IMPORTED_MODULE_0__dist_lite_min__[\"Group\"]();\r\n  const sprite = new __WEBPACK_IMPORTED_MODULE_0__dist_lite_min__[\"Sprite\"](texture, `verik.jpg`);\r\n  world.add(sprite);\r\n\r\n  (function update() {\r\n    requestAnimationFrame(update);\r\n    world.update();\r\n    renderer.render(world);\r\n  }());\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./main.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./main.js?");

/***/ })
/******/ ]);