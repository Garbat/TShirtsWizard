export const state = () => ({
  products: {
    overprint: {
      'child_tshirt_full': {
        title: 'Детская футболка 3D',
        images: [
          'people_14_child_tshirt_front',
          'people_14_child_tshirt_back',
          'people_15_child_tshirt_front',
          'people_15_child_tshirt_back',
          'people_16_child_tshirt_front',
          'people_16_child_tshirt_back'
        ]
      },
      'manshort_full': {
        title: 'Мужская футболка 3D',
        images: [
          'people_4_manshortfull_front',
          'people_13_manshortfull_back',
          'people_16_manshortfull_front',
          'people_16_manshortfull_back',
          'people_17_manshortfull_front',
        ]
      },
      'womanshort_full': {
        title: 'Женская футболка 3D',
        images: [
          'people_11_womanshortfull_front',
          'people_16_womanshortfull_back',
          'people_17_womanshortfull_front',
          'people_17_womanshortfull_back',
          'people_18_womanshortfull_front',
        ]
      },
      'mens_rashgards_full': {
        title: 'Мужской рашгард 3D',
        images: [
          'people_11_mens_rashgards_fullprint_front',
          'people_14_mens_rashgards_fullprint_back',
          'people_13_mens_rashgards_fullprint_front',
          'people_13_mens_rashgards_fullprint_back'
        ]
      },
      'woman_rashgards_full': {
        title: 'Женский рашгард 3D',
        images: [
          'people_10_womens_rashgards_fullprint_front',
          'people_11_womens_rashgards_fullprint_back',
          'people_22_womens_rashgards_fullprint_front',
          'people_12_womens_rashgards_fullprint_back'
        ]
      },
      'womanhoodie_full': {
        title: 'Женская толстовка 3D',
        images: [
          'people_1_womanhoodiefull_front',
          'people_4_womanhoodiefull_back',
          'people_2_womanhoodiefull_front',
          'people_5_womanhoodiefull_back',
          'people_3_womanhoodiefull_front'
        ]
      },
      'manhoodie_full': {
        title: 'Мужская толстовка 3D',
        images: [
          'people_2_manhoodiefull_front',
          'people_15_manhoodiefull_back',
          'people_3_manhoodiefull_front',
          'people_13_manhoodiefull_back',
          'people_6_manhoodiefull_front'
        ]
      },
      'childrens_suits_with_hoodie_full': {
        title: 'Детский костюм 3D (c толстовкой)',
        images: [
          'people_1_childrens_suits_with_hoodie_fullprint_front',
          'people_1_childrens_suits_with_hoodie_fullprint_back',
          'people_5_childrens_suits_with_hoodie_fullprint_front',
          'people_5_childrens_suits_with_hoodie_fullprint_back',
          'people_4_childrens_suits_with_hoodie_fullprint_front',
          'people_4_childrens_suits_with_hoodie_fullprint_back',
        ]
      },
      'mens_suits_with_hoodie_full': {
        title: 'Мужской костюм 3D (c толстовкой)',
        images: [
          'people_1_mens_suits_with_hoodie_fullprint_front',
          'people_1_mens_suits_with_hoodie_fullprint_back',
          'people_2_mens_suits_with_hoodie_fullprint_front',
          'people_2_mens_suits_with_hoodie_fullprint_back',
        ]
      },
      'woman_suit_with_hoodie_full': {
        title: 'Женский костюм 3D (c толстовкой)',
        images: [
          'people_1_woman_suit_with_hoodiefull_front',
          'people_1_woman_suit_with_hoodiefull_back',
          'people_2_woman_suit_with_hoodiefull_front',
          'people_2_woman_suit_with_hoodiefull_back',
          'people_3_woman_suit_with_hoodiefull_front',
        ]
      },
    },
    no_overprint: {
      child: {
        title: 'Детская футболка',
        images: [
          'people_1_child_front',
          'people_1_child_back',
          'people_2_child_front',
          'people_2_child_back',
          'people_3_child_front',
          'people_3_child_back'
        ]
      },
      womanshort: {
        title: 'Женская футболка',
        images: [
          'people_1_womanshort_front',
          'people_1_womanshort_back',
          'people_2_womanshort_front',
          'people_2_womanshort_back',
          'people_3_womanshort_front',
        ]
      },
      manshort: {
        title: 'Мужская футболка',
        images: [
          'people_7_manshort_front',
          'people_4_manshort_back',
          'people_5_manshort_front',
          'people_5_manshort_back',
          'people_6_manshort_front',
        ]
      },
      man_hoodie_oversize: {
        title: 'Мужское худи',
        images: [
          'people_7_man_hoodie_oversize_front',
          'people_7_man_hoodie_oversize_back',
          'people_8_man_hoodie_oversize_front',
          'people_12_man_hoodie_oversize_front',
          'people_8_man_hoodie_oversize_back',
          'people_9_man_hoodie_oversize_front',
        ]
      }
    }
  },
  main_article: 2978903
});

export const getters = {
  getOverprint(state) {
    return state.products.overprint
  },
  getNoOverprint(state) {
    return state.products.no_overprint
  }
}
