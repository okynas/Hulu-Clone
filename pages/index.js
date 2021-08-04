import { RefreshIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  // console.log(results)
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  // console.log(genre)

  const request = await fetch(`${requests.BASE_URL}${requests[genre]?.url || requests.fetchTrending.url}`)
  .then( (res) => res.json())

  console.log(request)

  return {
    props: {
      results: request.results || null,
    }
  }
}

