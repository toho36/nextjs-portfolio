import MainNavigation from './MainNavigation';
import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return <MainNavigation>{props.children}</MainNavigation>;
}

export default Layout;
