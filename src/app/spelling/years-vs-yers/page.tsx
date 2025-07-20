import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Years or Yers - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;years&quot; and &quot;yers&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function YearsVsYersPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Years or Yers</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;years&quot; or &quot;yers&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Yers</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Yers&quot; is a common misspelling of &quot;years&quot;. Always use &quot;years&quot; when referring to more than one year.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Years</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Years&quot; is the plural of &quot;year&quot;, meaning more than one period of 12 months.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Years</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Years&quot;</strong> (noun, plural): More than one period of 12 months, used to measure time.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in calendars, history, and everyday conversation to describe time spans.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Years</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Periods</li>
                <li>• Spans</li>
                <li>• Ages</li>
                <li>• Decades</li>
                <li>• Eras</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Times</li>
                <li>• Intervals</li>
                <li>• Epochs</li>
                <li>• Generations</li>
                <li>• Lifetimes</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;It took several <span className="text-green-600 font-semibold">years</span> to complete the project.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;It took several <span className="text-red-600 font-semibold">yers</span> to complete the project.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She lived in Paris for five years.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Years&quot; is spelled with &quot;ea&quot; in the middle and ends with &quot;s&quot;.</li>
          <li>• The pronunciation is /jɪərz/ (YEERZ).</li>
          <li>• Commonly used to describe time spans and ages.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;yers&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;yers&quot; is never correct. The only correct form is &quot;years&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;years&quot; has &quot;ea&quot; in the middle and ends with &quot;s&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the singular form of &quot;years&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The singular form is &quot;year&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;years&quot; refer to age?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;years&quot; is commonly used to refer to age (e.g., &quot;10 years old&quot;).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;years&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;in recent years&quot;, &quot;over the years&quot;, &quot;for years to come&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Years</strong> is the correct spelling, while <strong>yers</strong> is always incorrect. Use &quot;years&quot; when referring to more than one year.
        </p>
      </div>
    </div>
  )
} 