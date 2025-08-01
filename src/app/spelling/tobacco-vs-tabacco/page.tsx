import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tobacco or Tabacco - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tobacco&quot; and &quot;tabacco&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TobaccoVsTabaccoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tobacco or Tabacco</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tobacco&quot; and &quot;tabacco&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tabacco</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tabacco&quot; is a misspelling. The correct spelling is &quot;tobacco&quot; with an &quot;o&quot; before the &quot;b.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tobacco</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tobacco&quot; is the correct spelling. It means a plant used for smoking or chewing.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tobacco (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A plant of the nightshade family, used for smoking, chewing, or snuff.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>tobacco</strong> industry is heavily regulated.</li>
                  <li>• He quit smoking <strong>tobacco</strong> last year.</li>
                  <li>• <strong>Tobacco</strong> farming was once common in Virginia.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tabacco (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tabacco&quot; is a misspelling of &quot;tobacco&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tabacco&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tobacco</strong> when referring to the plant.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tobacco:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Nicotiana</li>
                <li>• Smoking material</li>
                <li>• Leaf</li>
                <li>• Smoking tobacco</li>
                <li>• Chewing tobacco</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tabacco:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
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
            <li>• <strong>Tobacco</strong> is spelled with an &quot;o&quot; before the &quot;b.&quot;</li>
            <li>• It refers to the plant genus Nicotiana.</li>
            <li>• &quot;Tabacco&quot; is never correct in any context.</li>
            <li>• The word comes from Spanish &quot;tabaco&quot; from Taino &quot;tabako.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tabacco&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tabacco&quot; is never correct. The proper spelling is always &quot;tobacco.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tobacco&quot; has an &quot;o&quot; before the &quot;b&quot; - think of it as &quot;to-bac-co.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between tobacco and cigarettes?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Tobacco is the plant material, while cigarettes are products made from tobacco.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tobacco&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tobacco&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tobacco&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tabacco&quot; often happens due to pronunciation confusion or forgetting the &quot;o.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tobacco&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tobacco industry, tobacco products, tobacco use, and tobacco control.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tobacco&quot; always about smoking?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, tobacco can be used for smoking, chewing, or snuff, not just smoking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tobacco&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tobacco&quot; is only used as a noun.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tobacco</strong> is the correct spelling with an &quot;o&quot; before the &quot;b.&quot; It means a plant used for smoking, chewing, or snuff. The misspelling &quot;tabacco&quot; is never correct. Always use &quot;tobacco&quot; when referring to the plant or its products.</p>
      </div>
    </div>
  )
} 