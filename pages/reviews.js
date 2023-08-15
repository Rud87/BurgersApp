import Head from 'next/head';

const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Feedback from our clients</title>
        <meta name="title" content="All reviews"/>
      </Head>
      <div>
        <h1>Customer Reviews</h1>
        <div className='reviews'>
          { !!reviews.length && reviews.map(res => {
            return (
              <div key={res.id} className='review'>
                {res.id}){ ' ' }
                {`${res.body.slice(0, 90)}...`}
              </div>)
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response =  await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20)
    }
  }
}
 
export default ReviewsPage;