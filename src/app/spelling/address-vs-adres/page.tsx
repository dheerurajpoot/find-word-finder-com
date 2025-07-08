import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Address or Adres - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;address&quot; and &quot;adres&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AddressVsAdresPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Address or Adres
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Address&quot; or &quot;Adres&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adres</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adres&quot; is a misspelling. The correct spelling is &quot;address&quot; with two &apos;d&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Address</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Address&quot; is the correct spelling. It means a location or to speak to someone.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Address</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Address</strong> (noun/verb): As a noun: the particulars of the place where someone lives or an organization is situated; a formal speech delivered to an audience. As a verb: to speak to someone; to deal with a problem or issue; to write the destination on a letter or package.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Please provide your <strong>address</strong> for delivery.</li>
              <li>• The president gave an <strong>address</strong> to the nation.</li>
              <li>• We need to <strong>address</strong> this issue immediately.</li>
              <li>• The letter was <strong>address</strong>ed to the wrong person.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Address</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Location</li>
                <li>• Residence</li>
                <li>• Speech</li>
                <li>• Talk</li>
                <li>• Handle</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Deal with</li>
                <li>• Confront</li>
                <li>• Approach</li>
                <li>• Tackle</li>
                <li>• Resolve</li>
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
            <li>• <strong>Address</strong> is spelled with two &apos;d&apos;s, not one.</li>
            <li>• It&apos;s commonly used in both formal and informal contexts.</li>
            <li>• Can be used as both a noun and a verb.</li>
            <li>• The word has multiple meanings depending on context.</li>
            <li>• The word comes from the Old French &quot;adrecier&quot; meaning &quot;to straighten.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adres&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adres&quot; is never correct. The proper spelling is always &quot;address&quot; with two &apos;d&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;address&quot; as having a double &apos;d&apos; - you need to &quot;add&quot; the &quot;dress&quot; to get the full word. The word comes from Old French &quot;adrecier&quot; meaning &quot;to straighten.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between address and location?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both refer to where something is, &quot;address&quot; specifically refers to the written details of a place (street, city, etc.), while &quot;location&quot; is more general and can refer to any place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can address be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;address&quot; is only used as a noun or verb. However, &quot;addressed&quot; can be used as an adjective.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is address always about physical locations?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;address&quot; can also refer to speaking to someone or dealing with a problem, not just physical locations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adres&quot; likely occurs because people may not realize there are two &apos;d&apos;s in the word or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;address&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: email address, home address, business address, address the issue, address the audience, and address the problem.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;address&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;address&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Address</strong> is the correct spelling with two &apos;d&apos;s. It means a location or to speak to someone. The misspelling &quot;adres&quot; with one &apos;d&apos; is never correct. Use this word when you want to describe a location, speak to someone, or deal with a problem.
        </p>
      </div>
    </div>
  )
} 