import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Your or You&apos;re - Which is Correct? | Word Finder',
  description: 'Learn the difference between &quot;your&quot; and &quot;you&apos;re&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function YourVsYourePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Your or You&apos;re</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;your&quot; and &quot;you&apos;re&quot;? Learn the difference, meaning, and how to use each properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Your (when you mean &quot;you are&quot;)</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Your&quot; is a possessive adjective, not a contraction for &quot;you are&quot;. Using &quot;your&quot; when you mean &quot;you&apos;re&quot; is a common mistake.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: You&apos;re</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;You&apos;re&quot; is the contraction of &quot;you are&quot;. Use &quot;you&apos;re&quot; when you mean &quot;you are&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Your (possessive adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Belonging to or associated with the person or people that the speaker is addressing.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Is this <strong>your</strong> book?</li>
                  <li>• I like <strong>your</strong> idea.</li>
                  <li>• Please bring <strong>your</strong> homework.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">You&apos;re (contraction):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Contraction of &quot;you are&quot;.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>You&apos;re</strong> going to love this.</li>
                  <li>• <strong>You&apos;re</strong> my best friend.</li>
                  <li>• <strong>You&apos;re</strong> late for the meeting.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Your:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Belonging to you</li>
                <li>• Of yours</li>
                <li>• Associated with you</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">You&apos;re:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• You are</li>
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
            <li>• <strong>Your</strong> is possessive; <strong>you&apos;re</strong> is a contraction for &quot;you are&quot;.</li>
            <li>• If you can replace the word with &quot;you are&quot;, use &quot;you&apos;re&quot;.</li>
            <li>• Mixing these up is a very common mistake in English writing.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When should I use &quot;your&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;your&quot; to show possession, as in &quot;your car&quot; or &quot;your idea&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: When should I use &quot;you&apos;re&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use &quot;you&apos;re&quot; when you mean &quot;you are&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;your&quot; ever a contraction?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;your&quot; is never a contraction. &quot;You&apos;re&quot; is the contraction for &quot;you are&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How can I check if I&apos;m using the right word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Try replacing the word with &quot;you are&quot;. If the sentence still makes sense, use &quot;you&apos;re&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Your</strong> shows possession, while <strong>you&apos;re</strong> is a contraction for &quot;you are&quot;. If you can say &quot;you are&quot;, use &quot;you&apos;re&quot;. Don&apos;t mix them up!</p>
      </div>
    </div>
  )
} 