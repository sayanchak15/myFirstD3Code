var width = 120, height = 300;

var data = [4,8,15,16,23,42];
document.getElementById("data").innerHTML = data;

var x = d3.scaleLinear().domain([0,6]).range([0,width]);
var y = d3.scaleLinear().domain([0,42]).range([height,0]);

var tooltip = d3.select("#tooltip");

d3.select(".chart")
    .attr("width",width)
    .attr("height",height)
    .selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("width",19)
    .attr("height",function(d) { return height - y(d); })
    .attr("x",function(d,i) { return x(i); })
    .attr("y",function(d) { return y(d); })
    .on("mouseover", function(d,i) {
        tooltip.style("opacity", 1)
               .style("left",(d3.event.pageX)+"px")
               .style("top",(d3.event.pageY)+"px")
               .html("Item #"+i+" is "+d);
    })
    .on("mouseout", function() { tooltip.style("opacity", 0) })
    console.log("sayan")