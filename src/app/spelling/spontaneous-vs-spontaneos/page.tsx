import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spontaneous vs Spontaneos - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spontaneous&quot; and &quot;spontaneos&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpontaneousVsSpontaneosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Spontaneous vs Spontaneos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
            <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-2xl mr-3">✨</span>
              <span className="text-2xl font-bold text-violet-600">&quot;Spontaneous&quot; is Correct</span>
              <span className="text-2xl ml-3">✅</span>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              &quot;Spontaneos&quot; is always incorrect - remember the final &quot;ous&quot; in &quot;spontaneous&quot;!
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
                <h3 className="text-3xl font-bold text-red-800 mb-4">Spontaneos</h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
                </div>
                <p className="text-lg text-red-700 leading-relaxed">
                  This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-3xl font-bold text-violet-800 mb-4">Spontaneous</h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
                </div>
                <p className="text-lg text-violet-700 leading-relaxed">
                  This is the proper spelling meaning &quot;arising from natural impulse or tendency.&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Explanation */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-violet-50 border-violet-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Spontaneous&quot; (Adjective)</h3>
                <ul className="text-violet-800 space-y-2">
                  <li>• Ends with &quot;ous&quot;</li>
                  <li>• Means &quot;unplanned&quot;</li>
                  <li>• Natural occurrence</li>
                  <li>• Impulsive action</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Suffix Rule</h3>
                <ul className="text-purple-800 space-y-2">
                  <li>• &quot;ous&quot; = full of</li>
                  <li>• Common adjective ending</li>
                  <li>• Similar to &quot;famous&quot;</li>
                  <li>• Indicates quality</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-fuchsia-50 border-fuchsia-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Common Confusion</h3>
                <ul className="text-fuchsia-800 space-y-2">
                  <li>• People forget &quot;ous&quot;</li>
                  <li>• Similar to &quot;spontaneous&quot;</li>
                  <li>• Pronunciation can be unclear</li>
                  <li>• Need to remember suffix</li>
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
              <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
              <div className="space-y-4">
                <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                  <p className="text-lg text-violet-800">&quot;Her <strong>spontaneous</strong> decision surprised everyone.&quot;</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                  <p className="text-lg text-violet-800">&quot;The <strong>spontaneous</strong> applause filled the room.&quot;</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                  <p className="text-lg text-violet-800">&quot;He made a <strong>spontaneous</strong> offer to help.&quot;</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                  <p className="text-lg text-violet-800">&quot;Their <strong>spontaneous</strong> laughter was contagious.&quot;</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-red-800">&quot;Her <strong>spontaneos</strong> decision&quot; ❌</p>
                  <p className="text-sm text-red-600 mt-1">Should be: &quot;spontaneous&quot;</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-red-800">&quot;The <strong>spontaneos</strong> applause&quot; ❌</p>
                  <p className="text-sm text-red-600 mt-1">Should be: &quot;spontaneous&quot;</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-red-800">&quot;He made a <strong>spontaneos</strong> offer&quot; ❌</p>
                  <p className="text-sm text-red-600 mt-1">Should be: &quot;spontaneous&quot;</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-red-800">&quot;Their <strong>spontaneos</strong> laughter&quot; ❌</p>
                  <p className="text-sm text-red-600 mt-1">Should be: &quot;spontaneous&quot;</p>
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
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-xl font-bold text-yellow-900 mb-2">OUS Rule</h3>
                <p className="text-yellow-800">&quot;Spontaneous&quot; ends with &quot;ous&quot; like &quot;famous&quot;</p>
              </CardContent>
            </Card>
            <Card className="bg-violet-50 border-violet-300 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="text-xl font-bold text-violet-900 mb-2">Think Natural</h3>
                <p className="text-violet-800">Spontaneous = natural = &quot;ous&quot; ending</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-300 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">✍️</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
                <p className="text-purple-800">Practice writing &quot;spontaneous&quot; to build muscle memory</p>
              </CardContent>
            </Card>
            <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
                <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                  <li>• <strong>Spontaneous combustion</strong> - self-ignition</li>
                  <li>• <strong>Spontaneous generation</strong> - biological theory</li>
                  <li>• <strong>Spontaneous remission</strong> - medical recovery</li>
                  <li>• <strong>Spontaneous order</strong> - social theory</li>
                  <li>• <strong>Spontaneous speech</strong> - unplanned talking</li>
                  <li>• <strong>Spontaneous movement</strong> - unplanned action</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• <strong>Adjective:</strong> &quot;The spontaneous reaction&quot;</li>
                  <li>• <strong>Predicate adjective:</strong> &quot;The reaction was spontaneous&quot;</li>
                  <li>• <strong>Adverb form:</strong> &quot;He acted spontaneously&quot;</li>
                  <li>• <strong>Noun form:</strong> &quot;Spontaneity is valued&quot;</li>
                  <li>• <strong>Comparative:</strong> &quot;More spontaneous&quot;</li>
                  <li>• <strong>Superlative:</strong> &quot;Most spontaneous&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-violet-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;spontaneous&quot; as &quot;spontaneos&quot;?</h3>
                <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;ous&quot; suffix, which is common in English adjectives. Some people may also be influenced by similar words or unclear pronunciation.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the meaning of the &quot;ous&quot; suffix?</h3>
                <p className="text-lg text-gray-700">A: The &quot;ous&quot; suffix means &quot;full of&quot; or &quot;having the qualities of.&quot; So &quot;spontaneous&quot; means &quot;full of spontaneity&quot; or &quot;having the quality of being spontaneous.&quot;</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-fuchsia-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Are there other words that end with &quot;ous&quot;?</h3>
                <p className="text-lg text-gray-700">A: Yes! Many English adjectives end with &quot;ous&quot;: famous, dangerous, mysterious, generous, courageous, nervous, serious, and numerous are just a few examples.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;spontaneous&quot; be used in formal writing?</h3>
                <p className="text-lg text-gray-700">A: Absolutely! &quot;Spontaneous&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;spontaneous&quot; and &quot;impulsive&quot;?</h3>
                <p className="text-lg text-gray-700">A: While both involve unplanned actions, &quot;spontaneous&quot; suggests natural, unforced behavior, while &quot;impulsive&quot; often implies acting without thinking, which can have negative connotations.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How do I remember the correct spelling?</h3>
                <p className="text-lg text-gray-700">A: Think of &quot;spontaneous&quot; as &quot;spontane&quot; + &quot;ous.&quot; The &quot;ous&quot; ending is common in English adjectives, so if you remember that pattern, you&apos;ll spell it correctly.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;spontaneous&quot;?</h3>
                <p className="text-lg text-gray-700">A: Common synonyms include: unplanned, impromptu, unrehearsed, natural, instinctive, automatic, involuntary, and unpremeditated. Each has slightly different nuances.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-teal-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;spontaneos&quot; ever correct in any context?</h3>
                <p className="text-lg text-gray-700">A: No, &quot;spontaneos&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spontaneous&quot; with the &quot;ous&quot; ending.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Summary */}
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
          <p className="text-xl leading-relaxed mb-6">
            Always remember: <strong>&quot;Spontaneous&quot;</strong> has the &quot;ous&quot; suffix and means &quot;arising naturally.&quot; 
            <br />
            <strong>&quot;Spontaneos&quot;</strong> is never correct in any context.
          </p>
          <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
            <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPONTANEOUS = natural = OUS ending&quot;</p>
          </div>
        </div>
      </div>
    </div>
  )
}
