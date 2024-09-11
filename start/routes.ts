/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import router from '@adonisjs/core/services/router'


router.get('/', [CardsController, 'render'])
router.post('create', [CardsController, 'createCard'])
router.post('card/:id', [CardsController, 'delete'])
