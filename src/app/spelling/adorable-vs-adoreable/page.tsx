import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Adorable or Adoreable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;adorable&quot; and &quot;adoreable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdorableVsAdoreablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Adorable or Adoreable
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Adorable&quot; or &quot;Adoreable&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adoreable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adoreable&quot; is a misspelling. The correct spelling is &quot;adorable&quot; with &apos;or&apos; instead of &apos;ore&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Adorable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Adorable&quot; is the correct spelling. It means extremely cute or lovable.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Adorable</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Adorable</strong> (adjective): Extremely cute, lovable, or charming; inspiring great affection or delight; worthy of being adored.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The puppy was absolutely <strong>adorable</strong> with its big eyes.</li>
              <li>• She wore an <strong>adorable</strong> little dress to the party.</li>
              <li>• The baby&apos;s smile was <strong>adorable</strong> and melted everyone&apos;s heart.</li>
              <li>• What an <strong>adorable</strong> gesture of kindness!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Adorable</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Cute</li>
                <li>• Lovable</li>
                <li>• Charming</li>
                <li>• Sweet</li>
                <li>• Precious</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Endearing</li>
                <li>• Delightful</li>
                <li>• Enchanting</li>
                <li>• Lovely</li>
                <li>• Darling</li>
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
            <li>• <strong>Adorable</strong> is spelled with &apos;or&apos;, not &apos;ore&apos;.</li>
            <li>• It&apos;s commonly used to describe cute or lovable things.</li>
            <li>• Often used to describe babies, pets, or small objects.</li>
            <li>• The word implies extreme cuteness or charm.</li>
            <li>• The word comes from the Latin &quot;adorare&quot; meaning &quot;to worship.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adoreable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adoreable&quot; is never correct. The proper spelling is always &quot;adorable&quot; with &apos;or&apos; instead of &apos;ore&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;adorable&quot; as coming from &quot;adore&quot; - you &quot;adore&quot; something, so it&apos;s &quot;adore-able.&quot; The word comes from Latin &quot;adorare&quot; meaning &quot;to worship.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between adorable and cute?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both describe something appealing, &quot;adorable&quot; implies a stronger sense of being lovable and worthy of adoration, while &quot;cute&quot; is more general and can refer to anything attractive or pleasing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can adorable be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adorable&quot; is only used as an adjective. It describes the quality of being lovable or cute.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is adorable only used for babies and pets?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adorable&quot; can be used to describe anything that is extremely cute or lovable, including objects, gestures, or behaviors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adoreable&quot; likely occurs because people may think it should be spelled like &quot;adore&quot; with an &apos;e&apos;, or may not be familiar with the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;adorable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: absolutely adorable, utterly adorable, so adorable, adorable little, and adorable baby.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adorable&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While &quot;adorable&quot; is more commonly used in informal contexts, it can be used in formal writing when appropriate, such as in descriptions or creative writing.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Adorable</strong> is the correct spelling with &apos;or&apos; in the middle. It means extremely cute, lovable, or charming. The misspelling &quot;adoreable&quot; with &apos;ore&apos; is never correct. Use this word when you want to describe something that is extremely cute or worthy of adoration.
        </p>
      </div>
    </div>
  )
} 