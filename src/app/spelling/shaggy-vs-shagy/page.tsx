import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Shaggy vs Shagy - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;shaggy&quot; and &quot;shagy&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ShaggyVsShagyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Shaggy vs Shagy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Shaggy&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Shagy&quot; is always incorrect - remember &quot;shaggy&quot; has double &quot;g&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Shagy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Shaggy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;rough and unkempt&quot; or &quot;having long, messy hair.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Shaggy&quot; (Correct)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;rough and unkempt&quot;</li>
                <li>• Has double &quot;g&quot;</li>
                <li>• From &quot;shag&quot; + &quot;y&quot;</li>
                <li>• Used as adjective</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Shagy&quot; (Wrong)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing second &quot;g&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Shagy&quot; is not a word</li>
                <li>• Missing letter &quot;g&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The <strong>shaggy</strong> dog.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;His <strong>shaggy</strong> beard.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;<strong>Shaggy</strong> carpet.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;A <strong>shaggy</strong> coat.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>shagy</strong> dog&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shaggy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>shagy</strong> beard&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shaggy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;<strong>Shagy</strong> carpet&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shaggy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A <strong>shagy</strong> coat&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;shaggy&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double G Rule</h3>
              <p className="text-yellow-800">&quot;Shaggy&quot; has double &quot;g&quot; - think &quot;sha-GG-y&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Shag</h3>
              <p className="text-blue-800">&quot;Shag&quot; + &quot;gy&quot; = &quot;shaggy&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;shaggy&quot; to build muscle memory</p>
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
                <li>• <strong>Shaggy dog</strong> - unkempt canine</li>
                <li>• <strong>Shaggy beard</strong> - untrimmed facial hair</li>
                <li>• <strong>Shaggy carpet</strong> - long-pile rug</li>
                <li>• <strong>Shaggy coat</strong> - rough outerwear</li>
                <li>• <strong>Shaggy hair</strong> - messy locks</li>
                <li>• <strong>Shaggy mane</strong> - unkempt horse hair</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;Shaggy animal&quot;</li>
                <li>• <strong>Predicative:</strong> &quot;It is shaggy&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More shaggy&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most shaggy&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Shaggily&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Shagginess&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;shaggy&quot; as &quot;shagy&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling occurs when people drop the second &quot;g&quot; from &quot;shaggy.&quot; Remember that &quot;shaggy&quot; comes from &quot;shag&quot; + &quot;gy&quot; and needs both &quot;g&quot; letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;shagy&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shagy&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are the different meanings of &quot;shaggy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shaggy&quot; can mean: rough and unkempt, having long and messy hair, covered with rough or tangled material, or having a rough, uneven surface.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;shaggy&quot; comes from &quot;shag.&quot; Think &quot;A SHAG makes something SHAGGY&quot; - both need the double &quot;g.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;shaggy&quot; and &quot;messy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shaggy&quot; specifically refers to rough, unkempt hair or fur, while &quot;messy&quot; is more general and can refer to any untidy or disorganized state.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;shaggy&quot; be used for objects?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shaggy&quot; can describe objects like carpets (shaggy carpet), coats (shaggy coat), or any surface that has a rough, uneven, or hairy texture.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: shag (noun meaning rough mass), shaggily (adverb), shagginess (noun), and shag (verb meaning to make rough).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;shaggy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shaggy&quot; comes from the Old English &quot;sceacga&quot; meaning &quot;rough hair&quot; or &quot;beard.&quot; It entered English in the 14th century and has maintained its spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;shaggy&quot; used in fashion?</h3>
              <p className="text-lg text-gray-700">A: In fashion, &quot;shaggy&quot; describes textured fabrics, long-pile materials, or intentionally messy, unkempt hairstyles that are currently trendy.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Shaggy&quot;</strong> has double &quot;g&quot; and means &quot;rough and unkempt.&quot; 
          <br />
          <strong>&quot;Shagy&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sha-GG-y&quot; - remember the double &quot;g&quot;!</p>
        </div>
      </div>
    </div>
  )
}
