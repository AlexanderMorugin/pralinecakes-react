import WhatsAppIcon from '../assets/icons/icon-whatsapp.svg';
// import TelegramIcon from '../assets/icons/icon-telegram.svg';
import PhoneIcon from '../assets/icons/icon-phone.svg';
// import EmailIcon from '../assets/icons/icon-email.svg';
import {
  // EMAIL,
  // EMAIL_LINK,
  PHONE_LINK,
  PHONE_NUMBER,
  // TELEGRAM_LINK,
  WHATSAPP_LINK,
} from '../shared/constants/constants';

export const connectData = [
  // {
  //   title: 'Почта',
  //   icon: EmailIcon,
  //   link: EMAIL_LINK,
  //   text: EMAIL,
  //   category: 'footer',
  // },
  {
    title: 'Телефон',
    icon: PhoneIcon,
    link: PHONE_LINK,
    text: PHONE_NUMBER,
    category: 'header, footer',
  },
  {
    title: 'WhatsApp',
    icon: WhatsAppIcon,
    link: WHATSAPP_LINK,
    text: 'WhatsApp',
    category: 'header, footer',
  },
  // {
  //   title: 'Telegram',
  //   icon: TelegramIcon,
  //   link: TELEGRAM_LINK,
  //   text: 'Telegram',
  //   category: 'header, footer',
  // },
];
