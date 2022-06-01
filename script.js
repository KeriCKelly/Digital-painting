var _ = Two.Utils;
var two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var stars = _.map(_.range(5), function() {
  var x = Math.random() * two.width;
  var y = Math.random() * two.height;
  var star = two.makeStar(x, y, 60, 30);
  star.velocity = Math.random() * 5 + 5;
  star.fill = 'rgb(0, 200, 255)';
  star.noStroke();
  
  return star;
});

two.bind('update', function() {
  _.each(stars, updateStar);
});

function updateStar(star) {
  star.rotation -= star.velocity / 100;
  if (star.translation.x < 0) {
    star.translation.x = two.width * 1.125;
  }
}

document.onmousemove = function(e) {
  star.translation -= star.velocity / 100;
  var star = e.clientX; 
    var star = e.clientY; 
  star.translation.x += (star.destination.x - star.translation.x) * 0.0625;
  star.translation.y += (star.destination.y - star.translation.y) * 0.0625;
}