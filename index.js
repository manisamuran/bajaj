const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4040;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
    try{
    const { data } = req.body;
    const numbers = data.filter(number => 
        {
            number = parseInt(number)
            return typeof number === 'number' && number % 2 === 0
        }
    )
    const odd = data.filter(number => {
        number = parseInt(number)
        return typeof number === 'number' && number % 2 !== 0 && !isNaN(number)
    })
    const alphabhets = data.filter(alphabet => {
        const number = parseInt(alphabet)
        if (typeof alphabet === 'string' && isNaN(number)) {
            return true;
        } else {
            return false; 
        }
    }).map(alphabet => alphabet.toUpperCase());

    res.status(200).json({
        success: true,
        user_id: "jaspreet_Singh",
        email: "Jaspreet1731.be21@chitkara.edu.in",
        roll: "2110991731",
        odd_numbers: odd,
        even_numbers: numbers,
        alphabhets: alphabhets
    })
}catch(err){
    res.status(500).json({
        status: false,
        message: err.message
    })
}
}
)


app.listen(PORT, '0.0.0.0', err => {
    if (err) throw err
    console.log(`Listening on port ${PORT}`)
  })
