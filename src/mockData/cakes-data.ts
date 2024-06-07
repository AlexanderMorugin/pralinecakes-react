import BavarskiyMussNormal from '../assets/images/cakes/cake-bavarskii-muss-normal.jpg';
import BavarskiyMussLarge from '../assets/images/cakes/cake-bavarskii-muss-large.jpg';
import KrasnyiBarhatNormal from '../assets/images/cakes/cake-krasnyi-barhat-normal.jpg';
import KrasnyiBarhatLarge from '../assets/images/cakes/cake-krasnyi-barhat-large.jpg';
import VozdushnoOrehovyiNormal from '../assets/images/cakes/cake-vozdushno-orehovyi-normal.jpg';
import VozdushnoOrehovyiLarge from '../assets/images/cakes/cake-vozdushno-orehovyi-large.jpg';
import KaramelnoOrekhoviyNormal from '../assets/images/cakes/cake-karamelno-orekhoviy-normal.jpg';
import KaramelnoOrekhoviyLarge from '../assets/images/cakes/cake-karamelno-orekhoviy-large.jpg';
import KievskiyNormal from '../assets/images/cakes/cake-kievskiy-normal.jpg';
import KievskiyLarge from '../assets/images/cakes/cake-kievskiy-large.jpg';
import KokosoviyNormal from '../assets/images/cakes/cake-kokosoviy-normal.jpg';
import KokosoviyLarge from '../assets/images/cakes/cake-kokosoviy-large.jpg';
import LimonniyNormal from '../assets/images/cakes/cake-limonniy-normal.jpg';
import LimonniyLarge from '../assets/images/cakes/cake-limonniy-large.jpg';

export const cakesData = [
  {
    id: 0,
    route: 'bavarskiy-muss',
    image_normal: BavarskiyMussNormal,
    image_large: BavarskiyMussLarge,
    title: 'Баварский мусс',
    description:
      'Воздушный мусс из сливок и ванили, с малиной во фруктовом желе',
    ingredients:
      'сливки 33%, молоко, сахар, яйцо куриное, мука пшеничная в/с, малина с/м, гель нейтральный, желатин',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 600,
    price: 1200,
    category: 'cakes',
  },
  {
    id: 1,
    route: 'krasniy-barkhat',
    image_normal: KrasnyiBarhatNormal,
    image_large: KrasnyiBarhatLarge,
    title: 'Бархатный красный',
    description:
      'Торт представляет собой довольно необычный десерт, состоящий из воздушного и мягкого бисквита красного цвета. Оригинальность данному изделию придает и белоснежный сливочный крем.',
    ingredients:
      'сыр сливочный, сахар, мука, сливки молочные 33%, масло растительное, сахар, яйцо куриное, малина с/м, кефир, гель нейтральный, какао, соль, разрыхлитель',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 1200,
    price: 1520,
    category: 'cakes',
  },
  {
    id: 2,
    route: 'vozdushno-orekhoviy',
    image_normal: VozdushnoOrehovyiNormal,
    image_large: VozdushnoOrehovyiLarge,
    title: 'Воздушно-ореховый',
    description:
      'Слоенное тесто на основе сгущенного молока, пропитан кремом из сливочного сыра. Упакован в цветную картонную коробку с окошком',
    ingredients:
      'мука, сливки молочные 33%, сгущенное молоко, сахар, шоколад молочный, яйцо куриное, сыр творожный, фундук, сахарная пудра',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 1100,
    price: 1580,
    category: 'cakes',
  },
  {
    id: 3,
    route: 'karamelno-orekhoviy',
    image_normal: KaramelnoOrekhoviyNormal,
    image_large: KaramelnoOrekhoviyLarge,
    title: 'Карамельно-Ореховый',
    description:
      'Бисквит с добавлением мелко резанных конфет Сникерс, крем из сгущенного молока и сливок',
    ingredients:
      'сгущенное молоко, вода, сахар, сливки молочные 33%, конфета сникерс, мед, масло сливочное, яйцо куриное, мука, сода, какао порошок',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 800,
    price: 1340,
    category: 'cakes',
  },
  {
    id: 4,
    route: 'kievskiy',
    image_normal: KievskiyNormal,
    image_large: KievskiyLarge,
    title: 'Киевский',
    description:
      'Торт из нежных коржей, выпеченных из миндаля, фундука, грецких орехов со сгущенным молоком и сливками. Упакован в цветную картонную коробку с окошком',
    ingredients:
      'сахар, сгущенное молоко, яйцо куриное, сливки молочные 33%, миндаль, грецкий орех, фундук, желатин',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 800,
    price: 1350,
    category: 'cakes',
  },
  {
    id: 5,
    route: 'kokosoviy',
    image_normal: KokosoviyNormal,
    image_large: KokosoviyLarge,
    title: 'Кокосовый',
    description:
      'Нежный сливочный десерт на прослойке из кокосового безе. Упакован в цветную картонную коробку с окошком',
    ingredients:
      'сливки молочные 33%, сахар, молоко 3,2%, стружка кокосовая, яйцо куриное, крем заварной патисьер, сахарная пудра, мука фундучная, сметана 20%, желатин, гель кондитерский зеркальный, миндаль, глазурь',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 1200,
    price: 1500,
    category: 'cakes',
  },
  {
    id: 6,
    route: 'limonniy',
    image_normal: LimonniyNormal,
    image_large: LimonniyLarge,
    title: 'Лимонный',
    description:
      'Бисквит с лимонной пропиткой и воздушным кремом. Легкий десерт с приятной кислинкой. Упакован в цветную картонную коробку с окошком',
    ingredients:
      'сыр маскарпоне, масло сливочное 82%, мука, сахар, лимон, яйцо куриное, кефир, йогурт, масло растительное, гель кондитерский нейтральный',
    protein: 2.9,
    fat: 20.9,
    carbohydrates: 40.7,
    calories: 229,
    weight: 1400,
    price: 1570,
    category: 'cakes',
  },
];
