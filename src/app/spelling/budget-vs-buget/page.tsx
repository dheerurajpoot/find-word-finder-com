import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Budget or Buget - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;budget&quot; and &quot;buget&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BudgetVsBugetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Budget or Buget
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Budget&quot; or &quot;Buget&quot; these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buget</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Buget&quot; is a misspelling. The correct spelling includes the letter &apos;d&apos;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Budget</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Budget&quot; is the correct spelling. It&apos;s a financial plan for income and expenses.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Budget</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Budget</strong> (noun): A financial plan that estimates income and expenses for a specific period; an amount of money available for spending; a plan for managing resources.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The company created a monthly <strong>budget</strong> for all departments.</li>
              <li>• She stuck to her <strong>budget</strong> while shopping for groceries.</li>
              <li>• The government announced its annual <strong>budget</strong> yesterday.</li>
              <li>• We need to <strong>budget</strong> our time more effectively for this project.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Budget</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Financial plan</li>
                <li>• Spending plan</li>
                <li>• Allocation</li>
                <li>• Estimate</li>
                <li>• Forecast</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Expense plan</li>
                <li>• Financial management</li>
                <li>• Cost control</li>
                <li>• Resource planning</li>
                <li>• Fiscal plan</li>
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
            <li>• <strong>Budget</strong> is spelled with a &apos;d&apos; before the &apos;g&apos;.</li>
            <li>• The pronunciation is &quot;BUH-jet&quot; (rhyming with &quot;fudge it&quot;).</li>
            <li>• It&apos;s both a noun (financial plan) and a verb (to plan finances).</li>
            <li>• Commonly used in business, government, and personal finance.</li>
            <li>• The word comes from Old French &quot;bougette&quot; meaning &quot;small bag.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buget&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;buget&quot; is never correct. The proper spelling is always &quot;budget&quot; with a &apos;d&apos; before the &apos;g&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;budget&quot; as having the same &apos;dg&apos; pattern as other words like &quot;judge,&quot; &quot;bridge,&quot; and &quot;fridge.&quot; The &apos;d&apos; before &apos;g&apos; is the key to the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between a budget and a forecast?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: A &quot;budget&quot; is a financial plan that sets limits and goals for spending, while a &quot;forecast&quot; is a prediction of future financial performance. Budgets are more prescriptive, while forecasts are more predictive.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you pronounce budget?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The pronunciation is &quot;BUH-jet&quot; (rhyming with &quot;fudge it&quot;). The first syllable is stressed, and the &apos;d&apos; is silent in the &apos;dg&apos; combination.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can budget be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Budget&quot; is appropriate in all types of writing, including formal contexts. It&apos;s the standard English word for financial planning and is used in academic, business, and professional writing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;budget&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: budget cuts, budget deficit, budget surplus, budget allocation, budget planning, and budget constraints. These are all standard English expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: People often misspell it as &quot;buget&quot; because they might be thinking of the pronunciation or confusing it with other words. The silent &apos;d&apos; in the &apos;dg&apos; combination can be easy to forget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is budget related to any other words?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Budget&quot; is related to words like &quot;budgetary&quot; (relating to budgets), &quot;budgeting&quot; (the process of creating budgets), and &quot;budget-conscious&quot; (careful about spending). All share the same root meaning.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Budget</strong> is the correct spelling with a &apos;d&apos; before the &apos;g&apos;. It&apos;s a financial plan that estimates income and expenses. The misspelling &quot;buget&quot; is never correct. This word is commonly used in business, government, and personal finance contexts and follows the same &apos;dg&apos; pattern as other English words.
        </p>
      </div>
    </div>
  )
} 