const fnWithError = () =>
{
    throw new Error('Some error')
}

try{
    fnWithError()
} catch(error){
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')

let a = 4;
const b = 5;

if (a>b){
    console.log('yes')
}else{
    console.log('noooooo')
}

function Esep(b){
    console.log(b)
}


Esep(1+1)