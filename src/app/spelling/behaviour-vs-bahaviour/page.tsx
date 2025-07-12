import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Behaviour or Bahaviour - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;behaviour&quot; and &quot;bahaviour&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BehaviourVsBahaviourPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Behaviour or Bahaviour</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;behaviour&quot; and &quot;bahaviour&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bahaviour</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bahaviour&quot; is a misspelling. The correct spelling is &quot;behaviour&quot; with an &quot;e&quot; after the &quot;b&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Behaviour</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Behaviour&quot; is the correct spelling. It means the way someone acts or conducts themselves.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Behaviour (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The way in which someone acts or conducts themselves; the way something functions or operates.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• His <strong>behaviour</strong> at the meeting was inappropriate.</li>
                  <li>• The child&apos;s <strong>behaviour</strong> improved after the intervention.</li>
                  <li>• Scientists studied the <strong>behaviour</strong> of the animals.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bahaviour (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bahaviour&quot; is a misspelling of &quot;behaviour&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bahaviour&quot; is not used in standard English.</li>
                  <li>• Always use <strong>behaviour</strong> when referring to conduct.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Behaviour:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Conduct</li>
                <li>• Actions</li>
                <li>• Demeanor</li>
                <li>• Manner</li>
                <li>• Attitude</li>
                <li>• Response</li>
                <li>• Performance</li>
                <li>• Disposition</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bahaviour:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Behaviour</strong> is spelled with an &quot;e&quot; after the &quot;b&quot;, not &quot;bahaviour.&quot;</li>
          <li>• The word comes from Old French &quot;behaviour&quot; meaning to have or hold.</li>
          <li>• Commonly used in psychology, education, and everyday conversation.</li>
          <li>• Can refer to human, animal, or even mechanical behavior.</li>
          <li>• &quot;Bahaviour&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bahaviour&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bahaviour&quot; is never correct. The proper spelling is always &quot;behaviour&quot; with an &quot;e&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;be-have-iour&quot; - the word &quot;be&quot; plus &quot;have&quot; plus the suffix &quot;-iour.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between behaviour and behavior?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Behaviour&quot; is the British spelling, while &quot;behavior&quot; is the American spelling. Both are correct in their respective regions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can behaviour be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;behaviour&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;bahaviour&quot; likely occurs because of pronunciation or confusion about the &quot;e&quot; sound.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;behaviour&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: good behaviour, bad behaviour, behavioural problems, and behavioural science.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is behaviour always about people?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;behaviour&quot; can refer to animals, machines, or even natural phenomena, not just human conduct.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the adjective form of behaviour?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The adjective form is &quot;behavioural&quot; - relating to behavior (e.g., behavioural therapy).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Behaviour</strong> is the correct spelling with an &quot;e&quot; after the &quot;b&quot;. It means the way someone acts or conducts themselves. The misspelling &quot;bahaviour&quot; is never correct. Use &quot;behaviour&quot; to describe conduct, actions, or manner in any context.</p>
      </div>
    </div>
  )
} 