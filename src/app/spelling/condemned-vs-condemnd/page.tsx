import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Condemned or Condemnd - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;condemned&quot; and &quot;condemnd&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CondemnedVsCondemndPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Condemned or Condemnd</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;condemned&quot; or &quot;condemnd&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Condemnd</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Condemnd&quot; is a common misspelling of &quot;condemned&quot;. Always use &quot;condemned&quot; as the past tense of &quot;condemn&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Condemned</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Condemned&quot; is the past tense of &quot;condemn&quot;, meaning to have expressed strong disapproval or sentenced someone to a punishment.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Condemned&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Condemned&quot;</strong> (verb, past tense): The past tense of &quot;condemn&quot;; to have expressed strong disapproval or sentenced someone to a punishment.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in law, ethics, and everyday conversation to describe strong criticism or legal sentencing in the past.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Condemned&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Denounced</li>
                <li>• Criticized</li>
                <li>• Censured</li>
                <li>• Blamed</li>
                <li>• Sentenced</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Convicted</li>
                <li>• Doomed</li>
                <li>• Reproached</li>
                <li>• Rebuked</li>
                <li>• Disapproved</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The building was <span className="text-green-600 font-semibold">condemned</span> as unsafe.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The building was <span className="text-red-600 font-semibold">condemnd</span> as unsafe.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;He was condemned for his actions.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Condemned&quot; is spelled with &quot;mn&quot; in the middle and ends with &quot;ed&quot;.</li>
          <li>• The pronunciation is /kənˈdɛmd/ (kuhn-DEMD).</li>
          <li>• Commonly used in law, ethics, and conversation.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;condemnd&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;condemnd&quot; is never correct. The only correct form is &quot;condemned&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;condemned&quot; has &quot;mn&quot; in the middle and ends with &quot;ed&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the base verb of &quot;condemned&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The base verb is &quot;condemn&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;condemned&quot; be used for buildings?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;condemned&quot; is often used to describe buildings declared unsafe.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;condemned&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;condemned building&quot;, &quot;condemned to death&quot;, &quot;condemned for actions&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Condemned</strong> is the correct spelling, while <strong>condemnd</strong> is always incorrect. Use &quot;condemned&quot; as the past tense of &quot;condemn&quot;.
        </p>
      </div>
    </div>
  )
} 