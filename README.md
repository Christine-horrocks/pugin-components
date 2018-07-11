#Pugin Components
[Pugin Components][pugin-components] is a proposed front-end dust components module prototype for a [beta.parliament.uk][beta]. It is built on [Shunter][shunter].

[![Build Status][shield-travis]][info-travis] [![Test Coverage][shield-coveralls]][info-coveralls] [![License][shield-license]][info-license]

### Contents
<!-- START doctoc -->
<!-- END doctoc -->

## Requirements
[Pugin Components][pugin-components] requires the following:
* [NodeJS][node] - [click here][node-version] for the exact version
* [NPM][npm]

## Quick start
```bash
git clone
cd pugin-components
npm install
npm cache clean --force && npm test
```

## Running the application
To run the application you need to clone it, and paste it into the node_modules folder of the Shunter application you wish to use it with. Then go to your shunter application's app.js (or index.js) file. Add modules to the to the file, like the example below:  
```
// Create a Shunter application, passing in options
const app = shunter({

    // Configure the themes path to the current directory
    path: {
        themes: __dirname
    },
    routes: config.routes,
    jsonViewParameter: 'json',
    modules: ["pugin-components"]
});
```  
You should now be able to call on the components as if they were in a view folder in your root directory.  

## i18n Note
Please note, that while normally data would be passed into a string in a translation file using double moustaches which sanitises input, when passing in a URL or other form of content which you do not wish to be sanitised you must use triple moustaches or it will not be rendered correctly in the output.  
Example:  
`"cookie-policy": "<a href='{{{link}}}'>Cookie Policy</a>"`  
Will be rendered correctly as:  
`<a href='/meta/cookie'>Cookie Policy</a>`

## Contributing
If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Ensure your changes are tested using [Mocha][mocha]
1. Create a new Pull Request

## License
[Pugin Components][pugin-components] is licensed under the [MIT][info-license].

[pugin-components]: https:
[beta]: https://beta.parliament.uk
[shunter]: https://github.com/springernature/shunter
[pugin]: https://github.com/ukparliament/parliament.uk-pugin
[node]: https://nodejs.org/
[node-version]: https://github.com/ukparliament/augustus/blob/master/.node-version
[npm]: https://www.npmjs.com/
[local]: http://localhost:5400
[mocha]: https://mochajs.org/

[info-travis]:   https://travis-ci.org/ukparliament/augustus
[shield-travis]: https://img.shields.io/travis/ukparliament/augustus.svg

[info-coveralls]:   https://coveralls.io/github/ukparliament/augustus
[shield-coveralls]: https://img.shields.io/coveralls/ukparliament/augustus.svg

[info-license]:   https://github.com/ukparliament/augustus/blob/master/LICENSE
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
