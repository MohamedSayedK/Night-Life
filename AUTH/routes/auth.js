const router = require('express').Router();

router.post('/register',(req,rest) => {
    rest.send('Register');
})


module.exports = router;