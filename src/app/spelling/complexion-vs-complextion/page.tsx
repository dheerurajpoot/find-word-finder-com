import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Complexion or Complextion - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;complexion&quot; and &quot;complextion&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComplexionVsComplextionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Complexion or Complextion</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;complexion&quot; or &quot;complextion&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Complextion</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Complextion&quot; is a common misspelling of &quot;complexion&quot;. Always use &quot;complexion&quot; when referring to the natural color, texture, and appearance of a person&apos;s skin.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Complexion</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Complexion&quot; is a noun meaning the natural color, texture, and appearance of a person&apos;s skin, especially of the face.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Complexion&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Complexion&quot;</strong> (noun): The natural color, texture, and appearance of the skin, especially of the face.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used to describe the look and health of a person&apos;s skin, often in reference to beauty or health.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Complexion&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Skin tone</li>
                <li>• Skin color</li>
                <li>• Hue</li>
                <li>• Pigmentation</li>
                <li>• Coloring</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Appearance</li>
                <li>• Texture</li>
                <li>• Glow</li>
                <li>• Radiance</li>
                <li>• Countenance</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;She has a fair <span className="text-green-600 font-semibold">complexion</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;She has a fair <span className="text-red-600 font-semibold">complextion</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;A healthy diet can improve your complexion.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Complexion&quot; is spelled with &quot;ion&quot; at the end, not &quot;tion&quot;.</li>
          <li>• The pronunciation is /kəmˈplɛkʃən/ (kuhm-PLEK-shun).</li>
          <li>• Commonly used in beauty, health, and medical contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;complextion&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;complextion&quot; is never correct. The only correct form is &quot;complexion&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;complexion&quot; ends with &quot;ion&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the adjective form of &quot;complexion&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The adjective form is &quot;complexioned&quot; (e.g., fair-complexioned).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;complexion&quot; refer to things other than skin?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, it can also refer to the general character or aspect of something (e.g., &quot;the political complexion of the country&quot;).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;complexion&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;clear complexion&quot;, &quot;healthy complexion&quot;, &quot;dark complexion&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Complexion</strong> is the correct spelling, while <strong>complextion</strong> is always incorrect. Use &quot;complexion&quot; when referring to the natural color, texture, and appearance of a person&apos;s skin.
        </p>
      </div>
    </div>
  )
} 