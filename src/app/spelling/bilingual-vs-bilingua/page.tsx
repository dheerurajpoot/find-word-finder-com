import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bilingual or Bilingua - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bilingual&quot; and &quot;bilingua&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BilingualVsBilinguaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bilingual or Bilingua</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bilingual&quot; and &quot;bilingua&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bilingua</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bilingua&quot; is a misspelling. The correct spelling is &quot;bilingual&quot; with &quot;l&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bilingual</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bilingual&quot; is the correct spelling. It means able to speak two languages fluently.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bilingual (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Able to speak two languages fluently; involving or using two languages.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is <strong>bilingual</strong> in English and Spanish.</li>
                  <li>• The school offers <strong>bilingual</strong> education.</li>
                  <li>• He grew up in a <strong>bilingual</strong> household.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bilingua (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bilingua&quot; is a misspelling of &quot;bilingual&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bilingua&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bilingual</strong> when referring to two languages.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bilingual:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Dual-lingual</li>
                <li>• Two-tongued</li>
                <li>• Multilingual</li>
                <li>• Polyglot</li>
                <li>• Fluent in two languages</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bilingua:</h4>
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
            <li>• <strong>Bilingual</strong> is spelled with &quot;l&quot; at the end - this is the standard English spelling.</li>
            <li>• The word comes from Latin &quot;bi-&quot; (two) + &quot;lingua&quot; (language) + &quot;-al&quot; suffix.</li>
            <li>• &quot;Bilingua&quot; is never correct in any context.</li>
            <li>• The word can be used as both an adjective and a noun.</li>
            <li>• Related terms include: trilingual (three languages), multilingual (many languages).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bilingua&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bilingua&quot; is never correct. The proper spelling is always &quot;bilingual.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does bilingual mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Bilingual means able to speak two languages fluently or involving two languages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;bilingual&quot; ends with &quot;l&quot; like &quot;language&quot; - think &quot;bi-language-al.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bilingual be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bilingual&quot; can be a noun meaning a person who speaks two languages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bilingual and multilingual?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Bilingual refers to two languages, while multilingual refers to three or more languages.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bilingual used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bilingual&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with bilingual?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: bilingual education, bilingual dictionary, and bilingual program.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can someone be bilingual from birth?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, people can be native bilinguals if they grow up speaking two languages from early childhood.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bilingual</strong> is the correct spelling with &quot;l&quot; at the end. It means able to speak two languages fluently. The misspelling &quot;bilingua&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 