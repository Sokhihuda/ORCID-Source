declare var $window: any;

//Import all the angular components

import { NgForOf, NgIf } 
    from '@angular/common'; 

import { AfterViewInit, Component, OnDestroy, OnInit } 
    from '@angular/core';

import { Observable, Subject, Subscription } 
    from 'rxjs';
import { takeUntil } 
    from 'rxjs/operators';

import { WorkspaceService } 
    from '../../shared/workspace.service.ts';

import { CommonService } 
    from '../../shared/common.service.ts'; 

@Component({
    selector: 'print-record-ng2',
    template:  scriptTmpl("print-record-ng2-template")
})
export class PrintRecordComponent implements AfterViewInit, OnDestroy, OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    printWindow: any;

    constructor(
        private workspaceSrvc: WorkspaceService,
        private utilsService: CommonService
    ) {
        this.printWindow = null;
    }

    printRecord(url): void{
        //open window
        this.printWindow = $window.open(url);  
    }


    //Default init functions provided by Angular Core
    ngAfterViewInit() {
        //Fire functions AFTER the view inited. Useful when DOM is required or access children directives
    };

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };

    ngOnInit() {
    }; 
}