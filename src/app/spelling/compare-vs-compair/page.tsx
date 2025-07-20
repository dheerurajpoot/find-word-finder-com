import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compare or Compair - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compare&quot; and &quot;compair&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompareVsCompairPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compare or Compair</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;compare&quot; and &quot;compair&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compair</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compair&quot; is a misspelling of &quot;compare&quot;. It is not a valid English word and should never be used in formal or informal writing.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compare</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compare&quot; is the correct spelling meaning to examine the similarities and differences between two or more things.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Compare</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Compare</strong> (verb): To examine two or more things to note similarities and differences.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The word comes from the Latin &quot;comparare&quot; meaning &quot;to pair together, match&quot;. 
            It is used when analyzing, contrasting, or evaluating different items, ideas, or situations.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Compare</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Contrast</li>
                <li>• Analyze</li>
                <li>• Evaluate</li>
                <li>• Examine</li>
                <li>• Assess</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Review</li>
                <li>• Study</li>
                <li>• Inspect</li>
                <li>• Investigate</li>
                <li>• Scrutinize</li>
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
              <strong>Correct:</strong> &quot;Let&apos;s <span className="text-green-600 font-semibold">compare</span> the prices of different brands.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Incorrect:</strong> &quot;Let&apos;s <span className="text-red-600 font-semibold">compair</span> the prices of different brands.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;It&apos;s difficult to <span className="text-green-600 font-semibold">compare</span> apples and oranges.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;She will <span className="text-green-600 font-semibold">compare</span> the results of both experiments.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compare&quot; is always spelled with an &quot;e&quot; at the end, not &quot;air&quot;</li>
          <li>• The word is commonly used in academic, business, and everyday contexts</li>
          <li>• Related forms include: comparison, comparable, comparative</li>
          <li>• Remember: Compare = examine similarities and differences</li>
          <li>• The pronunciation is /kəmˈper/ (kuhm-PAIR)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compair&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compair&quot; is never correct. It is always a misspelling of &quot;compare&quot;. 
              There is no valid English word spelled as &quot;compair&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between compare and contrast?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compare&quot; focuses on both similarities and differences, while &quot;contrast&quot; specifically emphasizes differences. 
              When you compare, you examine both what&apos;s alike and what&apos;s different.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;compare&quot; as &quot;com-pare&quot; where &quot;pare&quot; means to trim or cut. 
              You&apos;re &quot;paring down&quot; to see what&apos;s similar and different. Also, remember it ends with &quot;e&quot;, not &quot;air&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can compare be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compare&quot; is primarily a verb. The noun form is &quot;comparison&quot;. 
              For example: &quot;Let&apos;s make a comparison&quot; (not &quot;Let&apos;s make a compare&quot;).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with compare?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;compare notes&quot;, &quot;compare favorably&quot;, &quot;beyond compare&quot;, 
              &quot;compare and contrast&quot;, and &quot;compare apples to oranges&quot;.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compare</strong> is the correct spelling, while <strong>compair</strong> is always incorrect. 
          Use &quot;compare&quot; when examining similarities and differences between things. 
          Remember that it ends with &quot;e&quot; and is related to the word &quot;comparison&quot;. 
          This spelling mistake is common but easily avoidable with proper attention to the word&apos;s structure.
        </p>
      </div>
    </div>
  )
} 