import BavarskiyS from '../assets/images/cakes/cake-bavarskiy-s.jpg';
import BavarskiyM from '../assets/images/cakes/cake-bavarskiy-m.jpg';
import BavarskiyL from '../assets/images/cakes/cake-bavarskiy-l.jpg';
import KievskiyS from '../assets/images/cakes/cake-kievskiy-s.jpg';
import KievskiyM from '../assets/images/cakes/cake-kievskiy-m.jpg';
import KievskiyL from '../assets/images/cakes/cake-kievskiy-l.jpg';
import PragaS from '../assets/images/cakes/cake-praga-s.jpg';
import PragaM from '../assets/images/cakes/cake-praga-m.jpg';
import PragaL from '../assets/images/cakes/cake-praga-l.jpg';
import MedoviyS from '../assets/images/cakes/cake-medoviy-s.jpg';
import MedoviyM from '../assets/images/cakes/cake-medoviy-m.jpg';
import MedoviyL from '../assets/images/cakes/cake-medoviy-l.jpg';
import TrufelniyS from '../assets/images/cakes/cake-trufelniy-s.jpg';
import TrufelniyM from '../assets/images/cakes/cake-trufelniy-m.jpg';
import TrufelniyL from '../assets/images/cakes/cake-trufelniy-l.jpg';
import PtichieS from '../assets/images/cakes/cake-ptichie-moloko-s.jpg';
import PtichieM from '../assets/images/cakes/cake-ptichie-moloko-m.jpg';
import PtichieL from '../assets/images/cakes/cake-ptichie-moloko-l.jpg';
import EsterhaziS from '../assets/images/cakes/cake-esterhazi-s.jpg';
import EsterhaziM from '../assets/images/cakes/cake-esterhazi-m.jpg';
import EsterhaziL from '../assets/images/cakes/cake-esterhazi-l.jpg';
import CheesecakeS from '../assets/images/cakes/cake-cheescake-s.jpg';
import CheesecakeM from '../assets/images/cakes/cake-cheescake-m.jpg';
import CheesecakeL from '../assets/images/cakes/cake-cheescake-l.jpg';
import TiramisuS from '../assets/images/cakes/cake-tiramisu-s.jpg';
import TiramisuM from '../assets/images/cakes/cake-tiramisu-m.jpg';
import TiramisuL from '../assets/images/cakes/cake-tiramisu-l.jpg';
import MorkovniyS from '../assets/images/cakes/cake-morkovniy-s.jpg';
import MorkovniyM from '../assets/images/cakes/cake-morkovniy-m.jpg';
import MorkovniyL from '../assets/images/cakes/cake-morkovniy-l.jpg';
import NapoleonS from '../assets/images/cakes/cake-napoleon-s.jpg';
import NapoleonM from '../assets/images/cakes/cake-napoleon-m.jpg';
import NapoleonL from '../assets/images/cakes/cake-napoleon-l.jpg';
import ChernichniyS from '../assets/images/cakes/cake-chernichniy-s.jpg';
import ChernichniyM from '../assets/images/cakes/cake-chernichniy-m.jpg';
import ChernichniyL from '../assets/images/cakes/cake-chernichniy-l.jpg';



// import BarkhatS from '../assets/images/cakes/cake-barkhat-s.jpg';
// import BarkhatM from '../assets/images/cakes/cake-barkhat-m.jpg';
// import BarkhatL from '../assets/images/cakes/cake-barkhat-l.jpg';
// import VozdushnoS from '../assets/images/cakes/cake-vozdushno-s.jpg';
// import VozdushnoM from '../assets/images/cakes/cake-vozdushno-m.jpg';
// import VozdushnoL from '../assets/images/cakes/cake-vozdushno-l.jpg';

// import KaramelnoOrekhoviyNormal from '../assets/images/cakes/cake-karamelno-orekhoviy-normal.jpg';
// import KaramelnoOrekhoviyLarge from '../assets/images/cakes/cake-karamelno-orekhoviy-large.jpg';

// import KokosoviyNormal from '../assets/images/cakes/cake-kokosoviy-normal.jpg';
// import KokosoviyLarge from '../assets/images/cakes/cake-kokosoviy-large.jpg';
// import LimonniyNormal from '../assets/images/cakes/cake-limonniy-normal.jpg';
// import LimonniyLarge from '../assets/images/cakes/cake-limonniy-large.jpg';

