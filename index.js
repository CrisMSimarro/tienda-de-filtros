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
const productsContainer = document.getElementById('products-container')
const suggestedContainer = document.getElementById('suggested-container')
const suggestedSection = document.getElementById('suggested-products')
const openFiltersBtn = document.getElementById('open-filters')
const closeModalBtn = document.getElementById('close-modal')
const modal = document.getElementById('modal')
const filterForm = document.getElementById('filter-form')
const clearFiltersBtn = document.getElementById('clear-filters')

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
  const category = document.getElementById('category-filter').value
  const price = parseFloat(document.getElementById('price-filter').value)

  let filtered = products.filter((p) => {
    return (
      (category === '' || p.category === category) &&
      (isNaN(price) || p.price <= price)
    )
  })

  if (filtered.length > 0) {
    renderProducts(filtered, productsContainer)
    suggestedSection.classList.add('hidden')
  } else {
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
})
