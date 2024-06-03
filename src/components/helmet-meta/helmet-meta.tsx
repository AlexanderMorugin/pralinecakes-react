import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface IHelmetMeta {
  title: string;
  description: string;
  route: string;
}

const HelmetMeta: FC<IHelmetMeta> = ({ title, description, route }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:locale' content='ru_RU' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={route} />
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  );
};

export default HelmetMeta;
