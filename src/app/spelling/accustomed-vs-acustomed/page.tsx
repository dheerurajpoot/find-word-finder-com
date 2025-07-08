import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Accustomed or Acustomed - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;accustomed&quot; and &quot;acustomed&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AccustomedVsAcustomedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Accustomed or Acustomed
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Accustomed or Acustomed these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Acustomed</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Acustomed&quot; is a misspelling. The correct spelling has two &apos;c&apos;s in the beginning.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Accustomed</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Accustomed&quot; is the correct spelling. It means familiar with or used to something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Accustomed</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Accustomed</strong> (adjective): Familiar with or used to something through repeated exposure or experience. It describes a state of being comfortable or familiar with a particular situation, condition, or environment.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• I am <strong>accustomed</strong> to waking up early.</li>
              <li>• She is <strong>accustomed</strong> to the cold weather.</li>
              <li>• The workers are <strong>accustomed</strong> to long hours.</li>
              <li>• He became <strong>accustomed</strong> to the new routine quickly.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Accustomed</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Familiar</li>
                <li>• Used to</li>
                <li>• Habituated</li>
                <li>• Adapted</li>
                <li>• Conditioned</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Comfortable</li>
                <li>• Seasoned</li>
                <li>• Experienced</li>
                <li>• Oriented</li>
                <li>• Adjusted</li>
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
            <li>• <strong>Accustomed</strong> is spelled with two &apos;c&apos;s at the beginning, not one.</li>
            <li>• It&apos;s commonly used with &quot;to&quot; (accustomed to something).</li>
            <li>• Often used to describe a state of familiarity or comfort.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word is the past participle form of &quot;accustom.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;acustomed&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;acustomed&quot; is never correct. The proper spelling is always &quot;accustomed&quot; with two &apos;c&apos;s at the beginning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;accustomed&quot; as being related to &quot;accustom&quot; - both have two &apos;c&apos;s. The word means familiar with customs or habits, so it follows the pattern of other words with double consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;accustomed&quot; and &quot;used to&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both phrases mean the same thing, but &quot;accustomed to&quot; is more formal. &quot;Used to&quot; is more common in everyday speech, while &quot;accustomed to&quot; is preferred in formal writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;accustomed&quot; be used with people?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! You can say someone is accustomed to something. For example: &quot;She is accustomed to working late hours&quot; or &quot;He is accustomed to the noise.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;accustomed&quot; related to &quot;accustom&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Accustomed&quot; is the past participle and adjective form of the verb &quot;accustom.&quot; Both words share the same root and correct spelling pattern with two &apos;c&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;acustomed&quot; likely occurs because people may not realize that the word has two &apos;c&apos;s at the beginning. They might think it follows a simpler pattern or confuse it with other words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;accustomed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: accustomed to, become accustomed to, get accustomed to, grow accustomed to, and feel accustomed to. The word is often used in contexts involving familiarity or comfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;accustomed&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;accustomed&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts to describe familiarity or comfort with situations.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Accustomed</strong> is the correct spelling with two &apos;c&apos;s at the beginning. It means familiar with or used to something through repeated exposure or experience. The misspelling &quot;acustomed&quot; with one &apos;c&apos; is never correct. Use this word when you want to describe a state of comfort or familiarity with particular situations, conditions, or environments.
        </p>
      </div>
    </div>
  )
} 