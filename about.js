```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      {/* This will cause the error because of incorrect usage of dynamic routes */}
      <Link href={`/posts/${params.id}`}>
        <a>Go to Post</a>
      </Link>
    </div>
  );
}

export default About; 
```