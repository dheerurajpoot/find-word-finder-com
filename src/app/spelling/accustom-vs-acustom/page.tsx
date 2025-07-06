import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accustom vs Acustom - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accustom&quot; and &quot;acustom&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccustomVsAcustomPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Accustom vs Acustom
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Accustom or Acustom these commonly confused spellings and when to use each one correctly.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acustom</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Acustom&quot; is a misspelling. The correct spelling has two &apos;c&apos;s in the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accustom</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Accustom&quot; is the correct spelling. It means to make familiar or used to something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Accustom</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Accustom</strong> (verb): To make someone or something familiar with or used to a particular situation, condition, or environment. It involves the process of becoming familiar with something through repeated exposure or practice.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• It took time to <strong>accustom</strong> myself to the new schedule.</li>
              <li>• The dog needs to <strong>accustom</strong> itself to the new home.</li>
              <li>• She gradually <strong>accustomed</strong> her eyes to the darkness.</li>
              <li>• The children must <strong>accustom</strong> themselves to the school routine.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Accustom</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Familiarize</li>
                <li>• Adapt</li>
                <li>• Adjust</li>
                <li>• Habituate</li>
                <li>• Condition</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Acclimate</li>
                <li>• Orient</li>
                <li>• Train</li>
                <li>• Prepare</li>
                <li>• Season</li>
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
            <li>• <strong>Accustom</strong> is spelled with two &apos;c&apos;s at the beginning, not one.</li>
            <li>• It&apos;s commonly used with reflexive pronouns (accustom oneself to).</li>
            <li>• Often used to describe the process of becoming familiar with new situations.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word comes from the Old French &quot;acostumer&quot; meaning &quot;to make familiar.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acustom&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;acustom&quot; is never correct. The proper spelling is always &quot;accustom&quot; with two &apos;c&apos;s at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;accustom&quot; as being related to &quot;custom&quot; - both have two &apos;c&apos;s. The word means to make familiar with customs or habits, so it follows the pattern of other words with double consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;accustom&quot; and &quot;adapt&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Accustom&quot; focuses on becoming familiar with something through repeated exposure, while &quot;adapt&quot; implies changing oneself to fit new circumstances. &quot;Accustom&quot; is more about familiarity, while &quot;adapt&quot; is about adjustment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;accustom&quot; be used with animals?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Accustom&quot; can be used with animals, objects, or people. For example: &quot;The horse needs to accustom itself to the new stable&quot; or &quot;The plant must accustom itself to the new climate.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accustom&quot; related to &quot;custom&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! Both words share the same root. &quot;Custom&quot; refers to a habitual practice or tradition, while &quot;accustom&quot; means to make someone familiar with such practices or new situations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;acustom&quot; likely occurs because people may not realize that the word has two &apos;c&apos;s at the beginning. They might think it follows a simpler pattern or confuse it with other words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accustom&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: accustom oneself to, accustom to the new environment, accustom to the routine, accustom to the climate, and accustom to the lifestyle. The word is often used in contexts involving change or new situations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;accustom&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;accustom&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts to describe the process of becoming familiar with new situations.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Accustom</strong> is the correct spelling with two &apos;c&apos;s at the beginning. It means to make familiar with or used to something. The misspelling &quot;acustom&quot; with one &apos;c&apos; is never correct. Use this word when you want to describe the process of becoming familiar with new situations, environments, or routines.
        </p>
      </div>
    </div>
  )
} 