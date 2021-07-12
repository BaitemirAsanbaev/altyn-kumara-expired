const initial_state = {
  main: {
    first: {
      soup: {
        title: "soup",
        price: 215,
        descripion: "vegetables, beef, papper, salt",
        weight: 123
      },
      soup: {
        title: "borch",
        price: 267,
        descripion: "vegetables, свекла, сметана, salt",
        weight: 123
      },
      soup: {
        title: "shorpo",
        price: 241,
        descripion: "beef, salt",
        weight: 123
      }
    },
    second:{
      soup: {
        title: "lagman",
        price: 145,
        descripion: "vegetables, papper, salt",
        weight: 123
      },
      soup: {
        title: "manty",
        price: 197,
        descripion: "vegetables, salt",
        weight: 123
      },
      soup: {
        title: "fricase",
        price: 171,
        descripion: "beef, salt, mashroom",
        weight: 123
      }
    },
    salads: {

    },
    desserts: {

    },
    shashlyks: {

    },

  },
  vip: {

  }
}

export const menu = (state = initial_state) => {
  return state
}