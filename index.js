// =======================
// Datos de productos
// =======================
const products = [
  {
    id: 1,
    name: 'Camiseta',
    category: 'Ropa',
    price: 15,
    img: 'https://image.hm.com/assets/hm/d8/02/d80215a702428b9e942cc1faa5eecad2dc02f843.jpg?imwidth=1260'
  },
  {
    id: 2,
    name: 'Cojines',
    category: 'Hogar',
    price: 20,
    img: 'https://image.hm.com/assets/hm/7e/ed/7eede581c758fcfc66d6935733ade02935d916e2.jpg?imwidth=1260'
  },
  {
    id: 3,
    name: 'Alfombras',
    category: 'Hogar',
    price: 100,
    img: 'https://image.hm.com/assets/hm/ab/35/ab35aca773011f22e353089e321302349e937391.jpg?imwidth=1260'
  },
  {
    id: 4,
    name: 'Vestido',
    category: 'Ropa',
    price: 50,
    img: 'https://image.hm.com/assets/hm/21/48/2148a0a755dc71ccac3173b7252f3be9422fa061.jpg?imwidth=1260'
  },
  {
    id: 5,
    name: 'Maquillaje',
    category: 'Beauty',
    price: 10,
    img: 'https://image.hm.com/assets/hm/e2/6f/e26f456b34c4fa5ce92d2f915c2cb36b8f4bb2a8.jpg?imwidth=1260'
  },
  {
    id: 6,
    name: 'Mesa',
    category: 'Hogar',
    price: 120,
    img: 'https://image.hm.com/assets/hm/2d/5b/2d5b40ef5578d4bcc79ba0cb9583d1824dd39eb0.jpg?imwidth=1260'
  },
  {
    id: 7,
    name: 'Caja de mimbre',
    category: 'Almacenaje',
    price: 15,
    img: 'https://image.hm.com/assets/hm/f0/60/f060968a447280f3c2d29dc16fa4ea8b7ce5d0e2.jpg?imwidth=1260'
  },
  {
    id: 8,
    name: 'Chaqueta',
    category: 'Ropa',
    price: 40,
    img: 'https://image.hm.com/assets/hm/97/94/97946b796cd0035b10e38d6bb17258a03398fb82.jpg?imwidth=1260'
  },
  {
    id: 9,
    name: 'Lámpara de mesa',
    category: 'Hogar',
    price: 50,
    img: 'https://image.hm.com/assets/hm/37/47/374727564ca37fcf5f49553329670e28f9b34c6f.jpg?imwidth=1260'
  },
  {
    id: 10,
    name: 'Cesto de ropa sucia',
    category: 'Almacenaje',
    price: 30,
    img: 'https://image.hm.com/assets/hm/f2/63/f2632e2bc3f0fcbd61d513bfc0d1bbd990472bf7.jpg?imwidth=1260'
  },
  {
    id: 11,
    name: 'Zapatillas deportivas',
    category: 'Ropa',
    price: 45,
    img: 'https://image.hm.com/assets/hm/cd/50/cd5084c00d505217a157d45fee50a4e3119ddd03.jpg?imwidth=1260'
  },
  {
    id: 12,
    name: 'Perfume',
    category: 'Beauty',
    price: 30,
    img: 'https://image.hm.com/assets/hm/81/47/814775c922d695286c42847b2350a4318613daff.jpg?imwidth=1260'
  },
  {
    id: 13,
    name: 'Silla de diseño',
    category: 'Hogar',
    price: 100,
    img: 'https://image.hm.com/assets/hm/65/4c/654c8d399edd3507475889b362a00aa4cf418074.jpg?imwidth=1260'
  },
  {
    id: 14,
    name: 'Estanteria',
    category: 'Almacenaje',
    price: 40,
    img: 'https://image.hm.com/assets/hm/d4/37/d437589ac220b26852dc38c20120387c50bce307.jpg?imwidth=1260'
  }
]

// =======================
// Creación de estructura DOM
// (HTML solo tiene <header> y <footer>)
// =======================

// Referencias a header y footer del HTML
const header = document.querySelector('header')
const footer = document.querySelector('footer')

// ----- Header -----
const title = document.createElement('h1')
title.textContent = 'Tienda de productos variados'

const openFiltersBtn = document.createElement('button')
openFiltersBtn.id = 'open-filters'
openFiltersBtn.textContent = 'Filtro'

header.appendChild(title)
header.appendChild(openFiltersBtn)

// ----- Modal de filtros -----
const modal = document.createElement('div')
modal.id = 'modal'
modal.classList.add('modal', 'hidden')

const modalContent = document.createElement('div')
modalContent.classList.add('modal-content')

const closeModalBtn = document.createElement('button')
closeModalBtn.id = 'close-modal'
closeModalBtn.classList.add('close')
closeModalBtn.setAttribute('aria-label', 'Cerrar modal')
closeModalBtn.innerHTML = '&times;'

const modalTitle = document.createElement('h2')
modalTitle.textContent = 'Filtrar Productos'

