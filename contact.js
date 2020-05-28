document.getElementById('submit').addEventListener('click', function(event)
{
  //build up the url
  var url = "http://httpbin.org/post";
  var payload = {text:null};

  payload.text = document.getElementById('message').value;

  APIReq.open('POST', url, true);
  APIReq.setRequestHeader('content-type', 'application/json');
  APIReq.addEventListener('load', function()
  {
    if(APIReq.status >= 200 && APIReq.status < 400)
    {
      var response = JSON.parse(APIReq.responsfaceeText);
      document.getElementById('returned').textContent = response.data;
    }
    else
    {
      console.log("Error: " + APIReq.status + " " + APIReq.statusText);
    }
  });
  APIReq.send(JSON.stringify(payload));
  event.preventDefault();

});


/*
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('submit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {name:null, email:null, comments:null};

    payload.name = document.getElementById('name').value;
    payload.email = document.getElementById('email').value;
    payload.message = document.getElementById('message').value;

    console.log(payload);

    req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function()
    {
      if(req.status >= 200 && req.status < 400)
      {
        var response = JSON.parse(req.responseText);
        document.getElementById('shortUrl').textContent = payload;
        console.log(response);
      }
      else
      {
        console.log("Error in network request: " + req.statusText);
      }
    });
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });}*/
