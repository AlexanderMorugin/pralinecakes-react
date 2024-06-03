import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_CONTACTS,
  META_TITLE_CONTACTS,
  PAGE_TITLE_CONTACTS,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_CONTACTS, route: '' },
];

const ContactPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_TITLE_CONTACTS} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_CONTACTS}
        description={META_DESCRIPTION_CONTACTS}
        route='https://pralinecakes.ru/contacts/'
      />
    </>
  );
};

export default ContactPage;
