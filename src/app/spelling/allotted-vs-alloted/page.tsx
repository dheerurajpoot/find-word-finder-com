import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allotted or Alloted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allotted&quot; and &quot;alloted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllottedVsAllotedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allotted or Alloted</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allotted&quot; and &quot;alloted&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Alloted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Alloted&quot; is a common misspelling. The correct spelling is &quot;allotted&quot; with double &apos;t&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allotted</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allotted&quot; is the correct spelling. It is the past tense and past participle of &quot;allot&quot;, meaning to assign or distribute.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allotted (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Assigned or distributed as a share or portion; the past tense and past participle of &quot;allot&quot;.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Each team was <strong>allotted</strong> 30 minutes.</li>
                  <li>• The funds were <strong>allotted</strong> to various departments.</li>
                  <li>• The teacher <strong>allotted</strong> homework to the students.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Alloted (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Alloted&quot; is not a standard English word and is considered a misspelling of &quot;allotted&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Alloted&quot; is not used in standard English for &quot;allotted&quot;.</li>
                  <li>• Always use <strong>allotted</strong> when referring to something assigned or distributed.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allotted:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Assigned</li>
                <li>• Distributed</li>
                <li>• Allocated</li>
                <li>• Apportioned</li>
                <li>• Granted</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Alloted:</h4>
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
            <li>• <strong>Allotted</strong> is spelled with double &apos;t&apos;, not single.</li>
            <li>• Used to describe something assigned or distributed.</li>
            <li>• The noun form is &quot;allotment&quot;.</li>
            <li>• The opposite is &quot;withheld&quot;.</li>
            <li>• &quot;Alloted&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;alloted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;alloted&quot; is never correct as a spelling for &quot;allotted&quot;. Always use &quot;allotted&quot; for something assigned or distributed.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;allotted&quot; has double &apos;t&apos;, not single.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allotted&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allotted&quot; can refer to time, money, resources, or tasks that have been assigned.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allotted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: allotted time, allotted space, allotted funds, allotted resources.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;alloted&quot; happens because double &apos;t&apos; is sometimes forgotten, but &quot;allotted&quot; always has two &apos;t&apos;s.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allotted</strong> is the correct spelling with double &apos;t&apos;. It means assigned or distributed. The misspelling &quot;alloted&quot; is never correct. Use &quot;allotted&quot; in resource, time, and task contexts.</p>
      </div>
    </div>
  )
} 