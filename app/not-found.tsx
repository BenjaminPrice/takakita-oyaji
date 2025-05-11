import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">ページが見つかりません</h2>
        <p className="text-text-muted mb-8">
          お探しのページは削除されたか、URLが間違っている可能性があります。
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-block"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}