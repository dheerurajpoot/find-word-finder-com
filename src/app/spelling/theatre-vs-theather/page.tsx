import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Theatre or Theather - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;theatre&quot; and &quot;theather&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TheatreVsTheatherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Theatre or Theather</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;theatre&quot; and &quot;theather&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Theather</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Theather&quot; is a misspelling. The correct spelling is &quot;theatre&quot; with &quot;re&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Theatre</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Theatre&quot; is the correct spelling. It means a building for dramatic performances.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Theatre (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A building or outdoor area in which plays and other dramatic performances are given; the art or profession of acting.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• We went to the <strong>theatre</strong> to see a play.</li>
                  <li>• The <strong>theatre</strong> was packed for the opening night.</li>
                  <li>• She studied <strong>theatre</strong> in college.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Theather (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Theather&quot; is a misspelling of &quot;theatre&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Theather&quot; is not used in standard English.</li>
                  <li>• Always use <strong>theatre</strong> when referring to dramatic performances.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Theatre:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Theater</li>
                <li>• Playhouse</li>
                <li>• Stage</li>
                <li>• Auditorium</li>
                <li>• Drama</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Theather:</h4>
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
            <li>• <strong>Theatre</strong> is spelled with &quot;re&quot; at the end: the-a-tre.</li>
            <li>• It is the British spelling; American English uses &quot;theater.&quot;</li>
            <li>• &quot;Theather&quot; is never correct in any context.</li>
            <li>• The word comes from Greek &quot;theatron&quot; meaning &quot;place for viewing.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;theather&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theather&quot; is never correct. The proper spelling is always &quot;theatre.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;theatre&quot; ends with &quot;re&quot; - think of it as &quot;the-a-tre.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;theatre&quot; and &quot;theater&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Theatre&quot; is British English, while &quot;theater&quot; is American English. Both are correct in their respective regions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;theatre&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;theatre&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;theatre&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;theather&quot; often happens by replacing &quot;re&quot; with &quot;her&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;theatre&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: theatre company, theatre arts, theatre district, and dinner theatre.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;theatre&quot; always about plays?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theatre&quot; can also refer to movies (movie theatre) or any dramatic performance venue.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;theatre&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;theatre&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Theatre</strong> is the correct spelling with &quot;re&quot; at the end: the-a-tre. It means a building for dramatic performances or the art of acting. The misspelling &quot;theather&quot; is never correct. Always use &quot;theatre&quot; when referring to dramatic performances, venues, or the performing arts.</p>
      </div>
    </div>
  )
} 