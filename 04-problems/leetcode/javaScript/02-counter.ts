function createCounter(n: number): () => number
{
    let count: number = 0;
    return function() {
        const result: number = n + count;
        count++;
        return result;
    }
}
