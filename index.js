var Twing = require('twing');
var loader = new Twing.TwingLoaderArray({
    'index.twig': 'foo{{ foo }}'
});
var twing = new Twing.TwingEnvironment(loader, {
    'cache': false
});
var output = twing.render('index.twig', {
    foo: 'bar'
});
console.log(output);
