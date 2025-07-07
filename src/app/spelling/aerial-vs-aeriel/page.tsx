import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aerial vs Aeriel - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;aerial&quot; and &quot;aeriel&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AerialVsAerielPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Aerial vs Aeriel
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Aerial&quot; or &quot;Aeriel&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aeriel</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Aeriel&quot; is a misspelling. The correct spelling is &quot;aerial&quot; with &apos;al&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Aerial</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Aerial&quot; is the correct spelling. It means relating to the air or atmosphere.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Aerial</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Aerial</strong> (adjective): Relating to the air or atmosphere; existing, happening, or operating in the air; elevated or overhead; pertaining to aircraft or aviation; resembling or suggesting air.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>aerial</strong> view of the city was breathtaking.</li>
              <li>• The <strong>aerial</strong> acrobatics performed by the gymnast were impressive.</li>
              <li>• <strong>Aerial</strong> photography captured the landscape from above.</li>
              <li>• The <strong>aerial</strong> roots of the plant hung from the branches.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Aerial</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Airborne</li>
                <li>• Elevated</li>
                <li>• Overhead</li>
                <li>• Atmospheric</li>
                <li>• Flying</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Aviation</li>
                <li>• Skyward</li>
                <li>• Suspended</li>
                <li>• Hovering</li>
                <li>• Floating</li>
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
            <li>• <strong>Aerial</strong> is spelled with &apos;al&apos; at the end, not &apos;el&apos;.</li>
            <li>• It&apos;s commonly used in aviation, photography, and sports contexts.</li>
            <li>• Often describes views, perspectives, or movements from above.</li>
            <li>• The word suggests something related to the air or atmosphere.</li>
            <li>• The word comes from the Latin &quot;aerius&quot; meaning &quot;of the air.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aeriel&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;aeriel&quot; is never correct. The proper spelling is always &quot;aerial&quot; with &apos;al&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;aerial&quot; as coming from &quot;air&quot; - it relates to the air, so it&apos;s &quot;air-eal.&quot; The word comes from Latin &quot;aerius&quot; meaning &quot;of the air.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between aerial and airborne?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Aerial&quot; describes something relating to the air or atmosphere, while &quot;airborne&quot; specifically means something that is currently flying or suspended in the air.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can aerial be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;aerial&quot; can also be used as a noun, referring to an antenna or a gymnastic maneuver performed in the air.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is aerial always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Not necessarily. &quot;Aerial&quot; is neutral and can describe both positive and negative situations involving air or height.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;aeriel&quot; likely occurs because people may confuse it with words that have &apos;el&apos; endings or may not be familiar with the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;aerial&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: aerial view, aerial photography, aerial acrobatics, aerial roots, aerial perspective, and aerial attack.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;aerial&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;aerial&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, technical, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Aerial</strong> is the correct spelling with &apos;al&apos; at the end. It means relating to the air or atmosphere. The misspelling &quot;aeriel&quot; with &apos;el&apos; is never correct. Use this word when describing something that exists, happens, or operates in the air.
        </p>
      </div>
    </div>
  )
} 