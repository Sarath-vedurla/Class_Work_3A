const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>True Vote</title>
    <link rel="stylesheet" href="./assests/css/style.css"> <!-- Correct path to your CSS -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- https://script.google.com/macros/s/AKfycby35R9zs89mvhkdCvr6sdCuoucFgPXg3Mi8DLj7W70qpl5rcmP4qS8SWYCl0a1pHBhC/exec -->
    <img src="./assests/img/Temp.jpg" alt="template" class="templ">
    <header>
        <img src="./assests/img/log.png" alt="logo" id="lo">
        <nav id="nav-bar">
            <ul>
                <li><a href=#Home>Home</a></li>
                <li><a href=dashboard.html>dashboard</a></li>
                <li><a href=about.html>About</a></li>
        </nav>
        <section></section>
        <p>Caste your vote</p>
    </header>
    <main>
      <section class="sec-1">
            <div class="container1">
                <a href="./login.html"><button type="button">Login</button></a>
            </div>
            <div class="container">
                <a href="./register.html"><button type="button">Register</button></a>
            </div>
      </section>
      <section class="sec-2">
        <h1 id="wo">Welcome to True Vote</h1>
        <p id="wor">"Cast your vote securely and easily online – your vote matters!"</p>
      </section>
    </main>
    <footer>
        <p>All rights reserved to True Vote</p>
    </footer>
</body>
</html>
`)
   
    res.end()
})

server.listen(1234, ()=>{
    console.log("Server is running @ http://localhost:1234")
})