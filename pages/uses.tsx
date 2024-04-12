import Head from 'next/head';
import { Grid, Column } from '@carbon/react';

// export async function getStaticProps() {}

export default function UsesPage() {
  return (
    <>
      <Head>
        <title>Anthony Jesmok | Uses | jesmok.xyz</title>
      </Head>
      <Grid fullWidth>
        <Column>
          <h1>Home</h1>
        </Column>
        <Column>
          <h1>Image</h1>
        </Column>
      </Grid>
    </>
  );
}
