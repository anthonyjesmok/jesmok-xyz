import React, { FC } from 'react';
import { HeaderMenuItem } from '@carbon/react';

const HeaderMenuItems: FC = () => (
  <>
    <HeaderMenuItem href="/">Home</HeaderMenuItem>
    <HeaderMenuItem href="/work">Work</HeaderMenuItem>
    <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
    <HeaderMenuItem href="/talks">Talks</HeaderMenuItem>
    <HeaderMenuItem href="/writing">Writing</HeaderMenuItem>
  </>
);

export default HeaderMenuItems;
