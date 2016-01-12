System.register(["angular2/core", "angular2/src/common/directives/core_directives", "./api.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_directives_1, api_service_1;
    var ApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_directives_1_1) {
                core_directives_1 = core_directives_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            ApiComponent = (function () {
                function ApiComponent(service) {
                    this.service = service;
                    this.apiOccurances = 0;
                    this.isLoading = false;
                }
                ApiComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                ApiComponent.prototype.get = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.service.get(function (json) {
                        if (json) {
                            _this.data = json.numbers;
                            _this.isLoading = false;
                            _this.apiOccurances++;
                        }
                    });
                };
                ApiComponent = __decorate([
                    core_1.Component({
                        selector: "numbers",
                        templateUrl: "/partial/numbers",
                        providers: [api_service_1.ApiService],
                        directives: core_directives_1.CORE_DIRECTIVES
                    }), 
                    __metadata('design:paramtypes', [api_service_1.ApiService])
                ], ApiComponent);
                return ApiComponent;
            })();
            exports_1("ApiComponent", ApiComponent);
        }
    }
});
//# sourceMappingURL=api.component.js.map