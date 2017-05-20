var fs = require("fs");
var d3 = require("d3");
var _ = require("lodash");

fs.readFile("./USDJPY,D1.csv", "utf8", function(error, data) {
  data = d3.tsvParse(data);
  console.log(JSON.stringify(data));

});