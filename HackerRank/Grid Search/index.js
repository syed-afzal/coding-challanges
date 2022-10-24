const gridSearch = (G, P) => {
    const R = G.length;
    const C = G[0].length;
    const r = P.length;
    const c = P[0].length;
    for (let i = 0; i <= R - r; i++) {
        for (let j = 0; j <= C - c; j++) {
            if (G[i][j] == P[0][0]) {
                let found = true;
            }
        }
    }
    return 'NO';
}

// if(greenSignal && currentIndex > -1) {
//   count++;
// } else if(G[i].includes(P[count])){
//   greenSignal = true;
//   count++;
// } else {
//   count = 0;
// }

function indices(char, str) {
    let regex = new RegExp(char, 'g');
    let result, indexes = [];
    while ( (result = regex.exec(str)) ) {
        indexes.push(result.index);
    }
    return indexes;
}

function gridSearch(G, P) {
    // Write your code here
    let matches = [];
    let columnIndex = [];
    let matchPatternIndex = 0;
    for (let i=0; i<G.length; i++) {
        if(matchPatternIndex === P.length)
            break;
        matches = indices(P[matchPatternIndex], G[i]);
        if (matches.length > 0) {
            if (columnIndex.length < 1) {
                matchPatternIndex++;
            } else {
                matchPatternIndex = matches.filter(value => columnIndex.includes(value)).length > 0 ? ++matchPatternIndex : 1;
            }
            columnIndex = [...matches];
        } else if (matchPatternIndex > 0 && G[i].indexOf(P[matchPatternIndex - 1]) > -1) {
            columnIndex = indices(P[matchPatternIndex], G[i]);
        } else {
            columnIndex = [];
            matchPatternIndex = 0;
        }
    }
    return matchPatternIndex === P.length ? "YES" : "NO";
}

// console.log(gridSearch([
//   '7283455864',
//   '3830589324',
//   '2229505813',
//   '5633845374',
//   '6473530293',
//   '7053106601',
//   '4607924137',
// ], ['9505', '3845','3530']))
// console.log(gridSearch([
//   '123412',
//   '561212',
//   '123634',
//   '781288',
// ], ['12', '34']))

console.log(indices('11111', '111111111111111'))
console.log(indices('11110', '111111011111111'))



// let matchPatternIndex = 0;
// let columnIndex = -1;
// for(let i=0; i<G.length; i++) {
//     if(matchPatternIndex === P.length)
//         break;
//     else {
//         let gridColIndex = G[i].indexOf(P[matchPatternIndex]);
//         if(gridColIndex > -1) {
//             if(columnIndex > -1 && columnIndex === gridColIndex) {
//                 matchPatternIndex++;
//             } else {
//                 columnIndex = gridColIndex;
//                 matchPatternIndex = 1;
//             }
//         } else if( G[i].indexOf(P[matchPatternIndex - 1]) > -1){
//             console.log('here',G[i], P[matchPatternIndex]);
//             columnIndex = G[i].indexOf(P[matchPatternIndex - 1]);
//         } else {
//             columnIndex = -1;
//             matchPatternIndex = 0;
//         }
//     }
// }
// return matchPatternIndex === P.length ? "YES" : "NO";