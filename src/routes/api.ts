import {Router} from 'express'

//importar o apiController
import * as apiController from '../controllers/apiController'

const router = Router()

//coloque o API controller aqui 
router.get('/ping',apiController.ping)
router.get('/random',apiController.random)
router.get('/nome/:nome',apiController.nome)

//criando endpoint frases
router.post('/frases',apiController.createPhrase)

//essa rota será apenas para ler a frase (ela é semelhante ao POST)
router.get('/frases',apiController.listPhrases)
//pegando uma frase específica
router.get('/frases/:id',apiController.getPhrase)

//criar a rota para atualizar a frase
router.put('/frases/:id',apiController.updatePhrase)

//deletando uma frase
router.delete('/frases/:id',apiController.deletePhrase)

export default router
