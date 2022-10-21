const gridSearch = (G, P) => {
    const R = G.length;
    const C = G[0].length;
    const r = P.length;
    const c = P[0].length;
    for (let i = 0; i <= R - r; i++) {
        for (let j = 0; j <= C - c; j++) {
            if (G[i][j] == P[0][0]) {
                let found = true;
                for (let k = 0; k < r; k++) {
                    for (let l = 0; l < c; l++) {
                        if (G[i + k][j + l] != P[k][l]) {
                            found = false;
                            break;
                        }
                    }
                    if (!found) break;
                }
                if (found) return 'YES';
            }
        }
    }
    return 'NO';
}