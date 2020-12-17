class Quote {
  getQuote (req, res) {
    res.json({
      author: 'Rengoku Kyojuro',
      phrase: 'Envelhecer e morrer é o que dá sentido e beleza ao período fugaz de uma vida humana. É exatamente porque envelhecemos e morremos que nossas vidas têm valor e nobreza. Força não é uma palavra que signifique muito em relação à carne.'
    })
  }
}

module.exports = new Quote()
