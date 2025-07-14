import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Brooch or Brouch - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;brooch&quot; and &quot;brouch&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BroochVsBrouchPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Brooch or Brouch
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Brooch&quot; or &quot;Brouch&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Brouch</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Brouch&quot; is a misspelling. The correct spelling has two &apos;o&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Brooch</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Brooch&quot; is the correct spelling. It&apos;s a decorative jewelry item.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Brooch</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Brooch</strong> (noun): A decorative jewelry item, typically made of metal, that is fastened to clothing with a pin or clasp; an ornamental pin or clasp worn on clothing.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She wore a beautiful <strong>brooch</strong> on her lapel.</li>
              <li>• The antique <strong>brooch</strong> was passed down through generations.</li>
              <li>• The queen&apos;s <strong>brooch</strong> sparkled with diamonds.</li>
              <li>• He gave her a silver <strong>brooch</strong> for her birthday.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Brooch</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Pin</li>
                <li>• Clasp</li>
                <li>• Badge</li>
                <li>• Ornament</li>
                <li>• Jewelry</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Accessory</li>
                <li>• Decoration</li>
                <li>• Adornment</li>
                <li>• Fastener</li>
                <li>• Trinket</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Brooch</strong> is spelled with two &apos;o&apos;s, not &apos;ou&apos;.</li>
            <li>• The pronunciation is &quot;brohch&quot; (rhyming with &quot;coach&quot;).</li>
            <li>• It&apos;s a noun that refers specifically to a decorative jewelry item.</li>
            <li>• Commonly worn on clothing, especially on lapels or collars.</li>
            <li>• The word comes from Old French &quot;broche&quot; meaning &quot;spit&quot; or &quot;skewer.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;brouch&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;brouch&quot; is never correct. The proper spelling is always &quot;brooch&quot; with two &apos;o&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;brooch&quot; as having the same &apos;oo&apos; pattern as other words like &quot;book,&quot; &quot;look,&quot; and &quot;took.&quot; The double &apos;o&apos; is the key to the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a brooch and a pin?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both are decorative jewelry items, a &quot;brooch&quot; typically refers to a larger, more ornate piece, while a &quot;pin&quot; can be smaller and simpler. &quot;Brooch&quot; often implies something more decorative and valuable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce brooch?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The pronunciation is &quot;brohch&quot; (rhyming with &quot;coach&quot;). It&apos;s pronounced differently from how it&apos;s spelled, which can make it confusing for some people.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can brooch be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Brooch&quot; is appropriate in all types of writing, including formal contexts. It&apos;s the standard English word for this type of jewelry and is used in academic, business, and professional writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;brooch&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: antique brooch, diamond brooch, family brooch, heirloom brooch, and vintage brooch. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;brouch&quot; because they might be thinking of words with &apos;ou&apos; like &quot;touch&quot; or &quot;couch.&quot; The pronunciation can also be misleading since it doesn&apos;t match the spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is brooch related to any other words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Brooch&quot; is related to the word &quot;broach,&quot; which means to bring up a topic for discussion. Both words come from the same Old French root &quot;broche,&quot; which originally meant &quot;spit&quot; or &quot;skewer.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Brooch</strong> is the correct spelling with two &apos;o&apos;s. It&apos;s a decorative jewelry item that is fastened to clothing. The misspelling &quot;brouch&quot; is never correct. This word is commonly used in fashion and jewelry contexts and follows the same &apos;oo&apos; pattern as other English words.
        </p>
      </div>
    </div>
  )
} 