"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo_cahier_1 = void 0;
const exo_cahier_1 = () => {
    console.log('start');
    let nbr_choisie = 5;
    function Factorielle() {
        let a = 1;
        for (let i = 1; i <= nbr_choisie; i++) {
            a = a * i;
            console.log(a);
        }
        return a;
    }
    const nbr_resulta = Factorielle();
    console.log(nbr_resulta);
};
exports.exo_cahier_1 = exo_cahier_1;
