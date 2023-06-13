import { usingDropDown } from './dropDown.js';
var searchInput = document.getElementById('search-input');
searchInput.addEventListener("input", makeAPICall);
searchInput.addEventListener("click", makeAPICall);

function makeAPICall() {
    const url = 'https://test-apps.blumesolutions.com/inventoryservices-api/itemMaster/search';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb25UeXBlIjoiQ29uc2lnbmVlX1VsdGltYXRlIENvbnNnaW5lZV9CdXllciIsIm9yZ2FuaXphdGlvblR5cGVzIjpbIkNvbnNpZ25lZV9VbHRpbWF0ZSBDb25zZ2luZWVfQnV5ZXIiLCJCZW5lZmljaWFsIENhcmdvIE93bmVyKEJDTykiXSwic3ViIjoiaW50ZWxfdXNlciIsImZpcnN0TmFtZSI6IkludGVsIE9yZ2FuaXphdGlvbiIsImxhc3ROYW1lIjoiVXNlciIsImVtYWlsQWRkcmVzcyI6InRlc3RAZ21haWwuY29tIiwib3JnYW5pemF0aW9uVXVpZCI6ImIyNzNhMGNkLTliOGQtNGYwMy1iYWUwLWEzYTk4NTY4ZjczZiIsInBob25lTnVtYmVyIjoiIiwib3JnYW5pemF0aW9uTmFtZSI6IkludGVsIE9yZ2FuaXphdGlvbiIsIm9yZ2FuaXphdGlvbkNvZGUiOiJJTlRFIiwib3JnYW5pemF0aW9uRGJJZCI6OTU4NzgyLCJidXNpbmVzc0FkZHJlc3MiOiJ0ZXN0In0.u4AfRsBz5pMe0c6T7tMhTsIZNco3h_7puLVIS_5zV723tw3aHBrsscZY0p0dX-H8W5oIxxaFFyBcmXL81KCCEA'  // Replace with your JWT token
    var text = searchInput.value;
    var items = [];
    const payload = {
        "startIndex": 0,
        "endIndex": 45,
        "sortingOrder": "DESC",
        "sortingProperty": "lastUpdateDttm",
        "conditions": [
            {
                "fieldName": "isActive",
                "fieldValue": true,
                "operation": "EQ"
            },
            {
                "fieldName": "itemName",
                "fieldValue": `${text}`,
                "operation": "ANYWHERE"
            }
        ]
    };
    if (text.length >= 4) {
        axios.post(url, payload, {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin',
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                var data = response.data.results;
                // console.log(response.data);
                data.map(function (item) {
                    items.push(item.itemName);
                    console.log(item.itemName);
                });
                usingDropDown(items);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    else {
        usingDropDown([]);
    }
}
