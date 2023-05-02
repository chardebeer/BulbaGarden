import { useRouter } from 'next/router';
import Link from 'next/link';

export default function EndGame() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <div>
      <h1>Game Over</h1>
      <p>{message}</p>
      <Link href="/start">
        <button>Start Over</button>
 </Link>
</div>
);
}