let solution = [[],[],[],[],[],[],[],[],[]];

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

        for (let i=1;i<=9;i++){
            if (ifSafe(board, row, col, i)) {
                board[row][col]=i;
                solution[row][col]=i
                if (solve(board)) return true;
                else board[row][col]=0;
            }
        }
    return false;
}

function getSolved(board){
    let b2d = [[],[],[],[],[],[],[],[],[]];
    let response = []
    let bi = 0;
    for (let i=0;i<9;i++){
        for (let j=0;j<9;j++){
          b2d[i][j] = board[bi++]
        }
    }
    if (solve(b2d)) {
        bi=0;
        for (let i=0;i<9;i++){
            for (let j=0;j<9;j++){
              response[bi]=b2d[i][j]
              bi++;
            }
        }
        return response
    }
    else return 'error'
}

export default getSolved;