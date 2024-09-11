import Card from '#models/card'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {

    public async delete({ request, response }: HttpContext) {
        const { id } = request.params()
        const card = await Card.findOrFail(id)
        await card.delete()
        console.log('Card deleted', card)
        return response.redirect().back()
    }

    public async createCard({ response }: HttpContext) {
        const allCards = await Card.all()
        await Card.create({ title: `Card ${allCards.length + 1}` })
        return response.redirect().back()
    }

    public async render({ inertia }: HttpContext) {
        const cards = await Card.all()
        return inertia.render('home', { cards })
    }
}