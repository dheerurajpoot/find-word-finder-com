import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Official or Offical - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;official&quot; and &quot;offical&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function OfficialVsOfficalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Official or Offical
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Official&quot; or &quot;Offical&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Offical</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Offical&quot; is a misspelling. The correct spelling is &quot;official&quot; with two &apos;f&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Official</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Official&quot; is the correct spelling. It means authorized or formal.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Official</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Official</strong> (adjective/noun): Relating to an authority or public body; authorized or formal; holding a position of authority; a person holding a position of authority; something that is formally recognized or approved; relating to government or public administration.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>official</strong> announcement was made yesterday.</li>
              <li>• She is an <strong>official</strong> representative of the company.</li>
              <li>• The <strong>official</strong> language of the country is English.</li>
              <li>• Government <strong>officials</strong> attended the ceremony.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Official</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Authorized</li>
                <li>• Formal</li>
                <li>• Approved</li>
                <li>• Legitimate</li>
                <li>• Certified</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Endorsed</li>
                <li>• Sanctioned</li>
                <li>• Recognized</li>
                <li>• Valid</li>
                <li>• Bona fide</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Official</strong> is spelled with two &apos;f&apos;s, not one.</li>
            <li>• It&apos;s commonly used in formal and governmental contexts.</li>
            <li>• Can be used as both an adjective and a noun.</li>
            <li>• Often implies authority or formal recognition.</li>
            <li>• The word comes from the Latin &quot;officium&quot; meaning &quot;service&quot; or &quot;duty.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;offical&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;offical&quot; is never correct. The proper spelling is always &quot;official&quot; with two &apos;f&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;official&quot; as having two &apos;f&apos;s - one for &quot;formal&quot; and one for &quot;final.&quot; The word comes from Latin &quot;officium&quot; meaning &quot;service&quot; or &quot;duty.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between official and formal?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Official&quot; specifically relates to authority or public bodies, while &quot;formal&quot; refers to proper etiquette or structure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can official be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;official&quot; is only used as an adjective or noun. The verb form would be &quot;to officiate&quot; or &quot;to authorize.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is official always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Usually yes, as it implies authority and legitimacy, but official actions can sometimes be controversial or unpopular.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;offical&quot; likely occurs because people may forget the second &apos;f&apos; or may not remember the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;official&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: official statement, official language, official record, official capacity, and official document.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;official&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;official&quot; is very appropriate in formal writing. It&apos;s a standard English word that can be used in academic, legal, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Official</strong> is the correct spelling with two &apos;f&apos;s. It means authorized or formal. The misspelling &quot;offical&quot; with one &apos;f&apos; is never correct. Use this word when referring to authorized, formal, or government-related matters.
        </p>
      </div>
    </div>
  )
} 