exports.newsEmail = (jsonResponse) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
        .container{
            width:100%;
            height:100%;
            margin: 0 auto;
            overflow-x: hidden;
        }
        span{
            color:red;
        }
        </style>
    
    </head>
    
    <body>
        <div class="container">
           <span>1</span> <a href="${jsonResponse.articles[0].url}" target="_blank" ><h4>${jsonResponse.articles[0].title}</h4></a>
           <span>2</span> <a href="${jsonResponse.articles[1].url}" target="_blank" ><h4>${jsonResponse.articles[1].title}</h4></a>
           <span>3</span> <a href="${jsonResponse.articles[2].url}" target="_blank" ><h4>${jsonResponse.articles[2].title}</h4></a>
           <span>4</span> <a href="${jsonResponse.articles[3].url}" target="_blank" ><h4>${jsonResponse.articles[3].title}</h4></a>
           <span>5</span> <a href="${jsonResponse.articles[4].url}" target="_blank" ><h4>${jsonResponse.articles[4].title}</h4></a>
           <span>6</span> <a href="${jsonResponse.articles[5].url}" target="_blank" ><h4>${jsonResponse.articles[5].title}</h4></a>
           <span>7</span> <a href="${jsonResponse.articles[6].url}" target="_blank" ><h4>${jsonResponse.articles[6].title}</h4></a>
           <span>8</span> <a href="${jsonResponse.articles[7].url}" target="_blank" ><h4>${jsonResponse.articles[7].title}</h4></a>
           <span>9</span> <a href="${jsonResponse.articles[8].url}" target="_blank" ><h4>${jsonResponse.articles[8].title}</h4></a>
           <span>10</span> <a href="${jsonResponse.articles[9].url}" target="_blank" ><h4>${jsonResponse.articles[9].title}</h4></a>
        </div>
    </body>
    
    </html>`
  }