import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Career or Carrer - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;career&quot; and &quot;carrer&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CareerVsCarrerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Career or Carrer</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;career&quot; and &quot;carrer&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carrer</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carrer&quot; is a misspelling. The correct spelling is &quot;career&quot; with &quot;eer&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Career</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Career&quot; is the correct spelling. It means a person&apos;s profession or occupation.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Career (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person&apos;s profession or occupation; the progress and development of a person&apos;s working life.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She had a successful <strong>career</strong> in medicine.</li>
                  <li>• His <strong>career</strong> spanned over thirty years.</li>
                  <li>• The <strong>career</strong> fair offered many opportunities.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carrer (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carrer&quot; is a misspelling of &quot;career&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carrer&quot; is not used in standard English.</li>
                  <li>• Always use <strong>career</strong> when referring to profession.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Career:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Profession</li>
                <li>• Occupation</li>
                <li>• Vocation</li>
                <li>• Job</li>
                <li>• Work</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carrer:</h4>
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
            <li>• <strong>Career</strong> is spelled with &quot;eer&quot; at the end, not &quot;er.&quot;</li>
            <li>• The word comes from Latin &quot;carrus&quot; meaning wagon or course.</li>
            <li>• Can be used to refer to a profession or the progression of work life.</li>
            <li>• Often used in professional, educational, and employment contexts.</li>
            <li>• &quot;Carrer&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carrer&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrer&quot; is never correct. The proper spelling is always &quot;career.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;car-eer&quot; - the word ends with &quot;eer&quot; like &quot;peer&quot; or &quot;deer.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between career and job?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to work, but &quot;career&quot; implies a long-term profession while &quot;job&quot; is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carrer&quot; likely occurs because people forget the second &quot;e&quot; before &quot;r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;career&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: career change, career path, and career development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can career be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;career&quot; can be used as a verb meaning to move swiftly or rush.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is career only used for paid work?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;career&quot; can refer to any long-term profession, including volunteer work.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word career?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Latin &quot;carrus&quot; and was first used in English in the 16th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Career</strong> is the correct spelling with &quot;eer&quot; at the end. It means a person&apos;s profession or occupation and the progress of their working life. The misspelling &quot;carrer&quot; is never correct. Use &quot;career&quot; to refer to long-term professions, work progression, or professional development in various contexts.</p>
      </div>
    </div>
  )
} 