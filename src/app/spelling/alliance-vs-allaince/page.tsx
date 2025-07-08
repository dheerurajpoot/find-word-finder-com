import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alliance or Allaince - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alliance&quot; and &quot;allaince&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllianceVsAllaincePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alliance or Allaince</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alliance&quot; and &quot;allaince&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Allaince</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Allaince&quot; is a common misspelling. The correct spelling is &quot;alliance&quot; with the &apos;i&apos; before the &apos;a&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alliance</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alliance&quot; is the correct spelling. It means a union or association formed for mutual benefit, especially between countries or organizations.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alliance (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A union or association formed for mutual benefit, especially between countries or organizations.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The two countries formed an <strong>alliance</strong> for defense.</li>
                  <li>• The companies entered into a strategic <strong>alliance</strong>.</li>
                  <li>• The alliance between the organizations was beneficial to both.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Allaince (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Allaince&quot; is not a standard English word and is considered a misspelling of &quot;alliance&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Allaince&quot; is not used in standard English for &quot;alliance&quot;.</li>
                  <li>• Always use <strong>alliance</strong> when referring to a union or association.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alliance:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Partnership</li>
                <li>• Association</li>
                <li>• Coalition</li>
                <li>• Union</li>
                <li>• Confederation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Allaince:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Alliance</strong> is spelled with &apos;i&apos; before the &apos;a&apos;, not &quot;ai&quot;.</li>
            <li>• Used to describe a union or association for mutual benefit.</li>
            <li>• The plural is &quot;alliances&quot;.</li>
            <li>• &quot;Allaince&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allaince&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allaince&quot; is never correct as a spelling for &quot;alliance&quot;. Always use &quot;alliance&quot; for a union or association.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alliance&quot; has &apos;i&apos; before the &apos;a&apos;, not &quot;ai&quot; together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alliance&quot; refer to organizations?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alliance&quot; is commonly used for organizations, countries, and groups working together.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alliance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: military alliance, strategic alliance, political alliance, business alliance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;allaince&quot; happens because &apos;ai&apos; is a common English vowel combination, but in this word, it is &apos;ia&apos;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alliance</strong> is the correct spelling with &apos;i&apos; before the &apos;a&apos;. It refers to a union or association for mutual benefit. The misspelling &quot;allaince&quot; is never correct. Use &quot;alliance&quot; in political, business, and social contexts.</p>
      </div>
    </div>
  )
} 