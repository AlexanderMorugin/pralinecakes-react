import { FC } from 'react'
import { Link } from 'react-router-dom'

import Routes from '../../shared/config/routes/routes'

const AboutPage: FC = () => {
  return (
    <>
    <h1>Здесь будет страница О нас</h1>
    <Link to={Routes.HOME}>на главную</Link>
  </>
  )
}

export default AboutPage