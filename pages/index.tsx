import Head from 'next/head';

// export async function getStaticProps() {}

export default function IndexPage() {
  return (
    <div id="index_page">
      <Head>
        <title>Marshmallow Index Page</title>
      </Head>
      <div>
        <div style={{ width: '48%', float: 'left' }}>
          <img style={{ maxWidth: '-webkit-fill-available' }} src="/images/marshmallow-eat-kubba.jpg" alt="Marshmallow in hot chocolate" />
        </div>
        <div style={{ width: '50%', float: 'right', padding: '15px' }}>
          <h1>Marshmallow</h1>
          <p>An application template using Next.js and other technologies.</p>
          <p>Marshmallow image is from Eat Kubba on Pexels.</p>
        </div>
      </div>
    </div>
  );
}
