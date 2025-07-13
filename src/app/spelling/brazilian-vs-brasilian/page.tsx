import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Brazilian or Brasilian - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;Brazilian&quot; and &quot;Brasilian&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BrazilianVsBrasilianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Brazilian or Brasilian</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Brazilian&quot; and &quot;Brasilian&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brasilian</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Brasilian&quot; is a misspelling. The correct spelling is &quot;Brazilian&quot; with &quot;z&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Brazilian</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Brazilian&quot; is the correct spelling. It refers to someone or something from Brazil.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Brazilian (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person from Brazil; relating to or characteristic of Brazil or its people.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>Brazilian</strong> soccer team won the match.</li>
                  <li>• She is a <strong>Brazilian</strong> citizen.</li>
                  <li>• <strong>Brazilian</strong> cuisine is very popular.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Brasilian (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Brasilian&quot; is a misspelling of &quot;Brazilian&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Brasilian&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Brazilian</strong> when referring to Brazil.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Brazilian:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• From Brazil</li>
                <li>• Of Brazil</li>
                <li>• Brazil-born</li>
                <li>• South American</li>
                <li>• Latin American</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Brasilian:</h4>
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
            <li>• <strong>Brazilian</strong> is spelled with &quot;z&quot;, not &quot;s&quot;.</li>
            <li>• The word comes from &quot;Brazil&quot; + the suffix &quot;-ian&quot;.</li>
            <li>• Can be used as both a noun and an adjective.</li>
            <li>• Common in geography, culture, and nationality contexts.</li>
            <li>• &quot;Brasilian&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Brasilian&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Brasilian&quot; is never correct. The proper spelling is always &quot;Brazilian.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;Brazil&quot; + &quot;ian&quot; - the word has &quot;z&quot; like &quot;Brazil&quot; or &quot;zebra.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between Brazilian and Brazil?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Brazil&quot; is the country name, while &quot;Brazilian&quot; refers to people or things from Brazil.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can Brazilian be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;Brazilian&quot; is the standard spelling and is appropriate in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion with Portuguese spelling or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;Brazilian&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: Brazilian Portuguese, Brazilian music, Brazilian culture, and Brazilian food.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Brazilian</strong> is the correct spelling with &quot;z&quot;. It refers to someone or something from Brazil. The misspelling &quot;Brasilian&quot; is never correct. Use &quot;Brazilian&quot; when referring to people, culture, or things from Brazil.</p>
      </div>
    </div>
  )
} 