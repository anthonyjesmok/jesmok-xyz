import Head from 'next/head';
import PageLayout from '../components/layout/page/PageLayout';

// export async function getStaticProps() {}

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Anthony Jesmok | Home | jesmok.xyz</title>
      </Head>
      <PageLayout imageUrl="" imageAlt="Anthony Jesmok">
        <h1>Hello</h1>
      </PageLayout>
    </>
  );
}
