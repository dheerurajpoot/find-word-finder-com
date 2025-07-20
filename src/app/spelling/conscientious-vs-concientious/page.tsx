import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Conscientious or Concientious - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;conscientious&quot; and &quot;concientious&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ConscientiousVsConcientiousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Conscientious or Concientious</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;conscientious&quot; or &quot;concientious&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Concientious</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Concientious&quot; is a common misspelling of &quot;conscientious&quot;. Always use &quot;conscientious&quot; when referring to someone wishing to do what is right, especially to do one&apos;s work or duty well and thoroughly.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Conscientious</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Conscientious&quot; is an adjective meaning wishing to do what is right, especially to do one&apos;s work or duty well and thoroughly.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Conscientious&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Conscientious&quot;</strong> (adjective): Wishing to do what is right, especially to do one&apos;s work or duty well and thoroughly.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used to describe people who are diligent, careful, and governed by a strong sense of right and wrong.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Conscientious&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Diligent</li>
                <li>• Meticulous</li>
                <li>• Thorough</li>
                <li>• Careful</li>
                <li>• Attentive</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Responsible</li>
                <li>• Hardworking</li>
                <li>• Scrupulous</li>
                <li>• Principled</li>
                <li>• Reliable</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She is a <span className="text-green-600 font-semibold">conscientious</span> student who always completes her assignments.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She is a <span className="text-red-600 font-semibold">concientious</span> student who always completes her assignments.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He is known for his conscientious attention to detail.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Conscientious&quot; is spelled with &quot;scien&quot; in the middle.</li>
          <li>• The pronunciation is /ˌkɒnʃiˈɛnʃəs/ (kon-shee-EN-shus).</li>
          <li>• Commonly used to describe diligent and careful people.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;concientious&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;concientious&quot; is never correct. The only correct form is &quot;conscientious&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;conscientious&quot; has &quot;scien&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the noun form of &quot;conscientious&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The noun form is &quot;conscientiousness&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;conscientious&quot; be used in the workplace?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;conscientious&quot; is often used to describe employees who are diligent and responsible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;conscientious&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;conscientious objector&quot;, &quot;conscientious effort&quot;, &quot;conscientious worker&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Conscientious</strong> is the correct spelling, while <strong>concientious</strong> is always incorrect. Use &quot;conscientious&quot; when referring to someone wishing to do what is right, especially to do one&apos;s work or duty well and thoroughly.
        </p>
      </div>
    </div>
  )
} 