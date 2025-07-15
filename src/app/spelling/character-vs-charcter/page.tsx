import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Character or Charcter - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;character&quot; and &quot;charcter&quot;. Discover definitions, usage examples, synonyms, notes, and FAQs to avoid common mistakes.',
}

export default function CharacterVsCharcterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Character or Charcter</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;character&quot; and &quot;charcter&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Charcter</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Charcter&quot; is a misspelling. The correct spelling is &quot;character&quot; with an &quot;a&quot; after the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Character</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Character&quot; is the correct spelling. It refers to the mental and moral qualities distinctive to an individual, or a person in a story.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Character (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The mental and moral qualities distinctive to an individual; a person in a narrative or play; a symbol or letter in writing.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is a person of strong character.</li>
                  <li>• The main character in the novel is very brave.</li>
                  <li>• Type each character carefully.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Charcter:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Charcter&quot; is a misspelling of &quot;character&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Charcter&quot; is not used in standard English.</li>
                  <li>• Always use <strong>character</strong> when referring to a person or symbol.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Character:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Personality</li>
                <li>• Nature</li>
                <li>• Disposition</li>
                <li>• Temperament</li>
                <li>• Identity</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Charcter:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
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
            <li>• <strong>Character</strong> is spelled with an &quot;a&quot; after the &quot;r&quot;.</li>
            <li>• Used to describe a person&apos;s qualities, a role in a story, or a symbol in writing.</li>
            <li>• The word comes from Greek &quot;charaktēr&quot; meaning a stamping mark.</li>
            <li>• &quot;Charcter&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;charcter&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;charcter&quot; is never correct. The proper spelling is always &quot;character&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;character&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It refers to the mental and moral qualities distinctive to an individual, or a person in a story, or a symbol in writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Break it into &quot;char-act-er&quot; and remember the &quot;act&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some synonyms for &quot;character&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Personality, nature, disposition, temperament, identity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the origin of the word &quot;character&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It comes from the Greek &quot;charaktēr&quot;, meaning a stamping mark or distinctive quality.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Character</strong> is the correct spelling with an &quot;a&quot; after the &quot;r&quot;. It refers to a person&apos;s qualities, a role in a story, or a symbol in writing. The misspelling &quot;charcter&quot; is never correct. Use &quot;character&quot; in all contexts.</p>
      </div>
    </div>
  )
} 