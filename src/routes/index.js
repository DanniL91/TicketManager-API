const {Router} = require('express');
const { route } = require('../app');
const connection = require('../connection');
const router = Router();

router.get('/', (req, res) => {
    const sql ='SELECT * FROM USERS';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        } else {
            res.send('Not registers found');
        }
    });
});

router.get('/inicio/:id', (req, res) => res.json({message: 'Perfil del usuario'}));
router.get('/crear/:id', (req, res) => res.json({message: 'Crear nuevo ticket'}));
router.get('/consultar/:id', (req, res) => res.json({message: 'Estos son los tickets para el usuario'}));

module.exports = router;
