import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addicted or Addikted - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addicted&quot; and &quot;addikted&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AddictedVsAddiktedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Addicted or Addikted
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Addicted or Addikted these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Addikted</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Addikted&quot; is a misspelling. The correct spelling has a &apos;c&apos; before the &apos;t&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addicted</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Addicted&quot; is the correct spelling. It means physically or mentally dependent on something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Addicted</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Addicted</strong> (adjective): Physically or mentally dependent on a particular substance, activity, or behavior; unable to stop using or doing something despite harmful consequences.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• He became <strong>addicted</strong> to video games.</li>
              <li>• She was <strong>addicted</strong> to social media.</li>
              <li>• Many people are <strong>addicted</strong> to caffeine.</li>
              <li>• The patient was <strong>addicted</strong> to prescription painkillers.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Addicted</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Dependent</li>
                <li>• Hooked</li>
                <li>• Obsessed</li>
                <li>• Compulsive</li>
                <li>• Habituated</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Enslaved</li>
                <li>• Captivated</li>
                <li>• Devoted</li>
                <li>• Attached</li>
                <li>• Enthralled</li>
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
            <li>• <strong>Addicted</strong> is spelled with a &apos;c&apos; before the &apos;t&apos;, not a &apos;k&apos;.</li>
            <li>• It&apos;s commonly used with &quot;to&quot; (addicted to something).</li>
            <li>• Can be used for both serious and lighthearted contexts.</li>
            <li>• Often used in medical, psychological, and everyday contexts.</li>
            <li>• The word comes from the Latin &quot;addictus&quot; meaning &quot;assigned.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;addikted&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addikted&quot; is never correct. The proper spelling is always &quot;addicted&quot; with a &apos;c&apos; before the &apos;t&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;addicted&quot; as being related to &quot;addiction&quot; - both have a &apos;c&apos; before the &apos;t&apos;. The word means being dependent on something, so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;addicted&quot; and &quot;obsessed&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Addicted&quot; implies a physical or psychological dependence that is difficult to break, while &quot;obsessed&quot; suggests an intense preoccupation or fixation. Addiction often involves withdrawal symptoms, while obsession is more about mental focus.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;addicted&quot; be used in lighthearted contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Addicted&quot; can be used informally to describe strong preferences or habits. For example: &quot;I&apos;m addicted to this TV show&quot; or &quot;She&apos;s addicted to chocolate.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;addicted&quot; related to &quot;addiction&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Addicted&quot; is the adjective form, while &quot;addiction&quot; is the noun form. Both words share the same root and correct spelling pattern with a &apos;c&apos; before the &apos;t&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;addikted&quot; likely occurs because people may think it follows the pattern of other words with &apos;k&apos; sounds. They might confuse it with words that use &apos;k&apos; instead of &apos;c&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addicted&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: addicted to, become addicted, get addicted, addicted to drugs, addicted to technology, and addicted to social media. The word is often used in medical, psychological, and everyday contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;addicted&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;addicted&quot; is appropriate in formal writing, especially in medical, psychological, or academic contexts. It&apos;s a standard English word that can be used in professional and scientific writing.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Addicted</strong> is the correct spelling with a &apos;c&apos; before the &apos;t&apos;. It means physically or mentally dependent on something. The misspelling &quot;addikted&quot; with a &apos;k&apos; is never correct. Use this word when you want to describe someone who is dependent on a substance, activity, or behavior.
        </p>
      </div>
    </div>
  )
} 