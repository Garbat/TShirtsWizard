export const state = () => ({
  products: {
    overprint: {
      'child_tshirt': {
        title: 'Детская футболка',
        images: [
          'people_14_child_tshirt_front',
          'people_14_child_tshirt_back',
          'people_15_child_tshirt_front',
          'people_15_child_tshirt_back',
          'people_16_child_tshirt_front',
          'people_16_child_tshirt_back'
        ]
      },
      'manshortfull': {
        title: 'Мужская футболка',
        images: [
          'people_4_manshortfull_front',
          'people_13_manshortfull_back',
          'people_16_manshortfull_front',
          'people_16_manshortfull_back',
          'people_17_manshortfull_front',
        ]
      },
      'womanshortfull': {
        title: 'Женская футболка',
        images: [
          'people_11_womanshortfull_front',
          'people_16_womanshortfull_back',
          'people_17_womanshortfull_front',
          'people_17_womanshortfull_back',
          'people_18_womanshortfull_front',
        ]
      },
      'mens_rashgards': {
        title: 'Мужской рашгард',
        images: [
          'people_11_mens_rashgards_fullprint_front',
          'people_14_mens_rashgards_fullprint_back',
          'people_13_mens_rashgards_fullprint_front',
          'people_13_mens_rashgards_fullprint_back'
        ]
      },
      'womanhoodiefull': {
        title: 'Женская толстовка',
        images: [
          'people_1_womanhoodiefull_front',
          'people_4_womanhoodiefull_back',
          'people_2_womanhoodiefull_front',
          'people_5_womanhoodiefull_back',
          'people_3_womanhoodiefull_front'
        ]
      }
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
