import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Buffoon or Bufoon - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;buffoon&quot; and &quot;bufoon&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BuffoonVsBufoonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Buffoon or Bufoon
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Buffoon&quot; or &quot;Bufoon&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bufoon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Bufoon&quot; is a misspelling. The correct spelling has two &apos;f&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Buffoon</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Buffoon&quot; is the correct spelling. It&apos;s a person who behaves foolishly.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Buffoon</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Buffoon</strong> (noun): A person who behaves in a foolish or ridiculous way; a clown or jester; someone who makes a fool of themselves or others for entertainment.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• He acted like a <strong>buffoon</strong> at the party, making everyone laugh.</li>
              <li>• The politician was called a <strong>buffoon</strong> for his ridiculous statements.</li>
              <li>• The court <strong>buffoon</strong> entertained the king with jokes and tricks.</li>
              <li>• Stop being such a <strong>buffoon</strong> and take this seriously.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Buffoon</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Clown</li>
                <li>• Fool</li>
                <li>• Jester</li>
                <li>• Idiot</li>
                <li>• Simpleton</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Comedian</li>
                <li>• Joker</li>
                <li>• Nitwit</li>
                <li>• Dolt</li>
                <li>• Blockhead</li>
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
            <li>• <strong>Buffoon</strong> is spelled with two &apos;f&apos;s, not one.</li>
            <li>• The pronunciation is &quot;buh-FOON&quot; (rhyming with &quot;balloon&quot;).</li>
            <li>• It&apos;s a noun that refers to a foolish or ridiculous person.</li>
            <li>• Can be used as an insult or in a more playful context.</li>
            <li>• The word comes from Italian &quot;buffone&quot; meaning &quot;jester&quot; or &quot;clown.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bufoon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bufoon&quot; is never correct. The proper spelling is always &quot;buffoon&quot; with two &apos;f&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;buffoon&quot; as having the same double &apos;f&apos; pattern as other words like &quot;coffee,&quot; &quot;office,&quot; and &quot;stuff.&quot; The double &apos;f&apos; is the key to the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a buffoon and a clown?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both can be entertaining, a &quot;buffoon&quot; typically refers to someone who behaves foolishly or ridiculously, often unintentionally, while a &quot;clown&quot; is a professional entertainer who performs comedy and tricks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce buffoon?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The pronunciation is &quot;buh-FOON&quot; (rhyming with &quot;balloon&quot;). The first syllable is unstressed, and the second syllable is stressed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can buffoon be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While &quot;buffoon&quot; is a legitimate English word, it&apos;s often considered informal or even insulting. In formal writing, you might use alternatives like &quot;fool&quot; or &quot;simpleton&quot; depending on the context.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;buffoon&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: court buffoon, political buffoon, acting like a buffoon, and making a buffoon of oneself. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;bufoon&quot; because they might be thinking of words with single &apos;f&apos; or confusing it with other words. The double &apos;f&apos; can be easy to forget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is buffoon related to any other words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Buffoon&quot; is related to words like &quot;buffoonery&quot; (foolish behavior), &quot;buffoonish&quot; (behaving like a buffoon), and &quot;buffoonery&quot; (the practice of being a buffoon). All share the same root meaning.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Buffoon</strong> is the correct spelling with two &apos;f&apos;s. It&apos;s a person who behaves in a foolish or ridiculous way. The misspelling &quot;bufoon&quot; is never correct. This word is commonly used in informal contexts and follows the same double &apos;f&apos; pattern as other English words.
        </p>
      </div>
    </div>
  )
} 