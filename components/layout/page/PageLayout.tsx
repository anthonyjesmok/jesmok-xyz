import React, { ReactNode } from 'react';
import { Grid, Row, Column } from '@carbon/react';

interface PageLayoutProps {
  imageUrl: string;
  imageAlt: string;
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ imageUrl, imageAlt, children }) => (
  <Grid fullWidth>
    <Row>
      <Column>
        {children}
      </Column>
      <Column>
        <img src={imageUrl} alt={imageAlt} />
      </Column>
    </Row>
  </Grid>
);

export default PageLayout;