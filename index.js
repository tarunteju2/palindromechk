/*document.getElementById('palnEnter').addEventListener('keyup',function (paln) {
    if (paln.key==='Enter') {
        chkpaln();
        
    }
})*/
document.getElementById('buttonPaln').addEventListener('click',chkpaln)
function chkpaln() {
    const palnEnter=document.getElementById('palnEnter');
    const resultEl=document.getElementById('result');
    const input=palnEnter.value;
    const revInput=input.split('').reverse().join('');
    if (input===revInput){
        resultEl.innerHTML='Yes,Its a palindrome';
    }else{
        resultEl.innerHTML='No,its not palindrome';
    }
}