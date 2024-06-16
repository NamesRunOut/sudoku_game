let b2d = [[],[],[],[],[],[],[],[],[]];

function ifSafe(a, h, w, num){
        for (let i=0;i<9;i++){
            if (a[h][i]===num) return false;
        }
        for (let i=0;i<9;i++){
            if (a[i][w]===num) return false;
        }
        let squareRowStart=h-h%3;
        let squareColStart=w-w%3;
        for (let i=squareRowStart;i<squareRowStart+3;i++){
            for (let j=squareColStart;j<squareColStart+3;j++){
                if (a[i][j]===num) return false;
            }
        }
        return true;
}

function solve(board){
        let row=-1;
        let col=-1;
        let empty=true;
        for (let i=0;i<9;i++){
            for (let j=0;j<9;j++){
                if (board[i][j]===0){
                    row=i;
                    col=j;
                    empty=false;
                    break;
                }
            }
            if (!empty) break;
        }

        if (empty) return true;

        for (let i=1;i<=9;i++){ // replace dis with a while
            let rand = random(1, 9);
            //console.log(rand)
            if (ifSafe(board, row, col, rand)) {
                board[row][col]=rand;
                if (solve(board)) return true;
                else board[row][col]=0;
            }
        }
    return false;
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function removeDigits(K) {
        let count = K;
        while (count>=1) {
            for (let i=0;i<9;i++){
                for (let j=0;j<9;j++){
                let chance = random(0, 9);
                    if (b2d[i][j]!==0 && chance<2) {
                        count--;
                        b2d[i][j] = 0;
                    }
                }
            }
        }
}

function Generate() {
        let board = [];
        for (let i=0;i<9;i++){
            for (let j=0;j<9;j++){
                b2d[i][j]=0;
            }
        }

        solve(b2d)
        removeDigits(43)

        let bi=0;
        for (let i=0;i<9;i++){
             for (let j=0;j<9;j++){
                   board[bi++] = b2d[i][j];
             }
        }

        return board;
}

export default Generate;