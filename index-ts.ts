const Twing = require('twing');
const TwingEnvironment = require('twing/lib/twing/environment').TwingEnvironment;

let loader = new Twing.TwingLoaderArray({
    'index.twig': 'foo{{ foo }} in TypeScript'
});

let twing: TwingEnvironment = new TwingEnvironment(loader, {
    'cache': false
});

let output = twing.render('index.twig', {
    foo: 'bar'
});

console.log(output);