console.log("We are at Strings.");
const Name="Dipen";
const gretting="Good Morning";
console.log(gretting + " " + Name);
let html;
html="<h1> this is heading </h1>";
html=html.concat("<p> this is My para</p>", " this", " str2");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[5]);
console.log(html.indexOf("this")); 
console.log(html.indexOf("hsstsdgdh"));
console.log(html.indexOf("<"));
console.log(html.lastIndexOf("<"));
console.log(html.charAt(5));
console.log(html.endsWith("str2"));
console.log(html.includes("My"));
console.log(html.substring(-4));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split(" "));
console.log(html.replace("this","it"));
let fruit1=`Orange\'`;
let fruit2=`Apple`;
let myHtml=`Hello ${Name}
<h1> this is' "my" heading </h1>
<p> you like ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML=myHtml;
