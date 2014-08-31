;(function () {
  var exp = {create: createStyleSheet, remove: removeStyleSheet, append: appendRules};
  if (typeof (module) != undefined) module.exports = exp;
  else if (typeof (window) != undefined) window.ezStyles = exp;

  function createStyleSheet(options) {
    options = options || {};
    var id = options.id || ('styles-' + (new Date()).getTime().toString());
    if (document.getElementById(id)) return document.getElementById(id);
    var elt = document.createElement("style");
    elt.id = id;
    elt.appendChild(document.createTextNode(""));
    (document.head || document.getElementByTagName('head')[0]).appendChild(elt);
    
    return addRules(elt, options.styles || []);
  }
  
  function addRules(elt, rules) {
    var sheet = elt.sheet;
    for (var kk = 0; kk < rules.length; kk ++) {
      var rule = rules[kk];
      if (sheet.insertRule) sheet.insertRule(rule[0] + '{' + rule[1] + '}');
      else sheet.addRule(rule[0], rule[1]);
    }
    return elt;
  }
  
  function appendRules(id, rules) {
    var elt = document.getElementById(id);
    if (!elt) return;
    return addRules(elt, rules);
  }
  
  function removeStyleSheet(id) {
    var elt = document.getElementById(id);
    if (!elt) return;
    elt.parentNode.removeChild(elt);
    return elt;
  }
})();
