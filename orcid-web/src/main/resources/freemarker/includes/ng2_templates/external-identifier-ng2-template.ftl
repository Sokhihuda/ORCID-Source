<script type="text/ng-template" id="external-identifiers-ng2">
    <div *ngIf="externalIdentifiersForm?.externalIdentifiers?.length" class="workspace-section">
        <div class="workspace-section-header">
            <div class="workspace-section-title">                 
                <div id="open-edit-external-identifiers" class="edit-websites edit-option" (click)="openEditModal()">
                    <div class="glyphicon glyphicon-pencil">
                        <div class="popover popover-tooltip top">
                            <div class="arrow"></div>
                            <div class="popover-content">
                                <span><@orcid.msg 'manage_bio_settings.editExternalIdentifiers' /></span>
                            </div>                
                        </div>
                    </div>
                </div>
                <div class="workspace-section-label"><@orcid.msg 'public_profile.labelOtherIDs'/></div>
            </div>
        </div>
        <div class="workspace-section-content">
            <div *ngFor="let externalIdentifier of externalIdentifiersForm.externalIdentifiers">
                <span *ngIf="!(externalIdentifier.url)">{{externalIdentifier.commonName}}: {{externalIdentifier.reference}}</span>
                <span *ngIf="externalIdentifier.url"><a href="{{externalIdentifier.url}}" target="externalIdentifier.commonName">{{externalIdentifier.commonName}}: {{externalIdentifier.reference}}</a></span>
            </div>
        </div>
    </div>   
</script>