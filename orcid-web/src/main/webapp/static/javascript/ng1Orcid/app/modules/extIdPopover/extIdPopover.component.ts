//Import all the angular components

import { NgIf } 
    from '@angular/common'; 

import { AfterViewInit, Component, ElementRef, Input, OnInit} 
    from '@angular/core';

import { UrlProtocolPipe }
    from '../../pipes/urlProtocolNg2.ts';

@Component({
    selector: 'ext-id-popover-ng2',
    template:  scriptTmpl("ext-id-popover-ng2-template"),
    providers: [ UrlProtocolPipe ]
})
export class ExtIdPopoverComponent implements OnInit {
    
    @Input() extID: any;
    @Input() putCode: any;
    @Input() activityType: any;

    displayAffiliationExtIdPopOver: any;
    relationship: string;
    type: string;
    url: string;
    value: string;

    constructor(
        private elementRef: ElementRef,
        private urlProtocol: UrlProtocolPipe
    ) {
        this.extID = elementRef.nativeElement.getAttribute('extID');
        this.putCode = elementRef.nativeElement.getAttribute('group.activities[group.activePutCode].putCode.value+i');
        this.activityType = elementRef.nativeElement.getAttribute('activityType');
        this.displayAffiliationExtIdPopOver = {};
    }

    hideAffiliationExtIdPopOver(id): void{
        this.displayAffiliationExtIdPopOver[id] = false;
    };

    showAffiliationExtIdPopOver(id): void{
        this.displayAffiliationExtIdPopOver[id] = true;
    };

    ngOnInit() {
        switch(this.activityType){
            case "affiliation":
                this.relationship = JSON.parse(JSON.stringify(this.extID.relationship.value));
                this.type = JSON.parse(JSON.stringify(this.extID.type.value));
                this.url = JSON.parse(JSON.stringify(this.extID.url.value));
                this.value = JSON.parse(JSON.stringify(this.extID.value.value));
                break;
            case "work":
                this.relationship = JSON.parse(JSON.stringify(this.extID.relationship.value));
                this.type = JSON.parse(JSON.stringify(this.extID.workExternalIdentifierType.value));
                this.url = JSON.parse(JSON.stringify(this.extID.url.value));
                this.value = JSON.parse(JSON.stringify(this.extID.workExternalIdentifierId.value));
                break;
            default:
                this.relationship = JSON.parse(JSON.stringify(this.extID.relationship.value));
                this.type = JSON.parse(JSON.stringify(this.extID.type.value));
                this.url = JSON.parse(JSON.stringify(this.extID.url.value));
                this.value = JSON.parse(JSON.stringify(this.extID.value.value));
        }
        this.urlProtocol.transform(this.extID.url.value); 
    }; 
}