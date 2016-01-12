import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/src/common/directives/core_directives";
import {ApiService} from "./api.service";

@Component({
    selector: "numbers",
    templateUrl: "/partial/numbers",
    providers: [ApiService],
    directives: CORE_DIRECTIVES
})
export class ApiComponent implements OnInit {
    apiOccurances: number = 0;
    data: number[];
    isLoading: boolean = false;

    constructor(private service: ApiService) { }

    ngOnInit() {
        this.get();
    }

    get() {
        this.isLoading = true;
        this.service.get(json => {
            if (json) {
                this.data = json.numbers;
                this.isLoading = false;
                this.apiOccurances++;
            }
        });
    }
}