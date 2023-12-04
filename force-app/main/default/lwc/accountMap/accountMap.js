
    import { LightningElement,api, wire } from 'lwc';
    import { getRecord, getFieldValue } from "lightning/uiRecordApi";


    const FIELDS = [
        'Account.BillingCity',
        'Account.BillingCountry',
        'Account.BillingPostalCode',
        'Account.BillingState',
        'Account.BillingStreet'
    ];
    export default class AccountMap extends LightningElement {
        @api recordId;  
        mapMarkers =[];

        @wire(getRecord, { recordId: "$recordId", fields:FİELDS })
        wiredAccount({ error, data }) {
          if (data) {
            const city=getFieldValue(data,'Account.BillingCity');
            country=getFieldValue(data,'Account.BillingCountry');
            postalcodet=getFieldValue(data,'Account.BillingPostalCode');
            state=getFieldValue(data,'Account.BillingState');
            street=getFieldValue(data,'Account.BillingStreet');

          } else if (error) {
           
            console.log('beklenmeyen bir hata oluştu');
          }
        }
        get name() {
          return this.record.fields.Name.value;
        }
      }

        
       this. mapMarkers = [
            {
                location: {
                    City: city,
                    Country: country,
                    PostalCode: postalcodet,
                    State: state,
                    Street: street
                },
                type: 'Circle',
                radius: 200,
                strokeColor: '#FFF000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FFF000',
                fillOpacity: 0.35
            },
        ];
