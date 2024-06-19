import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  // мгновенный скролл страницы вверх
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  // плавный скролл страницы вверх
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     document.documentElement.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth',
//     });
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
