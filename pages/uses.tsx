import Head from 'next/head';
import PageLayout from '../components/layout/page/PageLayout';

// export async function getStaticProps() {}

export default function UsesPage() {
  return (
    <>
      <Head>
        <title>Anthony Jesmok | Uses | jesmok.xyz</title>
      </Head>
      <PageLayout imageUrl="" imageAlt="uses">
        <h1>Uses</h1>
      </PageLayout>
    </>
  );
}
