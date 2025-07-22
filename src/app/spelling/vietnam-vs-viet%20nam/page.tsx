import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vietnam or Viet Nam - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "Vietnam" and "Viet Nam". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VietnamVsVietNamPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vietnam or Viet Nam</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Vietnam&quot; and &quot;Viet Nam&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-yellow-500 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">ℹ️</span>
              <h3 className="text-2xl font-bold text-yellow-800">Alternate: Viet Nam</h3>
            </div>
            <p className="text-lg md:text-xl text-yellow-700">&quot;Viet Nam&quot; is an alternate, but less common, spelling. It is used in some official and historical contexts, but &quot;Vietnam&quot; is standard in modern English.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Standard: Vietnam</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vietnam&quot; is the standard and most widely accepted spelling in English for the Southeast Asian country.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vietnam (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A country in Southeast Asia, officially known as the Socialist Republic of Vietnam.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I traveled to <strong>Vietnam</strong> last year.</li>
                  <li>• <strong>Vietnam</strong> is known for its beautiful landscapes and rich history.</li>
                  <li>• The capital of <strong>Vietnam</strong> is Hanoi.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-900">Viet Nam (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An alternate spelling for &quot;Vietnam&quot; used in some official documents and historical references.</p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-yellow-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-yellow-800 space-y-2">
                  <li>• The United Nations sometimes uses <strong>Viet Nam</strong> in official documents.</li>
                  <li>• &quot;Viet Nam&quot; is seen in older texts and treaties.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vietnam:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Socialist Republic of Vietnam</li>
                <li>• Southeast Asian country</li>
                <li>• Indochina (historical region)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-yellow-900">Viet Nam:</h4>
              <ul className="text-lg md:text-xl text-yellow-800 space-y-1">
                <li>• (Alternate spelling; same as above)</li>
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
            <li>• <strong>Vietnam</strong> is the standard spelling in modern English.</li>
            <li>• <strong>Viet Nam</strong> is used in some official and historical contexts.</li>
            <li>• Both refer to the same country.</li>
            <li>• The name comes from Vietnamese &quot;Việt Nam&quot; meaning &quot;Southern Viet&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Viet Nam&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but it is less common. &quot;Vietnam&quot; is standard in English.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why are there two spellings?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Viet Nam&quot; is closer to the Vietnamese language, but &quot;Vietnam&quot; is the standard English form.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Which should I use in writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use "Vietnam" for most English writing unless an official document specifies otherwise.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vietnam</strong> is the standard spelling in English. <strong>Viet Nam</strong> is an alternate, but less common, form. Both refer to the same country in Southeast Asia.</p>
      </div>
    </div>
  )
} 