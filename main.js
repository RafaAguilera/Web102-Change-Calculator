// Write your JavaScript here

let btn = document.getElementById("calculate-change");


function handleClickEvent() {

        let quartercount = 0
        let dimescount = 0
        let nickelcount = 0
        let penniescount = 0
        let amountDue = document.getElementById("amount-due").value;
        let amountTendered = document.getElementById("amount-received").value;
        console.log(amountDue);
        console.log(amountTendered);
        let change = amountTendered - amountDue;
            console.log(change);
        
     if (change >= 0) {
        let Dollars = Math.floor(change);
        console.log(Dollars);

        let pocketChange = change-Dollars;
       
        quartercount = Math.floor(pocketChange/.25); 
        quarterremainder = pocketChange%.25; 

        dimescount = Math.floor( quarterremainder/.10); 
        dimesremainder = quarterremainder%.10; 

        nickelcount = Math.floor(dimesremainder/.05); 
        nickelremainder = dimesremainder%.05; 

        penniescount = Math.round( nickelremainder/.01); 
        
        console.log(quartercount)
        console.log(dimescount)
        console.log(nickelcount)
        console.log(penniescount)

        document.getElementById("change").textContent = `Your total change is: $ ${change.toFixed(2)}dlls.`

        document.getElementById("dollars-output").textContent = Dollars
        
        document.getElementById("quarters-output").textContent = quartercount

        document.getElementById("dimes-output").textContent = dimescount

        document.getElementById("nickels-output").textContent = nickelcount

        document.getElementById("pennies-output").textContent = penniescount
            }

        else
        document.getElementById("no-money").textContent = `YOU NEED MORE CASH BRO!!!.`

} ;
