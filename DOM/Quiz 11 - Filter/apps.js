

/*
Toggling Between Files
On the Classroom code editor menu, click the down arrow next to index.html and select app.js to open the script.


For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');

kids = articleList.children('*');

parents = articleList.parents('div');

console.log(h1, kids, parents);