import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Amateur or Ameture - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;amateur&quot; and &quot;ameture&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AmateurVsAmeturePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Amateur or Ameture</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;amateur&quot; and &quot;ameture&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Ameture</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Ameture&quot; is a misspelling. The correct spelling is &quot;amateur&quot; with an &quot;a&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Amateur</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Amateur&quot; is the correct spelling. It means someone who engages in an activity for pleasure rather than as a profession.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Amateur (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who engages in an activity for pleasure rather than as a profession; not professional or expert.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• He is an <strong>amateur</strong> photographer.</li>
                  <li>• The <strong>amateur</strong> team played well.</li>
                  <li>• She has <strong>amateur</strong> skills in painting.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Ameture (noun/adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Ameture&quot; is a misspelling of &quot;amateur&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Ameture&quot; is not used in standard English.</li>
                  <li>• Always use <strong>amateur</strong> when referring to non-professional activities.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Amateur:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Non-professional</li>
                <li>• Hobbyist</li>
                <li>• Novice</li>
                <li>• Beginner</li>
                <li>• Enthusiast</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Ameture:</h4>
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
            <li>• <strong>Amateur</strong> is spelled with an &quot;a&quot; at the end, not &quot;ameture&quot;.</li>
            <li>• The word comes from French &quot;amateur&quot; meaning lover or enthusiast.</li>
            <li>• Can be used as both a noun and an adjective.</li>
            <li>• Often used in sports, arts, and other recreational activities.</li>
            <li>• &quot;Ameture&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;ameture&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;ameture&quot; is never correct. The proper spelling is always &quot;amateur.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;am&quot; + &quot;ateur&quot; - the word ends with &quot;ateur&quot; like &quot;connoisseur&quot; or &quot;entrepreneur.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between amateur and professional?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Amateur&quot; refers to someone who does something for pleasure, while &quot;professional&quot; refers to someone who does it for money or as a career.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can amateur be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;amateur&quot; is very common in formal writing, especially in sports, arts, and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of pronunciation or confusion with similar words that end in &quot;ure.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;amateur&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: amateur athlete, amateur photographer, amateur hour, and amateur dramatics.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Amateur</strong> is the correct spelling with an &quot;a&quot; at the end. It means someone who engages in an activity for pleasure rather than as a profession. The misspelling &quot;ameture&quot; is never correct. Use &quot;amateur&quot; when referring to non-professional activities or participants.</p>
      </div>
    </div>
  )
} 