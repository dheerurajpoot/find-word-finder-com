import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yellow or Yelow - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;yellow&quot; and &quot;yelow&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function YellowVsYelowPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Yellow or Yelow</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;yellow&quot; or &quot;yelow&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Yelow</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Yelow&quot; is a common misspelling of &quot;yellow&quot;. Always use &quot;yellow&quot; when referring to the color between green and orange in the spectrum of visible light.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Yellow</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Yellow&quot; is a noun and adjective referring to the color between green and orange in the spectrum of visible light.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Yellow</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Yellow&quot;</strong> (noun/adjective): The color between green and orange in the spectrum of visible light; resembling the color of ripe lemons or gold.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used to describe color in art, design, nature, and everyday life.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Yellow</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Gold</li>
                <li>• Amber</li>
                <li>• Lemon</li>
                <li>• Canary</li>
                <li>• Blonde</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Mustard</li>
                <li>• Butter</li>
                <li>• Daffodil</li>
                <li>• Flaxen</li>
                <li>• Saffron</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The sunflowers were bright <span className="text-green-600 font-semibold">yellow</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The sunflowers were bright <span className="text-red-600 font-semibold">yelow</span>.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;She wore a yellow dress to the party.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Yellow&quot; is spelled with double &quot;l&quot; in the middle.</li>
          <li>• The pronunciation is /ˈjɛloʊ/ (YEL-oh).</li>
          <li>• Commonly used in art, design, and nature.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;yelow&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;yelow&quot; is never correct. The only correct form is &quot;yellow&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Remember that &quot;yellow&quot; has double &quot;l&quot; in the middle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some shades of yellow?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;lemon yellow&quot;, &quot;mustard yellow&quot;, &quot;golden yellow&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;yellow&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;yellow&quot; can be used as a verb meaning to become yellow or make something yellow.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;yellow&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;yellow card&quot;, &quot;yellow journalism&quot;, &quot;yellow fever&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Yellow</strong> is the correct spelling, while <strong>yelow</strong> is always incorrect. Use &quot;yellow&quot; when referring to the color between green and orange in the spectrum of visible light.
        </p>
      </div>
    </div>
  )
} 