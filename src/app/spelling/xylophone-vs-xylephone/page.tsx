import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Xylophone or Xylephone - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;xylophone&quot; and &quot;xylephone&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function XylophoneVsXylephonePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Xylophone or Xylephone</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;xylophone&quot; or &quot;xylephone&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Xylephone</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Xylephone&quot; is a common misspelling of &quot;xylophone&quot;. Always use &quot;xylophone&quot; when referring to the musical instrument with wooden bars.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Xylophone</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Xylophone&quot; is a noun meaning a musical instrument with wooden bars that are struck with mallets to produce sound.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Xylophone&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Xylophone&quot;</strong> (noun): A musical instrument with wooden bars that are struck with mallets to produce sound.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in music, education, and orchestras to describe a percussion instrument.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Xylophone&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Percussion instrument</li>
                <li>• Marimba</li>
                <li>• Vibraphone</li>
                <li>• Glockenspiel</li>
                <li>• Metallophone</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Balafon</li>
                <li>• Lithophone</li>
                <li>• Tubular bells</li>
                <li>• Chimes</li>
                <li>• Mallet instrument</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The child played the <span className="text-green-600 font-semibold">xylophone</span> in music class.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The child played the <span className="text-red-600 font-semibold">xylephone</span> in music class.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;A xylophone is a percussion instrument.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Xylophone&quot; is spelled with &quot;xylo&quot; at the beginning and &quot;phone&quot; at the end.</li>
          <li>• The pronunciation is /ˈzaɪləˌfoʊn/ (ZY-luh-fohn).</li>
          <li>• Commonly used in music education and orchestras.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;xylephone&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;xylephone&quot; is never correct. The only correct form is &quot;xylophone&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;xylophone&quot; starts with &quot;xylo&quot; and ends with &quot;phone&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the plural of &quot;xylophone&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural is &quot;xylophones&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is a xylophone the same as a marimba?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, a marimba is similar but has a lower range and different construction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;xylophone&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;play the xylophone&quot;, &quot;xylophone music&quot;, &quot;xylophone bars&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Xylophone</strong> is the correct spelling, while <strong>xylephone</strong> is always incorrect. Use &quot;xylophone&quot; when referring to the musical instrument with wooden bars.
        </p>
      </div>
    </div>
  )
} 