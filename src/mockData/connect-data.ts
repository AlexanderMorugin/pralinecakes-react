import WhatsAppIcon from '../assets/icons/icon-whatsapp.svg';
import TelegramIcon from '../assets/icons/icon-telegram.svg';
import PhoneIcon from '../assets/icons/icon-phone.svg';
import EmailIcon from '../assets/icons/icon-email.svg';
import { PHONE_LINK, TELEGRAM_LINK, WHATSAPP_LINK } from '../shared/constants/constants';

export const connectData = [
  { title: 'Почта', icon: EmailIcon, link: PHONE_LINK, category: 'footer' },
  { title: 'Телефон', icon: PhoneIcon, link: PHONE_LINK, category: 'header, footer' },
  { title: 'WhatsApp', icon: WhatsAppIcon, link: WHATSAPP_LINK, category: 'header, footer' },
  { title: 'Telegram', icon: TelegramIcon, link: TELEGRAM_LINK, category: 'header, footer' },
];
