

//view is the default template directory that why we create views directory and put .hbs file there


const express=require('express');

const port=process.env.PORT || 3000;
var app=express();

app.use((request,response,next) =>{
	 next();
})
const hbs=require('hbs');
hbs.registerPartials(__dirname+'/views/partials');
//key-value pair
app.set('view engine','hbs');
// request tore the client information  
app.get('/',(request,response) =>{

		// response.send('<h1>hello express<h1>');

		response.send(

		{
			name:'Shubham',
			likes:['biking','cities']
		}
			)

});

app.get('/about',(request,response) =>
{
	//response.send('About page');
	response.render('about.hbs',{

		pagetitle:'about page',
		currentyear: new Date().getFullYear()
	})
});


app.get('/bad',(request,response) =>
{

	response.send(
			{
				errormessage:'error !!!!!!!!!!!'
			}
		)
})


app.use(express.static(__dirname+'/public'));


//bind the request on the specific port
app.listen(port,() =>
	{
		console.log("server start at port "+ port);
	});