"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo_cahier_2 = void 0;
const exo_cahier_2 = () => {
    console.log('start');
    let tableu_pali = ['hello', 'kayak', 'tata', 'elle', 'radar'];
    console.log(tableu_pali);
    palidrome(tableu_pali);
    function palidrome(tableu_pali) {
        for (let i = 0; i < tableu_pali.length; i++) {
            if (tableu_pali.split('').reverse().join('') === tableu_pali) {
                console.log('oui');
            }
            else {
                console.log('non');
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
};
exports.exo_cahier_2 = exo_cahier_2;
