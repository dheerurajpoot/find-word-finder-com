import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bona Fide or Bonafide - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;bona fide&quot; and &quot;bonafide&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BonaFideVsBonafidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Bona Fide or Bonafide
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Bona Fide&quot; or &quot;Bonafide&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bonafide</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Bonafide&quot; is a misspelling. The correct form is two separate words.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Bona Fide</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Bona fide&quot; is the correct spelling. It&apos;s a Latin phrase meaning genuine or authentic.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Bona Fide</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Bona fide</strong> (adjective): Genuine, authentic, or made in good faith; real or legitimate; sincere or honest in intention.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• She is a <strong>bona fide</strong> expert in her field.</li>
              <li>• The company made a <strong>bona fide</strong> offer to purchase the property.</li>
              <li>• This is a <strong>bona fide</strong> antique from the 18th century.</li>
              <li>• He has a <strong>bona fide</strong> reason for being late.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Bona Fide</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Genuine</li>
                <li>• Authentic</li>
                <li>• Legitimate</li>
                <li>• Real</li>
                <li>• Sincere</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Valid</li>
                <li>• Credible</li>
                <li>• Trustworthy</li>
                <li>• Reliable</li>
                <li>• Honest</li>
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
            <li>• <strong>Bona fide</strong> is always written as two separate words.</li>
            <li>• It&apos;s a Latin phrase meaning &quot;in good faith&quot; or &quot;genuine.&quot;</li>
            <li>• Commonly used in legal and formal contexts.</li>
            <li>• Can be used as both an adjective and an adverb.</li>
            <li>• The pronunciation is &quot;BOH-nuh FYDE&quot; or &quot;BOH-nuh FEE-day.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bonafide&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;bonafide&quot; as one word is never correct. The proper spelling is always &quot;bona fide&quot; as two separate words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does bona fide mean literally?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bona fide&quot; comes from Latin where &quot;bona&quot; means &quot;good&quot; and &quot;fide&quot; means &quot;faith.&quot; So it literally means &quot;in good faith&quot; or &quot;with good faith.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce bona fide?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The most common pronunciation is &quot;BOH-nuh FYDE&quot; (rhyming with &quot;ride&quot;). Some people also say &quot;BOH-nuh FEE-day&quot; (with the Latin pronunciation of &quot;fide&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bona fide be used in legal documents?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Bona fide&quot; is commonly used in legal contexts to indicate something is genuine, legitimate, or made in good faith. It&apos;s often used in contracts and legal proceedings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between bona fide and genuine?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both mean &quot;real&quot; or &quot;authentic,&quot; &quot;bona fide&quot; often carries a legal or formal connotation, suggesting something is legitimate and made in good faith. &quot;Genuine&quot; is more general and can be used in everyday contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this phrase?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;bonafide&quot; because they treat it as a single compound word, similar to other English words that combine multiple words. However, since it&apos;s a Latin phrase, it maintains its original two-word form.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can bona fide be hyphenated?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While some style guides allow &quot;bona-fide&quot; with a hyphen, the most widely accepted form is &quot;bona fide&quot; as two separate words without a hyphen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is bona fide formal or informal language?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Bona fide&quot; is considered formal language. It&apos;s commonly used in legal, academic, and professional contexts. In casual conversation, you might use simpler alternatives like &quot;genuine&quot; or &quot;real.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Bona fide</strong> is the correct spelling as two separate words. It means genuine, authentic, or made in good faith. The misspelling &quot;bonafide&quot; as one word is never correct. This Latin phrase is commonly used in legal and formal contexts to indicate legitimacy and authenticity.
        </p>
      </div>
    </div>
  )
} 