import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Commission or Commision - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;commission&quot; and &quot;commision&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CommissionVsCommisionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Commission or Commision</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;commission&quot; and &quot;commision&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Commision</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Commision&quot; is a misspelling. The correct spelling is &quot;commission&quot; with a double &quot;s&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Commission</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Commission&quot; is the correct spelling. It refers to an instruction, command, or role given to a person or group, or a fee paid for services.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Commission (noun/verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Noun: An instruction, command, or role given to a person or group. Also, a fee paid to someone for their services, especially in sales or business.<br/>Verb: To order or authorize the production of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She received a <strong>&quot;commission&quot;</strong> to paint a portrait.</li>
                  <li>• The agent earned a 5% <strong>&quot;commission&quot;</strong> on the sale.</li>
                  <li>• The committee was given a <strong>&quot;commission&quot;</strong> to investigate the issue.</li>
                  <li>• The portrait was <strong>&quot;commissioned&quot;</strong> by his widow in 1792.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Commision:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Commision&quot; is a misspelling of &quot;commission&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Commision&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;commission&quot;</strong> when referring to a task, fee, or authorization.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Commission:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Task</li>
                <li>• Employment</li>
                <li>• Job</li>
                <li>• Work</li>
                <li>• Authorization</li>
                <li>• Mandate</li>
                <li>• Fee</li>
                <li>• Contract</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Commision:</h4>
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
            <li>• <strong>&quot;Commission&quot;</strong> is always spelled with a double &quot;s&quot; in the middle.</li>
            <li>• Used as both a noun and a verb in English.</li>
            <li>• Commonly refers to a task, official group, or a fee for services.</li>
            <li>• &quot;Commision&quot; is never correct in any context.</li>
            <li>• Remember: double &quot;s&quot; for the correct spelling.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;commision&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;commision&quot; is never correct. The proper spelling is always &quot;commission.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;commission&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It can mean an official instruction, a group of people given a task, or a fee paid for services, especially in sales or business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;s&quot; in the middle: commi<strong>ss</strong>ion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;commission&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, to &quot;commission&quot; something means to order or authorize the production of something, such as a work of art.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>&quot;Commission&quot;</strong> is the correct spelling with a double &quot;s&quot; in the middle. It refers to an official instruction, a group, or a fee for services. The misspelling &quot;commision&quot; is never correct. Use &quot;commission&quot; in all contexts.</p>
      </div>
    </div>
  )
} 