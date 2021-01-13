// Styles
import '../scss/app.scss'

// Dependencies
import {
  gsap,
  CSSRulePlugin,
  ScrollToPlugin,
  TimelineMax,
  Power0
} from 'gsap/all'

// Components
import Preloader from './components/preloader'

// Layout
import Header from './layout/header'

// Sections
import News from './sections/news'

document.addEventListener('DOMContentLoaded', () => {
  window.gsap = gsap
  gsap.registerPlugin(CSSRulePlugin)
  gsap.registerPlugin(ScrollToPlugin)
  window.CSSRulePlugin = CSSRulePlugin
  window.TimelineMax = TimelineMax
  window.Power0 = Power0

  window.onload = () => {
    window.preloader = new Preloader()
    window.preloader.hide()
  }

  const header = new Header()
  header.initHeader()

  const news = new News()
  news.initNews()
})