export const cakesData = [
  {
    id: 0,
    route: 'bavarskiy-muss',
    image_small: BavarskiyS,
    image_normal: BavarskiyM,
    image_large: BavarskiyL,
    title: 'Баварский мусс',
    description:
      'Нежнейший торт из воздушного сливочного мусса с добавлением ванили и малины во фруктовом желе. Нежнейший торт из воздушного сливочного мусса с добавлением ванили и малины во фруктовом желе. Нежнейший торт из воздушного сливочного мусса с добавлением ванили и малины во фруктовом желе.',
    ingredients:
      'Сливки 33%, молоко, сахар, яйцо куриное, мука пшеничная, малина с/м, гель кондитерский нейтральный, желатин',
    protein: 2.9,
    fat: 14.4,
    carbohydrates: 39,
    calories: 259,
    quantity: 1,
    weight: 600,
    price: 740,
    category: 'cakes',
  },
  {
    id: 1,
    route: 'kievskiy',
    image_small: KievskiyS,
    image_normal: KievskiyM,
    image_large: KievskiyL,
    title: 'Киевский',
    description:
      'Известный легкий торт из нежных коржей, выпеченных из миндаля, фундука, грецких орехов со сгущенным молоком и сливками',
    ingredients:
      'Сахар, сгущенное молоко, яйцо куриное, сливки молочные 33%, миндаль, грецкий орех, фундук, желатин',
    protein: 5.2,
    fat: 30.2,
    carbohydrates: 42,
    calories: 443,
    quantity: 1,
    weight: 800,
    price: 925,
    category: 'cakes',
  },
  {
    id: 2,
    route: 'praga',
    image_small: PragaS,
    image_normal: PragaM,
    image_large: PragaL,
    title: 'Прага',
    description:
      'Классический рецепт, шоколадно-маслянный бисквит, сливочный крем с добавлением какао',
    ingredients:
      'Мука пшеничная, сахар, масло сливочное, сгущенное молоко, джем абрикосовый, шоколад, сливки молочные 33%',
    protein: 4.9,
    fat: 28.7,
    carbohydrates: 40.4,
    calories: 439,
    quantity: 1,
    weight: 1300,
    price: 1040,
    category: 'cakes',
  },
  {
    id: 3,
    route: 'medoviy',
    image_small: MedoviyS,
    image_normal: MedoviyM,
    image_large: MedoviyL,
    title: 'Медовый',
    description:
      'Из нежных песочных коржей пропитанных медом и легким ванильным кремом',
    ingredients:
      'Мука пшеничная, сахар, масло сливочное, молоко, яйцо куриное, мед, сода',
    protein: 5,
    fat: 13.6,
    carbohydrates: 54.9,
    calories: 351,
    quantity: 1,
    weight: 1400,
    price: 990,
    category: 'cakes',
  },
  {
    id: 4,
    route: 'trufelniy',
    image_small: TrufelniyS,
    image_normal: TrufelniyM,
    image_large: TrufelniyL,
    title: 'Трюфельный',
    description:
      'Сливочный мусс на основе темного шоколада, дополненный шоколадным бисквитом',
    ingredients:
      'Шоколад темный, сливки молочные 33%, сахар, яйцо куриное, масло сливочное, какао, мука пшеничная, гель нейтральный, рис воздушный',
    protein: 3.8,
    fat: 18.5,
    carbohydrates: 44.5,
    calories: 313,
    quantity: 1,
    weight: 900,
    price: 1030,
    category: 'cakes',
  },
  {
    id: 5,
    route: 'ptichie-moloko',
    image_small: PtichieS,
    image_normal: PtichieM,
    image_large: PtichieL,
    title: 'Птичье молоко',
    description:
      'Воздушное суфле, нежный корж под слоем горького шоколада',
    ingredients:
      'Масло сливочное, сгущенное молоко, сахар, шоколад, мука пшеничная, яйцо куриное, масло растительное, агар-агар, лимонная кислота',
    protein: 8.3,
    fat: 23.8,
    carbohydrates: 56.6,
    calories: 473,
    quantity: 1,
    weight: 800,
    price: 830,
    category: 'cakes',
  },
  {
    id: 6,
    route: 'esterhazi',
    image_small: EsterhaziS,
    image_normal: EsterhaziM,
    image_large: EsterhaziL,
    title: 'Эстерхази',
    description:
      'Воздушные коржи с нежным ореховым кремом Пралине',
    ingredients:
      'Фундук, арахис, миндаль, сахар, масло сливочное, яйцо куриное, масло растительное, шоколад белый, шоколад темный, паста пралине, джем абрикосовый',
    protein: 9.1,
    fat: 38.2,
    carbohydrates: 33.2,
    calories: 492,
    quantity: 1,
    weight: 1250,
    price: 1230,
    category: 'cakes',
  },
  {
    id: 7,
    route: 'cheesecake',
    image_small: CheesecakeS,
    image_normal: CheesecakeM,
    image_large: CheesecakeL,
    title: 'Чизкейк',
    description:
      'Классический рецепт. Испечен из нежного творожного сыра, на тонком слое бисквита',
    ingredients:
      'Сыр творожный, яйцо куриное, сахар, сметана 20%, мука пшеничная, сливки молочные 33%, гель кондитерский нейтральный',
    protein: 3.4,
    fat: 24.7,
    carbohydrates: 34.7,
    calories: 331,
    quantity: 1,
    weight: 1400,
    price: 1200,
    category: 'cakes',
  },
  {
    id: 8,
    route: 'tiramisu',
    image_small: TiramisuS,
    image_normal: TiramisuM,
    image_large: TiramisuL,
    title: 'Тирамису',
    description:
      'Нежный итальянский торт из легкого ванильного крема с кофе и печеньем «Савоярди»',
    ingredients:
      'Сыр маскарпоне, сливки молочные 33%, яйцо куриное, печенье савоярди, сахар, какао, кофе',
    protein: 3.6,
    fat: 22.9,
    carbohydrates: 29.6,
    calories: 311,
    quantity: 1,
    weight: 1100,
    price: 1080,
    category: 'cakes',
  },
  {
    id: 9,
    route: 'morkovniy',
    image_small: MorkovniyS,
    image_normal: MorkovniyM,
    image_large: MorkovniyL,
    title: 'Морковный',
    description:
      'Торт с едва уловимым вкусом моркови, с добавлением грецкого ореха, изюма, творожного сыра и корицы',
    ingredients:
      'Сыр сливочный, сливки молочные 33%, морковь, яйцо куриное, сахар масло сливочное, грецкий орех, изюм белый, мука, сода, корица, сахарная пудра',
    protein: 2.9,
    fat: 16.6,
    carbohydrates: 53,
    calories: 373,
    quantity: 1,
    weight: 1400,
    price: 1140,
    category: 'cakes',
  },
  {
    id: 10,
    route: 'napoleon',
    image_small: NapoleonS,
    image_normal: NapoleonM,
    image_large: NapoleonL,
    title: 'Наполеон',
    description:
      'Изумительный слоенный торт из хрустящего слоеного теста и нежного сливочного крема',
    ingredients:
      'Тесто слоенное, сливки молочные 33%, сыр маскарпоне, яйцо куриное, мука пшеничная, сахар',
    protein: 4.9,
    fat: 29.7,
    carbohydrates: 47,
    calories: 455,
    quantity: 1,
    weight: 1000,
    price: 1100,
    category: 'cakes',
  },
  {
    id: 11,
    route: 'chernichniy',
    image_small: ChernichniyS,
    image_normal: ChernichniyM,
    image_large: ChernichniyL,
    title: 'Черничный',
    description:
      'Черника, белый шоколад и сливки, на тонком медовом корже',
    ingredients:
      'Сыр сливочный, черника с/м, сахарная пудра, сметана 20%, мука пшеничная, сливки молочные 33%, масло сливочное, миндальная мука, яйца куриные, желатин',
    protein: 6.5,
    fat: 14.9,
    carbohydrates: 30.2,
    calories: 282,
    quantity: 1,
    weight: 1300,
    price: 1170,
    category: 'cakes',
  },

  // {
  //   id: 1,
  //   route: 'krasniy-barkhat',
  //   image_small: BarkhatS,
  //   image_normal: BarkhatM,
  //   image_large: BarkhatL,
  //   title: 'Бархатный красный',
  //   description:
  //     'Торт представляет собой довольно необычный десерт, состоящий из воздушного и мягкого бисквита красного цвета. Оригинальность данному изделию придает и белоснежный сливочный крем.',
  //   ingredients:
  //     'сыр сливочный, сахар, мука, сливки молочные 33%, масло растительное, сахар, яйцо куриное, малина с/м, кефир, гель нейтральный, какао, соль, разрыхлитель',
  //   protein: 2.9,
  //   fat: 20.9,
  //   carbohydrates: 40.7,
  //   calories: 229,
  //   quantity: 1,
  //   weight: 1200,
  //   price: 1520,
  //   category: 'cakes',
  // },
  // {
  //   id: 2,
  //   route: 'vozdushno-orekhoviy',
  //   image_small: VozdushnoS,
  //   image_normal: VozdushnoM,
  //   image_large: VozdushnoL,
  //   title: 'Воздушно-ореховый',
  //   description:
  //     'Слоенное тесто на основе сгущенного молока, пропитан кремом из сливочного сыра. Упакован в цветную картонную коробку с окошком',
  //   ingredients:
  //     'мука, сливки молочные 33%, сгущенное молоко, сахар, шоколад молочный, яйцо куриное, сыр творожный, фундук, сахарная пудра',
  //   protein: 2.9,
  //   fat: 20.9,
  //   carbohydrates: 40.7,
  //   calories: 229,
  //   quantity: 1,
  //   weight: 1100,
  //   price: 1580,
  //   category: 'cakes',
  // },
  // {
  //   id: 3,
  //   route: 'karamelno-orekhoviy',
  //   image_small: VozdushnoS,
  //   image_normal: KaramelnoOrekhoviyNormal,
  //   image_large: KaramelnoOrekhoviyLarge,
  //   title: 'Карамельно-Ореховый',
  //   description:
  //     'Бисквит с добавлением мелко резанных конфет Сникерс, крем из сгущенного молока и сливок',
  //   ingredients:
  //     'сгущенное молоко, вода, сахар, сливки молочные 33%, конфета сникерс, мед, масло сливочное, яйцо куриное, мука, сода, какао порошок',
  //   protein: 2.9,
  //   fat: 20.9,
  //   carbohydrates: 40.7,
  //   calories: 229,
  //   quantity: 1,
  //   weight: 800,
  //   price: 1340,
  //   category: 'cakes',
  // },

  // {
  //   id: 5,
  //   route: 'kokosoviy',
  //   image_normal: KokosoviyNormal,
  //   image_large: KokosoviyLarge,
  //   title: 'Кокосовый',
  //   description:
  //     'Нежный сливочный десерт на прослойке из кокосового безе. Упакован в цветную картонную коробку с окошком',
  //   ingredients:
  //     'сливки молочные 33%, сахар, молоко 3,2%, стружка кокосовая, яйцо куриное, крем заварной патисьер, сахарная пудра, мука фундучная, сметана 20%, желатин, гель кондитерский зеркальный, миндаль, глазурь',
  //   protein: 2.9,
  //   fat: 20.9,
  //   carbohydrates: 40.7,
  //   calories: 229,
  //   quantity: 1,
  //   weight: 1200,
  //   price: 1500,
  //   category: 'cakes',
  // },
  // {
  //   id: 6,
  //   route: 'limonniy',
  //   image_normal: LimonniyNormal,
  //   image_large: LimonniyLarge,
  //   title: 'Лимонный',
  //   description:
  //     'Бисквит с лимонной пропиткой и воздушным кремом. Легкий десерт с приятной кислинкой. Упакован в цветную картонную коробку с окошком',
  //   ingredients:
  //     'сыр маскарпоне, масло сливочное 82%, мука, сахар, лимон, яйцо куриное, кефир, йогурт, масло растительное, гель кондитерский нейтральный',
  //   protein: 2.9,
  //   fat: 20.9,
  //   carbohydrates: 40.7,
  //   calories: 229,
  //   quantity: 1,
  //   weight: 1400,
  //   price: 1570,
  //   category: 'cakes',
  // },
];
