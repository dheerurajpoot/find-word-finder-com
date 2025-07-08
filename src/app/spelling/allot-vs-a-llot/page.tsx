import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Allot or A-llot - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;allot&quot; and &quot;a-llot&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AllotVsAllotPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allot or A-llot</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allot&quot; and &quot;a-llot&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: A-llot</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;A-llot&quot; is not a standard English word. The correct spelling is &quot;allot&quot; as a single word, meaning to distribute or assign.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allot</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allot&quot; is the correct spelling. It means to give or apportion something to someone as a share or task.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Allot (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To give or apportion (something) to someone as a share or task; to distribute.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Each student was <strong>allotted</strong> a locker.</li>
                  <li>• The time was <strong>allotted</strong> for questions.</li>
                  <li>• Funds were <strong>allotted</strong> to each department.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">A-llot (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;A-llot&quot; is not a standard English word and is considered a misspelling of &quot;allot&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;A-llot&quot; is not used in standard English for &quot;allot&quot;.</li>
                  <li>• Always use <strong>allot</strong> when referring to distributing or assigning.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Allot:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Assign</li>
                <li>• Allocate</li>
                <li>• Distribute</li>
                <li>• Apportion</li>
                <li>• Grant</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">A-llot:</h4>
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
            <li>• <strong>Allot</strong> is spelled as a single word, not with a hyphen.</li>
            <li>• Used to describe distributing or assigning something.</li>
            <li>• The noun form is &quot;allotment&quot;.</li>
            <li>• The opposite is &quot;withhold&quot;.</li>
            <li>• &quot;A-llot&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;a-llot&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;a-llot&quot; is never correct as a spelling for &quot;allot&quot;. Always use &quot;allot&quot; for distributing or assigning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;allot&quot; is a single word, not two words or hyphenated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allot&quot; be used in different contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allot&quot; can refer to time, money, resources, or tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allot&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: allot time, allot resources, allot funds, allot space.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;a-llot&quot; happens because of confusion with the phrase &quot;a lot&quot;, but &quot;allot&quot; is a single word meaning to assign or distribute.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allot</strong> is the correct spelling as a single word. It means to assign or distribute. The misspelling &quot;a-llot&quot; is never correct. Use &quot;allot&quot; in resource, time, and task contexts.</p>
      </div>
    </div>
  )
} 