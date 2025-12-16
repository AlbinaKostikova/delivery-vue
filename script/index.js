const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay')
  const cartBtn = document.querySelector('#cart-button')
  const closeBtn = document.querySelector('.carrt-modal__header--close')

  const openModal = () => {
    modal.classList.add('open')
  }
  const closeModal = () => {
    modal.classList.remove('open')
  }
  closeBtn.addEventListener('click', () => {
    closeModal()
  })
  modal.addEventListener('click', event => {
    if (
      event.target.classlist.contains('cart-modal__header--close') ||
      event.target.closest('.cart-modal__header--close')
    ) {
      closeModal()
    }
  })
}
const restFunc = () => {
  const container = document.querySelector('#rests-container')
  
  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
  }

  const renderRests = array => {
    container.innerHTML = ''
    array.forEach((card) => {
      container.insertAdjacentElement(
        'beforeend',
        `
          <a href="/goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="images/rests/${card.image}" alt="rest-2">
                </div>
                <div class="products-card__desc">
                  <div class="products-card__desc-row">
                    <h4 class="products-card__desc--title">${card.title}</h4>
                    <div class="products-card__desc--badge">${card.time}</div>
                  </div>
                  <div class="products-card__desc-row">
                    <div class="products-card__desc-info">
                      <div class="products-card__desc-info--raiting">
                        <img src="images/icons/star.svg" alt="star">${card.raiting}
                      </div>
                      <div class="products-card__desc-info--price">От ${card.price} Р</div>
                      <div class="products-card__desc-info--group">${card.type}</div>
                    </div>
                  </div>
                </div>
              </a>
              `,
      )
    })
  }
  loading()
  setTimeout(() => {
    renderRests()
  }, 1000)
}
modalFunc()
restFunc()
