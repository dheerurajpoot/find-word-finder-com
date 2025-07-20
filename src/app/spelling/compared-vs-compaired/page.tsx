import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compared or Compaired - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compared&quot; and &quot;compaired&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComparedVsCompairedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compared or Compaired</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;compared&quot; and &quot;compaired&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compaired</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compaired&quot; is a misspelling of &quot;compared&quot;. It is not a valid English word and should never be used in formal or informal writing.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compared</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compared&quot; is the correct spelling, which is the past tense and past participle of the verb &quot;compare&quot;.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Compared</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Compared</strong> (verb, past tense and past participle): To have examined two or more things to note similarities and differences.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This is the past tense form of &quot;compare&quot;, used when describing actions that have already been completed. 
            It can also function as an adjective in phrases like &quot;compared to&quot; or &quot;compared with&quot;.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Compared</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Contrasted</li>
                <li>• Analyzed</li>
                <li>• Evaluated</li>
                <li>• Examined</li>
                <li>• Assessed</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Reviewed</li>
                <li>• Studied</li>
                <li>• Inspected</li>
                <li>• Investigated</li>
                <li>• Scrutinized</li>
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
              <strong>Correct:</strong> &quot;I <span className="text-green-600 font-semibold">compared</span> the prices before making a decision.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Incorrect:</strong> &quot;I <span className="text-red-600 font-semibold">compaired</span> the prices before making a decision.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;When <span className="text-green-600 font-semibold">compared</span> to last year, sales have increased.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;The results were <span className="text-green-600 font-semibold">compared</span> with the control group.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compared&quot; is the past tense and past participle of &quot;compare&quot;</li>
          <li>• It ends with &quot;ed&quot;, not &quot;aired&quot;</li>
          <li>• Commonly used in phrases like &quot;compared to&quot; and &quot;compared with&quot;</li>
          <li>• Can function as both a verb and an adjective</li>
          <li>• The pronunciation is /kəmˈperd/ (kuhm-PAIRD)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compaired&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compaired&quot; is never correct. It is always a misspelling of &quot;compared&quot;. 
              There is no valid English word spelled as &quot;compaired&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between &quot;compared to&quot; and &quot;compared with&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compared to&quot; emphasizes similarities, while &quot;compared with&quot; emphasizes differences. 
              However, in modern usage, they are often used interchangeably.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;compared&quot; comes from &quot;compare&quot; + &quot;ed&quot;. 
              Since &quot;compare&quot; ends with &quot;e&quot;, you just add &quot;d&quot; to make it past tense. 
              It&apos;s not &quot;compair&quot; + &quot;ed&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can compared be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;compared&quot; can function as an adjective in phrases like &quot;compared results&quot; or &quot;compared analysis&quot;. 
              It describes something that has been subjected to comparison.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with compared?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;compared to&quot;, &quot;compared with&quot;, &quot;when compared&quot;, 
              &quot;compared favorably&quot;, and &quot;compared notes&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there a noun form of compared?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is &quot;comparison&quot;, not &quot;compared&quot;. 
              For example: &quot;The comparison showed significant differences&quot; (not &quot;The compared showed...&quot;).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compared</strong> is the correct spelling, while <strong>compaired</strong> is always incorrect. 
          &quot;Compared&quot; is the past tense and past participle of &quot;compare&quot;, ending with &quot;ed&quot; not &quot;aired&quot;. 
          Use it when describing completed comparisons or in phrases like &quot;compared to&quot; and &quot;compared with&quot;. 
          This spelling mistake is common but easily avoidable by remembering the base word &quot;compare&quot;.
        </p>
      </div>
    </div>
  )
} 