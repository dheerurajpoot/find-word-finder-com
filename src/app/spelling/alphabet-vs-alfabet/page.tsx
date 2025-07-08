import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alphabet or Alfabet - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alphabet&quot; and &quot;alfabet&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlphabetVsAlfabetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alphabet or Alfabet</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alphabet&quot; or &quot;alfabet&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alfabet</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alfabet&quot; is a common misspelling. The correct spelling is &quot;alphabet&quot; with a &apos;ph&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alphabet</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alphabet&quot; is the correct spelling. It refers to a set of letters or symbols in a fixed order used to represent the basic sounds of a language.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Alphabet</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Alphabet</strong> (noun): A set of letters or symbols in a fixed order used to represent the basic sounds of a language.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The English <strong>alphabet</strong> has 26 letters.</li>
              <li>• Children learn the <strong>alphabet</strong> in kindergarten.</li>
              <li>• The Greek <strong>alphabet</strong> is used in mathematics.</li>
              <li>• She recited the <strong>alphabet</strong> backwards.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Alphabet</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Letters</li>
                <li>• Characters</li>
                <li>• Script</li>
                <li>• Symbols</li>
                <li>• Abc</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Syllabary</li>
                <li>• Orthography</li>
                <li>• Phonetics</li>
                <li>• Grapheme</li>
                <li>• Lexicon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Alphabet</strong> is spelled with &apos;ph&apos;, not &quot;f&quot;.</li>
            <li>• Used to describe the set of letters in a language.</li>
            <li>• Commonly used in education, linguistics, and language learning.</li>
            <li>• The adjective form is &quot;alphabetic&quot; or &quot;alphabetical&quot;.</li>
            <li>• The plural is &quot;alphabets&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alfabet&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alfabet&quot; is never correct. The proper spelling is always &quot;alphabet&quot; with &apos;ph&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alphabet&quot; has &apos;ph&apos; in the middle, not &quot;f&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alphabet&quot; refer to other languages?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, every language has its own alphabet or set of symbols.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alphabet&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: alphabet song, alphabet chart, alphabet soup, alphabet book.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alfabet&quot; happens because the &apos;ph&apos; is sometimes replaced with an &apos;f&apos; due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alphabet</strong> is the correct spelling with &apos;ph&apos;. It refers to the set of letters in a language. The misspelling &quot;alfabet&quot; is never correct. Use &quot;alphabet&quot; in education, linguistics, and language learning.</p>
      </div>
    </div>
  )
} 