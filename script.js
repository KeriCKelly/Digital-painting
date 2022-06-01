var _ = Two.Utils;
var two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var stars = _.map(_.range(20), function() {
  var x = Math.random() * two.width;
  var y = Math.random() * two.height;
  var star = two.makeStar(x, y, 70, 50);
  star.velocity = Math.random() * 5 + 5;
  star.noStroke().fill = 'rgb('
  + Math.floor(Math.random() * 210 + 100) + ','
  + Math.floor(Math.random() * 100) + ','
  + Math.floor(Math.random() * 320) + ')';
 return star;;
  star.noStroke();
  
  return star;
});

two.bind('update', function() {
  _.each(stars, updateStar);
});

function updateStar(star) {
  star.rotation -= star.velocity / 100;
  star.translation.y -= star.velocity -8;
  if (star.translation.y < 0) {
    star.translation.y = two.width * 1.125;
  }
    star.translation.x -= star.velocity -8;
  if (star.translation.x < 0) {
    star.translation.x = two.width * 1.125;
  }
}

// two.bind('update', function() {
//   var star = _.each(stars, updateStar);
// star.translation.x -= star.velocity *1/8;
// }).play();