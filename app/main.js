//create a namespaces
function newNS(ns) {
    var names = ns.split("."),
        parent = window;
    for (var i = 0, imax = names.length; i < imax; i++) {
        if (!parent[names[i]]) {
            parent[names[i]] = {};
        }
        parent = parent[names[i]];
    }
}
console.log("1");

newNS("GoodPractices");
newNS("GoodPractices.Core");
newNS("GoodPractices.App");

newNS("GoodPractices.App.DOM");

newNS("GoodPractices.Core.Routes");
newNS("GoodPractices.Core.Handlers");
newNS("GoodPractices.Core.Handlers.Ajax");
newNS("GoodPractices.Core.Handlers.Events");
