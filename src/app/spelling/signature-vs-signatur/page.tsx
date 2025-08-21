import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Signature vs Signatur - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;signature&quot; and &quot;signatur&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SignatureVsSignaturPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Signature vs Signatur
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-cyan-600">&quot;Signature&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Signatur&quot; is always incorrect - remember the &quot;e&quot; at the end in &quot;signature&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Signatur</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-cyan-800 mb-4">Signature</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-cyan-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-cyan-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person&apos;s written name.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Sign&quot; (Root)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Latin origin</li>
                <li>• Means &quot;mark&quot;</li>
                <li>• Correct spelling</li>
                <li>• Standard English</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;At&quot; (Middle)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Must be included</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Ure&quot; (Suffix)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Makes noun</li>
                <li>• Creates meaning</li>
                <li>• Changes word type</li>
                <li>• Essential for grammar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">✅ Correct: &quot;Signature&quot;</h3>
              <div className="space-y-3">
                <p className="text-cyan-800"><strong>•</strong> &quot;Please add your signature here.&quot;</p>
                <p className="text-cyan-800"><strong>•</strong> &quot;His signature is unique.&quot;</p>
                <p className="text-cyan-800"><strong>•</strong> &quot;The signature is missing.&quot;</p>
                <p className="text-cyan-800"><strong>•</strong> &quot;I need your signature.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Signatur&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;Please add your signatur here&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;His signatur is unique&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The signatur is missing&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I need your signatur&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;E&quot; at End</h3>
              <p className="text-yellow-800">&quot;Signature&quot; = &quot;e&quot; at the end</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Remember Pattern</h3>
              <p className="text-cyan-800">&quot;Signature&quot; = &quot;sign&quot; + &quot;at&quot; + &quot;ure&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;signature&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proofread</h3>
              <p className="text-blue-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people misspell &quot;signature&quot; as &quot;signatur&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often drop the final &quot;e&quot; when writing the word. They might think they can end with &quot;ur,&quot; but the correct form requires the &quot;e&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;signature&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Signature&quot; is perfectly acceptable in formal writing, legal documents, and professional communication. It&apos;s a standard English word that conveys important meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;signature&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Signature&quot; comes from the Latin word &quot;signatura&quot; meaning &quot;a marking, signature.&quot; It has been used in English since the 16th century to describe a person&apos;s written name.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;signature&quot; is spelled the same way across all English-speaking regions. The spelling &quot;signatur&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;signature&quot; as ending with an &quot;e.&quot; Remember that it&apos;s not &quot;signatur&quot; but rather &quot;signature&quot; with the &quot;e&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;signature&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: autograph, name, mark, endorsement, and approval.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Can &quot;signature&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Signature&quot; can refer to a person&apos;s written name, a distinctive characteristic, a musical piece, and various situations where identification is important.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;signature&quot; and &quot;autograph&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to written names, &quot;signature&quot; specifically refers to a person&apos;s written name for official purposes, while &quot;autograph&quot; refers to a celebrity&apos;s signature for fans.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;signature&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;signature&quot; is neutral - it simply indicates a written name or distinctive characteristic. It can be used in positive, negative, or neutral contexts depending on the content.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some common phrases with &quot;signature&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;signature dish,&quot; &quot;signature style,&quot; &quot;signature move,&quot; &quot;signature look,&quot; and &quot;signature sound.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Signature&quot;</strong> has an &quot;e&quot; at the end.
          <br />
          <strong>&quot;Signatur&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SIGNATURE = E at the END&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
