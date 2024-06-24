import { FC } from 'react';

import { Breadcrumbs, Carta, Contacts, PageHeading } from '../../widgets';
import {
  META_CONTACTS_DESCRIPTION,
  META_CONTACTS_TITLE,
  PAGE_CONTACTS_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_CONTACTS_TITLE, route: '' },
];

const ContactPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_CONTACTS_TITLE} />
          <Contacts />
        </MainWrapper>
        <Carta />
      </PageWrapper>

      <HelmetMeta
        title={META_CONTACTS_TITLE}
        description={META_CONTACTS_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.CONTACTS}`}
      />
    </>
  );
};

export default ContactPage;
