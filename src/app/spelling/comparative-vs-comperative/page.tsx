import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Comparative or Comperative - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;comparative&quot; and &quot;comperative&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComparativeVsComperativePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Comparative or Comperative</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;comparative&quot; and &quot;comperative&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Comperative</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Comperative&quot; is a misspelling of &quot;comparative&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Comparative</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Comparative&quot; is the correct spelling, which is the adjective form of &quot;compare&quot;.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Comparative&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Comparative&quot;</strong> (adjective): Relating to or involving comparison; measured or judged by comparison.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This adjective describes something that involves or is based on comparison. 
            It is commonly used in academic writing, linguistics (for comparative forms of adjectives), 
            and when describing studies or analyses that compare different things.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Comparative&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Relative</li>
                <li>• Corresponding</li>
                <li>• Analogous</li>
                <li>• Equivalent</li>
                <li>• Parallel</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Similar</li>
                <li>• Related</li>
                <li>• Proportional</li>
                <li>• Matching</li>
                <li>• Correspondent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The <span className="text-green-600 font-semibold">&quot;comparative&quot;</span> study showed significant differences between the groups.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The <span className="text-red-600 font-semibold">comperative</span> study showed significant differences between the groups.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;This analysis provides a <span className="text-green-600 font-semibold">&quot;comparative&quot;</span> perspective on the issue.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;The <span className="text-green-600 font-semibold">&quot;comparative&quot;</span> advantage of this approach is clear.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Comparative&quot; is the adjective form of the verb &quot;compare&quot;</li>
          <li>• It ends with &quot;ative&quot;, not &quot;erative&quot;</li>
          <li>• The word comes from Latin &quot;comparativus&quot;</li>
          <li>• Commonly used in academic and linguistic contexts</li>
          <li>• The pronunciation is /kəmˈperətɪv/ (kuhm-PAIR-uh-tiv)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;comperative&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;comperative&quot; is never correct. It is always a misspelling of &quot;comparative&quot;. 
              There is no valid English word spelled as &quot;comperative&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;comparative&quot; as &quot;compare&quot; + &quot;ative&quot;. 
              Since &quot;compare&quot; ends with &quot;e&quot;, the adjective form uses &quot;ative&quot; not &quot;erative&quot;. 
              Remember: compare → comparative.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between comparative and comparison?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Comparative&quot; is an adjective that describes something involving comparison, while &quot;comparison&quot; is a noun 
              that refers to the act or process of comparing. For example: &quot;comparative analysis&quot; vs &quot;make a comparison&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can comparative be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;comparative&quot; can also be used as a noun in linguistics, referring to the comparative form of an adjective. 
              For example: &quot;Bigger is the comparative of big.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with comparative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;comparative analysis&quot;, &quot;comparative study&quot;, &quot;comparative advantage&quot;, 
              &quot;comparative literature&quot;, and &quot;comparative method&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adverb form of comparative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adverb form is &quot;comparatively&quot;. 
              For example: &quot;This method is comparatively more efficient&quot; or &quot;The results were comparatively better.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the plural form of comparative?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              When used as a noun, the plural form is &quot;comparatives&quot;. 
              Example: &quot;The study examined various comparatives between different languages.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;comperative&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that have &quot;er&quot; like &quot;cooperative&quot;, 
              &quot;operative&quot;, or &quot;generative&quot;. However, &quot;comparative&quot; follows a different pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does comparative advantage mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Comparative advantage&quot; is an economic concept where a country or entity can produce something at a lower opportunity cost 
              than others. It&apos;s a fundamental principle in international trade theory.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Comparative</strong> is the correct spelling, while <strong>comperative</strong> is always incorrect. 
          &quot;Comparative&quot; is the adjective form of &quot;compare&quot;, ending with &quot;ative&quot; not &quot;erative&quot;. 
          Use it when describing something that involves or is based on comparison. 
          This spelling mistake is common but easily avoidable by remembering the relationship to the base word &quot;compare&quot; 
          and avoiding confusion with words that have &quot;er&quot; patterns.
        </p>
      </div>
    </div>
  )
} 