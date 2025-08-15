import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Susceptible vs Subceptible - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;susceptible&quot; vs &quot;subceptible&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SusceptibleVsSubceptiblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Susceptible vs Subceptible
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
            <span className="text-2xl font-bold text-green-600">&quot;Susceptible&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Subceptible&quot; is always incorrect - remember the &quot;sus&quot; in &quot;susceptible&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Subceptible</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Susceptible</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;easily affected or influenced.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sus&quot; (Prefix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Starts the word</li>
                <li>• Like &quot;suspect&quot;</li>
                <li>• Common prefix</li>
                <li>• Not &quot;sub&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Cep&quot; (Core)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Middle section</li>
                <li>• Like &quot;accept&quot;</li>
                <li>• Common pattern</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ible&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Adjective ending</li>
                <li>• Like &quot;possible&quot;</li>
                <li>• Common suffix</li>
                <li>• Consistent pattern</li>
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
                <p className="text-lg text-green-800">&quot;Elderly people are <strong>susceptible</strong> to illness.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The young are <strong>susceptible</strong> to peer pressure.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This material is <strong>susceptible</strong> to heat.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He&apos;s <strong>susceptible</strong> to criticism.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Elderly people are <strong>subceptible</strong> to illness&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The young are <strong>subceptible</strong> to peer pressure&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This material is <strong>subceptible</strong> to heat&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He&apos;s <strong>subceptible</strong> to criticism&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">SUS Rule</h3>
              <p className="text-yellow-800">&quot;Susceptible&quot; starts with &quot;sus&quot; like &quot;suspect&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Suspect</h3>
              <p className="text-blue-800">&quot;Susceptible&quot; = &quot;sus&quot; like &quot;suspect&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;susceptible&quot; to build muscle memory</p>
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
                <li>• <strong>Susceptible to infection</strong> - easily infected</li>
                <li>• <strong>Susceptible to persuasion</strong> - easily convinced</li>
                <li>• <strong>Susceptible to corrosion</strong> - easily damaged</li>
                <li>• <strong>Susceptible to decay</strong> - easily deteriorated</li>
                <li>• <strong>Susceptible to manipulation</strong> - easily controlled</li>
                <li>• <strong>Susceptible to stress</strong> - easily stressed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The susceptible population&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The group is susceptible&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;Less susceptible&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Least susceptible&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Susceptibly affected&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The susceptible&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;susceptible&quot; and &quot;subceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that &quot;sus&quot; and &quot;sub&quot; can sound similar. Many people don&apos;t realize that &quot;susceptible&quot; starts with &quot;sus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;susceptible&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Susceptible&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; comes from Latin &quot;susceptibilis&quot; meaning &quot;capable of receiving&quot; and is related to words like &quot;accept&quot; and &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;susceptible&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;susceptible&quot; starts with &quot;sus&quot; (like &quot;suspect&quot;), and emphasize that &quot;subceptible&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: vulnerable, prone, liable, sensitive, impressionable, and receptive. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;susceptible&quot; be used in scientific contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Susceptible&quot; is very common in scientific contexts, especially when referring to materials, organisms, or systems that are easily affected by certain conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;susceptible&quot; and &quot;prone&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; often implies being easily affected or influenced, while &quot;prone&quot; refers to having a tendency or inclination toward something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;susceptible&quot; as starting with &quot;sus&quot; like other words: susceptible, suspect, suspicion. The &quot;sus&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: subceptible, succeptible, susceptable, and subceptable. The correct spelling always starts with &quot;sus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;susceptible&quot; used in engineering contexts?</h3>
              <p className="text-lg text-gray-700">A: In engineering contexts, &quot;susceptible&quot; refers to materials or systems that are easily affected by external factors like stress, temperature, or environmental conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between susceptible and liable?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; implies being easily affected or influenced, while &quot;liable&quot; refers to being legally responsible or likely to experience something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;susceptible&quot; with &quot;sub&quot; instead of &quot;sus&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;sub&quot; and &quot;sus&quot; because they may not pronounce the word clearly or confuse it with other words that start with &quot;sub,&quot; but &quot;susceptible&quot; specifically starts with &quot;sus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;susceptible&quot; used in agricultural contexts?</h3>
              <p className="text-lg text-gray-700">A: In agricultural contexts, &quot;susceptible&quot; refers to crops or livestock that are easily affected by diseases, pests, or environmental conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; can mean: easily affected or influenced, capable of receiving or admitting, liable to be affected by, or open to external influences.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Susceptible&quot;</strong> starts with &quot;sus&quot; and means &quot;easily affected or influenced.&quot; 
          <br />
          <strong>&quot;Subceptible&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + CEP + TIBLE = SUSCEPTIBLE&quot;</p>
        </div>
      </div>
    </div>
  )
}
