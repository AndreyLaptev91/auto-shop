const products = [
  {
    id: 1,
    user: "admin",
    name: "Dodge SRT",
    description: "Пробег: 1500км, Один хозяин.",
    price: 38743.39,
    type: "auto",
    image:
      "https://cdn.oboi7.com/beee4eca9b86a1b0479e70483f6c1267508a07f7/avtomobili-dodge-challenger-srt.jpg",
  },
  {
    id: 2,
    user: "admin",
    name: "Ford Mustang",
    description: "Пробег 3000км. не битая, косяков нет.",
    price: 78922.26,
    image:
      "https://get.wallhere.com/photo/car-vehicle-sports-car-screenshot-1920x1080-px-land-vehicle-automotive-design-race-car-automobile-make-auto-racing-shelby-mustang-muscle-car-stock-car-racing-690914.jpg",
  },
  {
    id: 3,
    user: "admin",
    name: "Ford mustang",
    description: "Пробег 50000км. 35 хозяев, битая!!!",
    price: 99987.73,
    type: "auto",
    image:
      "https://w-dog.ru/wallpapers/1/9/528802486833668/ford-mustang-boss-302-ford-avtooboi-avtomobil.jpg",
  },
  {
    id: 4,
    user: "admin",
    name: "Maserati",
    description:
      " Пробег 0км. ездить боялись так как ремонт дорогой, 1 хозяин.",
    price: 433.8323,
    type: "auto",
    image:
      "https://i.pinimg.com/originals/95/b7/4f/95b74f18d2b7c9003aa39ffd620fd2f0.jpg",
  },
  {
    id: 5,
    user: "admin",
    name: "Porsche 911",
    description: "Пробег 30000км. едет бодро, коптит жрет масло бочками.",
    price: 874.3323,
    type: "auto",
    image:
      "https://wallpaperscave.ru/images/original/18/08-04/vehicles-cars-porsche-73050.jpg",
  },
  {
    id: 6,
    user: "admin",
    name: "Dodge challenger",
    description: "Пробег 100000км. Машина  хочет едет, хочет не едет!!!",
    price: 486.7409,
    type: "auto",
    image:
      "https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-19.jpg",
  },
  {
    id: 7,
    user: "admin",
    name: "Peugeot",
    description: "Пробег 129км. 1 хозяин. в основном только ломается.",
    price: 709.9386,
    type: "auto",
    image:
      "https://cdn25.img.ria.ru/images/152575/19/1525751971_0:0:1199:674_600x0_80_0_0_2e8bec2276a27997cc0a2d6b08073120.jpg",
  },
  {
    id: 8,
    user: "admin",
    name: "BMW",
    description: "Пробег 0км. Новая машина, масло жрет тоннами",
    price: 746.3413,
    type: "auto",
    image:
      "https://chelindleasing.ru/upload/iblock/cbe/cbe53f1f46923cb39491c58296901779.jpg",
  },
  {
    id: 9,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 123.4446,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 10,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 198.1236,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 11,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 956.1416,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 12,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 732.1236,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 13,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 413.3456,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 14,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 142.4236,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 15,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 122.2346,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 16,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 423.4346,
    type: "auto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
  {
    id: 17,
    user: "admin",
    name: "Audi",
    description: "Пробег 0км. Красный цвет, обещают внимание на дороге!",
    price: 462.2346,
    type: "moto",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRXExzBsi_0ECoQkJSdAE39pDTjVQFUyXw9qunMzp8nkWq-7jCZjaRdiNi2QK65lfLhw&usqp=CAU",
  },
];

module.exports = products;
