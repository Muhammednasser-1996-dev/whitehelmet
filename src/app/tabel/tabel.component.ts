import { Component } from '@angular/core';
import { Customer } from '../intrfaces/customer';
import { Transaction } from '../intrfaces/transaction';
import { transition } from '@angular/animations';


@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent {
  customers:Customer[]=[
    {
    "id": 1,
    "name": "Ahmed Ali"
    },
    {
    "id": 2,
    "name": "Aya Elsayed"
    },
    
    {
    "id": 3,
    "name": "Mina Adel"
    },
    {
    "id": 4,
    "name": "Sarah Reda"
    },
    {
    "id": 5,
    "name": "Mohamed Sayed"
    },
    {
    "id": 6,
    "name": "shady elngar"
    },
    {
    "id": 7,
    "name": "Layla Hassan"
    },
    {
    "id": 8,
    "name": "Omar Youssef"
    },
    {
    "id": 9,
    "name": "Nour El-Deen"
    },
    {
    "id": 10,
    "name": "Hana Khaled"
    }
    ]
    transactions:Transaction[]=[
      {
      "id": 1,
      "customer_id": 1,
      "date": "2022-01-01",
      "amount": 1000
      },
      {
        "id": 11,
        "customer_id": 1,
        "date": "2022-01-05",
        "amount": 2000
      },
      {
      "id": 2,
      "customer_id": 1,
      "date": "2022-01-10",
      "amount": 600
      },
      {
      "id": 3,
      "customer_id": 2,
      "date": "2022-01-01",
      "amount": 550
      },
      {
      "id": 12,
      "customer_id": 2,
      "date": "2022-01-30",
      "amount": 2500
      },
      {
      "id": 4,
      "customer_id": 3,
      "date": "2022-01-01",
      "amount": 500
      },
      {
      "id": 13,
      "customer_id": 3,
      "date": "2022-01-27",
      "amount": 1500
      },
      {
      "id": 5,
      
      "customer_id": 2,
      "date": "2022-01-02",
      "amount": 1300
      },
      {
      "id": 6,
      "customer_id": 4,
      "date": "2022-01-01",
      "amount": 750
      },
      {
      "id": 14,
      "customer_id": 4,
      "date": "2022-01-25",
      "amount": 2750
      },
      {
      "id": 7,
      "customer_id": 3,
      "date": "2022-01-15",
      "amount": 1250
      },
      {
      "id": 8,
      "customer_id": 5,
      "date": "2022-01-01",
      "amount": 2500
      },
      {
      "id": 9,
      "customer_id": 5,
      "date": "2022-01-02",
      "amount": 875
      },
      {
      "id": 15,
      "customer_id": 6,
      "date": "2022-01-01",
      "amount": 2875
      },
      {
      "id": 16,
      "customer_id": 6,
      "date": "2022-01-14",
      "amount": 1875
      },
      {
      "id": 17,
      "customer_id": 6,
      "date": "2022-01-29",
      "amount": 2000
      },
      {
      "id": 18,
      "customer_id": 7,
      "date": "2022-01-29",
      "amount": 2000
      },
      {
      "id": 19,
      "customer_id": 7,
      "date": "2022-01-20",
      "amount": 1000
      },
      {
      "id": 20,
      "customer_id": 8,
      "date": "2022-01-20",
      "amount": 500
      },
      {
      "id": 21,
      "customer_id": 8,
      "date": "2022-01-5",
      "amount": 2500
      },
      {
      "id": 22,
      "customer_id": 9,
      "date": "2022-01-5",
      "amount": 1500
      },
      {
      "id": 23,
      "customer_id": 9,
      "date": "2022-01-25",
      "amount": 2500
      },
      {
      "id": 24,
      "customer_id": 10,
      "date": "2022-01-02",
      "amount": 1455
      },
      {
      "id": 25,
      "customer_id": 10,
      "date": "2022-01-25",
      "amount": 500
      },
      {
      "id": 10,
      "customer_id": 4,
      "date": "2022-01-03",
      "amount": 1500
      }
      ]

newCustomers:any[]=[];
allDates:string[]=[];
allAmount:number[]=[]
searchName:string=""
customerName:string=""
newSearched:string=""
searchTerm:string = ""
constructor()
{
  this.getAllTransactions()
   
}

       getAllTransactions()
       {
        this.newCustomers = this.customers.map((customer)=>{
          return{
            id:customer.id,
            name:customer.name,
            transaction:this.transactions.filter((transaction)=>transaction.customer_id===customer.id ? customer:null),
            totalTransaction:this.transactions.filter((transaction)=>transaction.customer_id===customer.id ? customer:null).reduce((sum,transaction)=>sum+transaction.amount,0)

            
          }
        })
        console.log(this.newCustomers)
       }




       viewAllTransactions(transactions: any,customerName: string)
       {
       this.customerName=customerName
       this.allDates=[];
       this.allAmount=[];
       transactions.forEach((transaction:any) => {
              this.allDates.push(transaction.date),
             this.allAmount.push(transaction.amount)
       });
       this.viewGraph()
       }
       data: any;

  options: any;

  ngOnInit() {
      
  }
  viewGraph()
  {
    const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: this.allDates,
          datasets: [
              {
                  label: this.customerName,
                  data: this.allAmount,
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  tension: 0.4
              }
              
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }

 
}
