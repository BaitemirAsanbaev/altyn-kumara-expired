import { salads } from "../data/salads"
import { sushi } from "../data/sushi"
import { barbecue } from "../data/barbecue"
import { steak } from "../data/steak"
import { refreshments } from "../data/refreshments"
import { first_dishes } from "../data/first_dishes"
import { pancakes } from "../data/pancakes"
import { garnish } from "../data/garnish"
import { chicken_dishes } from "../data/chicken"
import { pizza } from "../data/pizza"
import { fryer } from "../data/fryer"
import { main_dishes } from "../data/main_dishes"
import { coffee } from "../data/coffee"
import { desserts } from "../data/desserts"
const initial_state = {
  main:{
    salads,
    barbecue,
    steak,
    fryer,
    sushi,
    refreshments,
    first_dishes,
    pancakes,
    garnish,
    chicken_dishes,
    main_dishes,
    coffee,
    desserts
  },
  vip:{
    vip: "vip"
  },
  bravo:{
    pizza
  }
}
export const menu = (state = initial_state) => {
  return state
}