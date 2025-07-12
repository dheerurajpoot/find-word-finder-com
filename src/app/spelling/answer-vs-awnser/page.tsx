import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Answer or Awnser - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;answer&quot; and &quot;awnser&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AnswerVsAwnserPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Answer or Awnser</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;answer&quot; and &quot;awnser&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Awnser</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Awnser&quot; is a misspelling. The correct spelling is &quot;answer&quot; with an &quot;e&quot; before the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Answer</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Answer&quot; is the correct spelling. It means a response to a question or a solution to a problem.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Answer (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A response to a question; a solution to a problem; to respond to or reply to.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• What is the <strong>answer</strong> to this question?</li>
                  <li>• Please <strong>answer</strong> the phone when it rings.</li>
                  <li>• The <strong>answer</strong> to the math problem is 42.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Awnser (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Awnser&quot; is a misspelling of &quot;answer&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Awnser&quot; is not used in standard English.</li>
                  <li>• Always use <strong>answer</strong> when referring to responses.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Answer:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Response</li>
                <li>• Reply</li>
                <li>• Solution</li>
                <li>• Explanation</li>
                <li>• Retort</li>
                <li>• Rejoinder</li>
                <li>• Resolution</li>
                <li>• Result</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Awnser:</h4>
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
          <li>• <strong>Answer</strong> is spelled with an &quot;e&quot; before the &quot;r&quot;, not &quot;awnser.&quot;</li>
          <li>• The word comes from Old English &quot;andswaru&quot; meaning a reply or response.</li>
          <li>• Can be used as both a noun and a verb.</li>
          <li>• Commonly used in everyday conversation, education, and formal writing.</li>
          <li>• &quot;Awnser&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;awnser&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;awnser&quot; is never correct. The proper spelling is always &quot;answer&quot; with an &quot;e&quot; before the &quot;r.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;an-swer&quot; - the word &quot;an&quot; plus &quot;swer&quot; (from Old English for swear or declare).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between answer and reply?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Answer&quot; is more general and can refer to solutions, while &quot;reply&quot; specifically refers to responding to communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can answer be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;answer&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;awnser&quot; likely occurs because of pronunciation or confusion about the &quot;e&quot; sound.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;answer&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: answer the question, answer the phone, answer for, and answer to.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is answer always about questions?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;answer&quot; can refer to solutions to problems, responses to situations, or replies to communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the opposite of answer?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The opposite of &quot;answer&quot; could be &quot;question&quot; (noun) or &quot;ask&quot; (verb).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Answer</strong> is the correct spelling with an &quot;e&quot; before the &quot;r&quot;. It means a response to a question or a solution to a problem. The misspelling &quot;awnser&quot; is never correct. Use &quot;answer&quot; to describe responses, solutions, or replies in any context.</p>
      </div>
    </div>
  )
} 