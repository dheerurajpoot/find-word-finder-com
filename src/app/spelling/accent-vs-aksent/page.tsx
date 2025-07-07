import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accent vs Aksent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accent&quot; and &quot;aksent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccentVsAksentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Accent vs Aksent</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;accent&quot; or &quot;aksent&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aksent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aksent&quot; is a common misspelling. The correct spelling is &quot;accent&quot; with &apos;cc&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accent</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Accent&quot; is the correct spelling. It refers to a distinctive way of pronouncing a language, or a mark indicating stress or pitch.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Accent</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Accent</strong> (noun): A distinctive way of pronouncing a language, especially one associated with a particular country, area, or social class. Also, a mark on a letter indicating stress or pitch.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She spoke English with a French <strong>accent</strong>.</li>
              <li>• The word &quot;résumé&quot; has two accents.</li>
              <li>• His southern <strong>accent</strong> was noticeable.</li>
              <li>• The accent falls on the second syllable.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Accent</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Inflection</li>
                <li>• Tone</li>
                <li>• Stress</li>
                <li>• Emphasis</li>
                <li>• Pronunciation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Dialect</li>
                <li>• Mark</li>
                <li>• Cadence</li>
                <li>• Pitch</li>
                <li>• Articulation</li>
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
            <li>• <strong>Accent</strong> is spelled with &apos;cc&apos;, not &quot;k&quot; or &quot;s&quot;.</li>
            <li>• Used to describe pronunciation or written marks.</li>
            <li>• Commonly used in linguistics, music, and writing.</li>
            <li>• The verb form is &quot;to accent&quot; (to emphasize).</li>
            <li>• The adjective form is &quot;accented&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aksent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aksent&quot; is never correct. The proper spelling is always &quot;accent&quot; with &apos;cc&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;accent&quot; has &apos;cc&apos; in the middle, not &apos;k&apos; or &quot;s&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;accent&quot; refer to music?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, in music, an accent is an emphasis on a particular note or beat.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accent&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: foreign accent, regional accent, accent mark, accent color.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aksent&quot; happens because the &apos;cc&apos; is sometimes replaced with a &apos;k&apos; or &quot;s&quot; due to phonetic similarity.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Accent</strong> is the correct spelling with &apos;cc&apos;. It refers to pronunciation or a written mark. The misspelling &quot;aksent&quot; is never correct. Use &quot;accent&quot; in language, music, and writing contexts.</p>
      </div>
    </div>
  )
} 