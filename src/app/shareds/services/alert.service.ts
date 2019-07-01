import { Injectable } from '@angular/core';
declare const $: any;
declare const swal: any;

@Injectable()
export class AlertService {

    notify(message: string, type: string = 'warning') {
        $.notify({
            // options
            title: '<strong>Warning : </strong>',
            message: message,
        }, {
                // settings
                element: 'body',
                position: null,
                type: type,
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "right"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });
    }

    invalid_data(message: string = '<br>ข้อมูลไม่ถูกต้อง หรือ<br>ไม่เป็นไปตามเงื่อนไข<br>กรุณาลองอีกครั้ง') {
        this.notify(message);
    }

    invalid_fill_data(message: string = '<br>ระบุข้อมูลไม่ครบ หรือ<br>ไม่เป็นไปตามเงื่อนไข<br>กรุณาระบุอีกครั้ง') {
        this.notify(message);
    }

    data_not_found(message: string = '<br>ไม่พบข้อมูลตามเงื่อนไขที่ระบุ') {
        this.notify(message);
    }

    confirm(message: string = 'ต้องการจะทำรายการต่อหรือไม่?'): Promise<any> {
        return swal(message, {
            buttons: ["ยกเลิก", "ยืนยัน"],
            dangerMode: true
        });
    }

}
