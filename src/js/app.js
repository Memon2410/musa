// Styles
import '../scss/app.scss'

// Dependencies
import { gsap, CSSRulePlugin, ScrollToPlugin } from 'gsap/all'

// Utils
import Auxiliar from './utils/auxiliar'
import Lazy from './utils/lazy'

// Layout
import Header from './layout/header'

// Sections
import News from './sections/news'

document.addEventListener('DOMContentLoaded', () => {
  window.gsap = gsap
  gsap.registerPlugin(CSSRulePlugin)
  gsap.registerPlugin(ScrollToPlugin)
  window.CSSRulePlugin = CSSRulePlugin

  const header = new Header()
  header.initHeader()

  const news = new News()
  news.initNews()
})
