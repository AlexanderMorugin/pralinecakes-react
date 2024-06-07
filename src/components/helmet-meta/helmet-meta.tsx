import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface IHelmetMeta {
  title: string;
  description: string;
  route: string;
  image?: string;
}

const HelmetMeta: FC<IHelmetMeta> = ({ title, description, route, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='vk:image' content={image} />
      <meta property='og:locale' content='ru_RU' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={route} />
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='300' />
      <meta property='og:image:type' content='image/jpg' />
    </Helmet>
  );
};

export default HelmetMeta;
