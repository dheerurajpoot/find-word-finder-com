import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sweater vs Swetter - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;sweater&quot; vs &quot;swetter&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SweaterVsSwetterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Sweater vs Swetter
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sweater&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Swetter&quot; is always incorrect - remember the &quot;at&quot; in &quot;sweater&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Swetter</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sweater</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a knitted garment for the upper body.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sweat&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;perspiration&quot;</li>
                <li>• Related to body heat</li>
                <li>• Spelled with &quot;ea&quot;</li>
                <li>• Origin of the word</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;At&quot; (Suffix)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Forms the word</li>
                <li>• Creates &quot;sweat-er&quot;</li>
                <li>• Common pattern</li>
                <li>• Easy to remember</li>
                </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Er&quot; (Suffix)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Indicates a thing</li>
                <li>• Makes it a noun</li>
                <li>• Common ending</li>
                <li>• Like &quot;teacher&quot;</li>
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
                <p className="text-lg text-green-800">&quot;She wore a warm <strong>sweater</strong> in winter.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I bought a new <strong>sweater</strong> for the party.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This <strong>sweater</strong> is made of wool.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He put on his favorite <strong>sweater</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She wore a warm <strong>swetter</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sweater&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I bought a new <strong>swetter</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sweater&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This <strong>swetter</strong> is wool&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sweater&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He put on his <strong>swetter</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sweater&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AT Rule</h3>
              <p className="text-yellow-800">&quot;Sweater&quot; has &quot;at&quot; in the middle like &quot;water&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Warmth</h3>
              <p className="text-blue-800">&quot;Sweater&quot; = warm, &quot;Swetter&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sweater&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Wool sweater</strong> - warm winter garment</li>
                <li>• <strong>Cardigan sweater</strong> - buttoned sweater</li>
                <li>• <strong>Turtleneck sweater</strong> - high-necked style</li>
                <li>• <strong>Cashmere sweater</strong> - luxury material</li>
                <li>• <strong>Christmas sweater</strong> - festive design</li>
                <li>• <strong>Oversized sweater</strong> - loose-fitting style</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The sweater is warm&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sweaters keep you warm&quot;</li>
                <li>• <strong>Object:</strong> &quot;I bought a sweater&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;My sweater&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Sweater weather&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many sweaters&quot;</li>
          </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;sweater&quot; and &quot;swetter&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that &quot;et&quot; and &quot;at&quot; can sound similar in some accents. Many people don&apos;t realize that &quot;sweater&quot; is spelled with &quot;at&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;sweater&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sweater&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;sweater&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sweater&quot; comes from the word &quot;sweat&quot; + &quot;er&quot;, originally referring to a garment worn to induce sweating during exercise. Over time, it came to mean any knitted upper garment.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;sweater&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;jumper&quot; (UK) or &quot;pullover&quot; for similar garments.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;sweater&quot; has &quot;at&quot; in the middle (like &quot;water&quot; and &quot;later&quot;), and emphasize that &quot;swetter&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;sweater&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: jumper, pullover, cardigan, knitwear, woolly, jersey, and knit top. The specific term depends on the style and region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;sweater&quot; be used in fashion contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sweater&quot; is very common in fashion contexts, describing various styles like crew neck, v-neck, turtleneck, cardigan, and many other sweater types.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;sweater&quot; and &quot;cardigan&quot;?</h3>
              <p className="text-lg text-gray-700">A: A &quot;sweater&quot; is a general term for a knitted upper garment, while a &quot;cardigan&quot; is a specific type of sweater that opens in the front with buttons or a zipper.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;sweater&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sweater&quot; as having &quot;at&quot; in the middle like other words: water, later, sweater. The &quot;at&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;sweater&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: swetter, sweater, sweater, sweater, and sweater. The correct spelling always has &quot;at&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;sweater&quot; used in seasonal contexts?</h3>
              <p className="text-lg text-gray-700">A: In seasonal contexts, &quot;sweater&quot; is associated with fall and winter when people wear warm knitted garments. It&apos;s often used in phrases like &quot;sweater weather&quot; or &quot;winter sweater.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between sweater and sweatshirt?</h3>
              <p className="text-lg text-gray-700">A: A &quot;sweater&quot; is typically knitted and made of wool or similar materials, while a &quot;sweatshirt&quot; is usually made of cotton fleece and has a more casual, athletic appearance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;sweater&quot; with &quot;et&quot; instead of &quot;at&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;et&quot; and &quot;at&quot; because they may not pronounce the &quot;a&quot; clearly, but &quot;sweater&quot; specifically has &quot;at&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;sweater&quot; used in knitting and crafting contexts?</h3>
              <p className="text-lg text-gray-700">A: In knitting and crafting contexts, &quot;sweater&quot; describes a hand-knitted or crocheted garment, often with specific patterns, yarn types, and construction techniques.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different types of sweaters?</h3>
              <p className="text-lg text-gray-700">A: Common types include: crew neck, v-neck, turtleneck, cardigan, pullover, hoodie, poncho, and many others, each with distinct necklines and styles.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sweater&quot;</strong> has &quot;at&quot; in the middle and means &quot;a knitted garment.&quot; 
          <br />
          <strong>&quot;Swetter&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SWEAT + AT + ER = SWEATER&quot;</p>
        </div>
      </div>
    </div>
  )
} 