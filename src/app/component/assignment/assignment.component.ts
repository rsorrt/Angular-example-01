
import {Component} from '@angular/core';


@Component ({
    selector:     'app-assignment',
    templateUrl: './assignment.component.html',
    styles: [`
        .logStyle {
            color: white;
            background-color:blue;
        }
    `]
})
export class AssignmentComponent {

    logClicks = new Array();
    isDisplay = false;

   onDisplayToggle () {

        this.isDisplay = ! this.isDisplay;

        let dateTime = new Date().toLocaleString();
        
        if (this.isDisplay) {
            this.logClicks.push(
                {"dateTime" : dateTime}
            );
        }
   }


}