import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Being or Beeing - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;being&quot; and &quot;beeing&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeingVsBeeingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Being or Beeing</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;being&quot; and &quot;beeing&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beeing</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beeing&quot; is a misspelling. The correct spelling is &quot;being&quot; with one &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Being</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Being&quot; is the correct spelling. It means existence or the state of existing.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Being (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Existence; the state of existing; a living creature or entity.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Human <strong>being</strong>s are complex creatures.</li>
                  <li>• She is <strong>being</strong> very helpful today.</li>
                  <li>• The <strong>being</strong> of consciousness is fascinating.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beeing (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beeing&quot; is a misspelling of &quot;being&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beeing&quot; is not used in standard English.</li>
                  <li>• Always use <strong>being</strong> when referring to existence.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Being:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Existence</li>
                <li>• Entity</li>
                <li>• Creature</li>
                <li>• Individual</li>
                <li>• Person</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beeing:</h4>
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
          <li>• <strong>Being</strong> is spelled with one &quot;e&quot;, not two.</li>
          <li>• The word comes from the Old English &quot;bēon&quot; meaning &quot;to be.&quot;</li>
          <li>• Used as a noun to refer to existence or a living creature.</li>
          <li>• Also used as the present participle of the verb &quot;be.&quot;</li>
          <li>• &quot;Beeing&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beeing&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beeing&quot; is never correct. The proper spelling is always &quot;being.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as the present participle of &quot;be&quot; - &quot;be&quot; + &quot;ing&quot; = &quot;being.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between being and existence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to the state of existing, but &quot;being&quot; can also refer to a living creature, while &quot;existence&quot; is more abstract.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can being be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;being&quot; is the present participle of the verb &quot;be&quot; and can be used in continuous tenses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;beeing&quot; likely occurs because of confusion with words that have double &quot;e&quot; spellings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;being&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: human being, being there, being aware, and being present.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Being</strong> is the correct spelling with one &quot;e&quot;. It means existence or the state of existing. The misspelling &quot;beeing&quot; is never correct. Use &quot;being&quot; to refer to existence, living creatures, or as the present participle of &quot;be.&quot;</p>
      </div>
    </div>
  )
} 