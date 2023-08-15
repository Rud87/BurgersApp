import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oh...</h1>
      <h2>There is no such page!</h2>
      <p>Going to <Link href="/"><a>homepage</a></Link> after 3 seconds...</p>
    </div>
  );
}
 
export default NotFoundPage;