"use strict";
var content_view_1 = require("ui/content-view");
var imageSource = require("image-source");
var StarRating = (function (_super) {
    __extends(StarRating, _super);
    function StarRating() {
        var _this = _super.call(this) || this;
        _this.width = 100;
        _this.height = 25;
        _this.allowsHalfStars = false;
        _this.accurateHalfStars = true;
        _this.max = 10;
        _this.min = 0;
        _this.value = 0;
        _this.emptyStar = 'heart-empty';
        _this.halfStar = 'heart-half';
        _this.filledStar = 'heart-full';
        _this._view = UIView.new();
        return _this;
    }
    Object.defineProperty(StarRating.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarRating.prototype, "_nativeView", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios = HCSStarRatingView.alloc().initWithFrame(CGRectMake(0, 0, this.width, this.height));
        this._ios.maximumValue = this.max;
        this._ios.minimumValue = this.min;
        this._ios.value = this.value;
        this._ios.allowsHalfStars = this.allowsHalfStars;
        this._ios.accurateHalfStars = this.accurateHalfStars;
        this._ios.emptyStarImage = imageSource.fromResource(this.emptyStar);
        this._ios.filledStarImage = imageSource.fromResource(this.filledStar);
        if (this.halfStar) {
            this._ios.halfStarImage = imageSource.fromResource(this.halfStar);
        }
        this._view.addSubview(this._ios);
    };
    Object.defineProperty(StarRating.prototype, "starColor", {
        set: function (tintColor) {
            this._ios.tintColor = tintColor.ios;
        },
        enumerable: true,
        configurable: true
    });
    return StarRating;
}(content_view_1.ContentView));
exports.StarRating = StarRating;
//# sourceMappingURL=star-ratings.js.map