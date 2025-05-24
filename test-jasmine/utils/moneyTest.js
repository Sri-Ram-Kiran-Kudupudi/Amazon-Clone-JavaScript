import {formatCurrency} from '../../scripts/utils/money.js';
describe("test suit:formatCurrency",()=>{
    //for testing
    it('convert ruppes to dollers:',()=>{
        //alternative to if condition
        expect(formatCurrency(830).toEqual('83.00'));
    });
    it('convert ruppes to dollers:',()=>{
        //alternative to if condition
        expect(formatCurrency(0).toEqual('0.00'));
    });
})