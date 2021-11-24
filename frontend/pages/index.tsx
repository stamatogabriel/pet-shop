import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => (
  <div>
    <h1>Hello</h1>
    <Link href="/teste">
      <a>teste</a>
    </Link>
  </div>
)

export default Home