const filterForm = document.createElement('form')
filterForm.id = 'filter-form'

// Campo categoría
const categoryLabel = document.createElement('label')
categoryLabel.textContent = 'Categoría: '

const categorySelect = document.createElement('select')
categorySelect.id = 'category-filter'

const optionAll = document.createElement('option')
optionAll.value = ''
optionAll.textContent = 'Todas'

const optionRopa = document.createElement('option')
optionRopa.value = 'Ropa'
optionRopa.textContent = 'Ropa'

const optionHogar = document.createElement('option')
optionHogar.value = 'Hogar'
optionHogar.textContent = 'Hogar'

const optionBeauty = document.createElement('option')
optionBeauty.value = 'Beauty'
optionBeauty.textContent = 'Belleza'

const optionAlmacenaje = document.createElement('option')
optionAlmacenaje.value = 'Almacenaje'
optionAlmacenaje.textContent = 'Almacenaje'

categorySelect.appendChild(optionAll)
categorySelect.appendChild(optionRopa)
categorySelect.appendChild(optionHogar)
categorySelect.appendChild(optionBeauty)
categorySelect.appendChild(optionAlmacenaje)

categoryLabel.appendChild(categorySelect)

// Campo precio
const priceLabel = document.createElement('label')
priceLabel.textContent = 'Precio máximo: '

const priceInput = document.createElement('input')
priceInput.type = 'number'
priceInput.id = 'price-filter'
priceInput.placeholder = '0'

priceLabel.appendChild(priceInput)

// Botones del formulario
const applyBtn = document.createElement('button')
applyBtn.type = 'submit'
applyBtn.textContent = 'Aplicar filtros'

const clearFiltersBtn = document.createElement('button')
clearFiltersBtn.type = 'button'
clearFiltersBtn.id = 'clear-filters'
clearFiltersBtn.textContent = 'Limpiar filtros'

// Montar formulario
filterForm.appendChild(categoryLabel)
filterForm.appendChild(priceLabel)
filterForm.appendChild(applyBtn)
filterForm.appendChild(clearFiltersBtn)

// Montar modal
modalContent.appendChild(closeModalBtn)
modalContent.appendChild(modalTitle)
modalContent.appendChild(filterForm)
modal.appendChild(modalContent)

// Insertar modal en el body
document.body.appendChild(modal)

// ----- Main y contenedores -----
const main = document.createElement('main')

// Contenedor de productos
const productsContainer = document.createElement('div')
productsContainer.id = 'products-container'
productsContainer.classList.add('products-container')

// Sección de productos sugeridos
const suggestedSection = document.createElement('div')
suggestedSection.id = 'suggested-products'
suggestedSection.classList.add('suggested-products', 'hidden')

const suggestedTitle = document.createElement('h3')
suggestedTitle.textContent = 'Productos sugeridos'

const suggestedContainer = document.createElement('div')
suggestedContainer.id = 'suggested-container'
suggestedContainer.classList.add('products-container')

suggestedSection.appendChild(suggestedTitle)
suggestedSection.appendChild(suggestedContainer)

// Meter todo en main
main.appendChild(productsContainer)
main.appendChild(suggestedSection)

// Insertar main antes del footer
document.body.insertBefore(main, footer)

// ----- Footer -----
footer.textContent = 'Cristina Martínez - Tienda de Productos'

function renderProducts(list, container) {
  container.innerHTML = ''
  list.forEach((product) => {
    const card = document.createElement('div')
    card.classList.add('product-card')
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>Categoría: ${product.category}</p>
      <p>Precio: ${product.price}€</p>
    `
    container.appendChild(card)
  })
}

// Pintar todos los productos al inicio
renderProducts(products, productsContainer)

// Abrir modal de filtros
openFiltersBtn.addEventListener('click', () => modal.classList.remove('hidden'))

// Cerrar modal
closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'))

// Aplicar filtros
filterForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const category = categorySelect.value
  const price = parseFloat(priceInput.value)

  const filtered = products.filter((p) => {
    return (
      (category === '' || p.category === category) &&
      (isNaN(price) || p.price <= price)
    )
  })

  if (filtered.length > 0) {
    // Hay resultados -- pintar productos y ocultar sugeridos
    renderProducts(filtered, productsContainer)
    suggestedSection.classList.add('hidden')

    suggestedContainer.innerHTML = ''
  } else {
    // No hay resultados -- mostrar sugeridos
    const shuffled = [...products].sort(() => 0.5 - Math.random()).slice(0, 3)
    renderProducts(shuffled, suggestedContainer)
    suggestedSection.classList.remove('hidden')
    productsContainer.innerHTML = ''
  }

  modal.classList.add('hidden')
})

// Limpiar filtros
clearFiltersBtn.addEventListener('click', () => {
  filterForm.reset()
  renderProducts(products, productsContainer)
  suggestedSection.classList.add('hidden')

  suggestedContainer.innerHTML = ''
})
