import { strict } from "assert";
import { reverse } from "dns";

export const exo_cahier_2 = () => {
    console.log('start');

    let tableu_pali:string[] = ['hello','kayak','tata','elle','radar','itti','ok'];
    console.log(JSON.stringify(tableu_pali));

    let resulta = tableu_pali.map(palidrome)
    console.log(JSON.stringify(resulta));
    

    function palidrome(tableu_pali: string){
        for (let i = 0; i < tableu_pali.length; i++) {
            if (tableu_pali.split('').reverse().join('') === tableu_pali) {
                return true
             }
             else{
                return false
             }
        }
    }





    // isPalindrome()

    // function isPalindrome(){
    //     for (let i = 0; i < tableu_pali.length; i++) {            
    //         if (tableu_pali[i] == tableu_pali.split('').reverse().join('')) {
    //             let b = Boolean(tableu_pali[i])
    //             console.log(b);
    //         }
    //         // console.log(tableu_pali[i]);                          
    //     }  
    //     return true
    //     // return tableu_pali.split('').reverse().join('') === tableu_pali;    
    // }


    // console.log(tableu_pali[1]); 

   

    // checkRiskValues(): boolean {
    //     this.controlsName.forEach((item) => {
    //         this.threatForm.get(item)!.valueChanges.subscribe(value => {
    //             this.valueControlArray.push(this.threatForm.get(item)!.value);
    
    //             if (this.valueControlArray.indexOf(true) > -1)
    //                 return true;
    
    //             else
    //                 return false
    //         });
    //     });
    // }
}