function isAnagram(s,t)
{
    const arrS = [...s];
    const arrT = [...t];
    const sortS = arrS.sort();
    const sortT = arrT.sort();
    const finalS = sortS.join('');
    const finalT = sortT.join('');
    return finalS === finalT ? true : false;
}

console.log(isAnagram('racecar','carrace'));
