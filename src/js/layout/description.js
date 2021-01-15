class Description {
  constructor () {
    this.paragraph = document.getElementById('description-menu')
    this.buttons = document.getElementsByClassName('button-menu')
    this.descriptons = [
      'La visita de una MUSA no pasa desapercibida es un instante pleno de apertura, es la suave presencia que advierte que en el fondo a todos nos mueve una música única y universal.\n\nToda creación humana son los pasos de este baile infinito, desde los hallazgos matemáticos hasta los acordes de un saxofón responden a esta visita.\n\nMUSA busca ser un espacio de encuentro entre disciplinas; ciencia, arte, diseño, tecnología, sociología, ad infintum.\n\nDesea ser un lugar de contacto y de alimentación para el alma y la mente, una semilla para la discusión que se replantea una y otra vez, de manera comprometida, con las preguntas sobre nuestro rol humano, social, nacional y las problemáticas mundiales que nos afectan directamente.',
      'Sección donde viven proyectos a mediano y largo plazo.',
      'Glosario de términos culturales que funciona como wikipedia: cualquier puede aplicar con información, que pasa por un consejo editorial.',
      'Conaculta y downloads de material bibliográfico.',
      'Aquí vive todo el contenido de MUSA, en un archivo filtraba por varias categoría (ie. fecha, medio, nombre de creador, proyecto, etc.)',
      'Tienda. Merca + ediciones o mercancías derivadas de cualquier colaboración de MUSA. Venta de objetos exclusivos y ediciones, y ventas de tiempo limitado.'
    ]
    this.first = true
  }

  setHeight (height) {
    document.getElementById('description-menu').style.minHeight = height + 'px'
  }

  initDescription () {
    let resizeTimer = null
    Array.from(this.buttons).map((current, index) => {
      current.addEventListener('mouseover', event => {
        if (this.first) {
          this.setHeight(
            document.getElementById('description-menu').clientHeight
          )
          this.first = false
        }
        this.paragraph.innerText = this.descriptons[index]
        this.paragraph.style.opacity = '1'
      })

      current.addEventListener('mouseout', event => {
        this.paragraph.innerText = ''
      })
    })

    window.addEventListener('resize', event => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(event => {
        this.paragraph.style.opacity = '0'
        this.paragraph.innerText = this.descriptons[0]
        this.setHeight(document.getElementById('description-menu').clientHeight)
      }, 250)
    })
  }
}

export default Description
