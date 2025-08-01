import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'These or Theese - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;these&quot; and &quot;theese&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TheseVsTheesePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">These or Theese</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;these&quot; and &quot;theese&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Theese</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Theese&quot; is a misspelling. The correct spelling is &quot;these&quot; with &quot;se&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: These</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;These&quot; is the correct spelling. It means the plural form of &quot;this.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">These (determiner/pronoun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Plural form of &quot;this&quot;; used to refer to people or things that are near the speaker or have been mentioned.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>These</strong> books are mine.</li>
                  <li>• I like <strong>these</strong> shoes.</li>
                  <li>• <strong>These</strong> are my friends.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Theese (determiner/pronoun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Theese&quot; is a misspelling of &quot;these&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Theese&quot; is not used in standard English.</li>
                  <li>• Always use <strong>these</strong> when referring to plural items near you.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">These:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• This (singular)</li>
                <li>• Those (far away)</li>
                <li>• The aforementioned</li>
                <li>• The present</li>
                <li>• The current</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Theese:</h4>
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
            <li>• <strong>These</strong> is spelled with &quot;se&quot; at the end.</li>
            <li>• It is the plural form of the demonstrative pronoun &quot;this.&quot;</li>
            <li>• &quot;Theese&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þās&quot; meaning &quot;these.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;theese&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theese&quot; is never correct. The proper spelling is always &quot;these.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;these&quot; ends with &quot;se&quot; - think of it as &quot;the-se.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;these&quot; and &quot;those&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;These&quot; refers to items near the speaker, while &quot;those&quot; refers to items farther away.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;these&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;these&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;these&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;theese&quot; often happens by adding an extra &quot;e&quot; before the &quot;s.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;these&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: these days, these things, these people, and these times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;these&quot; always plural?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;these&quot; is always used with plural nouns or as a plural pronoun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;these&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;these&quot; can be used as both a determiner and a pronoun.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>These</strong> is the correct spelling with &quot;se&quot; at the end. It is the plural form of &quot;this&quot; and refers to items near the speaker. The misspelling &quot;theese&quot; is never correct. Always use &quot;these&quot; when referring to plural items that are near you or have been mentioned.</p>
      </div>
    </div>
  )
} 