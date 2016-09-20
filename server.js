var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={

 'first-article': {
'title':'FirstArticle',
'heading':'First Article',
'date':'20 Sep 2016',
'content':`<p>Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java. </p>
           <p>
               
               Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java.
           </p>`
},
 'second-article':{
'title':'SecondtArticle',
'heading':'Second Article',
'date':'20 Sep 2016',
'content':`<p>Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java. </p>
           <p>
               
               Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java.
           </p>`
},

'third-article':{
'title':'ThirdArticle',
'heading':'Third Article',
'date':'20 Sep 2016',
'content':`<p>Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java. </p>
           <p>
               
               Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java.
           </p>`
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="/ui/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
   <body>
      <div class="container"> 
       <div>
           <a href="/">Home</a>
       </div>
       <hr/>
       <h3>${heading}</h3>
       <div>
          ${date}
       </div>
       <div>
           ${content}
       </div>
       </div>
   </body>
</html>


`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res)
{
    var articleName=req.param.articleName;
     res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
