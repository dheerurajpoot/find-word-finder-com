import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Its or It&apos;s - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;its&quot; and &quot;it&apos;s&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ItsVsItsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Its or It&apos;s</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;its&quot; and &quot;it&apos;s&quot;? Learn the difference, meaning, and how to use each properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Its (when you mean &quot;it is&quot; or &quot;it has&quot;)</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Its&quot; is a possessive adjective, not a contraction for &quot;it is&quot; or &quot;it has&quot;. Using &quot;its&quot; when you mean &quot;it&apos;s&quot; is a common mistake.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: It&apos;s</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;It&apos;s&quot; is the contraction of &quot;it is&quot; or &quot;it has&quot;. Use &quot;it&apos;s&quot; when you mean &quot;it is&quot; or &quot;it has&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Its (possessive adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Belonging to or associated with a thing previously mentioned or easily identified.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The cat licked <strong>its</strong> paw.</li>
                  <li>• The company changed <strong>its</strong> policy.</li>
                  <li>• The tree lost <strong>its</strong> leaves.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">It&apos;s (contraction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Contraction of &quot;it is&quot; or &quot;it has&quot;.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>It&apos;s</strong> raining outside. (It is)</li>
                  <li>• <strong>It&apos;s</strong> been a long day. (It has)</li>
                  <li>• <strong>It&apos;s</strong> time to go. (It is)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Its:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Belonging to it</li>
                <li>• Of it</li>
                <li>• Associated with it</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">It&apos;s:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• It is</li>
                <li>• It has</li>
                <li>• (No direct synonyms; contraction only)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Its</strong> is possessive; <strong>it&apos;s</strong> is a contraction for &quot;it is&quot; or &quot;it has&quot;.</li>
            <li>• If you can replace the word with &quot;it is&quot; or &quot;it has&quot;, use &quot;it&apos;s&quot;.</li>
            <li>• Mixing these up is a very common mistake in English writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When should I use &quot;its&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;its&quot; to show possession, as in &quot;its color&quot; or &quot;its shape&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When should I use &quot;it&apos;s&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;it&apos;s&quot; when you mean &quot;it is&quot; or &quot;it has&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;its&quot; ever a contraction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;its&quot; is never a contraction. &quot;It&apos;s&quot; is the contraction for &quot;it is&quot; or &quot;it has&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How can I check if I&apos;m using the right word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Try replacing the word with &quot;it is&quot; or &quot;it has&quot;. If the sentence still makes sense, use &quot;it&apos;s&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Its</strong> shows possession, while <strong>it&apos;s</strong> is a contraction for &quot;it is&quot; or &quot;it has&quot;. If you can say &quot;it is&quot; or &quot;it has&quot;, use &quot;it&apos;s&quot;. Don&apos;t mix them up!</p>
      </div>
    </div>
  )
} 