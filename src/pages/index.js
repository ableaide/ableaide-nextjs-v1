import Head from 'next/head'
import Link from 'next/link'
import { buildMeta } from '../lib/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home(){
const meta = buildMeta()
return (
<>
<Head>
<title>{meta.title}</title>
<meta name="description" content={meta.description} />
<meta property="og:title" content={meta.title} />
<meta property="og:description" content={meta.description} />
<meta property="og:image" content={meta.siteUrl + meta.image} />
</Head>
<Header />
<main className="container mx-auto px-6 py-12">
<section className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-3xl md:text-4xl font-bold mb-4">Able Aide — NDIS Support & Coordination</h1>
<p className="mb-6">Compassionate, professional support coordination for participants across Melbourne metro and regional Victoria.</p>
<Link href="/contact"><a className="btn">Contact us</a></Link>
</div>
<div>
<img alt="Support Coordination" src="/images/hero-support-coordination.jpg" className="rounded shadow" />
</div>
</section>


<section className="mt-12">
<h2 className="text-2xl font-semibold mb-6">Our services</h2>
<div className="grid md:grid-cols-3 gap-6">
<Link href="/services/support-coordination"><a className="card">Support Coordination</a></Link>
<Link href="/services/adl"><a className="card">ADL Support</a></Link>
<Link href="/services/sccp"><a className="card">SCCP</a></Link>
</div>
</section>
</main>
<Footer />
</>
)
}