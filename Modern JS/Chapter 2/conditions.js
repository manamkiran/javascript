let scores = [1,2,3,4,5,6,7];

for (let i = 0; i < scores.length; i++) {
    console.log("Hello");
    for (let j = 0 ; j < 5; j++)
    {
        console.log(scores[i]+j);
        if(scores[i]+j === 10)
        {
            console.log("Its a miracle");
            break;
        }
    }
    
}