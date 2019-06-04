import { Injectable } from "@angular/core";
declare let alertify: any;

@Injectable({
    providedIn: "root"
})
export class AlertifyService {
    constructor() { }

    confirm(message: string, okCollback: () => any) {
        alertify.confirm(message, e => {
            if (e) {
                okCollback();
            } else {
            }
        });
    }

    success(message: string) {
        alertify.success(message);
    }
    error(message: string) {
        alertify.error(message);
    }
    warning(message: string) {
        alertify.warning(message);
    }
    info(message:string){
        alertify.info(message);
    }
    message(message: string) {
        alertify.message(message);
    }
}