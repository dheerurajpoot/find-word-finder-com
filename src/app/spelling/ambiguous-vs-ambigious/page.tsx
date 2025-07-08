import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Ambiguous or Ambigious - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;ambiguous&quot; and &quot;ambigious&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmbiguousVsAmbigiousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Ambiguous or Ambigious</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;ambiguous&quot; and &quot;ambigious&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ambigious</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ambigious&quot; is a misspelling. The correct spelling is &quot;ambiguous&quot; with &quot;gu&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Ambiguous</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Ambiguous&quot; is the correct spelling. It means unclear, uncertain, or having multiple possible meanings.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Ambiguous (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Unclear, uncertain, or having multiple possible meanings; open to more than one interpretation.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The statement was <strong>ambiguous</strong> and confusing.</li>
                  <li>• The <strong>ambiguous</strong> instructions led to mistakes.</li>
                  <li>• Her response was deliberately <strong>ambiguous</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ambigious (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ambigious&quot; is a misspelling of &quot;ambiguous&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ambigious&quot; is not used in standard English.</li>
                  <li>• Always use <strong>ambiguous</strong> when describing unclear meanings.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Ambiguous:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Unclear</li>
                <li>• Vague</li>
                <li>• Uncertain</li>
                <li>• Indefinite</li>
                <li>• Equivocal</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ambigious:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
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
            <li>• <strong>Ambiguous</strong> is spelled with &quot;gu&quot; in the middle, not &quot;gi.&quot;</li>
            <li>• Used to describe unclear or uncertain meanings.</li>
            <li>• Can refer to words, statements, or situations.</li>
            <li>• The word comes from Latin &quot;ambiguus&quot; meaning &quot;uncertain.&quot;</li>
            <li>• &quot;Ambigious&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ambigious&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ambigious&quot; is never correct. The proper spelling is always &quot;ambiguous.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;am-big-u-ous&quot; - it has &quot;gu&quot; in the middle, not &quot;gi.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between ambiguous and vague?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Ambiguous&quot; means having multiple possible meanings, while &quot;vague&quot; means unclear or imprecise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ambiguous be used positively?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Usually not - &quot;ambiguous&quot; typically has a negative connotation of confusion or uncertainty.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;ambiguous&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: ambiguous language, ambiguous situation, and ambiguous statement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;ambigious&quot; occurs because people think it should have &quot;gi&quot; like many other words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can ambiguous be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;ambiguous&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is ambiguous always about language?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ambiguous&quot; can refer to any unclear situation, not just language or words.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Ambiguous</strong> is the correct spelling with &quot;gu&quot; in the middle. It means unclear, uncertain, or having multiple possible meanings. The misspelling &quot;ambigious&quot; is never correct. Use &quot;ambiguous&quot; to describe unclear or uncertain situations.</p>
      </div>
    </div>
  )
} 