const submitButton = document.getElementById('submitbutton');
submitButton.addEventListener('click', readData);
submitButton.addEventListener('click', createOrders);
var PONumber = "";
var itemName = "";
var itemQuantity = 0;


const url = 'https://test-apps.blumesolutions.com/orderservices-api/purchaseOrder?correlationId=1';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb25UeXBlIjoiQ29uc2lnbmVlX1VsdGltYXRlIENvbnNnaW5lZV9CdXllciIsIm9yZ2FuaXphdGlvblR5cGVzIjpbIkNvbnNpZ25lZV9VbHRpbWF0ZSBDb25zZ2luZWVfQnV5ZXIiLCJCZW5lZmljaWFsIENhcmdvIE93bmVyKEJDTykiXSwic3ViIjoiaW50ZWxfdXNlciIsImZpcnN0TmFtZSI6IkludGVsIE9yZ2FuaXphdGlvbiIsImxhc3ROYW1lIjoiVXNlciIsImVtYWlsQWRkcmVzcyI6InRlc3RAZ21haWwuY29tIiwib3JnYW5pemF0aW9uVXVpZCI6ImIyNzNhMGNkLTliOGQtNGYwMy1iYWUwLWEzYTk4NTY4ZjczZiIsInBob25lTnVtYmVyIjoiIiwib3JnYW5pemF0aW9uTmFtZSI6IkludGVsIE9yZ2FuaXphdGlvbiIsIm9yZ2FuaXphdGlvbkNvZGUiOiJJTlRFIiwib3JnYW5pemF0aW9uRGJJZCI6OTU4NzgyLCJidXNpbmVzc0FkZHJlc3MiOiJ0ZXN0In0.u4AfRsBz5pMe0c6T7tMhTsIZNco3h_7puLVIS_5zV723tw3aHBrsscZY0p0dX-H8W5oIxxaFFyBcmXL81KCCEA'
var poLines = {
    "isHazard": false,
    "isRefrigerated": false,
    "description": "Electronics item",
    "item": "Bat",
    "productClass": "GH992",
    "unitPrice": 25,
    "currencyUom": {
        "code": "USD",
        "description": "US Dollar"
    },
    "commodity": {
        "code": "85",
        "description": "Electrical machinery and equipment and parts thereof, sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles"
    },
    "orderedQuantity": 10,
    "quantityUom": {
        "code": "EA",
        "description": "EACH"
    }
};
var payload = {
    "purchaseOrderNumber": "PO217621",
    "purchaseOrderLines": [],
    "poScheduleConfig": [],
    "orderDate": 1684987713174,
    "orderType": "Standard",
    "shipToAddress": {
        "locationId": "785ec19e-18e7-4972-8897-2641daf116fe",
        "addressLine1": "21508 Ferrero",
        "addressLine2": null,
        "addressLine3": null,
        "city": "Walnut",
        "country": "United States",
        "postalCode": "91789",
        "state": "California"
    },
    "shipTo": "21508 Ferrero, Walnut, California, United States, 91789",
    "paymentMethod": "Collect",
    "incoterms": "Ex Works",
    "consigneeName": "Aniket Singh",
    "shipToCheck": null,
    "shipToNodeName": "21508 Ferrero, Walnut, California, US, 91789",
    "deliveryStart": 1684953000000,
    "deliveryEnd": 1685039400000,
    "billToCheck": true,
    "billToAddress": {
        "locationId": "785ec19e-18e7-4972-8897-2641daf116fe",
        "addressLine1": "21508 Ferrero",
        "addressLine2": null,
        "addressLine3": null,
        "city": "Walnut",
        "country": "United States",
        "postalCode": "91789",
        "state": "California"
    },
    "billTo": "21508 Ferrero, Walnut, California, United States, 91789",
    "buyerName": "Aniket Singh",
    "shipComplete": false,
    "shipCompleteLine": true,
    "balanceBackOrder": false,
    "office": null,
    "officeCode": null,
    "pickUpStartTimeZone": -330,
    "pickupEndTimeZone": -330,
    "shipmentStartTimeZone": -330,
    "shipmentEndTimeZone": -330,
    "deliveryStartTimeZone": -330,
    "deliveryEndTimeZone": -330,
    "orderDateTimeZone": -330,
    "cancelAfterDateTimeZone": -330,
    "shipTenderDateTimeZone": -330,
    "requiredDateDeliveryTimeZone": -330
};

let items = [];
function createOrders() {

    for (let i = 0; i < items.length; i++) {

        itemName = items[i].itemName;
        itemQuantity = items[i].itemQuantity;

        poLines.item = itemName;
        poLines.orderedQuantity = itemQuantity;

        payload.purchaseOrderLines.push(poLines);
    }
    console.log(payload);
    axios.post(url, payload, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
        .then(function (response) {
            console.log('Sales order created for');
        })
        .catch(function (error) {
            console.error('Error creating sales order for', error);
        });
};

function readData() {
    const containers = document.getElementsByClassName('result-item');
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        console.log(container);

        itemQuantity = container.getElementsByClassName('quant')[0].value;

        itemName = container.getElementsByClassName('name')[0].value;

        const item = { "itemName": itemName, "itemQuantity": itemQuantity };
        items.push(item);
        console.log(item);
    }
}