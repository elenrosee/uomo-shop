import shotMen from "../images/shot_man.jpg";

export type ProductsCategoryType = {
  name: string;
  linkTo: string;
  img: string;
};

export const productsCategories: ProductsCategoryType[] = [
  {
    name: "new in",
    linkTo: "new-in",
    img: shotMen,
  },

  {
    name: "men",
    linkTo: "men",
    img: shotMen,
  },
  {
    name: "women",
    linkTo: "women",
    img: shotMen,
  },
  {
    name: "kids",
    linkTo: "kids",
    img: shotMen,
  },
  {
    name: "accessories",
    linkTo: "accessories",
    img: shotMen,
  },
  {
    name: "shoes",
    linkTo: "shoes",
    img: shotMen,
  },
  {
    name: "shop all",
    linkTo: "shop-all",
    img: shotMen,
  },
];
