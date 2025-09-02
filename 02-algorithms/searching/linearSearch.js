function linearSearch(arr,value)
{

    for (let i = 0; i <= arr.length -1;i++)
    {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([316,933,337,671,21,35,966,495], 21));
