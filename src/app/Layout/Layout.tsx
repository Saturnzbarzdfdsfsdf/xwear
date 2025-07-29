import { Outlet } from 'react-router-dom';
import { Header } from '../../widget/Header';
import { HeaderMobile } from '../../widget/HeaderMobile';

import useMediaQuery from '../../shared/libs/hook/useMediaQuery'

import style from './Layout.module.scss'

const Layout = () => {

   const isMobile = useMediaQuery('(max-width: 1024px)');

   return (
			<div className={style.application}>
				<Header />
				{isMobile && <HeaderMobile />}

				<main>
					<Outlet />
				</main>
				<footer className={style.footer}>Footer</footer>
			</div>
		)
};

export default Layout