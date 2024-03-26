const exp = require('express'); // Import the Express.js module
const etudiante = require('./etudiante.json');
const app = exp(); // Create an instance of Express

// Define a route for the root path
app.get("/", (req, res) => {
    res.send("hello world");
});

// Define a route to serve etudiante data
app.get("/etudiante", (req, res) => {
    res.send(etudiante);
});
app.get('/etudiante/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = etudiante.find(student => student.id === id);
    res.status(200).json(student);
});
app.delete('/delateetudiants/:id',(req,res)=>{
    const id=req.params.id;
    const etud=etudiante.find(etud=>etud.id==id);
    etudiante.splice(etud,1)
    res.status(200).json(etudiante);
    })
    
    app.get('/showEtudiant/:id',(req,res)=>{
      
        let id=req.params.id;
        let etud=etudiante.find(etud=>etud.id==id);
        res.send(etud);
        console.log(etud);
         }) ;



// Start the server to listen                                                            on port 4000
app.listen(4002, () => {
    console.log(`Server is running at http://127.0.0.1:4002`);
});
