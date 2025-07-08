import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Almighty or Allmighty - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;almighty&quot; and &quot;allmighty&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlmightyVsAllmightyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Almighty or Allmighty</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;almighty&quot; and &quot;allmighty&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Allmighty</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Allmighty&quot; is a common misspelling. The correct spelling is &quot;almighty&quot; with a single &apos;l&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Almighty</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Almighty&quot; is the correct spelling. It means having complete power; omnipotent, often used as a title for God.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Almighty (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Having complete power; omnipotent. Often used as a title for God (the Almighty).</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Many people pray to the <strong>Almighty</strong>.</li>
                  <li>• The <strong>almighty</strong> power of nature is awe-inspiring.</li>
                  <li>• He acted as if he were <strong>almighty</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Allmighty (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Allmighty&quot; is not a standard English word and is considered a misspelling of &quot;almighty&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Allmighty&quot; is not used in standard English for &quot;almighty&quot;.</li>
                  <li>• Always use <strong>almighty</strong> when referring to complete power or God.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Almighty:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Omnipotent</li>
                <li>• All-powerful</li>
                <li>• Supreme</li>
                <li>• Invincible</li>
                <li>• God (in religious context)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Allmighty:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Almighty</strong> is spelled with a single &apos;l&apos;, not double.</li>
            <li>• Used to describe complete power or as a title for God.</li>
            <li>• The noun form is also &quot;Almighty&quot; (referring to God).</li>
            <li>• The opposite is &quot;powerless&quot;.</li>
            <li>• &quot;Allmighty&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allmighty&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allmighty&quot; is never correct as a spelling for &quot;almighty&quot;. Always use &quot;almighty&quot; for complete power or God.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;almighty&quot; has a single &apos;l&apos;, not double.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;almighty&quot; be used in non-religious contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;almighty&quot; can describe anything with great power, not just God.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;almighty&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: the Almighty, almighty power, almighty dollar, almighty force.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;allmighty&quot; happens because double &apos;l&apos; is common in English, but &quot;almighty&quot; only has one.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Almighty</strong> is the correct spelling with a single &apos;l&apos;. It means having complete power or refers to God. The misspelling &quot;allmighty&quot; is never correct. Use &quot;almighty&quot; in religious, literary, and everyday contexts.</p>
      </div>
    </div>
  )
} 