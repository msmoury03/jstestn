// Level 1


let n =5
let strin = ''
for(let i = 1;i<=n;i++){
    for(let j=1;j<= n-i;j++){
        strin += j;
        for(let k =1;k<1;k++){
            strin += k;
        }
        
    }
    


    strin +='\n'
    
    
    
}
console.log(strin)