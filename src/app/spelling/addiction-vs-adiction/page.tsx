import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Addiction or Adiction - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;addiction&quot; and &quot;adiction&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AddictionVsAdictionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Addiction or Adiction
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Addiction or Adiction these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adiction</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adiction&quot; is a misspelling. The correct spelling has two &apos;d&apos;s in &quot;addiction.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Addiction</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Addiction&quot; is the correct spelling. It means a compulsive need for a substance or activity.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Addiction</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Addiction</strong> (noun): A compulsive need for and use of a habit-forming substance or activity; a strong inclination or dependency on something; a chronic brain disorder characterized by compulsive engagement in rewarding stimuli despite adverse consequences.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• His <strong>addiction</strong> to gambling cost him his savings.</li>
              <li>• She sought help for her <strong>addiction</strong> to prescription drugs.</li>
              <li>• Many people struggle with <strong>addiction</strong> to social media.</li>
              <li>• The treatment center specializes in <strong>addiction</strong> recovery.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Addiction</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Dependency</li>
                <li>• Compulsion</li>
                <li>• Obsession</li>
                <li>• Habit</li>
                <li>• Craving</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Fixation</li>
                <li>• Attachment</li>
                <li>• Bondage</li>
                <li>• Enslavement</li>
                <li>• Devotion</li>
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
            <li>• <strong>Addiction</strong> is spelled with two &apos;d&apos;s, not one.</li>
            <li>• It&apos;s commonly used in medical and psychological contexts.</li>
            <li>• Can refer to both substance and behavioral addictions.</li>
            <li>• The word implies a serious medical condition.</li>
            <li>• The word comes from the Latin &quot;addictio&quot; meaning &quot;a giving over.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adiction&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adiction&quot; is never correct. The proper spelling is always &quot;addiction&quot; with two &apos;d&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;addiction&quot; as having a double &apos;d&apos; - you need to be &quot;add-icted&quot; to remember it. The word comes from Latin &quot;addictio&quot; meaning &quot;a giving over.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between addiction and habit?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both involve repeated behavior, &quot;addiction&quot; implies a compulsive need that interferes with daily life, while &quot;habit&quot; is a more general term for regular behavior patterns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can addiction be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;addiction&quot; is only used as a noun. The verb form would be &quot;addict&quot; or &quot;become addicted.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is addiction always negative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;addiction&quot; is generally used in negative contexts as it refers to compulsive behavior that can be harmful to health, relationships, or well-being.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adiction&quot; likely occurs because people may not realize there are two &apos;d&apos;s in the word or may confuse it with similar words that have single consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;addiction&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: drug addiction, alcohol addiction, gambling addiction, internet addiction, addiction treatment, addiction recovery, and addiction counseling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;addiction&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;addiction&quot; is appropriate in formal writing, especially in medical, psychological, or academic contexts where addiction is being discussed.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Addiction</strong> is the correct spelling with two &apos;d&apos;s. It means a compulsive need for and use of a habit-forming substance or activity. The misspelling &quot;adiction&quot; with one &apos;d&apos; is never correct. Use this word when you want to describe a serious dependency or compulsive behavior that can be harmful to health or well-being.
        </p>
      </div>
    </div>
  )
} 