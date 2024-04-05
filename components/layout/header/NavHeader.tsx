import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';

import HeaderMenuItems from './HeaderMenuItems';

export default function NavHeader() {
  return (
    <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Anthony Jesmok">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          Anthony Jesmok
        </HeaderName>
        <HeaderNavigation aria-label="Site Menu">
          <HeaderMenuItems />
        </HeaderNavigation>
        <SideNav
          aria-label="Mobile Navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItems />
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Contact Me">
            <p>TODO</p>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
    />
  );
}
