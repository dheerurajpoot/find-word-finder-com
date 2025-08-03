import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Too Much vs To Much - Correct Spelling & Grammar Rules | Word Finder',
  description: 'Learn the correct spelling: &quot;too much&quot; vs &quot;to much&quot;. Understand grammar rules, definitions, examples, and avoid common spelling mistakes.',
}

export default function TooMuchVsToMuchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Too Much vs To Much</h1>
        <p className="text-xl text-gray-600">Grammar Rules & Spelling Guide</p>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Grammar Rules & Correct Usage</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the grammar rules between &quot;too much&quot; and &quot;to much&quot;. Learn proper spelling, definitions, and avoid common grammatical errors.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: To Much</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;To much&quot; is incorrect. The correct spelling is &quot;too much&quot; with two &quot;o&quot;s in &quot;too.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Too Much</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Too much&quot; is the correct spelling. It means an excessive amount.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Too Much (phrase):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An excessive amount; more than is needed, wanted, or acceptable; overly abundant.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• That&apos;s <strong>too much</strong> work for one person.</li>
                  <li>• She ate <strong>too much</strong> at dinner.</li>
                  <li>• The movie was <strong>too much</strong> for young children.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">To Much (phrase):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;To much&quot; is a misspelling and is not a valid English phrase.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;To much&quot; is not used in standard English.</li>
                  <li>• Always use <strong>too much</strong> when referring to excess.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Too Much:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Excessive</li>
                <li>• Overabundant</li>
                <li>• More than enough</li>
                <li>• In excess</li>
                <li>• Overwhelming</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">To Much:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English phrase)</li>
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
            <li>• <strong>Too much</strong> is spelled with two &quot;o&quot;s in &quot;too&quot;: too much.</li>
            <li>• &quot;Too&quot; means &quot;excessively&quot; or &quot;also.&quot;</li>
            <li>• &quot;To&quot; is a preposition meaning &quot;toward&quot; or &quot;for.&quot;</li>
            <li>• &quot;To much&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;too much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Too much&quot; functions as an adverb phrase that modifies adjectives, verbs, or other adverbs to indicate excess.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;too much&quot; differ from &quot;very much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Too much&quot; indicates an excessive or undesirable amount, while &quot;very much&quot; simply means &quot;a lot&quot; without negative connotations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;too&quot; in &quot;too much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Too&quot; is an adverb that modifies &quot;much&quot; to indicate an excessive degree or amount.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;too much&quot; be used in academic writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;too much&quot; is perfectly acceptable in academic and formal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the words &quot;too&quot; and &quot;much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Too&quot; comes from Old English &quot;tō&quot; meaning &quot;in addition,&quot; while &quot;much&quot; comes from Old English &quot;mycel&quot; meaning &quot;great&quot; or &quot;large.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;too much&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Too much&quot; can be used as a modifier (&quot;too much sugar&quot;), predicate (&quot;that&apos;s too much&quot;), or subject (&quot;too much can be harmful&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;too much&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: too much time, too much money, too much effort, too much attention, and too much pressure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;too&quot; and &quot;to&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;too&quot; has two &quot;o&quot;s (like &quot;excessive&quot;), while &quot;to&quot; has one &quot;o&quot; (like &quot;go&quot;).</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Grammar Summary</h2>
        <p className="text-lg md:text-xl text-blue-800 leading-relaxed">Grammar Rule: <strong>Too much</strong> is the correct spelling with two &quot;o&quot;s in &quot;too&quot;. &quot;Too&quot; functions as an adverb meaning &quot;excessively,&quot; while &quot;much&quot; is a determiner indicating quantity. The incorrect spelling &quot;to much&quot; violates basic grammar rules since &quot;to&quot; is a preposition, not an adverb. Always use &quot;too much&quot; when expressing excess or abundance in any grammatical context.</p>
      </div>
    </div>
  )
}