import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suicide vs Sucide - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suicide&quot; and &quot;sucide&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuicideVsSucidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Suicide vs Sucide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Suicide&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sucide&quot; is always incorrect - remember the &quot;i&quot; in &quot;suicide&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sucide</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suicide</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of intentionally ending one&apos;s own life.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Suicide&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;i&quot; before &quot;cide&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Error</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• &quot;Sucide&quot; is wrong</li>
                <li>• Missing &quot;i&quot; before &quot;cide&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Memory Aid</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Think &quot;SUI + CIDE&quot;</li>
                <li>• &quot;sui&quot; like &quot;self&quot;</li>
                <li>• &quot;-cide&quot; for killing</li>
                <li>• Related to &quot;homicide&quot;</li>
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
                <p className="text-lg text-green-800">&quot;Preventing <strong>suicide</strong> is important.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Suicide prevention programs help.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The suicide rate has increased.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Suicide awareness is crucial.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Preventing <strong>sucide</strong> is important.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suicide&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sucide prevention programs help.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suicide&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sucide rate has increased.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suicide&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Sucide awareness is crucial.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suicide&quot;</p>
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
              <h3 className="text-xl font-bold text-green-900 mb-2">I Before Cide Rule</h3>
              <p className="text-green-800">&quot;Suicide&quot; has &quot;i&quot; before &quot;cide&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Think Sui</h3>
              <p className="text-slate-800">&quot;Suicide&quot; like &quot;sui&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pattern Recognition</h3>
              <p className="text-gray-800">Words ending with &quot;-cide&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Break It Down</h3>
              <p className="text-zinc-800">SUI + CIDE = Suicide</p>
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
                <li>• <strong>Suicide prevention</strong> - preventing suicide</li>
                <li>• <strong>Suicide awareness</strong> - suicide awareness</li>
                <li>• <strong>Suicide rate</strong> - suicide statistics</li>
                <li>• <strong>Suicide attempt</strong> - attempted suicide</li>
                <li>• <strong>Suicide risk</strong> - risk of suicide</li>
                <li>• <strong>Suicide hotline</strong> - suicide help line</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Suicide is preventable&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Suicide prevention&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Suicide affects families&quot;</li>
                <li>• <strong>Object:</strong> &quot;Prevent suicide&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Suicide&apos;s impact&quot;</li>
                <li>• <strong>Article:</strong> &quot;A suicide attempt&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;suicide&quot; as &quot;sucide&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;suicide&quot; has an &quot;i&quot; before &quot;cide&quot;. They might accidentally drop the &quot;i&quot; when typing quickly or think it only needs &quot;cide&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Is &quot;suicide&quot; related to &quot;homicide&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words share the &quot;-cide&quot; suffix from Latin meaning &quot;killing.&quot; &quot;Suicide&quot; comes from &quot;sui&quot; (self) + &quot;cide&quot; (killing), while &quot;homicide&quot; comes from &quot;homo&quot; (human) + &quot;cide&quot; (killing).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What&apos;s the difference between &quot;suicide&quot; and &quot;suicide&quot;?</h3>
              <p className="text-lg text-gray-700">A: There is no difference - &quot;suicide&quot; is the correct spelling. &quot;Sucide&quot; (without the &quot;i&quot;) is always incorrect and should never be used in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Can &quot;suicide&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suicide&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication when discussing the topic appropriately.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suicide&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: self-destruction, self-harm, and taking one&apos;s own life. Each has slightly different connotations and usage contexts, with &quot;suicide&quot; being the most direct and commonly used term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;homicide&quot; and remember that &quot;suicide&quot; follows the same pattern with an &quot;i&quot; before &quot;cide&quot;. The &quot;i&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUICIDE has I before CIDE&quot;. Or remember: &quot;SUI + CIDE&quot; breaks down the word into manageable parts with the &quot;i&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the base form of &quot;suicide&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suicide&quot; is a noun that doesn&apos;t have a base form in the traditional sense. It&apos;s a complete word that stands alone, though it can be used as an adjective (e.g., &quot;suicide prevention&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;suicide&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suicide&quot; comes from the Latin &quot;suicidium&quot; meaning &quot;self-killing,&quot; from &quot;sui&quot; (of oneself) + &quot;caedere&quot; (to kill), literally meaning &quot;killing of oneself.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;suicide&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;suicide&quot; is only a noun and adjective. The verb form would be &quot;to commit suicide&quot; or &quot;to take one&apos;s own life.&quot; For example: &quot;He committed suicide&quot; (verb phrase), &quot;Suicide prevention&quot; (adjective).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;suicide&quot; and &quot;self-harm&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suicide&quot; specifically refers to intentionally ending one&apos;s own life, while &quot;self-harm&quot; refers to intentionally injuring oneself without the intent to die. Both are serious mental health concerns but are distinct behaviors.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How do I use &quot;suicide&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suicide&quot; can be used in various contexts: mental health discussions (suicide prevention), public health (suicide rates), legal contexts (suicide notes), and awareness campaigns (suicide awareness). It should always be discussed with appropriate sensitivity.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suicide&quot;</strong> has an &quot;i&quot; before &quot;cide&quot; and means &quot;the act of intentionally ending one&apos;s own life.&quot; 
          <br />
          <strong>&quot;Sucide&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUI + CIDE&quot; and remember the &quot;i&quot; before &quot;cide&quot;!</p>
        </div>
      </div>
    </div>
  )
}
