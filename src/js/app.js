// Styles
import '../scss/app.scss'

// Dependencies
import Bowser from 'bowser'
import {
  gsap,
  CSSRulePlugin,
  ScrollToPlugin,
  TimelineMax,
  Power0
} from 'gsap/all'

// Components
import Parallax from './components/parallax'
import Preloader from './components/preloader'

// Layout
import Description from './layout/description'
import Header from './layout/header'

// Sections
import News from './sections/news'

document.addEventListener('DOMContentLoaded', () => {
  const infoBrowser = Bowser.getParser(window.navigator.userAgent)
  window.platform = infoBrowser.parsedResult.platform.type

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

  if (document.getElementsByClassName('responsive').length > 0) {
    const parallax = new Parallax()
    parallax.initParallax()
  }

  if (document.getElementsByClassName('content').length > 0) {
    const header = new Header()
    header.initHeader()

    const news = new News()
    news.initNews()

    if (window.platform === 'desktop') {
      const description = new Description()
      description.initDescription()
    }
  }
})
