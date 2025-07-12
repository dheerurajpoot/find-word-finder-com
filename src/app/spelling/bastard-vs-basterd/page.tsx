import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bastard or Basterd - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bastard&quot; and &quot;basterd&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BastardVsBasterdPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bastard or Basterd</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bastard&quot; and &quot;basterd&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Basterd</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Basterd&quot; is a misspelling. The correct spelling is &quot;bastard&quot; with an &quot;a&quot; before &quot;rd&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bastard</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bastard&quot; is the correct spelling. It refers to a person born to parents not married to each other, or as an offensive term.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bastard (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person born to parents not married to each other; also used as an offensive term for a contemptible person.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The historical records mention the <strong>bastard</strong> son of the king.</li>
                  <li>• In medieval times, <strong>bastards</strong> had limited inheritance rights.</li>
                  <li>• The term is considered offensive in modern usage.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Basterd (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Basterd&quot; is a misspelling of &quot;bastard&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Basterd&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bastard</strong> when referring to the correct term.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bastard:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Illegitimate child</li>
                <li>• Natural child</li>
                <li>• Love child</li>
                <li>• Offspring</li>
                <li>• Child</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Basterd:</h4>
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
          <li>• <strong>Bastard</strong> is spelled with an &quot;a&quot; before &quot;rd&quot;, not &quot;e&quot;.</li>
          <li>• The word comes from Old French &quot;bastard&quot; meaning illegitimate child.</li>
          <li>• Historically used to describe children born out of wedlock.</li>
          <li>• Considered offensive when used as an insult in modern English.</li>
          <li>• &quot;Basterd&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;basterd&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;basterd&quot; is never correct. The proper spelling is always &quot;bastard.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;bast&quot; + &quot;ard&quot; - the word ends with &quot;ard&quot; like other similar words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bastard considered offensive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, when used as an insult, it is considered offensive. Historical usage may be acceptable in context.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bastard be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It depends on context. Historical or legal contexts may be appropriate, but it should be used carefully.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;basterd&quot; likely occurs because of confusion about the vowel sound or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some alternative terms?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: More neutral terms include illegitimate child, natural child, or simply child, depending on context.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bastard</strong> is the correct spelling with an &quot;a&quot; before &quot;rd&quot;. It refers to a person born to unmarried parents. The misspelling &quot;basterd&quot; is never correct. Note that this term can be offensive in modern usage.</p>
      </div>
    </div>
  )
} 