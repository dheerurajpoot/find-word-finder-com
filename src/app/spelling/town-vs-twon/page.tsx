import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Town or Twon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;town&quot; and &quot;twon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TownVsTwonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Town or Twon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;town&quot; and &quot;twon&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Twon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Twon&quot; is a misspelling. The correct spelling is &quot;town&quot; with &quot;t-o-w-n.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Town</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Town&quot; is the correct spelling. It means a populated area smaller than a city.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Town (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A populated area that is larger than a village but smaller than a city; an urban area with local government.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The small <strong>town</strong> has a population of 5,000.</li>
                  <li>• We live in a quiet <strong>town</strong> in the countryside.</li>
                  <li>• The <strong>town</strong> center has many shops.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Twon (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Twon&quot; is a misspelling of &quot;town&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Twon&quot; is not used in standard English.</li>
                  <li>• Always use <strong>town</strong> when referring to a populated area.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Town:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Municipality</li>
                <li>• Settlement</li>
                <li>• Borough</li>
                <li>• Community</li>
                <li>• Urban area</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Twon:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Town</strong> is spelled with the letters t-o-w-n in that order.</li>
            <li>• It is a common word for a populated area.</li>
            <li>• &quot;Twon&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;tūn&quot; meaning &quot;enclosure, settlement.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;twon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;twon&quot; is never correct. The proper spelling is always &quot;town.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;town&quot; has the letters in the correct order: t-o-w-n.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a town and a city?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A town is typically smaller than a city, with fewer people and less infrastructure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;town&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;town&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;town&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;twon&quot; often happens by transposing the letters &quot;o&quot; and &quot;w.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;town&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: town hall, town square, town center, and town meeting.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;town&quot; always about size?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;town&quot; can also refer to the people living in a town or the urban area itself.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;town&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;town&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Town</strong> is the correct spelling with the letters in the right order: t-o-w-n. It means a populated area smaller than a city. The misspelling &quot;twon&quot; is never correct. Always use &quot;town&quot; when referring to a populated area or urban settlement.</p>
      </div>
    </div>
  )
} 