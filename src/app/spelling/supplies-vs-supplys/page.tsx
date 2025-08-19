import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supplies vs Supplys - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supplies&quot; and &quot;supplys&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuppliesVsSupplysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
          Supplies vs Supplys
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 p-8 rounded-2xl mb-10 border border-yellow-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Supplies&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supplys&quot; is always incorrect - remember the &quot;ies&quot; ending in &quot;supplies&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supplys</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supplies</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;materials or provisions.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Supplies&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;ies&quot; ending</li>
                <li>• Follows &quot;supply&quot; pattern</li>
                <li>• Plural form</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Common Error</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• &quot;Supplys&quot; is wrong</li>
                <li>• Missing &quot;ies&quot; ending</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Memory Aid</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Think &quot;SUPPLY + IES&quot;</li>
                <li>• &quot;supply&quot; + plural form</li>
                <li>• &quot;-ies&quot; for plural nouns</li>
                <li>• Related to &quot;supply&quot;</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We need office <strong>supplies</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>supplies</strong> are running low.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They deliver the <strong>supplies</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;School <strong>supplies</strong> are expensive.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We need office <strong>supplys</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>supplys</strong> are running low.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They deliver the <strong>supplys</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;School <strong>supplys</strong> are expensive.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supplies&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">IES Ending Rule</h3>
              <p className="text-green-800">&quot;Supplies&quot; has &quot;ies&quot; like plural nouns</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Think Plural</h3>
              <p className="text-amber-800">&quot;Supplies&quot; is plural of &quot;supply&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Pattern Recognition</h3>
              <p className="text-orange-800">Plural nouns end with &quot;-ies&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Break It Down</h3>
              <p className="text-yellow-800">SUPPLY + IES = Supplies</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Office supplies</strong> - workplace materials</li>
                <li>• <strong>School supplies</strong> - educational materials</li>
                <li>• <strong>Art supplies</strong> - creative materials</li>
                <li>• <strong>Medical supplies</strong> - healthcare materials</li>
                <li>• <strong>Kitchen supplies</strong> - cooking materials</li>
                <li>• <strong>Camping supplies</strong> - outdoor materials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Plural noun:</strong> &quot;The supplies are here&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Supplies cost money&quot;</li>
                <li>• <strong>Object:</strong> &quot;I need supplies&quot;</li>
                <li>• <strong>Singular form:</strong> &quot;Supply&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;To supply&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Supply room&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;supplies&quot; as &quot;supplys&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;supply&quot; becomes &quot;supplies&quot; in the plural form. They might accidentally use &quot;ys&quot; instead of &quot;ies&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Is &quot;supplies&quot; related to &quot;supply&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplies&quot; is the plural form of the noun &quot;supply.&quot; The &quot;ies&quot; ending is crucial for the correct plural spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;supplies&quot; and &quot;supply&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supply&quot; is the singular noun meaning a single provision or material, while &quot;supplies&quot; is the plural form meaning multiple provisions or materials.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;supplies&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supplies&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;supplies&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: materials, provisions, equipment, gear, tools, resources, and items. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;supply&quot; and remember that &quot;supplies&quot; is the plural form. The &quot;ies&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPPLIES comes from SUPPLY&quot; - add &quot;IES&quot; for plural. Or remember: &quot;SUPPLY + IES&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the base form of &quot;supplies&quot;?</h3>
              <p className="text-lg text-gray-700">A: The base form is &quot;supply.&quot; For example: &quot;One supply&quot; (singular), &quot;Many supplies&quot; (plural), &quot;To supply&quot; (verb).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;supplies&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplies&quot; comes from the noun &quot;supply&quot; meaning provisions or materials, with the suffix &quot;-ies&quot; to form the plural.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;supplies&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;supplies&quot; is only a plural noun. The verb form is &quot;supply&quot; (present) or &quot;supplied&quot; (past).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the difference between &quot;supplies&quot; and &quot;equipment&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplies&quot; means consumable materials or provisions, while &quot;equipment&quot; means tools or machinery. Supplies are used up, equipment is reusable.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do I use &quot;supplies&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supplies&quot; can be used in various contexts: office supplies, school supplies, medical supplies, art supplies, and camping supplies.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supplies&quot;</strong> has the &quot;ies&quot; ending and means &quot;materials or provisions.&quot; 
          <br />
          <strong>&quot;Supplys&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPPLY + IES&quot; and remember the &quot;ies&quot; ending like in other plural nouns!</p>
        </div>
      </div>
    </div>
  )
}
