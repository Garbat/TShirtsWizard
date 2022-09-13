export const state = ()=>({
    products: {
      overprint: {
        'child_tshirt': {
          title: 'Детская футболка',
          images: [
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_14_child_tshirt_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_14_child_tshirt_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_15_child_tshirt_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_15_child_tshirt_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_16_child_tshirt_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_16_child_tshirt_back_white_SIZE.jpg'
          ]
        },
        'manshortfull': {
          title: 'Мужская футболка',
          images: [
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_4_manshortfull_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_13_manshortfull_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_16_manshortfull_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_16_manshortfull_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_17_manshortfull_front_white_SIZE.jpg',
          ]
        },
        'womanshortfull': {
          title: 'Женская футболка',
          images: [
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_11_womanshortfull_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_16_womanshortfull_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_17_womanshortfull_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_17_womanshortfull_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_18_womanshortfull_front_white_SIZE.jpg',
          ]
        },
        'mens_rashgards': {
          title: 'Мужской рашгард',
          images: [
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_11_mens_rashgards_fullprint_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_14_mens_rashgards_fullprint_back_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_13_mens_rashgards_fullprint_front_white_SIZE.jpg',
            'https://storage.vsemayki.ru/images/0/1/0/ARTICLE/previews/people_13_mens_rashgards_fullprint_back_white_SIZE.jpg'
          ]
        }
      },
      no_overptint: {
        womanshort: {
          title: 'Женская футболка',
          images: [
            'https://storage.vsemayki.ru/images/0/3/0/ARTICLE/previews/people_1_womanshort_front_dustypink_SIZE.jpg',
          ]

        }
      }

    }
});

export const getters = {
    getOverprint(state){
        return state.products.overprint
    },
    getNoOverprint(state){
        return state.products.no_overptint
    }
}
