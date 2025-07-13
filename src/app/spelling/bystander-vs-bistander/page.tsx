import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bystander or Bistander - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bystander&quot; and &quot;bistander&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BystanderVsBistanderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Bystander or Bistander</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;bystander&quot; and &quot;bistander&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bistander</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bistander&quot; is a misspelling. The correct spelling is &quot;bystander&quot; with &quot;y&quot; not &quot;i.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bystander</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Bystander&quot; is the correct spelling. It means a person who is present but not involved in an event.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Bystander (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who is present at an event or incident but is not directly involved in it.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>bystander</strong> called for help.</li>
                  <li>• Several <strong>bystanders</strong> witnessed the accident.</li>
                  <li>• The <strong>bystander</strong> effect is a social phenomenon.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bistander (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bistander&quot; is a misspelling of &quot;bystander&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bistander&quot; is not used in standard English.</li>
                  <li>• Always use <strong>bystander</strong> when referring to an onlooker.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Bystander:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Onlooker</li>
                <li>• Spectator</li>
                <li>• Witness</li>
                <li>• Observer</li>
                <li>• Viewer</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bistander:</h4>
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
            <li>• <strong>Bystander</strong> is spelled with &quot;y&quot; (not &quot;i&quot;) - this is the standard English spelling.</li>
            <li>• The word combines &quot;by&quot; + &quot;stand&quot; + &quot;er&quot; meaning someone who stands by.</li>
            <li>• &quot;Bistander&quot; is never correct in any context.</li>
            <li>• The plural form is &quot;bystanders.&quot;</li>
            <li>• Common in legal, medical, and journalistic contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bistander&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bistander&quot; is never correct. The proper spelling is always &quot;bystander.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does bystander mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Bystander means a person who is present at an event but not directly involved in it.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;bystander&quot; has &quot;y&quot; like &quot;by&quot; - think of someone standing &quot;by&quot; an event.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the plural form of bystander?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The plural form is &quot;bystanders&quot; - multiple people who are present but not involved.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with bystander?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: innocent bystander, bystander effect, and bystander intervention.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bystander used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;bystander&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bystander and witness?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: A bystander is present but not involved, while a witness specifically observes and can testify about what they saw.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can a bystander be held responsible?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Generally, bystanders are not legally responsible, but there are exceptions in some jurisdictions.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Bystander</strong> is the correct spelling with &quot;y&quot; (not &quot;i&quot;). It means a person who is present but not involved in an event. The misspelling &quot;bistander&quot; is never correct in English.</p>
      </div>
    </div>
  )
} 