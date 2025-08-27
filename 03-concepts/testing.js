// Draw a Triangle
//
// *    
// **   
// ***  
// **** 
// *****

function drawTriangle(number)
{
    const str = '';
    for (let i = 1; i <=number; i++)
    {
        console.log(str.concat('*'.repeat(i),' '.repeat(number - i)));
    }
}

(drawTriangle(9))
