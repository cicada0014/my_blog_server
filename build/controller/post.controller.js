"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var posts_dao_1 = require("../model/dao/posts.dao");
// @injectable()
// 새로운 컨트롤러 데코레이터에 인젝터블이 포함되어있는 것 같다.
/**
* @swagger
* tags:
*   name: PostController
*   description: 해당 포스트를 넣을 수 있습니다.
*/
var PostController = /** @class */ (function () {
    function PostController(postDAO) {
        this.postDAO = postDAO;
    }
    /**
* @swagger
* /api/post/:id:
*   get:
*     summary: 포스트 가져오기
*     description: 아이디를 통해 포스트를 가져옵니다.
*     tags: [PostController]
*     produces:
*       - application/json
*     responses:
*       200:
*         description:
*            result = {}"
*/
    PostController.prototype.getPostList = function (req, res, next) {
        return this.postDAO.getPostList().then(function (r) {
            return r;
        }).catch(function (e) {
            next(e);
        });
    };
    /**
    * @swagger
    * /api/post/:id:
    *   get:
    *     summary: 포스트 가져오기
    *     description: 아이디를 통해 포스트를 가져옵니다.
    *     tags: [PostController]
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description:
    *            result = {}"
    */
    PostController.prototype.getPostById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postDAO.getPostById(req.query.id).then(function (r) {
                            res.send(r);
                        }).catch(function (e) {
                            next(e);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * @swagger
    * /api/post/:id:
    *   get:
    *     summary: 포스트 가져오기
    *     description: 아이디를 통해 포스트를 가져옵니다.
    *     tags: [PostController]
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description:
    *            result = {}"
    */
    PostController.prototype.posting = function (req, res, next) {
        this.postDAO.insertPost(req.body)
            .then(function (r) {
            return r;
        })
            .catch(function (e) {
            next(e);
        });
    };
    __decorate([
        inversify_express_utils_1.httpGet('/list'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()), __param(2, inversify_express_utils_1.next()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], PostController.prototype, "getPostList", null);
    __decorate([
        inversify_express_utils_1.httpGet('/:id'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()), __param(2, inversify_express_utils_1.next()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "getPostById", null);
    __decorate([
        inversify_express_utils_1.httpPost('/posting'),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()), __param(2, inversify_express_utils_1.next()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], PostController.prototype, "posting", null);
    PostController = __decorate([
        inversify_express_utils_1.controller('/api/post'),
        __param(0, inversify_1.inject(posts_dao_1.PostDAO.name)),
        __metadata("design:paramtypes", [posts_dao_1.PostDAO])
    ], PostController);
    return PostController;
}());
exports.PostController = PostController;
