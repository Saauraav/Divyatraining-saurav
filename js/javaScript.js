// function Categories("id", name) {
//     var self = this;
//     self."id" = "id";
//     self.name = name;
//     // self.parent = parent;
//     // self.categories = ko.observableArray();
// }

var tbl = [
  {
    "id": 1,
    "name": "Equity",
    "parent": null,
    "accounts": [],
    "categories": [
      {
        "id": 2,
        "name": "Retain Earning",
        "parent": 1,
        "accounts": [],
        "categories": [ ]
      },
      {
        "id": 3,
        "name": "Capital",
        "parent": 1,
        "accounts": [],
        "categories": [
          {
            "id": 4,
            "name": "Authorized Capital",
            "parent": 3,
            "accounts": [],
            "categories": []
          },
          {
            "id": 5,
            "name": "Issued Capital",
            "parent": 3,
            "accounts": [],
            "categories": []
          },
          {
            "id": 6,
            "name": "Paid Up Capital",
            "parent": 3,
            "accounts": [],
            "categories": []
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "Liabilities",
    "parent": null,
    "accounts": [],
    "categories": [
      {
        "id": 8,
        "name": "Non Current Liabilities",
        "parent": 7,
        "accounts": [],
        "categories": [
          {
            "id": 9,
            "name": "Secured Loans",
            "parent": 8,
            "accounts": [],
            "categories": []
          }
        ]
      },
      {
        "id": 10,
        "name": "Current Liabilities",
        "parent": 7,
        "accounts": [],
        "categories": [
          {
            "id": 11,
            "name": "Account Payables",
            "parent": 10,
            "accounts": [],
            "categories": [
              {
                "id": 12,
                "name": "Suppliers",
                "parent": 11,
                "accounts": [],
                "categories": []
              }
            ]
          },
          {
            "id": 13,
            "name": "Bank Overdraft",
            "parent": 10,
            "accounts": [],
            "categories": []
          },
          {
            "id": 14,
            "name": "Duties & Taxes",
            "parent": 10,
            "accounts": [],
            "categories": []
          },
          {
            "id": 15,
            "name": "Employee",
            "parent": 10,
            "accounts": [],
            "categories": []
          },
          {
            "id": 16,
            "name": "Employee Deductions",
            "parent": 10,
            "accounts": [],
            "categories": []
          },
          {
            "id": 17,
            "name": "Other Payables",
            "parent": 10,
            "accounts": [],
            "categories": []
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "name": "Assets",
    "parent": null,
    "accounts": [],
    "categories": [
      {
        "id": 19,
        "name": "Non Current Assets",
        "parent": 18,
        "accounts": [],
        "categories": [
          {
            "id": 20,
            "name": "Fixed Assets",
            "parent": 19,
            "accounts": [],
            "categories": []
          },
          {
            "id": 21,
            "name": "Investments",
            "parent": 19,
            "accounts": [],
            "categories": []
          }
        ]
      },
      {
        "id": 22,
        "name": "Current Assets",
        "parent": 18,
        "accounts": [],
        "categories": [
          {
            "id": 23,
            "name": "Deferred Assets",
            "parent": 22,
            "accounts": [],
            "categories": []
          },
          {
            "id": 24,
            "name": "Stock",
            "parent": 22,
            "accounts": [],
            "categories": []
          },
          {
            "id": 25,
            "name": "Loans and Advances Given",
            "parent": 22,
            "accounts": [],
            "categories": []
          },
          {
            "id": 26,
            "name": "Deposits Made",
            "parent": 22,
            "accounts": [],
            "categories": []
          },
          {
            "id": 27,
            "name": "Account Receivables",
            "parent": 22,
            "accounts": [],
            "categories": [
              {
                "id": 28,
                "name": "Customers",
                "parent": 27,
                "accounts": [],
                "categories": []
              },
              {
                "id": 29,
                "name": "Other Receivables",
                "parent": 27,
                "accounts": [],
                "categories": []
              }
            ]
          },
          {
            "id": 30,
            "name": "Bank Account",
            "parent": 22,
            "accounts": [],
            "categories": []
          },
          {
            "id": 31,
            "name": "Cash Account",
            "parent": 22,
            "accounts": [],
            "categories": []
          }
        ]
      }
    ]
  },
  {
    "id": 32,
    "name": "Income",
    "parent": null,
    "accounts": [],
    "categories": [
      {
        "id": 33,
        "name": "Revenue",
        "parent": 32,
        "accounts": [],
        "categories": [
          {
            "id": 34,
            "name": "Sales",
            "parent": 33,
            "accounts": [],
            "categories": []
          },
          {
            "id": 35,
            "name": "Donations",
            "parent": 33,
            "accounts": [],
            "categories": []
          }
        ]
      },
      {
        "id": 36,
        "name": "Indirect Income",
        "parent": 32,
        "accounts": [],
        "categories": []
      }
    ]
  },
  {
    "id": 37,
    "name": "Expenses",
    "parent": null,
    "accounts": [],
    "categories": [
      {
        "id": 38,
        "name": "Purchase",
        "parent": 37,
        "accounts": [],
        "categories": []
      },
      {
        "id": 39,
        "name": "Direct Expenses",
        "parent": 37,
        "accounts": [],
        "categories": []
      },
      {
        "id": 40,
        "name": "Indirect Expenses",
        "parent": 37,
        "accounts": [],
        "categories": [
          {
            "id": 41,
            "name": "Pay Head",
            "parent": 40,
            "accounts": [],
            "categories": []
          },
          {
            "id": 42,
            "name": "Sales And Distribution",
            "parent": 40,
            "accounts": [],
            "categories": []
          }
        ]
      }
    ]
  }
]


// function TableViewModel() {
//     var self = this;


//  self.flatList = new Array();

//  function recursive(obj) {
//    var temp = {"id": obj."id", "name": obj.name , "parent": obj.parent};
//    self.flatList.push(temp);
//    for(i in obj.categories) {
//      recursive(obj.categories[i]);
//    }
//  }

//  for(var i in data){
//    recursive(data[i]);
//  }
// }

// ko.applyBindings(new TableViewModel());
// $("#tblData").treetable({'expandable': true});

var MyViewModel = {
    data: ko.observableArray([
        {
          "id": 1,
          "name": "Equity",
          "parent": null,
          "accounts": [],
          "categories": [
            {
              "id": 2,
              "name": "Retain Earning",
              "parent": 1,
              "accounts": [],
              "categories": [ ]
            },
            {
              "id": 3,
              "name": "Capital",
              "parent": 1,
              "accounts": [],
              "categories": [
                {
                  "id": 4,
                  "name": "Authorized Capital",
                  "parent": 3,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 5,
                  "name": "Issued Capital",
                  "parent": 3,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 6,
                  "name": "Paid Up Capital",
                  "parent": 3,
                  "accounts": [],
                  "categories": []
                }
              ]
            }
          ]
        },
        {
          "id": 7,
          "name": "Liabilities",
          "parent": null,
          "accounts": [],
          "categories": [
            {
              "id": 8,
              "name": "Non Current Liabilities",
              "parent": 7,
              "accounts": [],
              "categories": [
                {
                  "id": 9,
                  "name": "Secured Loans",
                  "parent": 8,
                  "accounts": [],
                  "categories": []
                }
              ]
            },
            {
              "id": 10,
              "name": "Current Liabilities",
              "parent": 7,
              "accounts": [],
              "categories": [
                {
                  "id": 11,
                  "name": "Account Payables",
                  "parent": 10,
                  "accounts": [],
                  "categories": [
                    {
                      "id": 12,
                      "name": "Suppliers",
                      "parent": 11,
                      "accounts": [],
                      "categories": []
                    }
                  ]
                },
                {
                  "id": 13,
                  "name": "Bank Overdraft",
                  "parent": 10,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 14,
                  "name": "Duties & Taxes",
                  "parent": 10,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 15,
                  "name": "Employee",
                  "parent": 10,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 16,
                  "name": "Employee Deductions",
                  "parent": 10,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 17,
                  "name": "Other Payables",
                  "parent": 10,
                  "accounts": [],
                  "categories": []
                }
              ]
            }
          ]
        },
        {
          "id": 18,
          "name": "Assets",
          "parent": null,
          "accounts": [],
          "categories": [
            {
              "id": 19,
              "name": "Non Current Assets",
              "parent": 18,
              "accounts": [],
              "categories": [
                {
                  "id": 20,
                  "name": "Fixed Assets",
                  "parent": 19,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 21,
                  "name": "Investments",
                  "parent": 19,
                  "accounts": [],
                  "categories": []
                }
              ]
            },
            {
              "id": 22,
              "name": "Current Assets",
              "parent": 18,
              "accounts": [],
              "categories": [
                {
                  "id": 23,
                  "name": "Deferred Assets",
                  "parent": 22,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 24,
                  "name": "Stock",
                  "parent": 22,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 25,
                  "name": "Loans and Advances Given",
                  "parent": 22,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 26,
                  "name": "Deposits Made",
                  "parent": 22,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 27,
                  "name": "Account Receivables",
                  "parent": 22,
                  "accounts": [],
                  "categories": [
                    {
                      "id": 28,
                      "name": "Customers",
                      "parent": 27,
                      "accounts": [],
                      "categories": []
                    },
                    {
                      "id": 29,
                      "name": "Other Receivables",
                      "parent": 27,
                      "accounts": [],
                      "categories": []
                    }
                  ]
                },
                {
                  "id": 30,
                  "name": "Bank Account",
                  "parent": 22,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 31,
                  "name": "Cash Account",
                  "parent": 22,
                  "accounts": [],
                  "categories": []
                }
              ]
            }
          ]
        },
        {
          "id": 32,
          "name": "Income",
          "parent": null,
          "accounts": [],
          "categories": [
            {
              "id": 33,
              "name": "Revenue",
              "parent": 32,
              "accounts": [],
              "categories": [
                {
                  "id": 34,
                  "name": "Sales",
                  "parent": 33,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 35,
                  "name": "Donations",
                  "parent": 33,
                  "accounts": [],
                  "categories": []
                }
              ]
            },
            {
              "id": 36,
              "name": "Indirect Income",
              "parent": 32,
              "accounts": [],
              "categories": []
            }
          ]
        },
        {
          "id": 37,
          "name": "Expenses",
          "parent": null,
          "accounts": [],
          "categories": [
            {
              "id": 38,
              "name": "Purchase",
              "parent": 37,
              "accounts": [],
              "categories": []
            },
            {
              "id": 39,
              "name": "Direct Expenses",
              "parent": 37,
              "accounts": [],
              "categories": []
            },
            {
              "id": 40,
              "name": "Indirect Expenses",
              "parent": 37,
              "accounts": [],
              "categories": [
                {
                  "id": 41,
                  "name": "Pay Head",
                  "parent": 40,
                  "accounts": [],
                  "categories": []
                },
                {
                  "id": 42,
                  "name": "Sales And Distribution",
                  "parent": 40,
                  "accounts": [],
                  "categories": []
                }
              ]
            }
          ]
        }
      ])
};
ko.applyBindings(MyViewModel);

