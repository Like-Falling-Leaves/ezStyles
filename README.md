# ezStyles

Creating style sheets dynamically via javascript.

## Install

If you are using ezStyles with [browserify](https://github.com/substack/node-browserify) or some such mechanism, you can get it as an npm module

    npm install ezstyles


If you are using it in the browser, you can direclty include <em>ezStyles.js</em> which has no dependencies.  Replace the path to the CDN location you are using in the following example:

    <script src="/like-falling-leaves.github.io/ezStyles/ezStyles.js"></script>
    

## Creating a style sheet

Usage:

    // var ezStyles = require('ezstyle'); // for npm environments only.  for browser, this is a global
    ezStyles.create({
       id: 'some_unique_id',  // this is the element ID
       styles: [  // styles are provided as pairs: [selector, rule]
          [ 'body', 'margin: 0; padding: 0;' ],
          [ 'li:nth-child(even)', 'background-color: light-grey;']
       ]
    });
    

### Options

* <em>id</em> is the unique id of the stylesheet.  It is useful to prevent the same stylesheet from being added again (if the id exists, nothing is done by this function). it is also useful if you want to remove this stylsheet later on or append more rules to it later on.
* <em>styles</em> is an array of CSS rules where each rule is specified as a pair: a <em>selector</em> and the actual <em>rule</em>.

## Removing a style sheet

Usage:

    ezStyles.remove('some_unique_id'); // the ID must match the ID provided in the create call.


## Appending to a style sheet that was created before

Usage:

    ezStyles.append(
      'some_unique_id', // this ID should match the ID provided in the create call
      [ // these rules are specified in the same format as in the create call
         ['body', 'margin: 0; padding: 0; border: 0;']
      ]
    );
    
