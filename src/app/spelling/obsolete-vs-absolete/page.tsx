import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Obsolete or Absolete - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;obsolete&quot; and &quot;absolete&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ObsoleteVsAbsoletePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Obsolete or Absolete</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;obsolete&quot; and &quot;absolete&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Absolete</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Absolete&quot; is a misspelling. The correct spelling is &quot;obsolete&quot; with &quot;ob&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Obsolete</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Obsolete&quot; is the correct spelling. It means no longer in use or out of date.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Obsolete (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">No longer in use or out of date; replaced by something newer or better.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>obsolete</strong> computer system was replaced.</li>
                  <li>• This technology has become <strong>obsolete</strong>.</li>
                  <li>• The <strong>obsolete</strong> law was finally repealed.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Absolete (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Absolete&quot; is a misspelling of &quot;obsolete&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Absolete&quot; is not used in standard English.</li>
                  <li>• Always use <strong>obsolete</strong> when referring to outdated items.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Obsolete:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Outdated</li>
                <li>• Antiquated</li>
                <li>• Discontinued</li>
                <li>• Archaic</li>
                <li>• Defunct</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Absolete:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Obsolete</strong> is spelled with &quot;ob&quot; at the beginning, not &quot;ab&quot;.</li>
          <li>• The word comes from Latin &quot;obsoletus&quot; meaning worn out.</li>
          <li>• Used to describe things that are no longer useful or current.</li>
          <li>• Often used in technology, business, and academic contexts.</li>
          <li>• &quot;Absolete&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;absolete&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;absolete&quot; is never correct. The proper spelling is always &quot;obsolete.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ob&quot; + &quot;solete&quot; - like &quot;obvious&quot; but with &quot;solete&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between obsolete and outdated?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Obsolete&quot; means no longer in use, while &quot;outdated&quot; means old-fashioned but may still be used.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can obsolete be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;obsolete&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;absolete&quot; likely occurs because of confusion about the prefix or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;obsolete&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: obsolete technology, obsolete equipment, obsolete practices, and obsolete laws.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Obsolete</strong> is the correct spelling with &quot;ob&quot; at the beginning. It means no longer in use or out of date. The misspelling &quot;absolete&quot; is never correct.</p>
      </div>
    </div>
  )
} 