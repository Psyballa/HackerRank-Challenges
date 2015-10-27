function processData(input) {
    //Enter your code here
    var rows = input.split('\n');
    var grid = [];
    rows.forEach(function (rowString) {
       grid.push(rowString.split(" ")); 
    }.bind(this));
    
    var hourGlasses = calculateHourglasses(grid);
    var maxFromHourglasses = getMaxHourglass(hourGlasses);
    console.log(getMaxOfArray(maxFromHourglasses));
} 

function calculateHourglasses(grid) {
    var hourglasses = [];
    grid.forEach(function (row, rowIdx) {
        if (rowIdx <= Math.floor(grid.length/2)) {

            row.forEach(function (entry, index) {
                var currHourglass = '';
                if (index <= Math.floor(row.length/2)) {
                    currHourglass += "" + grid[rowIdx][index] + " ";
                    currHourglass += "" + grid[rowIdx][index+1] + " ";
                    currHourglass += "" + grid[rowIdx][index+2] + '\n';
                    currHourglass += "" + " " + grid[rowIdx+1][index+1] + " \n";
                    currHourglass += "" + grid[rowIdx+2][index] + " ";
                    currHourglass += "" + grid[rowIdx+2][index+1] + " ";
                    currHourglass += "" + grid[rowIdx+2][index+2];
                }
                if (currHourglass !== '') {
                    hourglasses.push(currHourglass);
                }
                
            }.bind(this));
        }
    }.bind(this));
    
    return hourglasses;
}

function getMaxHourglass(hourglasses) {
    var totals = [];
    hourglasses.forEach(function (hourglass) {
        hourglass = hourglass.split(/[\n,\s,]+/);
        var total = 0;
        hourglass.forEach(function (entry) {
            if (parseInt(entry, 10)) {
                total += parseInt(entry, 10);
            }     
        }.bind(this));
        totals.push(total);
    }.bind(this));
    
    return totals;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
